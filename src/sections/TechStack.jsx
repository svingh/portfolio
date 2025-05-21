import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../Components/HeroModels/TitleHeader";
import { techStackImgs } from "../Constants"; // Switched from techStackIcons

const TechStack = () => {
	useGSAP(() => {
		gsap.fromTo(
			".tech-card",
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.inOut",
				stagger: 0.2,
				scrollTrigger: {
					trigger: "#skills",
					start: "top center",
				},
			}
		);
	});

	return (
		<div id="skills" className="flex-center section-padding">
			<div className="w-full h-full md:px-10 px-5">
				<TitleHeader
					title="My TechStack"
					sub="Tools in my Shed"
				/>
				<div className="tech-grid">
					{techStackImgs.map((techStackIcon, index) => (
						<div
							key={index}
							className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
						>
							<div className="tech-card-animated-bg" />
							<div className="tech-card-content">
								<div className="tech-icon-wrapper">
									<img
										src={techStackIcon.imgPath}
										alt={techStackIcon.name}
										className="w-16 h-16 object-contain"
									/>
								</div>
								<div className="padding-x w-full">
									<p>{techStackIcon.name}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechStack;
