import { useState } from 'react'
import { unstable_batchedUpdates } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'





const Counter = () => {
const [number ,setNumber] = useState()
const [name ,setName] = useState()
const [isopen ,setIsopen] = useState(false)



	const phoneData = useSelector((state) => {
		return state
	})

	const dispatch = useDispatch()

	function awdawd() {
		dispatch({ type: 'addBB', addContacts: { name: 'awdawd', number: 231423 } })
	}
	// console.log(phoneData)



	return (
		<>
			<h1>Number Phone</h1>
			<button onClick={awdawd}>awd</button>
			{console.log(phoneData)}
		</>
	)
}
export default Counter
