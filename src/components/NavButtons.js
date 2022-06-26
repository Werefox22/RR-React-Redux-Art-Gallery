import React from "react";
import { useDispatch } from "react-redux";
import { nextId, prevId, setId } from '../features/dataSlice'

function NavButtons() {
	const dispatch = useDispatch()

	return (
		<div>
			<button onClick={() => dispatch(prevId())}>
				Previous
			</button>

			<button onClick={() => dispatch(nextId())}>
				Next
			</button>
		</div>
	)
}

export default NavButtons