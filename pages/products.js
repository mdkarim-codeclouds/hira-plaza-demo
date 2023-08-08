import Head from "next/head";
import ProductsComponents from "../components/products/main";

export default function Products() {
  return (
    <div>
      <Head>
        <title>Hira Plaza | Products</title>
        <meta name="description" content="Hira Plaza | Products" />
      </Head>
      <ProductsComponents />
    </div>
  );
}
