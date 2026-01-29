import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { useCounter } from 'src/components/Hooks/useCounter'
import { useInputArray } from 'src/components/Hooks/useInputArray'

export default function Home() {
  const { count, isShow, handleCountClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();

  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <button onClick={handleDisplay}>{isShow ? 'ボタン表示' : 'ボタン非表示'}</button>
      {isShow ? <button onClick={handleCountClick}>カウント：{count}</button> : ""}

      <input value={text} onChange={handleChange} />
      <p>Your type is {text}</p>

      <button onClick={handleAdd}>追加</button>

      {/*  追加した文字を表示 */}
      <ul>
        {array.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Main page="about" />

      <Footer />
    </div>
  )
}


