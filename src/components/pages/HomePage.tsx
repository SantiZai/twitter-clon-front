import profileDefault from '../../assets/profile_default.png'
import '../../home_page.css'
import SearchBar from '../pures/SearchBar'

const HomePage = () => {
    return (
        <div className="contain-home h-full w-full">
            <div className="home flex flex-col">
                <div className="p-4">
                    <span className="text-xl font-semibold">Home</span>
                </div>
                <div className="tabs w-full mt-3 flex justify-center items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-sm font-semibold'>Following</div>
                        <div className="border-tab mt-1"></div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col p-4">
                        <div className="flex gap-3 items-center">
                            <img src={profileDefault} className="rounded-full" width="50px" />
                            <span className="font-semibold">What is happening?!</span>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="px-4 py-2 bg-red-100 rounded-3xl text-white font-bold"
                        style={{ backgroundColor: '#1d9bf0' }}>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="happening my-1 pl-8">
                <SearchBar />
            </div>
        </div>
    )
}

export default HomePage