import React from "react"
import Document from "next/document"
import { ServerStyleSheet } from "styled-components"

// https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
class MyDocument extends Document {
  public static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

export default MyDocument
