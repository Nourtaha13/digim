import Image from 'next/image'
import React from 'react'

function Forms() {
   return (
		<div
			className="contact_forms"
			data-aos="zoom-in-right"
			data-aos-delay="200">
			<div className="form" data-aos="fade-up-right" data-aos-delay="400">
				<form action="#">
					<div>
						<input
							type="radio"
							name="chk"
							id="say"
							defaultChecked={true}
						/>
						<label htmlFor="say">Say Hi</label>
						<input type="radio" name="chk" id="get" />
						<label htmlFor="get">Get a Quote</label>
					</div>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" placeholder="Name" id="name" />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" placeholder="Email" id="email" />
					</div>
					<div>
						<label htmlFor="msg">Message</label>
						<textarea
							type="text"
							placeholder="Message"
							id="msg"></textarea>
					</div>
					<button>Send Message</button>
				</form>
			</div>
			<div
				className="contact_logo"
				data-aos="fade-up-left"
				data-aos-delay="400">
				<Image
					src="/images/contact.svg"
					alt="contact"
					width={400}
					height={400}
				/>
			</div>
		</div>
	);
}

export default Forms