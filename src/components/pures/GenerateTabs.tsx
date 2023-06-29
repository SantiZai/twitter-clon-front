import twitterLogo from '../../assets/twitter-logo.png'
import home from '../../assets/home.png'
import search from '../../assets/search.png'
import notification from '../../assets/notification.png'
import message from '../../assets/message.png'
import profile from '../../assets/profile.png'

const GenerateTabs = () => {
    const logos = [
        { name: 'Home', image: home },
        { name: 'Search', image: search },
        { name: 'Notifications', image: notification },
        { name: 'Messages', image: message },
        { name: 'Profile', image: profile }
    ]

    return (
        <div className='w-full flex flex-col items-end'>
            <div className='w-1/3'>
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
        </div>
    )
}

export default GenerateTabs