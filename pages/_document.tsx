//Esto es para poder poner fuentes personalizadas en nuestra aplicacion 

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link
        href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap"
        rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument