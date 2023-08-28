<script>
export default {
  name: 'homeCard',
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<template>
  <div class="component-home_card">
    <el-row>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
         <div class="image">

         </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
            </div>
            <div class="user-info">
              <div class="left"><span class="tag-flag role-t">教</span><span
                  style="cursor: pointer;"><span>成员 0人</span></span></div>
              <div class="right">
                <div class="set-top">取消置顶</div>
                <div class="handle el-dropdown">
                  <span class="el-dropdown-link el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-1104"  role="button" tabindex="0"><img src="https://www.ketangpai.com/img/etc.52da4ee0.svg"></span>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.component-home_card .user-info {
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 8px 14px 12px;
  font-size: 12px;
  line-height: 16px;
}
.left{
  display: flex;
  align-items: center;
}
.right{
  display: flex;
  align-items: center;
}
.right .set-top {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.right img {

  display: block;
  width: 14px;
}
.view-home .tag-flag.role-t {
  background-color: rgb(66, 133, 244);
  border: 1px solid rgb(66, 133, 244);
}
.right .handle {
  cursor: pointer;
  margin-left: 11px;
}
.view-home .tag-flag {
  min-width: 20px;
  max-width: 50px;
  height: 18px;
  display: inline-block;
  border-radius: 2px;
  color: rgb(255, 255, 255);
  font-size: 12px;
  text-align: center;
  margin-right: 8px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  height: 15px;
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  background-image: url("../assets/imags/component-home_card/p1.png") ;
  cursor: pointer;
  padding: 18px 24px;
  height: 118px;
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-color: #3367d5;
}


.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.el-card {
  width: 255px;
  height: 234px;
}

.clearfix:after {
  clear: both
}
</style>