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
    }
}

export default actions
    
