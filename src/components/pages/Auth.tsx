interface Props {
    handle: (logged: boolean) => void
    logged: boolean
    login: boolean
}

//TODO create components for login and sign-up
const Auth = ({handle, logged, login}: Props) => {
    const access = (acc: boolean) => {
        handle(acc)
        //TODO redirect to home
    }

    return (
        <div>
            {
                login ? (
                    <div>
                        <h1>Log in</h1>
                        <button onClick={() => access(true)}></button>
                    </div>
                )
                : (
                    <>
                        <h1>Sign up</h1>
                        <button onClick={() => access(true)}></button>
                    </>
                )
            }
        </div>
    )
}

export default Auth