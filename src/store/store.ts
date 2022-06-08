import { makeAutoObservable,  runInAction } from "mobx"

export interface ICat {
    id: string
    url: string
    favourite?: boolean
}

class Store {
    cats: Array<ICat>  = []
    page: number = 1
    isLoading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    getCats() {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=15&page=${this.page}`)
        .then(res => res.json())
        .then(data => {
          runInAction(() => this.cats = [...this.cats, ...data])
          this.page = this.page + 1
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          this.setLoadingCompleted()
        })
    }

    setLoadingStarted() {
        this.isLoading = true
    }

    setLoadingCompleted() {
      this.isLoading = false
    }

    like(id: string) {
        this.cats.map(cat => cat.id === id ? cat.favourite = !cat.favourite : cat)
    }
}

export const store = new Store()