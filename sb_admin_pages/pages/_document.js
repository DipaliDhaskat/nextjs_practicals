import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body >
          <Main />
          <NextScript />
          {/*Bootstrap core JavaScript*/}
          <script src="vendor/jquery/jquery.min.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

          {/* Core plugin JavaScript */}
          <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

          {/* Custom scripts for all pages */}
          <script src="js/sb-admin-2.min.js"></script>

          {/* Page level plugins */}
          <script src="vendor/chart.js/Chart.min.js"></script>

          {/* Page level custom scripts */}
          <script src="js/demo/chart-area-demo.js"></script>
          <script src="js/demo/chart-pie-demo.js"></script>

          <script src="vendor/jquery/jquery.min.js"></script>

        </body>
      </Html>
    );
  }
}



