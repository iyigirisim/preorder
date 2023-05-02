export default function ContentTwo() {
	return (
		<section className="promo-content-block fix section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-12 mt-5 mt-xl-0 order-2 order-xl-1">
						<div className="block-contents">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">Our Vision</h2>
								<p className="wow fadeInUp pt-15" data-wow-delay=".3s">
								To be recognized worldwide as a pioneer in sustainable and eco-friendly modular homes, to reach a leadership position
								 in the sector and to create a positive impact on people's lives while offering solutions for a greener world.
								</p>
							</div>
						</div>
						<div className="funfacts d-flex">
							<div className="single-funfact wow fadeInUp" data-wow-delay=".5s">
								<h3>
									<span>250</span>+
								</h3>
								<p>Homes</p>
							</div>
							<div className="single-funfact wow fadeInUp" data-wow-delay=".8s">
								<h3>
									<span>76</span>%
								</h3>
								<p>Energy Saving</p>
							</div>
						</div>
					</div>
					<div className="col-xl-5 offset-xl-1 order-1 order-xl-2">
						<img src="img/about-img1.jpg" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
