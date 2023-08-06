import Head from "next/head";
import AboutUsComponents from "../components/aboutus/main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hira Plaza | About Us</title>
        <meta name="description" content="Hira Plaza | About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUsComponents />
    </div>
  );
}
