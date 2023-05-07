import Image from "next/image"
import "./cta.css"
function CTA() {
   return (
		<section className="cta">
			<div className="cta_content">
				<div className="cta_card">
					<h3>Let’s make things happen</h3>
					<p>
						Contact us today to learn more about how our digital marketing
						services can help your business grow and succeed online.
					</p>
					<button>Get your free proposal</button>
				</div>
				<div className="cta_logo">
					<Image
						src="/images/cta.svg"
						alt="cta"
						width={250}
						height={250}
					/>
				</div>
			</div>
		</section>
	);
}

export default CTA