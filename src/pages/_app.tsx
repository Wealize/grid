import React from "react"
import App from "next/app"
import Head from "next/head"
import { createGlobalStyle } from "styled-components"
import { Reset } from "styled-reset"


const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: "Lato", sans-serif;
  }
`

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Reset />
        <GlobalStyles />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
