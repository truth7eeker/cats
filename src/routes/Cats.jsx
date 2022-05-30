import React from 'react'
import { observer } from 'mobx-react-lite'
import CatCard from '../components/card/CatCard'
import { store } from '../store/store'

function Cats() {

  // get cats array
  const cats = store.cats
  // display each individual cat as JSX 
  const catsElements = cats.map(cat => <CatCard cat={cat} key={cat.id} />)
  // check if an api is fetched
  const isLoading = store.isLoadingAgain

  return (
      <div className='cats-list'>
          {catsElements}
      </div>  
  )
}

export default observer(Cats)