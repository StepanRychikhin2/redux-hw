import { createStore } from 'redux'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { taskReduser } from './redux/task/tasksSlise'

const rootReduser = combineReducers({ contacts: taskReduser })

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReduser)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
		  serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		  },
		}),
})
export const persistor = persistStore(store)
export { store }
