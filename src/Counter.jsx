import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import sty from './style.module.css'
import del from './deletebutton.svg'
import { phoneDataList } from './redux/selectors/selectors'
import { ModalLogin } from './components/MadalLogin'
import { ModalReg } from './components/MadalREg'

// import { addNumber, delNum } from './redux/task/tasksSlise'
import {
	getContacts,
	addContacts,
	delContacts,
} from './redux/middlewere/logger'
import { createUser, login } from './redux/login/LoginLogger'

const Counter = () => {
	const [visible, setVisible] = useState(false)
	const [visibleReg, setVisibleReg] = useState(false)
	const phoneData = useSelector(phoneDataList)
	const auth = useSelector((state) => state.auth)
	useEffect(() => {
		window.addEventListener('keyup', (e) => {
			if (e.key === 'Escape') {
				setVisibleReg(false)
				setVisible(false)
			}
		})
	})
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getContacts())
	}, [dispatch])
	const OpenModal = () => {
		setVisible(true)
		setVisibleReg(false)
	}
	const OpenModalReg = () => {
		setVisible(false)
		setVisibleReg(true)
	}
	const OperationLog = (login, password) => {
		const values = {}

		if (true) {
			values.email = login.trim() + '@gmail.com'
			values.name = login.trim()
			values.password = password.trim()
			dispatch(createUser(values))
		}
	}
	const OperationREalLog = (loginn, password) => {
		const values = {}

		if (true) {
			values.email = loginn.trim() + '@gmail.com'
			values.password = password.trim()
			dispatch(login(values))
		}
	}
	const addContactss = () => {
		if (auth.token) {
			dispatch(
				addContacts({
					nameAwd: document.getElementById('name').value,
					numberAwd: document.getElementById('number').value,
				})
			)
		} else {
			alert('зайдіть в акауннт')
		}
	}
	return (
		<>
			<button className={sty.loginBtn} onClick={() => OpenModal()}>
				login
			</button>
			<div className={sty.loginFormBox}>
				<ModalLogin
					OperationREalLog={OperationREalLog}
					OpenModalReg={OpenModalReg}
					isOpen={visible}
				></ModalLogin>
				<ModalReg
					OperationLog={OperationLog}
					OpenModa={OpenModal}
					isOpen={visibleReg}
				></ModalReg>
			</div>

			<div id="Glawbox" className={sty.form}>
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
				<button onClick={() => addContactss()} className={sty.subAtn}>
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
