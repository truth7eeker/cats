import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import './CatCard.scss'
import { ICat, store } from '../../store/store'
import heart from '../../assets/favorite.svg'
import heartHover from '../../assets/favorite_border.svg'


function CatCard({cat}: {cat: ICat}): JSX.Element {

  const [isBlockHovered, setIsBlockHovered] = useState(false)
  const [isHeartHovered, setIsHeartHovered] = useState(false)
 
  const handleMouseEnter = (e: any) => {
 
    if (e.target.className === 'cat-card__like') {
      setIsBlockHovered(true)
      setIsHeartHovered(true)
    }
      setIsBlockHovered(true)
  }

  const handleMouseLeave = (e: any) => {
    if (e.target.className === 'cat-card__like') {
      setIsHeartHovered(false)
    } else {
    setIsBlockHovered(false)
  }
  }

  return (
    <div className='cat-card'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
          <div className={isBlockHovered ? 'cat-card__pic-wrapper' : '' }>
                <img src={cat.url} className='cat-card__pic' alt='cat-pic' />
                <img src={cat.favourite || isHeartHovered ? heart : isBlockHovered ? heartHover : ''} 
                    className='cat-card__like'
                    alt=''
                    onClick={() => store.like(cat.id)} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{visibility: isBlockHovered ? 'visible' : 'hidden'}}
              />
          </div>
    </div>
  )
}

export default observer(CatCard)