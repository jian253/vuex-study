const getters = {
    addcount:(state, getters) => {//getters 在这里是一个参数 又来接受其他vuex的getters  两个传值
        return getters.count +state.count
    },
    docount:(state) => {//不传参的情况
        return state.count
    },
    reducecount:(state)=>{//传值一个参数
        return function (val) {
            return state.count - val
        }
    }
}
export default  getters