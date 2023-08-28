<script>
import HomeCard from "@/components/component-home_card.vue";

export default {
  name: 'headerCommonBorder',
  components: {HomeCard}
}
</script>

<template>
  <div class="header-common-border hasborder">
    <div class="top-handler"><h2 class="left">置顶课程</h2>
      <div class="right">
        <div class="handle el-dropdown" id="home-element2">
          <span class="el-dropdown-link el-dropdown-selfdefine" role="button" tabindex="0">
            <button type="button" class="el-button el-button--primary el-button--medium">
              <i class="el-icon-plus"></i>
              <span>创建/加入课程</span>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="class-box" style="max-height: 320px;"><!---->
      <home-card/>
    </div>
  </div>
</template>

<style>
.view-home .hasborder {
  border: 1px solid rgb(218, 220, 224);
  padding: 18px;
}

.view-home .header-common-border {
  border-radius: 8px;
  padding-top: 18px;
  padding-bottom: 8px;
}

.view-home .top-handler {
  display: flex;
  justify-content: space-between;
}

.view-home .top-handler .left {
  font-size: 20px;
  font-family: PingFangSC, PingFangSC-Medium, serif;
  color: rgb(87, 90, 91);
  font-weight: 500;
}

.view-home .top-handler .right {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: PingFangSC, PingFangSC-Medium, serif;
  font-weight: 500;
  color: rgb(66, 133, 244);
}

.el-dropdown {
  display: inline-block !important;
  position: relative !important;
  color: #606266 !important;
  font-size: 14px !important;
}

.view-home .el-button {
  padding: 10px 20px;
  margin-left: 12px;
}
.view-home .home-content .class-box {
  margin: 8px -10px 0px;
  display: flex;
  flex-flow: wrap;
  overflow-y: auto;
  width: 100%;
  height: 256px;
}
</style>