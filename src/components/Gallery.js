import React from "react";
import { useSelector } from 'react-redux'

function Gallery() {
	const data = useSelector((state) => state.data.apiData)

	return (
		<div>
			<h2>{data.title}</h2>
			<img 
				src={data.primaryImage}
				alt={data.title}
			/>
			<p>{data.artistDisplayName}</p>
		</div>
	)
}

export default Gallery