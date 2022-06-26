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
			return { objectId: objectId + 1}
		}
	}
})

export default dataSlice.reducer