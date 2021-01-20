<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>{{changeNameGetter1}}</div>
    <div>
      <p v-show="changeNameGetter1.show" :class="{'errorTip':changeNameGetter1.type=='error','successTip':changeNameGetter1.type=='success'}">
        {{changeNameGetter1.tip}}
      </p>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    //⑴无参数引用getter
    ...mapGetters(['getTipGetters']),
    //⑵无参数引用getter，更名情况下
    ...mapGetters({
      changeNameGetter1:'getTipGetters',//(3)mapGetter如何使用辅助函数传参情况
    }),
  }
}
</script>
<style>
  .errorTip {
    width:auto;
    display: inline-block;
    padding: 20px 100px;
    color: azure;
    background: red;
    border: 1px solid #000;
  }
  .successTip {
    width:auto;
    display: inline-block;
    padding: 20px 100px;
    color: azure;
    background: green;
    border: 1px solid #000;
  }
</style>
