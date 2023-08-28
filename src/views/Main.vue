<script >
import MainTitle from "@/components/MainTitle.vue";
import HeaderCommonBorder from "@/components/header-common-border.vue";
import OtherHeader from "@/components/other-header.vue";
import ClassChapter from "@/components/class-chapter.vue";

export default {
  name: 'mainClass',
  components: {
    ClassChapter,
    OtherHeader,
    HeaderCommonBorder,
    MainTitle

  }
}
</script>

<template>
<div class="main">
  <MainTitle></MainTitle>
<div class="view-home-box">
  <div class="view-home">
    <div class="home-content">
    <header-common-border></header-common-border>
      <other-header/>
      <class-chapter/>
    </div>
  </div>
</div>
</div>
</template>

<style >
.view-home-box{
  max-width: 1150px;
  margin: 0px auto;
}
.view-home{
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.view-home .home-content {
  flex: 1 1 0%;
}
</style>