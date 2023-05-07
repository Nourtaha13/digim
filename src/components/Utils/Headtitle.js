import React from 'react'

function Headtitle({ title, text }) {
   return (
		<div
			className="content_header"
			data-aos="fade-right"
			data-aos-duration="300">
			<h2 className="head_title">{title}</h2>
			<p>{text}</p>
		</div>
	);
}

export default Headtitle