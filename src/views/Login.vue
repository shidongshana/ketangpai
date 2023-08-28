<script>

import LoginTab from "@/components/login-tab.vue";

export default {
  name: 'TestName',
  components: {LoginTab},
comments:{
  LoginTab
},
  props: {
    msg: String,
  },
  data() {
    return {
      isActive: true
    }
  },
}
</script>

<template>

  <div class="view-login">
    <div class="logo-box">
    <img src="../assets/imags/common/logo_blue.png">
    </div>
    <div class="login-content">
      <div class="left">
      <img src="../assets/imags/login/newbg.png.png">
      </div>
      <div class="right">
       <div class="right-content">
        <h2 class="title">
          <span>账号登录</span>
        </h2>
         <ul class="tab-nav">
           <li class="item">
             账号登录
             <i data-v-b32d22ba="" class="line" style="background-color: rgb(66, 133, 244);"></i>
           </li>
           <li class="item">
              手机短信登录
             <i data-v-b32d22ba="" class="line" style="background-color: rgb(66, 133, 244);"></i>
           </li>
           <li class="item" >
             微信登录
             <i data-v-b32d22ba="" class="line" style="background-color: rgb(66, 133, 244);"></i>
           </li>
         </ul>
        <login-tab></login-tab>
         <div class="qr-box">
           <div class="qr-code">
           </div>
         </div>
       </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.view-login{
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo-box{
  position: absolute;
  top: 48px;
  left: 62px;
  cursor: pointer;
}
.logo-box img{
  display: block;
  max-width: 192px;
  max-height: 48px;
}
.login-content{
  display: flex;
  justify-content: space-between;
}
.left{
  margin-right: -100px;
}
.right-content{
  width: 431px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 61px 0 rgba(85,108,144,.07);
  height: 472px;
}
.item{
  cursor: pointer;
  position: relative;
  padding-bottom: 9px;
  font-size: 18px;
  font-family: PingFangSC,PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #74787c;
  line-height: 32px;
  list-style-type:none;
}
.tab-nav{
  margin-bottom: 12px;
  display: flex;
  justify-content: space-evenly;
  padding:0px;
}
.qr-box{
  overflow: hidden;
  margin: 0 -1px 0;
  transform: translateY(13px);
}
.qr-code{
  position: relative;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url(../assets/imags/img.png) no-repeat 0 0/cover;
  transform: rotateY(180deg);

}
</style>