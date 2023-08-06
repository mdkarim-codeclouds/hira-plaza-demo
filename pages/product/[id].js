import Head from "next/head";
import SingleProductComponents from "../../components/product/single";

export default function Product() {
    return (
        <div>
            <Head>
                <title>Hira Plaza | Product</title>
                <meta name="description" content="Hira Plaza | Product" />
            </Head>
            <SingleProductComponents />
        </div>
    );
}
