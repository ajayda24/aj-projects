import '../styles/globals.css'
import Navbar from '../UI/Navbar'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
