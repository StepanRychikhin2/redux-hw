import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
const initialState = {
	contacts: [
		{
			name: 'Stepan',
			number: 80934248,
			id: 1,
		},
		{
			name: 'Tolik',
			number: 345534354,
			id: 2,
		},
	],
}
const tasksSlise = createSlice({
	name: 'tasks',
	initialState: initialState,
	reducers: {
		addNumber: {
			reducer(state, action) {
				return {
					...state,
					contacts: [...state.contacts, action.payload],
				}
			},
			prepare(e, nameBB, numBB) {
				e.preventDefault()
				return {
					payload: {
						name: nameBB,
						number: numBB,
						id: nanoid(),
					},
				}
			},
		},
		delNum: {
			reducer(state, action) {
				return {
					...state,
					contacts: state.contacts.filter(
						(contact) => contact.id !== action.payload.id
					),
				}
			},
			prepare(e) {
				return {
					payload: {
						id: e,
					},
				}
			},
		},
	},
})
export const { addNumber, delNum } = tasksSlise.actions
export const taskReduser = tasksSlise.reducer
// delNum(state, action) {
// 	return {
// 		...state,
// 		contacts: state.contacts.filter(
// 			(contact) => contact.id !== action.payload.id
// 		),
// 	}
// },
