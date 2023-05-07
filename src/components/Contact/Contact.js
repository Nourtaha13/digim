import Headtitle from "../Utils/Headtitle"
import Forms from "./Forms";
import "./contact.css"


function Contact() {
   return (
		<section>
			<Headtitle
				title="Contact Us"
				text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
			/>
         <Forms />
		</section>
	);
}

export default Contact