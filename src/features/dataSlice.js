import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	objectId: 100,
	apiData: ""
}

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		nextId: (state) => {
			return { 
				objectId: state.objectId + 1,
				apiData: state.apiData
			}
		},
		prevId: (state) => {
			return { 
				objectId: state.objectId - 1,
				apiData: state.apiData
			}
		},
		setId: (state, action) => {
			return { 
				objectId: action.payload,
				apiData: state.apiData
			}
		},
		setData: (state, action) => {
			return { 
				objectId: state.objectId, 
				apiData: action.payload 
			}
		}
	}
})

export const fetchData = () => {
	const dataThunk = async (dispatch, getState) => {
		const state = getState()
		console.log(state)
		const url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + state.data.objectId
		const res = await fetch(url)
		const resData = await res.json()
		console.log(url)
		console.log(resData)
		dispatch(setData(resData))
	}
	return dataThunk
}

export const { nextId, prevId, setId, setData } = dataSlice.actions

export default dataSlice.reducer