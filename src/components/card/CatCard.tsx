import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import './CatCard.scss'
import { ICat, store } from '../../store/store'
import heart from '../../assets/favorite.svg'
import heartHover from '../../assets/favorite_border.svg'


function CatCard({cat}: {cat: ICat}): JSX.Element {

  // copy each individual cat and add isHovered state
  // change img src based off this state (from filled heart to border heart and vice-versa)
  const [catObj, setCatObg] = useState({...cat, isBlockHovered: false, isHeartHovered: false})

  // set hover to true
  const handleMouseEnter = (e: any) => {
    // handle heart hover
    if (e.target.className === 'cat-card__like') {
      setCatObg(prev => ({
        ...prev,
        isBlockHovered: true,
        isHeartHovered: true
      }))
    }
    // handle block hover
    setCatObg(prev => ({
      ...prev,
      isBlockHovered: true
    }))
  }

  // set hover to false
  const handleMouseLeave = (e: any) => {
    // handle heart hover
    if (e.target.className === 'cat-card__like') {
      setCatObg(prev => ({
        ...prev,
        isHeartHovered: false
      }))
    } else {
    // handle block hover
    setCatObg(prev => ({
      ...prev,
      isBlockHovered: false
    }))
  }
  }


  return (
    <div className='cat-card'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
          <div className={catObj.isBlockHovered ? 'cat-card__pic-wrapper' : '' }>
                <img src={cat.url} className='cat-card__pic'/>
                <img src={cat.favourite || catObj.isHeartHovered ? heart : catObj.isBlockHovered ? heartHover : ''} 
                    className='cat-card__like'
                    onClick={() => store.like(cat.id)} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{visibility: catObj.isBlockHovered ? 'visible' : 'hidden'}}
              />
          </div>
    </div>
  )
}

export default observer(CatCard)