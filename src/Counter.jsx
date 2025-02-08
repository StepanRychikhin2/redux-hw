import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import sty from './style.module.css'
import del from './deletebutton.svg'
import { addNumber, delNum } from './redux/task/tasksSlise'
const Counter = () => {
	const phoneData = useSelector((state) => {
		return state.contacts.contacts
	})

	const dispatch = useDispatch()

	return (
		<>
			<h1>Number Phone</h1>
			{console.log(phoneData)}

			<form
				className={sty.form}
				action="addPhone"
				onSubmit={(e) =>
					dispatch(
						addNumber(
							e,
							document.getElementById('name').value,
							document.getElementById('number').value
						)
					)
				}
			>
				<input
					maxLength="15"
					type="text"
					className={sty.input}
					placeholder="number"
					id="number"
				/>
				<input
					maxLength="10"
					type="text"
					className={sty.input}
					placeholder="name"
					id="name"
				/>
				<button className={sty.subAtn}>submit</button>
			</form>

			<ul className={sty.list}>
				{phoneData.map((data) => {
					return (
						<li className={sty.listItem} key={data.id}>
							<p>{data.name}</p>
							<p>{data.number}</p>
							<button
								className={sty.deleteBtn}
								onClick={() => {
									dispatch(delNum(data.id))
								}}
							>
								<img className={sty.deleteImg} src={del} />
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
