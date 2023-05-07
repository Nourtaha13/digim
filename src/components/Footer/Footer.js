import Image from "next/image";
import "./footer.css"
import { ImLinkedin, ImFacebook2 } from "react-icons/im";
import {
	AiFillLinkedin,
	AiFillFacebook,
	AiFillTwitterSquare,
} from "react-icons/ai";


function Footer() {
   return (
		<section style={{ paddingBottom: "0" }}>
			<footer data-aos="zoom-in">
				<div className="footer_header">
					<Image
						src="/images/footer.svg"
						alt="logo"
						width={100}
						height={50}
					/>
					<div className="footer_nav">
						<ul>
							<li>
								<a href="#">About us</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">Use Cases</a>
							</li>
							<li>
								<a href="#">Pricing</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
						</ul>
					</div>
					<div className="footer_links">
						<a href="https://twitter.com">
							<AiFillTwitterSquare size={30} />
						</a>
						<a href="https://facebook.com">
							<AiFillFacebook size={30} />
						</a>
						<a href="https://linkedin.com">
							<AiFillLinkedin size={30} />
						</a>
					</div>
				</div>
				<div className="footer_content">
					<div className="footer_info">
						<h2>Contact us:</h2>
						<p>
							Email: <a href="mailto:info@digim.com">info@digim.com</a>
						</p>
						<p>
							Phone: <a href="tel:1234567890">123-456-7890</a>
						</p>
						<p>Address: 1234 Main St Dhyey Joshi City, DJ-018</p>
					</div>
					<div className="footer_sub">
						<input type="email" placeholder="Email" />
						<p>Subscribe to news</p>
					</div>
				</div>
				<div className="footer_copy">
					<p>&copy; 2023 Digim. All Rights Reserved.</p>
					<p>Privacy Policy</p>
				</div>
			</footer>
		</section>
	);
}

export default Footer