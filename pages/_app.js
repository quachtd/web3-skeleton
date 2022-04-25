import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  async function connectWallet() {
    alert('hello');
  }
  return (
    <Layout onCollectWallet={connectWallet}>
      <Component {...pageProps} onWeb3Action={connectWallet} />
    </Layout>
  )
}

export default MyApp
