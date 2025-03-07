import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { getContacts, addContacts, delContacts } from '../middlewere/logger'
const initialState = {
	contacts: [],
	error: null,
	isLoading: false,
}
function handlePending(state) {
	state.isLoading = true
}
function handleRejected(state, actions) {
	state.error = actions.payload
	state.isLoading = false
}
console.log(initialState.contacts);
const tasksSlise = createSlice({
	name: 'tasks',
	initialState: initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getContacts.rejected, handleRejected)
			.addCase(getContacts.pending, handlePending)
			.addCase(getContacts.fulfilled, (state, actions) => {
				state.contacts = actions.payload
				state.isLoading = false
			})
			.addCase(addContacts.rejected, handleRejected)
			.addCase(addContacts.pending, handlePending)
			.addCase(addContacts.fulfilled, (state, action) => {
				console.log(action.payload)
								state.contacts = [...state.contacts, action.payload]
				state.isLoading = false
			})
			.addCase(delContacts.rejected, handleRejected)
			.addCase(delContacts.pending, handlePending)
			.addCase(delContacts.fulfilled, (state, actions) => {
				
					state.contacts = state.contacts.filter(
						(contact) => contact.id !== actions.payload.id
					)
			})
	},
	// reducers: {
	// 	addNumber: {
	// 		reducer(state, action) {
	// 			return {
	// 				...state,
	// 				contacts: [...state.contacts, action.payload],
	// 			}
	// 		},
	// 		prepare(e, nameBB, numBB) {
	// 			e.preventDefault()
	// 			return {
	// 				payload: {
	// 					name: nameBB,
	// 					number: numBB,
	// 					id: nanoid(),
	// 				},
	// 			}
	// 		},
	// 	},
	// 	delNum: {
	// 		reducer(state, action) {
	// 			return {
	// 				...state,
	// 				contacts: state.contacts.filter(
	// 					(contact) => contact.id !== action.payload.id
	// 				),
	// 			}
	// 		},
	// 		prepare(e) {
	// 			return {
	// 				payload: {
	// 					id: e,
	// 				},
	// 			}
	// 		},
	// 	},
	// },
})
export const { addNumber, delNum } = tasksSlise.actions
export const taskReduser = tasksSlise.reducer
