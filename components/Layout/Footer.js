import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="footer-wrapper">
			<div className="footer-widgets-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft">
								<div className="about-us-widget">
									<Link href="/">
										<a className="footer-logo d-block">
											<img src="img/footer-logo.svg" alt="xmoze" />
										</a>
									</Link>
									<p>
										şirket hakkında bilgi ve şirket logosu ( footer gelecek içeriklere göre güncellenecek)
									</p>
								</div>
							</div>
						</div>
						
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
								<div className="widget-title">
									<h5>Services</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											<a>About us</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Solarsystem</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Product</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Kvkk</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 offset-xl-1 col-md-6 col-12">
							<div className="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
								<div className="widget-title">
									<h5>Resources</h5>
								</div>
								<ul>
									<li>
										<Link href="#">
											<a>Payment plans</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Blogs & guides</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Premium support</a>
										</Link>
									</li>
									<li>
										<Link href="#">
											<a>Our products</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<div className="container">
					<div className="footer-bottom-content d-md-flex justify-content-between">
						<div className="site-copyright wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
							<p>
								&copy; 2022{" "}
								<Link href="#">
									<a>buraya</a>
								</Link>{" "}
								içerik gelebilir
							</p>
						</div>
						<div
							className="social-links mt-4 mt-md-0 wow fadeInUp"
							data-wow-delay=".3"
							data-wow-duration="1s"
						>
							<Link href="#">
								<a>
									<FaFacebookF />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaTwitter />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaInstagram />
								</a>
							</Link>
							<Link href="#">
								<a>
									<FaLinkedinIn />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
