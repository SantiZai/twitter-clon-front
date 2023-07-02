import Login from "../containers/Login"

interface Props {
    handleLogged: (logged: boolean) => void
    logged: boolean
    login: boolean
}

//TODO create components for login and sign-up
const Auth = ({handleLogged, logged, login}: Props) => {
    return (
        <div>
            {
                login ? (
                    <Login handleLogged={handleLogged} />
                )
                : (
                    <>
                        <h1>Sign up</h1>
                        <button onClick={() => handleLogged(true)}></button>
                    </>
                )
            }
        </div>
    )
}

export default Auth