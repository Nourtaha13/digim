import Headtitle from "../Utils/Headtitle"
import Cards from "./Cards";
import "./team.css"

function Team() {
   return (
		<section>
			<Headtitle
				title="Team"
				text="Meet the skilled and experienced team behind our successful digital marketing strategies"
			/>
         <Cards />
		</section>
	);
}

export default Team