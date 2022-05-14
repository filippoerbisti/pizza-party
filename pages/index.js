import Head from 'next/head'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Party</title>
        <meta name="description" content="Best Pizza Shop in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      <PizzaList />

    </div>
  )
}
