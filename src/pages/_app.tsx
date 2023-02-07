import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Header from "@/components/navigation/Header";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <>
          <Header/>
          <Head>
          <title>Personal Site | Vania Shepetko</title>
          <link rel="shortcut icon" href="/image/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png"/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}
