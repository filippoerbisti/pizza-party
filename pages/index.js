import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import styles from "../styles/Home.module.css"

export default function Home({ pizzaList, admin }) {

  const [close, setClose] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Party</title>
        <meta name="description" content="Best Pizza Shop in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {!admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookie || "";
  let admin = false;
  if(myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(`/api/products`);
  return {
    props: {
      pizzaList: res.data,
      admin
    }
  }
}
