import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://67bf3e01b2320ee050131a14.mockapi.io'

const getContacts = createAsyncThunk(
	'Contacts/fetchAll',
	async (_, thunkApi) => {
		try {
			const response = await axios.get('/PhoneNumber')
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)
const addContacts = createAsyncThunk(
	'Contacts/addContacts',
	async ( nameBB, thunkApi) => {
		try {
			const response = await axios.post('/PhoneNumber', {
				id: nanoid(),
				name: nameBB.nameAwd,
				number: nameBB.numberAwd,
			})
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)

const delContacts = createAsyncThunk(
	'Contacts/delContacts',
	async (id, thunkApi) => {
		try {
			const response = await axios.delete(`/PhoneNumber/${id}`)
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)

export { getContacts, addContacts, delContacts }
