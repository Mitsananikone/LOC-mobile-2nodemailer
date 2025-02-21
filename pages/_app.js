import dynamic from "next/dynamic";
import Head from "next/head";
import "@/styles/globals.css";

// Dynamically import Navbar with SSR disabled
const Navbar = dynamic(() => import("@/components/nav/nav"), {
  ssr: false, // Disable server-side rendering for Navbar
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Add any global head elements here */}
      </Head>
      <Navbar /> {/* Navbar will only render on the client side */}
      <Component {...pageProps} />
    </>
  );
}