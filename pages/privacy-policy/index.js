import Head from "next/head";
import PrivacyPolicy from "@/components/pages/privacy-policy";
import { Fragment } from "react";

function PrivacyPolicyPage() {
  return (
    <Fragment>
      <Head>
        <title>Privacy Pilicy</title>
        <meta name="description" content="Privacy Policy" />
      </Head>
      <main>
        <PrivacyPolicy />
      </main>
    </Fragment>
  );
}

export default PrivacyPolicyPage;
