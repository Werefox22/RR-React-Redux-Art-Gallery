import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nextId, prevId, setId } from '../features/dataSlice'

function NavButtons() {
	const dispatch = useDispatch()
	const [input, setInput] = useState('')

	const goToId = (e) => {
		e.preventDefault()
		dispatch(setId(input))
	}

	return (
		<div>
			<div>
				<button onClick={() => dispatch(prevId())}>
					Previous
				</button>

				<button onClick={() => dispatch(nextId())}>
					Next
				</button>
			</div>
			<div>
				<form onSubmit={(e) => goToId(e)}>
					<input 
						type="text"
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type="submit">
						Go to...
					</button>
				</form>
			</div>
		</div>
	)
}

export default NavButtons