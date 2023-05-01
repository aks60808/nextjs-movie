import "@/styles/globals.css";
import Head from "next/head";
import NavBar from "../../components/navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
