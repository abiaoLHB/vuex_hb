import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [myPlugin],
    state: {
        count: 0,
        name: "admin"
    },
    getters: {
        doneName: state => {
            return state.name + '=wsh'
        }
    },
    // 必须是同步函数
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

// 插件
const myPlugin = store => {
    store.subscribe((mutation, state) => {
        console.log("每次mutation之后调用")
    })
}


export default store