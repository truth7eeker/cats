import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

function Header(): JSX.Element {
    const [page, setPage] = useState('cats')

    const handleClick = (e: any) => {
      if (e.target.innerHTML === 'Любимые котики') {
      setPage('fav-cats')
      } else {
        setPage('cats')
      }
    }

  return (
    <header className='header'>
        <ul className='header__nav'>
            <li onClick={handleClick} className={page === 'cats' ? 'nav-link-active' : ''}>
                <NavLink to='/cats'>Все котики</NavLink>
            </li>
            <li onClick={handleClick} className={page === 'fav-cats' ? 'nav-link-active' : ''}>
                <NavLink to='cats/favourites'>Любимые котики</NavLink>
            </li>
        </ul> 
    </header>
  )
}

export default Header