<template>
  <div class="hello">
    我想测试vuex使用
    <!--<div class="button-group">
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <van-button plain type="primary">朴素按钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
      <van-button plain hairline type="primary">细边框按钮</van-button>
      <van-button plain hairline type="info">细边框按钮</van-button>
      <van-button disabled type="primary">禁用状态</van-button>
      <van-button disabled type="info">禁用状态</van-button>
      <van-button loading type="primary" />
      <van-button square type="danger">方形按钮</van-button>
      <van-button round type="info">圆形按钮</van-button>
      <van-button loading type="primary" loading-type="spinner" />
      <van-button loading type="info" loading-text="加载中..." />
      <van-button icon="plus" type="primary" />
      <van-button icon="plus" type="primary">按钮</van-button>
      <van-button color="#7232dd">单色按钮</van-button>
      <van-button color="#7232dd" plain>单色按钮</van-button>
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</van-button>
      <van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="info"></van-button>
      <van-button type="primary" size="normal">普通按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button>
      <van-button type="primary" size="mini">迷你按钮</van-button>
      <van-button type="primary" size="large">大号按钮</van-button>
      <van-button type="primary" block>块级元素</van-button>
    </div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-cell title="单元格" value="内容" size="large" />
    <van-cell title="单元格" value="内容" size="large" label="描述信息" />
    <van-cell title="单元格" icon="location-o" />
    <van-cell value="内容" />
    <van-cell title="单元格" is-link />
    <van-cell title="单元格" is-link value="内容" />
    <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    <van-cell-group title="分组1">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容" />
    </van-cell-group>-->
     <button @click="noOption1()"> 不使用辅助函数 state</button>
     <button @click="noOption2()"> 不使用辅助函数 getters</button>
     <button @click="noOption3()"> 不使用辅助函数 action 添加</button>
     <button @click="noOption4()"> 不使用辅助函数 action 减少</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
      return {
          otherGetters:{
              count:1
          }
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
    console.log(this.$store.getters.reducecount(1));//传一个参数
    //console.log(this.$store.getters.addcount(this.otherGetters));
    },
    noOption3 (){
      console.log("不使用辅助函数 action 添加");
      this.$store.dispatch('ADDVAL',5);
    },
    noOption4 (){
      console.log("不使用辅助函数 action 减少");
      this.$store.dispatch('REDUCEVAL',5);
      console.log(this.$store.state.count);
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
