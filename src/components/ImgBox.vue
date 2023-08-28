<script >
export default {
    name: 'ImgBox',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
           src:'https://www.ketangpai.com/img/banner-home10.89c5c9ad.png'
        }
    }
}
</script>

<template>
<div style="width: 100%;
    height: 470px;
    overflow: hidden;">
  <div class="img-box">
  </div>
</div>
</template>

<style >
.img-box{
  background-image: url("../assets/imags/common/banner-home.png");
  height: 470px;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>