import Head from "next/head";
import ContactUsComponents from "../components/contactus/main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hira Plaza | Contact Us</title>
        <meta name="description" content="Hira Plaza | Contact Us" />
      </Head>
      <ContactUsComponents />
    </div>
  );
}
