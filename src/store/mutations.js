import * as TYPES from './type';

const mutations = {
    [TYPES.SET_COUMT](state, v){
        state.count = v;
    },
    [TYPES.SET_COUMT_ADD](state, v){
        if(v){
            state.count += v;
        }else{
            state.count ++
        }
    },
    [TYPES.SET_COUMT_REDUCE](state, v){
        if(v){
            state.count -= v
        }else{
            state.count --
        }
    },
    [TYPES.SET_MUTATIONS_PARAMS](state, v){
        if(v){
            state.muntionsParams=v;
        }
    },
    setUsers(state,v){
        state.user=v;
    }

}
export default mutations