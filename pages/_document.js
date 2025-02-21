import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add Font Awesome via CDN */}
        <script
          src="https://kit.fontawesome.com/9e8e695298.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
