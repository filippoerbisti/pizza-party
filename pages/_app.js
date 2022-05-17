import Layout from '../components/Layout'
import '../styles/globals.css'
import store from "../redux/store"
import { Provider } from "react-redux"
import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_VERCEL_URL;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
