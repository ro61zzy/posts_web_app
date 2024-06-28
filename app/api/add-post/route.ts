import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

//route handlers or API's in Next-js

export async function POST(request) {
    const res = await request.json()
    const {title, content} = res
    console.log({res})

const result = await prisma.post.create({
    data:{
        title,
        content,
        published: true,
        author: {create:{
            name: 'rose_w'
        }}
    }
})

    return NextResponse.json({result})
  }