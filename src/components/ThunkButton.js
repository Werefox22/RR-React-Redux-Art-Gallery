import React from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../features/dataSlice";

function ThunkButton() {
	const dispatch = useDispatch()

	return (
		<button onClick={() => dispatch(fetchData())}>
			Thunk
		</button>
	)
}

export default ThunkButton