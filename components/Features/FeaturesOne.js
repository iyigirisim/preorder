import { AiOutlineBarChart } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

export default function FeaturesOne() {
	return (
		<div className="container section-padding mtm-120">
			<div className="row  d-flex justify-content-between">
				<h2 className="text-center pb-5 pt-5">Core Values</h2>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="single-about-features">
						<div className="icon">
							<img src="img/icons/idea.png" alt="" />
						</div>
						<div className="content">
							<h3>Innovation</h3>
							<p>Progressing towards leadership in the industry with innovative and creative ideas and ensuring continuous development.
</p>
						</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="single-about-features">
						<div className="icon">
							<img src="img/icons/man.png" alt="" />
						</div>
						<div className="content">
							<h3>Team Spirit</h3>
							<p>Achieving success through strong teamwork with our experienced and expert team.
</p>
						</div>
					</div>
				</div>
				<div className="col-xxl-3 col-xl-4 col-md-6">
					<div className="single-about-features">
						<div className="icon">
							<img src="img/icons/setting.png" alt="" />
						</div>
						<div className="content">
							<h3>Customer Focus</h3>
							<p> Providing products and services that meet customer needs and expectations, prioritizing customer satisfaction.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
