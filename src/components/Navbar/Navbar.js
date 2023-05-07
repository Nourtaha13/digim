import Image from "next/image";
import "./navbar.css"
import React, { useState } from "react"

function Navbar() {
	const [show, setShow] = useState(false)
	return (
		<header data-aos="zoom-in-down">
			<div className="header_logo">
				<Image src="/images/logo.svg" alt="logo" width={100} height={50} />
				<div
					className="header_menu"
					onClick={(_) => setShow((state) => !state)}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<nav className={show ? "header_active" : ""}>
				<div className="header_nav">
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
				<div className="header_button">
					<button>Request a quote</button>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
