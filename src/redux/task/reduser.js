
// import { createReducer } from '@reduxjs/toolkit'
// import { addNumber, delNum } from './actions'

// const initialState = {
// 	contacts: [
// 		{
// 			name: 'Stepan',
// 			number: 80934248,
// 			id: 1,
// 		},
// 		{
// 			name: 'Tolik',
// 			number: 345534354,
// 			id: 2,
// 		},
// 	],
// }

// export const taskReduser = createReducer(initialState, (builder) => {
// 	builder
// 		.addCase(addNumber, (state, action) => {
// 			return {
// 				...state,
// 				contacts: [...state.contacts, action.payload],
// 			}
// 		})
// 		.addCase(delNum, (state, action) => {
// 			return {
// 				...state,
// 				contacts: state.contacts.filter(
// 					(contact) => contact.id !== action.payload.id
// 				),
// 			}
// 		})
// })

// // if (action.type === 'addBB') {
// //     console.log(initialState)

// //     return {
// //         contacts: [...state.contacts, action.addContacts],
// //     }
// // } else if (action.type === 'minBB') {
// //     return {
// //         ...state,
// //         contacts: state.contacts.filter((contact) => contact.id !== action.id),
// //     }
// // } else {
// //     return state
// // }
