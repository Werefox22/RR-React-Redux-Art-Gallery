import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	objectId: 0,
	apiData: ""
}

export const dataSlice = createSlice({
	name: 'data',
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

export const { nextId, prevId, setId, setData } = dataSlice.actions

export default dataSlice.reducer