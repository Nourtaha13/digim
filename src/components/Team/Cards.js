import Image from "next/image";
import { BsLinkedin } from "react-icons/bs"

function Cards() {
   const data = [
		{
			img: "/images/team/img1.svg",
			name: "John Smith",
			type: "CEO and Founder",
			text: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
		},
		{
			img: "/images/team/img2.svg",
			name: "Jane Doe",
			type: "Director of Operations",
			text: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
		},
		{
			img: "/images/team/img3.svg",
			name: "Michael Brown",
			type: "Senior SEO Specialist",
			text: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
		},
		{
			img: "/images/team/img4.svg",
			name: "Emily Johnson",
			type: "PPC Manager",
			text: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
		},
		{
			img: "/images/team/img5.svg",
			name: "Brian Williams",
			type: "Social Media Specialist",
			text: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
		},
		{
			img: "/images/team/img6.svg",
			name: "Sarah Kim",
			type: "Content Creator",
			text: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
		},
	];
   return (
		<div className="team_cards">
			{data.length > 0 &&
				data.map((item, i) => (
					<div
						className="team_card"
						key={i}
						data-aos="fade-zoom-in"
						data-aos-easing="ease-in-back"
						data-aos-delay="300"
						data-aos-offset="0">
						<div className="team_card_header">
							<div>
								<Image
									src={item.img}
									alt="logo"
									width={80}
									height={80}
								/>
								<div>
									<h2>{item.name}</h2>
									<p>{item.type}</p>
								</div>
							</div>
							<BsLinkedin size={20} />
						</div>
						<div className="team_card_content">{item.text}</div>
					</div>
				))}
		</div>
	);
}

export default Cards