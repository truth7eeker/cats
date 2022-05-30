import { makeAutoObservable } from "mobx"

export interface ICat {
    id: string
    url: string
    favourite?: boolean
}

const concatCatArrays = (oldData: Array<ICat>, newData: Array<ICat>) => {
    return [...oldData, ...newData]
}


class Store {
    cats: Array<ICat>  = []
    page: number = 1
    isLoading: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    getCats() {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=15&page=${this.page}`)
        .then(res => res.json())
        .then(data => this.cats = concatCatArrays(this.cats, data))
        this.isLoading = false
        this.page = this.page + 1
    }

    load() {
        this.isLoading = true
    }

    like(id: string) {
        this.cats.map(cat => cat.id === id ? cat.favourite = !cat.favourite : cat)
    }
}

export const store = new Store