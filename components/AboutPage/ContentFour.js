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
                    <div className="col-xl-8 col-12 mt-5 mt-xl-0 ">
                        <div className="block-contents ms-xl-5">
                            <div className="section-title mb-4">
                                <h2 className="wow fadeInUp">Our Goals</h2>
                                <p
                                    className="wow fadeInUp pt-15"
                                    data-wow-delay=".3s"
                                >
                                    To continuously improve our product and
                                    service quality, increasing customer
                                    satisfaction and becoming a preferred brand
                                    in the industry.
                                </p>
                                <p className="mt-3">
                                    To be a pioneer and example in the industry
                                    regarding energy efficiency and
                                    environmentally friendly practices.
                                </p>
                                <p className="mt-3">
                                    To invest in innovative and sustainable
                                    technologies to reach and maintain a
                                    leadership position in the modular home
                                    sector.
                                </p>
                                <p className="mt-3">
                                    To contribute to society and the environment
                                    through social responsibility projects,
                                    raising the industry's awareness of
                                    sustainability.
                                </p>
                                <p className="mt-3">
                                    To offer modular home solutions suitable for
                                    every budget and taste with our wide product
                                    range, enabling more people to experience
                                    the comfort of sustainable living.
                                </p>
                                <p className="mt-3">
                                    In line with our company's vision, mission,
                                    and goals, we continue our work with the
                                    goal of becoming a leader in the industry.
                                    We aim to contribute to a greener and more
                                    livable world by providing the comfort of
                                    sustainable living.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-12">
                        <img src="/img/home2/video-banner.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
