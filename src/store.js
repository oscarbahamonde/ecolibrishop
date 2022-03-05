import { createStore } from 'vuex'

export default createStore({
    state: {
        products: []
    },
    mutations: {},
    setters: {
        setProducts: async()=>{ this.state.products = await fetch("https://jsonplaceholder.typicode.com/photos")}

    },
    actions: {
        
    }
})