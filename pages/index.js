import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Main } from '../components/Main/Main'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main page="index" />

      <Footer />
    </div>
  )
}
