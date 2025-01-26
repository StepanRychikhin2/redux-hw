import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import sty from "./style.module.css"
import del from "./deletebutton.svg"
const Counter = () => {
	const phoneData = useSelector((state) => {
		return state.contacts
	})

	const dispatch = useDispatch()

	function awdawd(e, nameBB, numBB) {
		e.preventDefault()

		const maxId = phoneData.reduce((max, contact) => {
			return contact.id > max ? contact.id : max
		}, 0)
		dispatch({
			type: 'addBB',
			addContacts: {
				name: nameBB,
				number: numBB,
				id: maxId + 1,
			},
		})
	}
	function delNum(e) {
		dispatch({ type: 'minBB', id: e })
	}
	return (
		<>
			<h1>Number Phone</h1>
			{console.log(phoneData)}

			<form className={sty.form}
				action="addPhone"
				onSubmit={(e) =>
					awdawd(
						e,
						document.getElementById('name').value,
						document.getElementById('number').value
					)
				}
			>
				<input type="text" className={sty.input} placeholder="number" id="number" />
				<input type="text" className={sty.input} placeholder="name" id="name" />
				<button className={sty.subAtn}>submit</button>
			</form>

			<ul  className={sty.list}>
				{phoneData.map((data) => {
					return (
						<li className={sty.listItem} key={data.id}>
							<p>{data.name}</p>
							<p>{data.number}</p>
							<button
className={sty.deleteBtn}
								onClick={() => {
									delNum(data.id)
								}}
							>
								<img  className={sty.deleteImg} src={del}  />
							</button>
						</li>
					)
				})}

				{console.log(phoneData)}
			</ul>
		</>
	)
}
export default Counter
