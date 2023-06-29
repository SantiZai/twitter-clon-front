import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GenerateTabs from '../pures/GenerateTabs'
import profileDefault from '../../assets/profile_default.png'


interface Props {
    handle: (notFound: boolean) => void
    notFound: boolean
}

const Sidebar = ({ handle, notFound }: Props) => {
    const location = useLocation()

    useEffect(() => {
        const isNotFound = location.pathname === '/not-found'
        handle(isNotFound)
    }, [location.pathname, handle])

    return !notFound && (
        <div className='flex flex-col items-end justify-between h-screen py-4 pr-5 w-1/3'>
            <GenerateTabs />
            <div className='w-full flex flex-col items-end'>
                <div className='flex w-1/3'>
                    <div>
                        <img src={profileDefault} className='rounded-full' height='44px' width='44px' />
                    </div>
                    <div className='flex flex-col ml-3'>
                        <span>Name</span>
                        <span>Username</span>
                    </div>
                    <div>
                        icono
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar