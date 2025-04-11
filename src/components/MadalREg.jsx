import sty from '../style.module.css'
export const ModalReg = ({ isOpen, OpenModa, OperationLog }) => {
	return isOpen ? (
		<div className={sty.formLogin}>
			<p className={sty.formTitle}>Register</p>
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
					OperationLog(
						document.getElementById('usedfname').value,
						document.getElementById('password').value
					)
				}
				className={sty.buttonTwo}
			>
				submit
			</button>
			<div className={sty.btn}>
				<button className={sty.buttonOne} onClick={() => OpenModa()}>
					login
				</button>
				<button className={sty.buttonTwo}>Register</button>
			</div>
		</div>
	) : (
		<></>
	)
}
