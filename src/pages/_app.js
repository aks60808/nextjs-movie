import "@/styles/globals.css";
import Head from "next/head";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main className={inter.className}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
