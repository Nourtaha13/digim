import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Sliders() {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	const data = [
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
		{
			name: "John Smith",
			type: "Marketing Director at XYZ Corp",
			comment:
				'"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
		},
	];
	return (
		<>
			{data.length > 0 && (
				<div className="test_content">
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={30}
						slidesPerView={2}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl =
								navigationPrevRef.current;
							swiper.params.navigation.nextEl =
								navigationNextRef.current;
						}}
                  loop={true}
						pagination={{ clickable: true }}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							400: {
								slidesPerView: 1,
							},
							639: {
								slidesPerView: 2,
							},
						}}>
						{data.map((item, i) => (
							<SwiperSlide key={i}>
								<div className="swiper_comment">
									<p>{item.comment}</p>
								</div>
								<div className="swiper_info">
									<h4>{item.name}</h4>
									<p>{item.type}</p>
								</div>
							</SwiperSlide>
						))}
						<div ref={navigationPrevRef} className="prev">
							<HiArrowLeft size={20} />
						</div>
						<div ref={navigationNextRef} className="next">
							<HiArrowRight size={20} />
						</div>
					</Swiper>
				</div>
			)}
		</>
	);
}

export default Sliders;
