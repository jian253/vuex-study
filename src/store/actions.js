import * as TYPES from './type';

export const actions = {

    [TYPES.ADDVAL](context,val) {
        /*axios.get("/customer/user_info").then(res => {
           commit(TYPES.SET_COUMT,res.data);//赋值
        });*/
        context.commit(TYPES.SET_COUMT_ADD, val);
    },
    [TYPES.REDUCEVAL](context,val) {
        /*axios.get("/customer/user_info").then(res => {
            commit(TYPES.SET_COUMT_REDUCE, 1000);//赋值
        });*/
        context.commit(TYPES.SET_COUMT_REDUCE, val);
    },
    async readUsers ({commit},val) {
        try{
            let res = await fetch('http://localhost:8081/user.txt');//可以拿到参数，但是失败下面代码不执行了
            let users = await res.json()
            console.log("拿到接口返回值");
            console.log(res);
            console.log(users)
            commit('SET_MUTATIONS_PARAMS',val);
        }catch (e) {
            val.tip='接口数据获取失败，但测试成功';
            val.type='error';
            commit('SET_MUTATIONS_PARAMS',val);
        }



    },
    actionA ({ commit },val) {
        return new Promise((resolve) => {
            setTimeout(() => {
                commit('SET_MUTATIONS_PARAMS',val);
                resolve()
            }, 1000)
        })
    }
}

export default actions
    
