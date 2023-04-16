import '@/styles/globals.css'
import logonav from "../../public/logonav.png"
import Nav from '../components/Navbar'
import Head from 'next/head';
import Footer from '../components/Footer'
export default function App({ Component, pageProps }) {
  return<> 

<title>Gnovation</title> <link rel="icon" src={logonav}></link><meta name="viewport" content="initial-scale=1.0, width=device-width" /> <meta name="description" content="This is a test description." /> <Nav/> <Component {...pageProps} />  <Footer/></>
}
