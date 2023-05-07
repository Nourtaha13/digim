import React from 'react'

function Headtitle({ title, text }) {
   return (
      <div className="content_header">
         <h2 className='head_title'>
            {title}
         </h2>
			<p>{text}</p>
		</div>
   )
}

export default Headtitle