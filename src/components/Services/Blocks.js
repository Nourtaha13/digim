import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function Blocks() {
	const data = [
		{
			head: "Search engine",
			text: "optimization",
			img: "/images/blocks/img1.svg",
		},
		{
			head: "Pay-per-click",
			text: "advertising",
			img: "/images/blocks/img2.svg",
		},
		{
			head: "Social Media",
			text: "Marketing",
			img: "/images/blocks/img3.svg",
		},
		{ head: "Email", text: "Marketing", img: "/images/blocks/img4.svg" },
		{ head: "Content", text: "Creation", img: "/images/blocks/img5.svg" },
		{
			head: "Analytics and ",
			text: "Tracking",
			img: "/images/blocks/img6.svg",
		},
	];
   return (
		<div className="services_blocks">
			{
				data.length > 0 && (
					data.map((item, i) => (
						<div className="services_block" key={i}>
							<div>
								<div className="block_title">
									<p>{item.head}</p>
									<p>{item.text}</p>
								</div>
								<div className="block_more">
									<i>
										<BsArrowUpRightCircleFill size={23} />
									</i>
									<span>Learn more</span>
								</div>
							</div>
							<Image
								src={item.img}
								alt="block"
								width={130}
								height={130}
							/>
						</div>

					))
				)
			}
			
		</div>
	);
}

export default Blocks;
