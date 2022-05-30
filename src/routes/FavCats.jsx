import React from 'react'
import CatCard from '../components/card/CatCard'
import { store } from '../store/store'
import { observer } from 'mobx-react-lite'

function FavCats() {

   // filter favourite cats from cats array
   const favCats = store.cats.filter(cat => cat.favourite)
   // display each individual cat as JSX 
   const favCatsElements = favCats.map(cat => <CatCard cat={cat} key={cat.id} />)

  return (
    <div className='cats-list'>
     {favCatsElements}
   </div>
  )
}

export default observer(FavCats)