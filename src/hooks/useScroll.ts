import { useEffect } from 'react'
import { store } from '../store/store'
import { handleScroll } from '../helpers/handleScroll'

function useScroll() {
    useEffect(() => {
        store.isLoading && store.getCats()
      }, [store.isLoading])
      
      useEffect(() => {
          store.setLoadingStarted()
          window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
      }, [])
}

export default useScroll