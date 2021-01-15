import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0
  },
  getters,
  mutations,
  actions,
  modules: {//多个模块化使用

  }
});
//模块化 主要思路
  /*
    首先使用      state,//（初始化）
    再定义        getters,//（获取值）
    再定义相关的   types //（用来联系 mutations和actions）
    根据types定义 mutations,//（定义大架构的方法）
    在外部调用    actions//（定义小架构多操作的方法）
 */
