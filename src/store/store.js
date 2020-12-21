import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    // plugins: [myPlugin],
    state: {
        count: 0,
        name: "admin",
        address: "beijing",
        list: ['wsh', 'lhb', 'lc', 'ly'],
        scores: [{ score: 40, name: 'lhb' }, { score: 66, name: 'wsh' }, { score: 58, name: 'lcq' },]
    },
    getters: {
        doneName: state => {
            return state.name + '=wsh'
        },
        doneList: state => {
            return state.list.filter(item => item.length > 2)
        },
        getSix: (state) => (id) => {
            // state.scores.forEach(item => {
            //     if (item.score > id) {
            //         return item
            //     }
            // })

            return state.scores.find(todo => todo.score >= id)

        }
    },
    // 必须是同步函数
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--,
        changeName: (state, value) => {
            state.name = value
        },
        changeAddress: (state, value) => {
            state.address = value + state.count
        }
    },
    // 有异步的时候， 需要action
    actions: {
    }
})

// 插件
// const myPlugin = store => {
//     store.subscribe((mutation, state) => {
//         console.log("每次mutation之后调用")
//     })
// }


export default store