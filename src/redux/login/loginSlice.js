import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { createUser, login } from './LoginLogger'
const initialState = {
	token: '',
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
console.log(initialState.contacts)
const authSlice = createSlice({
	name: 'tasks',
	initialState: initialState,
	extraReducers: (builder) => {
		builder
			.addCase(createUser.rejected, handleRejected)
			.addCase(createUser.pending, handlePending)
			.addCase(createUser.fulfilled, (state, actions) => {
				state.token = actions.payload.token
				state.isLoading = false
			})
			.addCase(login.rejected, handleRejected)
			.addCase(login.pending, handlePending)
			.addCase(login.fulfilled, (state, actions) => {
				state.token = actions.payload.token
				state.isLoading = false
			})
	},
})
export const authReducer = authSlice.reducer
export const { toggleModal } = authSlice.actions
