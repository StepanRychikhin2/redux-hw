import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import sty from './style.module.css'
import del from './deletebutton.svg'
import { phoneDataList } from './redux/selectors/selectors'
// import { addNumber, delNum } from './redux/task/tasksSlise'
import {
	getContacts,
	addContacts,
	delContacts,
} from './redux/middlewere/logger'

const Counter = () => {
	const phoneData = useSelector(phoneDataList)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getContacts())
	}, [dispatch])
function AddClasss(e) {
	document.getElementById("Glawbox").style.transform = `rotate(${e}deg)`
}
	return (
		<>
			<div className={sty.block}>
				<h1>Number Phone</h1>
				{/* <button
					onClick={() => console.log(document.getElementById('myRange').value)}
				>
					awd
				</button>
				<input onChange={() => AddClasss(document.getElementById('myRange').value)} id="myRange" className={sty.slider}  max="360" min="0" type="range" /> */}
			</div>

			<div id='Glawbox' className={sty.form}>
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
				<button
					onClick={() =>
						dispatch(
							addContacts({
								nameAwd: document.getElementById('name').value,
								numberAwd: document.getElementById('number').value,
							})
						)
					}
					className={sty.subAtn}
				>
					submit
				</button>
			</div>

			<ul className={sty.list}>
				{phoneData.map((data) => {
					return (
						<li className={sty.listItem} key={data.id}>
							<p>{data.name}</p>
							<p>{data.number}</p>
							<button
								className={sty.deleteBtn}
								onClick={() => {
									dispatch(delContacts(data.id))
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
