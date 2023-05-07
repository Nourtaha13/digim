import { FiArrowUpRight } from "react-icons/fi";
import Headtitle from "../Utils/Headtitle"
import "./case.css"

function Case() {
   const data = [
		"For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
		"For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
		"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
	];
   return (
		<section className="case">
			<Headtitle
				title="Case Studies"
				text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
			/>
			<div className="case_blocks">
            {
               data.length > 0 && (
                  data.map((text, i ) => (
                     <div className="case_block" key={i}>
                        <p>{text}</p>
                        <span>
                           Learn more <FiArrowUpRight size={23} />
                        </span>
                     </div>

                  ))
               )
            }
				
			</div>
		</section>
	);
}

export default Case