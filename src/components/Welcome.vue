<script>
export default {
  name: 'MyWelome',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<template>
  <div class="welcome">
    <div  class="show">
      <div  class="content">
        <div  class="head">欢迎使用课堂派</div>
        <div  class="detail">精彩教学，从这里开启</div>
        <div class="buttonConten">
          <button  class="lian">联系课堂派</button>
          <button  class="free">免费注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.welcome {
  background-image: url("../assets/imags/login/background.png");
  background-position: 50%;
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 190px auto 0 auto;
  display: flex;
  justify-content: center;
}
.welcome .show{
  position: absolute;
  top: 0;
  width: 100%;
}
.welcome .show .content{
  width: 336px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
}
.welcome .show .content .head{
  font-weight: 500;
  line-height: 48px;
  font-size: 48px;
  margin-top: 88px;
}
.welcome .show .content .detail{
  font-size: 20px;
  margin-top: 24px;
  margin-bottom: 37px;
}
.welcome .show .content .buttonConten{
  display: flex;
  justify-content: space-around;
}
.welcome .show .content .buttonConten .lian{
  color: #fff;
  background: #5293ff;
  box-sizing: border-box;
  border: 1px solid #fff;
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  cursor: pointer;

}
.welcome .show .content .buttonConten .free{
  background: #fff;
  color: #5293ff;
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #5293ff;
}
</style>