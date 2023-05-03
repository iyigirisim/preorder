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
                                    To produce and develop high-quality,
                                    environmentally friendly, and
                                    energy-efficient modular homes
                                </p>
                                <p className="mt-3">
                                    To provide reliable and professional service
                                    by maintaining the highest level of customer
                                    satisfaction
                                </p>
                                <p className="mt-3">
                                    To progress towards leadership in the
                                    industry through innovation and continuous
                                    improvement
                                </p>
                                <p className="mt-3">
                                    To contribute to society and the environment
                                    through social responsibility projects
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
