import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GenerateTabs from '../pures/GenerateTabs'
import profileDefault from '../../assets/profile_default.png'
import { User } from '../../interfaces/User'


interface Props {
    handle: (notFound: boolean) => void
    notFound: boolean
    user: User
}

const Sidebar = ({ handle, notFound, user }: Props) => {
    const location = useLocation()

    useEffect(() => {
        const isNotFound = location.pathname === '/not-found'
        handle(isNotFound)
    }, [location.pathname, handle])

    return !notFound && (
        <div className='flex flex-col justify-between h-screen py-4 pr-8'>
            <GenerateTabs />
            <div className='w-full flex flex-col items-end'>
                <div className='flex w-1/3'>
                    <div>
                        <img src={profileDefault} className='rounded-full' width='44px' />
                    </div>
                    <div className='flex flex-col ml-3'>
                        <span>Name</span>
                        <span>{user.username}</span>
                    </div>
                    <div>
                        icon
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar