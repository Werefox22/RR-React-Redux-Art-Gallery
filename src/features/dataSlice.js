import { createSlice } from "@reduxjs/toolkit/dist/createSlice"

const initialState = {
	objectId,
	apiData
}

export const dataSlice = createSlice({
	name: data,
	initialState,
	reducers: {
		nextId: (state) => {
			return { objectId: state.objectId + 1}
		},
		prevId: (state) => {
			return { objectId: state.objectId - 1}
		},
		setId: (state, action) => {
			return { objectId: action.payload }
		},
		setData: (state, action) => {
			return { apiData: action.payload }
		}
	}
})

export default dataSlice.reducer