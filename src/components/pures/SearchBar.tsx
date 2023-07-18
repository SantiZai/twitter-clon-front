import search from '../../assets/search.png'
import './search-bar.css'

const SearchBar = () => {
    const activeDiv = (e: { target: any }) => {
        const parent = e.target.parentNode
        parent.classList.add('div-focus')
    }

    const disableDiv = (e: { target: any }) => {
        const parent = e.target.parentNode
        parent.classList.remove('div-focus')
    }

    return (
        <div className='search-bar flex gap-2 py-2 px-4 rounded-3xl'>
            <img src={search} width='22px' />
            <input className='input-search w-full' onFocus={activeDiv} onBlur={disableDiv} placeholder='Seach twitter' />
        </div>
    )
}

export default SearchBar