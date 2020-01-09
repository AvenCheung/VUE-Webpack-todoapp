<template>
<!-- vue组件必须有一个独立的外部节点包围。也就是说在template不能有两个并列的节点 -->
<div id="app">
  <div id="cover"></div>
  <Header></Header>
  <Footer></Footer>
  <Todo></Todo>
</div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'


export default {
  components:{
    Header,
    Footer,
    Todo
  }
  
}
</script>
<style lang="stylus" scoped>
//加了scoped使得样式只应用在这层组件，使得不会跟别的组件中相同类属性的样式冲突
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>