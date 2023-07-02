import { useNavigate } from 'react-router-dom'
import { access } from '../../services/handleLogin'

interface Props {
	handleLogged: (logged: boolean) => void
}

const Login = ({ handleLogged }: Props) => {
	const navigate = useNavigate()

	return (
		<div>
			<h1>Log in</h1>
			<button onClick={() => access(handleLogged, true, navigate)}>Login</button>
		</div>
	)
}

export default Login
