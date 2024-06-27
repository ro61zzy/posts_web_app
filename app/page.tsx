import Image from "next/image";
import styles from "./page.module.css";
import prisma from '../lib/prisma'; //instance will be your interface to the database when you want to read and write data in it

export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Feed</h1>
     
    </main>
  );
}
