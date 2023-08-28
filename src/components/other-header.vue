<script >
export default {
  name: 'otherHeader',
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<template>
<div class="other-header flex-between">
  <el-tabs v-model="activeName" >
    <el-tab-pane label="我教的" name="first"></el-tab-pane>
    <el-tab-pane label="我协助的" name="second"></el-tab-pane>
    <el-tab-pane label="我学的" name="third"></el-tab-pane>
  </el-tabs>
  <div class="between">
  <el-button style="width: 97px;height: 36px" >归档管理</el-button>
    <el-row>
      <el-col :span="6" style="float:left; margin-left: 10px;width: 270px; hight: 40px;">
        <el-input
            type="text"
            prefix-icon="el-icon-search"
            v-model="kb_content"
            placeholder="请输入"
            style="width: 270px; cursor: pointer"
            @keyup.enter.native="getAllKb"
        ></el-input>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<style >
.other-header{
  margin-top: 20px;
}
.el-tabs__item{
  font-size: 16px;
}
.between{
  display: flex;
  justify-content: space-between;
}
</style>