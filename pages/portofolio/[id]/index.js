import { Fragment } from "react";
import Head from "next/head";
import Portofolio from "@/components/pages/portofolio/detail";
import { data } from "@/components/pages/portofolio/detail/data";

function PortofolioDetail({ detail }) {
  return (
    <Fragment>
      <Head>
        <title>Portofolio Detail | Surya Maulana</title>
        <meta name="description" content="Portofolio" />
      </Head>
      <main>
        <Portofolio detail={detail} />
      </main>
    </Fragment>
  );
}

PortofolioDetail.getInitialProps = async (ctx) => {
  const { id } = ctx.query;

  const test = data.filter((detail) => detail.title === id);

  return { detail: test[0] || {} };
};

export default PortofolioDetail;
