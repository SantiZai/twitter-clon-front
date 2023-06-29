import { User } from "../../interfaces/User"
import profileDefault from '../../assets/profile_default.png'
import back from '../../assets/back-arrow.png'
import '../../profile_page.css'

const Profile = ({ user }: { user: User }) => {
    return (
        <div className="contain w-2/3">
            <div className="flex flex-col profile w-1/3">
                <div className="flex h-10 bg-red-200">
                    <div className="flex justify-center py-2 pl-2 pr-5">
                        <img src={back} width='26px' height='26px' />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-lg font-semibold">{user.username}</span>
                        <span className="text-xs">1 tweet</span>
                    </div>
                </div>
                <div>
                    <img className="rounded-full" width='140px' src={profileDefault} />
                </div>
            </div>
            <div className="more w-1/3">
                <h1>adassad</h1>
            </div>
        </div>
    )
}

export default Profile