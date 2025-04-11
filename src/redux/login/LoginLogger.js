import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'

// axios.defaults.baseURL = 'https://connections-api.goit.global'

const login = createAsyncThunk('auth/login', async (values, thunkApi) => {
	try {
		const response = await axios.post(
			'https://connections-api.goit.global/users/login',
			values
		)
		return response.data
	} catch (err) {
		console.log(err)
	}
})

const createUser = createAsyncThunk(
	'register/fetchAll',
	async (valueas, thunkApi) => {
		try {
			const response = await axios.post(
				'https://connections-api.goit.global/users/signup',
				valueas
			)
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err.message)
		}
	}
)
export { createUser, login }
