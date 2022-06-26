import React from "react";
import { useSelector } from 'react-redux'

function Gallery() {
	const apiData = useSelector((state) => state.data.apiData)
	const objectId = useSelector((state) => state.data.objectId)

	return (
		<div>
			<h2>{apiData.title}</h2>
			<img 
				src={apiData.primaryImage}
				alt={apiData.title}
			/>
			<p>{apiData.artistDisplayName}</p>
			<h6>Entry {objectId}</h6>
		</div>
	)
}

export default Gallery