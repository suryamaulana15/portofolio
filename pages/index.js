import Head from "next/head";
import Home from "../components/pages/home";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home | Surya Maulana</title>
        <meta name="description" content="homepage" />
      </Head>
      <main>
        <Home />
      </main>
    </Fragment>
  );
}

export default HomePage;
