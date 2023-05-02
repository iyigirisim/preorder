import Head from "next/head";
import BlogContent from "./../components/DefaultHome/BlogContent";
import CallToAction from "./../components/DefaultHome/CallToAction";
import ContentBlockOne from "./../components/DefaultHome/ContentBlockOne";
import ContentBlockTwo from "./../components/DefaultHome/ContentBlockTwo";
import HeroTwo from "./../components/Hero/HeroTwo";
import PopularCryptoCurrencies from "./../components/DefaultHome/PopularCryptoCurrencies";
import FaqWithVideoModal from "../components/Faq/FaqWithVideoModal";
import FeaturesOne from "./../components/Features/FeaturesOne";
import Testimonial from "./../components/Testimonial/Testimonial";
import ContentTwo from "./../components/AboutPage/ContentTwo";

export default function Home() {
    return (
        <>
            <Head>
                <title>Preorder site</title>
            </Head>
            <HeroTwo />
            <ContentTwo
        title="Sustainable and Ecological Materials"
        content="Our modular homes are constructed using recycled, high-quality materials and energy-efficient systems, conserving natural resources and reducing energy consumption for lower operating costs." />
            {/* <FeaturesOne />
            <ContentBlockOne />
            <PopularCryptoCurrencies />
            <ContentBlockTwo />
            <Testimonial />
            <FaqWithVideoModal />
            <BlogContent />
            <CallToAction /> */}
            <ContentTwo
        title="Customizable Design Options"
        content="
        Whether you envision a minimalist living space or a spacious family home, we can tailor our modular homes to suit your desires. We offer a range of options for interior layout, color schemes, and additional features, allowing you to create your ideal living environment.
        " />
        <ContentTwo
        title="Furnished or Unfurnished Options"
        content="Our modular homes are constructed using recycled, high-quality materials and energy-efficient systems, conserving natural resources and reducing energy consumption for lower operating costs." />
        <ContentTwo
        title="Affordable Prices and Quality Service"
        content="
        Our luxury modular homes offer a comfortable and sustainable living experience at an affordable price. We prioritize customer satisfaction and provide professional support before and after the sale.
        " />
        <ContentTwo
        title="Fast Delivery: Just 6 Months to Your New Home!"
        content="
        After placing your order, we deliver your modular home in just 6 months. Thanks to their portable and modular design, our homes can be quickly and easily assembled and relocated as needed.

        " />

        </>
    );
}
