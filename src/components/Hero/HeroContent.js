import Image from 'next/image'
import React from 'react'

function HeroContent() {
	return (
		<div className="hero_content">
			<div className="intro" data-aos="fade-right" data-aos-duration="300">
				<h1 className="title">
					Navigating the digital landscape for success
				</h1>
				<div className="info">
					<p>
						Our digital marketing agency helps businesses grow and succeed
						online through a range of services including SEO, PPC, social
						media marketing, and content creation.
					</p>
					<button>Book a consultation</button>
				</div>
			</div>
			<div
				className="hero_logo"
				data-aos="fade-left"
				data-aos-duration="500">
				<Image
					src="/images/hero_logo.svg"
					alt="hero_logo"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}

export default HeroContent