import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GenerateTabs from '../pures/GenerateTabs'
import profileDefault from '../../assets/profile_default.png'


interface Props {
    handle: (notFound: boolean) => void
    notFound: boolean
}

const Sidebar = ({handle, notFound}: Props) => {
    const location = useLocation()

    useEffect(() => {
        const isNotFound = location.pathname === '/not-found'
        handle(isNotFound)
    }, [location.pathname, handle])

    return !notFound && (
        <div className='flex flex-col justify-between h-screen py-4'>
            <GenerateTabs />
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

export default Sidebar