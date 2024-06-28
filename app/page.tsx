import React from 'react';
import styles from "./page.module.css";
import prisma from '../lib/prisma'; // instance will be your interface to the database when you want to read and write data in it
import Post from './components/post';

// Define the types for the data
interface Post {
  id: number;
  title: string;
  content: string;
  authorName: string;
}

interface PostWithAuthor {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string;
  };
}

async function getPosts(): Promise<PostWithAuthor[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log({ posts });
  
  return (
    <main className={styles.main}>
      <h1>Feed</h1>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          authorName={post.author.name}
        />
      ))}
    </main>
  );
}
