import Head from "next/head";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import { createEmotionCache } from "../lib";
import { CssBaseline } from "@mui/material";
import Main from "@/components/layout/main";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Surya Maulana Portofolio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssVarsProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Main>
          <Component {...pageProps} />
        </Main>
      </CssVarsProvider>
    </CacheProvider>
  );
}
