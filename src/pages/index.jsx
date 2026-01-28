import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { useCallback } from 'react'

export default function Home() {

  const handleClick = useCallback((e) => {
    e.preventDefault();
    alert("クリックされました。");
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>ボタン</a>
      <Main page="index" />

      <Footer />
    </div>
  )
}
