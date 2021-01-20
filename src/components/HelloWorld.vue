<template>
  <div class="hello">
      <div class="btn-group">
          <p>不使用辅助函数的vuex</p>
          <p>state的count:{{$store.state.count}}</p>
          <p>state的countA:{{$store.state.addval+$store.state.count}}</p>
          <button @click="noOption1()"> 不使用辅助函数 state</button>
          <button @click="noOption2()"> 不使用辅助函数 getters</button>
          <button @click="noOption3()"> 不使用辅助函数 munctions 添加</button>
          <button @click="noOption4()"> 不使用辅助函数 action 减少</button>
          <button @click="noOption5()"> 不使用辅助函数 action 异步接口传参数</button>
          <button @click="noOption6()"> 不使用辅助函数 action 异步定时器传参数</button>
      </div>
      <div class="btn-group">
          <p>使用辅助函数的vuex</p>
          <p>state的count:{{count}}</p>
          <p>state的countA:{{countA}}</p>
          <p>使用辅助函数 getters 传参 {{changeNameGetter1(996,'Mr.Liu') }}</p>
          <button @click="Option1()"> 使用辅助函数 state:</button>
          <button @click="Option2()"> 使用辅助函数 getters</button>
          <button @click="Option3()"> 使用辅助函数 munctions 添加</button>
          <button @click="paramMutation({show:true,tip:'测试传参数成功了',type:'success' })">使用辅助函数 munctions 传参</button>
          <button @click="Option4()"> 使用辅助函数 action 减少</button>
          <button @click="paramAction1({show:true,tip:'异步接口传参数成功了',type:'success' })">使用辅助函数 actions 异步接口传参</button>
          <button @click="paramAction2({show:true,tip:'使用定时器模拟异步传参数成功了',type:'success' })">使用辅助函数 actions 使用定时器模拟异步传参数成功了</button>
      </div>
      <div class="btn-group">
          <p>我想使用vuex 的模块化</p>
          <!--<button @click="">使用vuex 模块化的 getters</button>
          <button @click="">使用vuex 模块化的 munctions 传参</button>
          <button @click="">使用vuex 模块化的 actions 传参</button>-->
      </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
        //获取父store中的state下的count值
        ...mapState(['count']),
        //获取moduleA模块中的state下的count值
        ...mapState({
            countA:state=>state.addval+state.count,
        }),
       //⑴无参数引用getter
       ...mapGetters(['docount','addcount','doneTodosCount','reducecount','moduleAGetter']),
       //⑵无参数引用getter，更名情况下
       ...mapGetters({
          changeNameGetter:'docount',//(3)mapGetter如何使用辅助函数传参情况
          changeNameGetter1:'moduleAGetter1'
       }),

  },
  data () {
      return {

      }
  },
  methods: {
    noOption1 (){
      console.log(this.$store)
      console.log("不使用辅助函数 state");
      console.log(this.$store.state.count);
    },
    noOption2 (){
    console.log("不使用辅助函数 getters");
    console.log(this.$store.getters.docount);//不传参数
    console.log(this.$store.getters.addcount);//getter 也可以结合其他的 getter 一起使用，getter 定义的第二个参数可以是其他 getter
    console.log(this.$store.getters.reducecount(1));
    console.log(this.$store.getters.moduleAGetter(996,'Mr.Liu'));
    },
    noOption3 (){
      console.log("使用辅助函数 munctions 添加");
      this.$store.commit('SET_COUMT_ADD',3);
    },
    noOption4 (){
      console.log("不使用辅助函数 action 减少");
      this.$store.dispatch('REDUCEVAL',5);//action
    },
    noOption5 (){
        this.$store.dispatch('readUsers',{show:true,tip:'--------------异步提交参数------------',type:'success' }).then(()=>{
            console.log("完成了接口请求");
            //this.$store.dispatch('readUsers',{show:true,tip:'--------------异步提交参数------------',type:'success' });//action
        })
        //this.$store.dispatch('readUsers',{show:true,tip:'--------------异步提交参数------------',type:'success' });//action
    },
    noOption6 (){
        this.$store.dispatch('actionA',{show:true,tip:'定时器调用完成的回调函数',type:'success' }).then(() => {
            console.log("定时器调用完成的回调函数");
        })
    },
    Option1 (){
      console.log("使用辅助函数 state");
      console.log(this.count);
   },
   Option2 (){
      console.log("使用辅助函数 getters");
       console.log(this.docount);//不传参数
       console.log(this.addcount);//getter 也可以结合其他的 getter 一起使用，getter 定义的第二个参数可以是其他 getter
       console.log(this.reducecount(1));
       console.log(this.moduleAGetter(996,'Mr.Liu'));
   },
   ...mapMutations(['SET_MUTATIONS_PARAMS']),
   paramMutation(obj){
    this.SET_MUTATIONS_PARAMS(obj);
    },
   ...mapMutations({
       paramMapMutation:'SET_MUTATIONS_PARAMS'
   }),
  ...mapActions(['readUsers','actionA']),
  paramAction1(obj){
      this.SET_MUTATIONS_PARAMS(obj);
  },
  paramAction2(obj){
      this.SET_MUTATIONS_PARAMS(obj);
  },
  ...mapActions({
      paramMapAction1:'readUsers',
      paramMapAction2:'actionA'
  }),
  Option3 (){
      console.log("使用辅助函数 munctions 添加");
      this.$store.dispatch('ADDVAL',5);
   },
   Option4 (){
      console.log("使用辅助函数 action 减少");
      this.$store.dispatch('REDUCEVAL',5);
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
