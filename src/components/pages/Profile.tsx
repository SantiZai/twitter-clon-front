import { User } from "../../interfaces/User"

const Profile = ({user}: {user: User}) => {
    return (
        <>
            <h1>{user.username}</h1>
        </>
    )
}

export default Profile