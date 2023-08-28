<script >
export default {
  name: 'MainTitle',
  components: {
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }

}

</script>

<template>
  <div class="portal-header">
    <div class="title">
      <div class="logo">
        <div class="logo-img">
          <img src="../assets/imags/common/logo_blue.png" >
        </div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><span>我的课堂</span></el-menu-item>
          <el-menu-item index="2"><span>备课区</span></el-menu-item>
          <el-menu-item index="3"><span>虚拟教研室</span></el-menu-item>
        </el-menu>

      </div>
      <div class="h-right">
       <i class="el-icon-s-order"></i>
        <i class="el-icon-bell"></i>
      </div>
    </div>
  </div>

</template>

<style >
.el-menu-demo{
  width: 824px;
  height: 70px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu-demo span{
  font-size: 16px;
}
.portal-header{
  width: 100%;

  height: 70px;
  background: rgb(255, 255, 255);
}
.portal-header div{

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.portal-header .logo{
  height: 100%;
  width: 1024px;
  display: flex;
  justify-content: flex-start;
}
.portal-header .logo .logo-img{
  height: 100%;
  width: 128px;
  margin-right: 48px;
  padding: 17px 0px;
  cursor: pointer;
}
.portal-header .logo .logo-img img{
  width: 128px;
  margin-right: 48px;
}
.h-right{
  height: 70px;
  width: 200px;
}

</style>