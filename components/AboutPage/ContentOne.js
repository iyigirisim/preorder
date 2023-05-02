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
                                <h2 className="wow fadeInUp">About Us</h2>
                                <p
                                    className="wow fadeInUp pt-15"
                                    data-wow-delay=".3s"
                                >
                                    Our company, as a new and rapidly growing
                                    entrant in the industry, aims to bring the
                                    comfort of sustainable living to you by
                                    offering luxury and eco-friendly modular
                                    homes.
                                </p>
                                <p className="mt-3">
                                    Using environmentally friendly and
                                    energy-efficient materials, we provide
                                    customizable, comfortable, and stylish
                                    living spaces for our customers. We are
                                    working towards becoming a leader in the
                                    sector.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
