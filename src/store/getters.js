const getters = {
    doneTodosCount: (state) => {
        return state.todos.filter(todo => todo/3);
    },
    addcount:(state, getters) => {//getter 也可以结合其他的 getter 一起使用，getter 定义的第二个参数可以是其他 getter：
        return getters.doneTodosCount.length
    },
    docount:(state) => {//不传参的情况
        state.todos.push(state.count);
        return state.count
    },
    getTipGetters(state) {
        return state.muntionsParams
    },
    reducecount:(state)=>{//传值一个参数
        return function (val) {
            return state.count - val
        }
    },
    //就是此处。该getters针对下面组件中有参数的情况
    moduleAGetter:(state)=>(param,name)=>{//定义的state 必须使用 否则报错
        return param+"----"+name+"------"+state.count
    },

    //上面的写法等价于下面的写法
    moduleAGetter1(state) {
        return function (param,name){//定义的state 必须使用 否则报错
            return param+"----"+name+"------"+state.count
        }
    },



}
export default  getters