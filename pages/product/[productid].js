import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";

const products = [
    {
        id: 1,
        name: "Windbreaker 10",
        slug: "windbreaker-10",
        image: "/img/about-img1.jpg",
        description: "This is an example description for Windbreaker 10. This product is a windbreaker that is 10 feet long.",
    },
    {
        id: 2,
        name: "SolarSight v2",
        slug: "solarsight-v2",
        image: "/img/about-img1.jpg",
        description: "This is an example description for SolarSight v2. This product is a solar panel that is generates electricity.",
    },
    {
        id: 3,
        name: "SolarSight v3",
        slug: "solarsight-v3",
        image: "/img/about-img1.jpg",
        description: "This is an example description for SolarSight v3. This product is a solar panel that is generates electricity.",
    },
    {
        id: 4,
        name: "SolarSight v4",
        slug: "solarsight-v4",
        image: "/img/about-img1.jpg",
        description: "This is an example description for SolarSight v4. This product is a solar panel that is generates electricity.",
    },
];

export default function newsDetails() {
    return (
        <>
            <Head>
                <title>News Details</title>
            </Head>
            <PageBanner
                title="Ürünlerimize göz atmaya ne dersin?"
                content="The CVI is created by computing a decentralized volatility index from cryptocurrency option prices together with analyzing the market."
            />


    
        </>
    );
}
