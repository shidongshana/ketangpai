<script >
export default {
  name: 'HomeTitle',
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
      },
      goLogin(){
        this.$router.push("/login")
      },
      goRegist(){
        this.$router.push("/regist")
      }
    }

}

</script>

<template>
  <div class="portal-header">
    <div class="title">
      <div class="logo">
      <div class="logo-img">
        <img src="../assets/imags/common/logo_blue.png">
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><span>首页</span></el-menu-item>
      <el-menu-item index="2"><span>产品功能</span></el-menu-item>
      <el-menu-item index="3"><span>机构版</span></el-menu-item>
      <el-menu-item index="4"><span>渠道合作</span></el-menu-item>
      <el-menu-item index="5"><span>会员权益</span></el-menu-item>
      <el-menu-item index="6"><span>帮助中心</span></el-menu-item>
    </el-menu>
      </div>
      <div class="login">
       <el-button  size="small" @click="goLogin">登录</el-button>
        <el-button type="primary" size="small" @click="goRegist">注册</el-button>
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
  justify-content: flex-start;
  align-items: center;
}
.el-menu-demo span{
  font-size: 20px;
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
  width: 1024px;
  display: flex;
  justify-content: flex-start;
}
.portal-header .logo .logo-img{
  width: 128px;
  margin-right: 48px;
  padding: 17px 0px;
  cursor: pointer;
}
.portal-header .logo .logo-img img{
  width: 128px;
  margin-right: 48px;
}
.login{
  margin-right: 30px;
}
.login .el-button{
  margin-left: 20px !important;
  width: 90px !important;
  height: 36px !important;
}
.login .el-button:first-child{
  color: #409EFF !important;
  font-size: 14px !important;
}
</style>