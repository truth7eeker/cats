import { store } from '../store/store'


export const handleScroll = (e: any) => {
    const height = window.innerHeight
    const scrollTop = e.target.documentElement.scrollTop
    const scrollHeight= e.target.documentElement.scrollHeight

    if (height + scrollTop + 1 > scrollHeight) {
        store.setLoadingStarted()
    }
}

 
   