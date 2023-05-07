import Image from "next/image";
import React from "react";

function CompanyLogs() {
	const images = [
		"/images/company/img.svg",
		"/images/company/img2.svg",
		"/images/company/img3.svg",
		"/images/company/img4.svg",
		"/images/company/img5.svg",
		"/images/company/img6.svg",
	];
	return (
		<div
			className="company_logs"
			data-aos="zoom-out"
			data-aos-duration="500">
			{images.length > 0 &&
				images.map((img, i) => (
					<Image src={img} alt="company" width={100} height={57} key={i} />
				))}
		</div>
	);
}

export default CompanyLogs;
