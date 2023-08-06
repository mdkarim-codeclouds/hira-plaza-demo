import Head from "next/head";
import HomeComponents from "../components/home/main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hira Plaza | Home</title>
        <meta name="description" content="Hira Plaza | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponents />
    </div>
  );
}
