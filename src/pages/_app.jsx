import Head from 'next/head'
import { useBgColor } from 'src/components/Hooks/useBgColor';
import { useCounter } from 'src/components/Hooks/useCounter';
import { useInputArray } from 'src/components/Hooks/useInputArray';
import 'src/styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inpuyArray = useInputArray();
  useBgColor();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Component {...pageProps} {...counter} {...inpuyArray} />
    </>
  )
}

export default MyApp
