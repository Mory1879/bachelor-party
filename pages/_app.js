import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap&subset=cyrillic'"
            rel="stylesheet"
            key="google-font-roboto"
          />
        </Head>

        <Component {...pageProps} />

        <style global jsx>{`
          * {
            font-family: 'Roboto', sans-serif;
            line-height: 1.25;
            font-size: 1rem;
            color: #8d8f91;
            margin: 0;
          }
        `}</style>
      </Container>
    );
  }
}