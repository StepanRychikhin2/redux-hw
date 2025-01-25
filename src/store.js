import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
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
	filter: 'awd',
}

const reduser = (state = initialState, action) => {
	if (action.type === 'addBB') {
		console.log(initialState)
		return {
			contacts: initialState.contacts.push(action.addContacts),
		}
	}
}
console.log(initialState)
const store = createStore(reduser, initialState, composeWithDevTools())

export default store
