import twitterLogo from '../assets/twitter-logo.png'
import home from '../assets/home.png'
import search from '../assets/search.png'
import notification from '../assets/notification.png'
import message from '../assets/message.png'
import profile from '../assets/profile.png'
import profileDefault from '../assets/profile_default.png'

const GenerateTabs = () => {
    const logos = [
        { name: 'Home', image: home },
        { name: 'Search', image: search },
        { name: 'Notifications', image: notification },
        { name: 'Messages', image: message },
        { name: 'Profile', image: profile }
    ]

    return (
        <div>
            <div>
                <img src={twitterLogo} height='32px' width='32px' />
                {
                    logos.map((logo, i) => {
                        return (
                            <div key={i} className='flex my-3'>
                                <img src={logo.image} height='28px' width='28px' />
                                <span className='ml-4'>{logo.name}</span>
                            </div>
                        )
                    })
                }
                <button className='px-20 py-3 bg-red-100 rounded-3xl text-white font-bold' style={{ backgroundColor: '#1d9bf0' }}>Tweet</button>
            </div>
            <div className='flex'>
                <div>
                    <img src={profileDefault} className='rounded-full' height='44px' width='44px' />
                </div>
                <div className='flex flex-col ml-3'>
                    <span>Name</span>
                    <span>Username</span>
                </div>
            </div>
        </div>
    )
}

export default GenerateTabs