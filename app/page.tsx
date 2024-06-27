import styles from "./page.module.css";
import prisma from '../lib/prisma'; //instance will be your interface to the database when you want to read and write data in it


async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author:{
        select: {name: true}
      }
    }
  })
}


export default async function Home() {

  const posts = await getPosts()
  console.log({posts})
  return (
    <main className={styles.main}>
     <h1>Feed</h1>

    </main>
  );
}
