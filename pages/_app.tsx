import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";
import Navbar from "../components/Navbar";
config.autoAddCss = false;

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const isEmbed = appProps.router.pathname.includes("/embed");
  const NavbarComponent = isEmbed ? React.Fragment : Navbar;

  return (
    <>
      <Head>
        <title>BluCherri</title>
      </Head>
      <NavbarComponent>
        <Component {...pageProps} />
      </NavbarComponent>
    </>
  );
}

export default MyApp;
