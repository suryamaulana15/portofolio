import Head from "next/head";
import Portofolio from "@/components/pages/portofolio";
import { Fragment } from "react";

function PortofolioPage() {
  return (
    <Fragment>
      <Head>
        <title>Portofolio | Surya Maulana</title>
        <meta name="description" content="Portofolio" />
      </Head>
      <main>
        <Portofolio />
      </main>
    </Fragment>
  );
}

export default PortofolioPage;
