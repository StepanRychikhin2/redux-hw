import { createAction } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'


const delNum = createAction('contacts/delNum', (e) => {
	return {
		payload: {
			id: e,
		},
	}
})

const addNumber = createAction('contacts/addNumber', (e, nameBB, numBB) => {
	e.preventDefault()
	console.log(123)
	return {
		payload: {
			name: nameBB,
			number: numBB,
			id: nanoid(),
		},
	}
})
export { delNum, addNumber }
