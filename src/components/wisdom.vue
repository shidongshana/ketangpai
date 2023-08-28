<script>
export default {
  name: 'MyWisdom',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<template>
  <div class="wisdom">
    <div class="head">
    <div style="font-size: 40px;
    font-weight: 500;
    color: #1f2023;">智慧教育平台</div>
    </div>
    <div class="wisdomList">
      <ul>
        <li>
          <div class="heading">
            <img src="../assets/wisdomlist/p1.png">
          </div>
          <div class="title">线下互动课堂</div>
          <div class="detail">多种互动教学工具，沉浸式学习体验，精准化学习。</div>
        </li>
        <li>
          <div class="heading">
            <img src="../assets/wisdomlist/p2.png">
          </div>
          <div class="title">混合教学全过程管理</div>
          <div class="detail">课前课中课后全过程教学管理，教学数据可视化，可留存，提升教学质量。</div>
        </li>
        <li>
          <div class="heading">
            <img src="../assets/wisdomlist/p3.png">
          </div>
          <div class="title">在线直播教室</div>
          <div class="detail">在线直播教学搭配教学互动，充分还原真实的教学场景，提升教学效果。</div>
        </li>
        <li>
          <div class="heading">
            <img src="../assets/wisdomlist/p4.png">
          </div>
          <div class="title">在线课程建设</div>
          <div class="detail">在线直播课、精品慕课资源、课程资源体系搭建，沉淀教学资源。</div>
        </li>
      </ul>
    </div>
    <div class="understand">
      <div class="contnt">
        <button data-v-06817548="" class="und">了解详细功能</button>
        <button data-v-06817548="" class="now">立即注册体验</button>
      </div>
    </div>
  </div>
</template>

<style>
.wisdom{
  width: 1200px;
  margin: 0 auto;
  height: 614px;
}
.head{
  text-align: center;
  padding: 64px 0;
}
.wisdomList{
  padding: 0 ;
}
.wisdomList ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wisdomList ul li{
  width: 288px;
  height: 262px;
  padding: 0 30px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 20px 20px 100px -63px #8297b2;
}
.heading{
  width: 64px;
  height: 64px;
  margin: 24px auto 32px;
}
.heading img{
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
}
.wisdomList .title{
  font-weight: 600;
  color: #1f2023;
  font-size: 24px;
  margin-bottom: 8px;
}
.wisdomList .detail{
  font-size: 14px;
  color: #74787c;
  line-height: 24px;
}
ol,ul{
  list-style: none;
}
li{
  list-style-type:none ;
}
.understand .contnt{
  margin: 64px auto;
  width: 344px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.und{
  background: #fff;
  border: 1px solid #4285f4;
  color: #4285f4;
}
.now{
  background: linear-gradient(131deg,#7eb0ff,#2178ff);
  color: #fff;
  border: 1px solid #2178ff;
}
.contnt button{
  cursor: pointer;
  border-radius: 4px;
  width: 160px;
  height: 48px;
  text-align: center;
  line-height: 48px;
}
</style>