import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GenerateTabs from '../../services/GenerateTabs'

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
        <div>
            <GenerateTabs />
        </div>
    )
}

export default Sidebar