import React from 'react'
import './CatsList.scss'
import { ICat } from '../../store/store'
import CatCard from '../card/CatCard'

function CatsList({cats} :{cats: Array<ICat>}) {
  return (
    <div className='cats-list'>
      {cats.map(cat => <CatCard cat={cat} key={cat.id} />)}
    </div>
  )
}

export default CatsList