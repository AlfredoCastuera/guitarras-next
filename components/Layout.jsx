import React from "react";
import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({children,title}) => {
  return <>
		  <Head>
        <title>Tienda de guitarras - {title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
			{children}
      <Footer />
	</>;
};

export default Layout;