import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        name: "admin"
    },
    getters: {
        doneName: state => {
            return state.name + '=wsh'
        }
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        changeName: (state, value) => {
            state.name = value
        }
    },
    // 有异步的时候， 需要action
    actions: {
    },
})

export default store