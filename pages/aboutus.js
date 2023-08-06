import Head from "next/head";
import AboutUsComponents from "../components/aboutus/main";

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>Hira Plaza | About Us</title>
        <meta name="description" content="Hira Plaza | About Us" />
      </Head>
      <AboutUsComponents />
    </div>
  );
}
