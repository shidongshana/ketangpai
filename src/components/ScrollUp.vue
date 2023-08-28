<script >
export default {
  name: 'ScrollUp',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<template>
  <el-backtop  style="width: 50px ;height: 40px">
    <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        font-size: 12px;
        color: #5F6368;
        display: flex;
        line-height: 30px;
        flex-direction: column;
      }"
    >
      <i class="el-icon-top" style="font-size: 20px"></i>
      <span>顶部</span>
    </div>
  </el-backtop>
</template>

<style >

</style>