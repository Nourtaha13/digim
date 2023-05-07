
function Cards() {
   const data = [
		{
			name: "Consultation",
			text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			name: "Research and Strategy Development",
			text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			name: "Implementation",
			text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			name: "Monitoring and Optimization",
			text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			name: "Reporting and Communication",
			text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			name: "Continual Improvement",
			text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
	];
   const clickHandler = e => {
		const parent = e.currentTarget.parentElement.parentElement;
		parent.classList.toggle("active");
		if(parent.classList.contains("active")){
         e.currentTarget.innerHTML = '-';
		}else{
         e.currentTarget.innerHTML = "+";
      }
	}
   return (
		<div className="working_cards">
			{data.length > 0 &&
				data.map((item, i) => (
					<div className="working_card" key={i}>
						<div className="working_card_header">
							<p>
								<span>{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
								{item.name}
							</p>
							<span className="plus_btn" onClick={clickHandler}>
                        +
							</span>
						</div>
						<div className="working_card_content">
							<p>{item.text}</p>
						</div>
					</div>
				))}
		</div>
	);
}

export default Cards