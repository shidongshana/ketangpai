<script>
export default {
  name: 'MyMachanisnm',
}
</script>

<template>
  <div class="machanisnm">
    <div class="t1">
      <div class="head">
        <div class="title">课堂派机构版</div>
      </div>
      <div class="conten">
        <div class="mecleft">
          <img src="../assets/imags/img_1.png">
        </div>
        <div class="mecright">
          <ul>
            <li>
              <div class="title">
                <div class="choose">
                  <img src="../assets/imags/login/circle.png" alt="text">
                </div>
                <div class="conten">精准高效管理教学事务</div>
              </div>
              <div class="detail">一键对接教务系统，精准高效管理师生教学、课程、课务。</div>
            </li>
            <li>
              <div class="title">
                <div class="choose">
                  <img src="../assets/imags/login/circle.png" alt="text">
                </div>
                <div class="conten">有效提升教学质量</div>
              </div>
              <div class="detail">以课堂教学为核心，以产出为导向；实时监控师生、课程、教学活动等教学过程。</div>
            </li>
            <li>
              <div class="title">
                <div class="choose">
                  <img src="../assets/imags/login/circle.png" alt="text">
                </div>
                <div class="conten">教学资产管理</div>
              </div>
              <div class="detail">沉淀教学过程资产，促进优质课程、资源、知识图谱建设。</div>
            </li>
            <li>
              <div class="title">
                <div class="choose">
                  <img src="../assets/imags/login/circle.png" alt="text">
                </div>
                <div class="conten">智慧校园全景定制</div>
              </div>
              <div class="detail">以学生为中心，以教学为导向，提供校园全景智慧教学解决方案。</div>
            </li>
          </ul>
          <div class="rightButton">
            <button  class="und">了解详细功能</button>
            <button  class="now">申请免费试用</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.machanisnm {
  background: linear-gradient(180deg, #fff, #f4f8ff 42%);
}

.t1 {
  width: 1224px;
  height: 806px;
  margin: 0 auto;
  padding: 0;
}

.t1 .head {
  text-align: center;
  padding: 64px 0;
}

.t1 .head .title {
  font-size: 40px;
  font-weight: 500;
  color: #1f2023;

}

.t1 .conten {
  display: flex;
  justify-content: space-between;
}

.mecleft img {
  width: 625px;
  height: 548px;
}

.mecright {
  width: 520px;
}

ol, ul {
  list-style: none;
}

li, ul {
  list-style-type: none;
}

li {
  margin-bottom: 24px;
}

.mecright .title {
  line-height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.choose {
  display: flex;
  width: 20px;
  height: 20px;
}

.choose img {
  width: 100%;
  height: 100%;
}

.t1 .conten {
  color: #1f2023;
  font-weight: 600;
  margin-left: 16px;
  font-size: 24px;
}

.mecright .detail {
  font-size: 18px;
  margin-top: 8px;
  color: #74787c;
  padding-left: 38px;
  line-height: 32px;
  text-align: left;
}
.rightButton{
  margin: 10px 0 0 60px;
  width: 344px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.rightButton .und{
  background: #fff;
  border: 1px solid #4285f4;
  color: #4285f4;
}
.rightButton .now{
  background: linear-gradient(131deg,#7eb0ff,#2178ff);
  color: #fff;
  border: 0;
}
.rightButton button{
  cursor: pointer;
  width: 160px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  border-radius: 4px;
}
</style>