import Head from "next/head";
import ContentOne from "../components/AboutPage/ContentOne";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FeaturesThree from "../components/Features/FeaturesThree";
import TeamTwo from "../components/Team/TeamTwo";
import Testimonial from "../components/Testimonial/Testimonial";
import ContentTwo from "./../components/AboutPage/ContentTwo";

export default function about() {
    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <PageBanner
                title="With our vision, mission, and goals, we strive to become a leader in the industry."
                content=" Our newly established company offers luxury and eco-friendly modular homes, aiming to bring the comfort of sustainable living to you. "
            />
            <ContentOne />
            <FeaturesThree />
            <ContentTwo />
        </>
    );
}
