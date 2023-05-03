import dynamic from "next/dynamic";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function ContentOne() {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="promo-content-block fix section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12">
                        {/* <div className="video-cta">
                            <img src="/img/home2/video-banner.jpg" alt="" />
                            <div
                                className="video-play-btn"
                                onClick={() => setOpen(true)}
                            >
                                <BsFillPlayFill />
                            </div>

                            <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="E1xkXZs0cAQ"
                                onClose={() => setOpen(false)}
                            />
                        </div> */}
                        <img src="/img/home2/video-banner.jpg" alt="" />
                    </div>
                    <div className="col-xl-6 col-12 ps-xl-5 mt-5 mt-xl-0 ">
                        <div className="block-contents ms-xl-5">
                            <div className="section-title mb-4">
                                <h2 className="wow fadeInUp">Our Mission</h2>
                                <p
                                    className="wow fadeInUp pt-15"
                                    data-wow-delay=".3s"
                                >
                                    Customer Focus: Providing products and
                                    services that meet customer needs and
                                    expectations, prioritizing customer
                                    satisfaction.
                                </p>
                                <p className="mt-3">
                                    Sustainability: Developing environmentally
                                    friendly and energy-efficient solutions to
                                    contribute to the widespread adoption of
                                    sustainable living.
                                </p>
                                <p className="mt-3">
                                    Innovation: Progressing towards leadership
                                    in the industry with innovative and creative
                                    ideas and ensuring continuous development.
                                </p>
                                <p className="mt-3">
                                    Quality: Continuously improving our products
                                    and services to elevate the industry's
                                    quality standards.
                                </p>
                                <p className="mt-3">
                                    Team Spirit: Achieving success through
                                    strong teamwork with our experienced and
                                    expert team.
                                </p>
                                <p className="mt-3">
                                    In line with our company's vision, mission,
                                    and goals, we continue our work with the
                                    goal of becoming a leader in the industry.
                                    We aim to contribute to a greener and more
                                    livable world by providing the comfort of
                                    sustainable living. Join us in the world of
                                    luxury and eco-friendly modular homes and
                                    experience the comfort of sustainable
                                    living.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
