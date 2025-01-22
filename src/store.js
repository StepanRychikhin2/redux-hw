import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
const state = {
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

const reduser = (state, action) => {

    if (action.type === "addBB") {
        console.log(state)
        return {
            contacts : action.contacts
        }
       
    }
}
console.log(state)
const store = createStore(reduser, state,composeWithDevTools())


export default store


