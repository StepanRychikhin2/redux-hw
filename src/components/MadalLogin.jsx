import sty from '../style.module.css'

export const ModalLogin = ({ isOpen, OpenModalReg, OperationREalLog }) => {
	return isOpen ? (
		<div className={sty.formLogin}>
			<p className={sty.formTitle}>Login</p>
			<div className={sty.fieldd}>
				<input
					id="usedfname"
					placeholder="Username"
					className={sty.inputField}
					type="text"
				/>
			</div>
			<div className={sty.field}>
				<input
					id="password"
					className={sty.inputField}
					placeholder="Password"
					type="password"
				/>
			</div>
			<button
				onClick={() =>
					OperationREalLog(
						document.getElementById('usedfname').value,
						document.getElementById('password').value
					)
				}
				className={sty.buttonTwo}
			>
				submit
			</button>
			<div className={sty.btn}>
				<button className={sty.buttonOne}>login</button>
				<button className={sty.buttonTwo} onClick={() => OpenModalReg()}>
					Register
				</button>
			</div>
		</div>
	) : (
		<></>
	)
}
