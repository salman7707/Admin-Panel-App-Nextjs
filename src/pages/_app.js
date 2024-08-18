import "@/styles/globals.css";
import { Provider } from "./provider";
import Head from "next/head";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Admin-panel-App</title>
    </Head>
    <Provider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow">
          <Component {...pageProps} />
          </main>
        </div>
      </div>
    </Provider>
    </>
  );
}
