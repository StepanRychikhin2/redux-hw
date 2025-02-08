import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
// import { taskReduser } from './redux/task/reduser'
import { taskReduser } from './redux/task/tasksSlise'
const store = configureStore({
	reducer: {
		contacts: taskReduser,
	},
})
export { store }
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

// const reduser = (state = initialState, action) => {
// 	if (action.type === 'addBB') {
// 		console.log(initialState)

// 		return {
// 			contacts: [...state.contacts, action.addContacts],
// 		}
// 	} else if (action.type === 'minBB') {
// 		return {
// 			...state,
// 			contacts: state.contacts.filter((contact) => contact.id !== action.id),
// 		}
// 	} else {
// 		return state
// 	}
// }
// console.log(initialState)
