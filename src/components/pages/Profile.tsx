import { User } from '../../interfaces/User'
import profileDefault from '../../assets/profile_default.png'
import back from '../../assets/back-arrow.png'
import search from '../../assets/search.png'
import '../../profile_page.css'

const Profile = ({ user }: { user: User }) => {
	return (
		<div className="contain h-full w-full">
			<div className="flex flex-col profile">
				<div className="flex h-10 my-1">
					<div className="flex justify-center py-2 pl-2 pr-5">
						<img src={back} width="22px" />
					</div>
					<div className="flex flex-col justify-center">
						<span className="topbar text-xl font-semibold">{user.username}</span>
						<span className="tweets-count text-xs">1 Tweet</span>
					</div>
				</div>
				<div className="cover h-60 flex flex-col mb-20">
					<div className="flex justify-between items-center">
						<div className="container-image ml-3">
							<img
								className="img-profile border-white rounded-full"
								width="140px"
								src={profileDefault}
							/>
						</div>
						<div className="container-setup mr-3 rounded-2xl font-semibold">
							<span>Set up profile</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col ml-3 text-xl mt-2">
					<span className="font-semibold">{user.username}</span>
					<span>@{user.username}</span>
					<div className="flex gap-3 text-sm">
						<span>following</span>
						<span>followeds</span>
					</div>
				</div>
				<div className="tabs w-full mt-3 flex justify-center items-center">
					<div className='flex flex-col justify-center items-center'>
						<div className='text-sm font-semibold'>Tweets</div>
						<div className="border-tab mt-1"></div>
					</div>
				</div>
			</div>
			<div className="more w-full my-1 pl-8">
				<div className='search-tab flex py-2 px-4 rounded-3xl gap-3 justify-left border border-black'>
					<img src={search} width="22px" />
					<span>Search Twitter</span>
				</div>
			</div>
		</div>
	)
}

export default Profile
