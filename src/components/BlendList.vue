<script>
export default {
  name: 'BlendList'
}
</script>

<template>
<div class="blend-list">
  <div class="inbox">
    <div class="head">
      <div class="title">混合教学全过程管理</div>
      <div class="detail">课前、课中、课后，线上线下，教学场景全过程管理</div>
    </div>
    <div class="list">
<ul>
  <li>
    <div class="heading">
      <img src="../assets/blendlist/p1.png">
    </div>
    <div class="title">作业</div>
    <div class="detail">81 种文档格式作业在线展示和批阅，实时查重，精准对比，避免学生抄袭。 自动管理成绩，一键下载作业数据。</div>
  </li>
  <li>
    <div class="heading">
      <img src="../assets/blendlist/p2.png">
    </div>
    <div class="title">考试/练习</div>
    <div class="detail">单选、多选、填空、简答等10余种题型。支持题库随机抽题组卷。支持限时考试、选项随机等防作弊模式。</div>
  </li>
  <li>
    <div class="heading">
      <img src="../assets/blendlist/p3.png">
    </div>
    <div class="title">课件资料</div>
    <div class="detail">课件、资料、话题、公告等教学内容支撑。在线制作方便快捷，提升备课效率。支持课前发布活动，课中互动，课后巩固。</div>
  </li>
  <li>
    <div class="heading">
      <img src="../assets/blendlist/p4.png">
    </div>
    <div class="title">课中互动</div>
    <div class="detail">课件在线讲解、标记疑问 支持发言、开启弹幕、抢答、提问、话题讨论、黑板、画笔标注课堂要点，让课堂更精彩</div>
  </li>
  <li>
    <div class="heading">
      <img src="../assets/blendlist/p5.png">
    </div>
    <div class="title">考勤签到</div>
    <div class="detail">二维码、数字口令、GPS等5种考勤形式， 精准有效、避免代签 签到数据自动生成，一键导出</div>
  </li>
  <li>
    <div class="heading">
      <img src="../assets/blendlist/p6.png">
    </div>
    <div class="title">成绩管理</div>
    <div class="detail">汇总互动数据、平时成绩、期末成绩 个性化配置成绩权重占比数据报表一键导出下载，课留存，可追溯</div>
  </li>
  <li>
    <div class="heading">
      <img src="../assets/blendlist/p7.png">
    </div>
    <div class="title">教学数据分析</div>
    <div class="detail">全方位教学数据信息化，可视化实时监测教学质量，把控教学进度，学业预警分析，提升教学效果</div>
  </li>
  <li>
    <div class="heading">
      <img src="../assets/blendlist/p8.png">
    </div>
    <div class="title">直播-云录屏</div>
    <div class="detail">直播-云录屏</div>
  </li>
</ul>
    </div>
  </div>
</div>
</template>

<style >
.blend-list{
  background: linear-gradient(180deg,#fff,#f4f8ff 42%);
  width: 100%;
}
.blend-list .inbox{
  height: 952px;
  width: 1224px;
  margin: 0 auto;
}
.blend-list .head{
  text-align: center;
  padding: 64px 0 40px;
}
.blend-list .head .title{
  font-size: 40px;
  font-weight: 500;
  color: #1f2023;
}
.list{
  padding: 0;
}
.blend-list .list ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.blend-list .list ul li{
  height: 240px;
  text-align: center;
  width: 239px;
  background: linear-gradient(180deg,#fff,#f4f8ff 130%);
  border-radius: 8px 8px 0 8px;
  margin-top: 24px;
  padding: 40px 24px;
  list-style: none;
}
.blend-list .list ul li .heading{
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
}
.blend-list .list ul li .title{
  font-weight: 600;
  color: #1f2023;
  font-size: 24px;
  margin-bottom: 8px;
}
.blend-list .list ul li .detail{
  font-size: 14px;
  color: #74787c;
  line-height: 24px;
}
.blend-list .list ul li .heading img{
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
}
.inbox .head .detail{
  height: 32px;
  font-size: 20px;
  color: #74787c;
  margin-top: 16px;
}
</style>