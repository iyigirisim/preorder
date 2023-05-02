export default function ContentTwo({title, content}) {
	
	return (
		<section className="promo-content-block fix section-padding section-bg">
			
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-12 mt-5 mt-xl-0 order-2 order-xl-1">
						<div className="block-contents">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">{title}</h2>
								<p className="wow fadeInUp pt-15" data-wow-delay=".3s">
								{content}
								</p>
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
