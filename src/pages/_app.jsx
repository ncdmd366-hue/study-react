import Head from 'next/head'
import { useCounter } from 'src/components/Hooks/useCounter';
import { useInputArray } from 'src/components/Hooks/useInputArray';
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inpuyArray = useInputArray();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Component {...pageProps} {...counter} {...inpuyArray}/>
    </>
  )
}

export default MyApp
