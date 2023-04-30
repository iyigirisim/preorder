import PageBanner from "../components/Common/PageBanner";
import Product from "../components/ProductPage/Product";
import Head from "next/head";

export default function product() {
    return (
        <>
            <Head>
                <title>Product Page</title>
            </Head>
            <PageBanner
                title="Product Page"
                content="This is a product page."
            />

            <Product />
        </>
    );
}
