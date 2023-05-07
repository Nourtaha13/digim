import Headtitle from "../Utils/Headtitle"
import Sliders from "./Sliders";
import "./testimonials.css"


function Testimonials() {
   return (
		<section>
			<Headtitle
				title="Testimonials"
				text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
			/>
			<Sliders />
		</section>
	);
}

export default Testimonials