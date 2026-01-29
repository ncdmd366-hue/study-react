import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />

      <button onClick={props.handleDisplay}>{props.isShow ? 'ボタン表示' : 'ボタン非表示'}</button>
      {props.isShow ? <button onClick={props.handleCountClick}>カウント：{props.count}</button> : ""}

      <input value={props.text} onChange={props.handleChange} />
      <p>Your type is {props.text}</p>

      <button onClick={props.handleAdd}>追加</button>

      {/*  追加した文字を表示 */}
      <ul>
        {props.array.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <Main page="index" />
      <Footer />
    </div>
  )
}
