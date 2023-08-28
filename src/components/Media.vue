<script >


export default {
  name: 'MyMedia',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[
          "https://assets.ketangpai.com//Public/Common/img/5.png",
          "https://assets.ketangpai.com//Public/Common/img/2.png",
          "https://assets.ketangpai.com//Public/Common/img/3.png",
          "https://assets.ketangpai.com//Public/Common/img/4.png",
      ],
      title:[
        "助力智慧课堂：课堂派成为腾讯微校生态战略伙伴",
          "课堂派亮相2018中国“互联网+”数字经济峰会",
          "新时代新青年 课堂派创始人陈杰宾的创业梦",
           "【新浪新闻】课堂派云管理颠覆高校传统实习模式",
          "【华北电力大学】“互联网+”让教育发现每一个学生",
      ],
      content:[
          "7月18日，腾讯微校发布会在北京船山书院如期举行，正式推出以微信校园卡、腾讯校园码为核心的数字校园解决方案——腾讯微校2.0。本次发布会突破传统Q&A的传统模式，现场模拟校园场景，利用“一款非常好用的应用”课堂派进行了现场互动。作为腾讯微校的生态战略伙伴，互动教学品牌课堂派展现了科技时代，智慧课堂所带来的创新和变化。",
          "4月12日下午教育分论坛，北京大学软件与微电子学院林院长分享了智慧课堂的建设经验：教学资源呈现多样化、课堂形式丰富、如何把学生从玩手机的屏幕聚焦到课堂互动环节等方面。林院长表示，课堂派在研发过程中，学院的一线教师主动参与，把很多丰富的实际教学经验融入研发当中，使整个智慧课堂的建设更具实用性和前瞻性。",
          "6月26日，中国共产主义青年团第十八次全国代表大会在人民大会堂开幕。共青团委对福建省驻京团工委点赞，CCTV新闻频道进行了同步报道。分享会上，课堂派创始人陈杰宾作为闽籍创业青年代表，向在京青年创业者分享了课堂派的发展模式以及创业历程。",
          "用课堂派最大的好处就是在学习的过程中，随时跟老师进行沟通和分享，无论从知识和情感层面都需要倾诉，而课堂派不仅提供跟老师同学交流的机会，还能够获得别人的指导和鼓励，让整个学习过程更加轻松。",
          "“课堂上教师要及时了解学生对内容的掌握程度，课下学生也希望教师能对自己的学习困难进行及时的指导。”在以前，这些实现起来比较困难的事情，“课堂派”可以让这一切变得轻而易举。"
      ],
    }
  },

}

</script>

<template>
<div class="media">
  <div  class="head"><div class="title">媒体报道</div></div>
  <el-carousel :interval="4000" type="card" height="383px" style="min-width: 596px" >
    <el-carousel-item v-for="(item,index) in items" :key="index">
  <div class="media-item">
    <img :src="item" alt="">
    <div class="media-content">
      <p class="media-title">{{title[index]}}</p>
      <p>{{content[index]}} </p>
      <el-button type="primary" class="media-button">查看详情</el-button>
    </div>
  </div>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<style >

.media-button{
  width: 100px;
  height: 40px;
}
.el-carousel__mask{
  min-width: 596px !important;
}
.media{
  height: 383px;
  min-width: 596px;
}
.media img{
  height: 320px;
  position: absolute;
  left: 38px;
  top: 40px;
  border-radius: 8px;
  z-index: 1;
}
.el-carousel__item{
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  min-width: 596px !important;
}
.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: white;
}

.media .title{
  font-size: 40px;
  font-weight: 500;
  color: #1f2023;
}
.media-content{
  height: 350px;
  max-height: 350px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.02);
  padding: 20px;
  padding-left: 300px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.media-item{
  padding: 8px;
  position: relative;

}
.media-content{
  font-size: 14px;
  line-height: 24px;
  color: black;
  text-align: left;
}
.media-title{
  font-size: 24px;
  font-weight: 600;
}
</style>