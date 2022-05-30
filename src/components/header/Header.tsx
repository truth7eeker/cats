import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import { store } from '../../store/store'

function Header(): JSX.Element {

  return (
    <div className='header'>
        <ul>
            <li>
                <NavLink to='/'>Все котики</NavLink>
            </li>
            <li>
                <NavLink to='/favourites'>Любимые котики</NavLink>
            </li>
        </ul> 
    </div>
  )
}

export default Header