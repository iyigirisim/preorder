import Head from "next/head";
import BlogContent from "./../components/DefaultHome/BlogContent";
import CallToAction from "./../components/DefaultHome/CallToAction";
import ContentBlockOne from "./../components/DefaultHome/ContentBlockOne";
import ContentBlockTwo from "./../components/DefaultHome/ContentBlockTwo";
import HeroTwo from "./../components/Hero/HeroTwo";
import PopularCryptoCurrencies from "./../components/DefaultHome/PopularCryptoCurrencies";
import FaqWithVideoModal from "./../components/faq/FaqWithVideoModal";
import FeaturesOne from "./../components/Features/FeaturesOne";
import Testimonial from "./../components/Testimonial/Testimonial";

export default function Home() {
    return (
        <>
            <Head>
                <title>Preorder site</title>
            </Head>
            <HeroTwo />
            <FeaturesOne />
            <ContentBlockOne />
            <PopularCryptoCurrencies />
            <ContentBlockTwo />
            <Testimonial />
            <FaqWithVideoModal />
            <BlogContent />
            <CallToAction />
        </>
    );
}
