<script>
import HomeTitle from "@/components/HomeTitle.vue";
import ImgBox from "@/components/ImgBox.vue";
import BlendList from "@/components/BlendList.vue";
import MyWisdom from "@/components/wisdom.vue";
import MyMachanisnm from "@/components/Machanisnm.vue";
import MyMedia from "@/components/Media.vue";
import MyWelcome from "@/components/Welcome.vue";
import PortalFooter from "@/components/portal-footer.vue";
import ScrollUp from "@/components/ScrollUp.vue";

export default {
  name: 'HomePage',
  components: {
    HomeTitle,
    ImgBox,
    BlendList,
    MyWisdom,
    MyMachanisnm,
    MyMedia,
    MyWelcome,
    PortalFooter,
    ScrollUp
  }
  }
</script>

<template>
<div>
  <HomeTitle/>
  <ImgBox/>
  <BlendList/>
  <MyWisdom/>
  <MyMachanisnm/>
  <MyMedia/>
  <MyWelcome/>
  <PortalFooter/>
  <ScrollUp/>
</div>
</template>

<style >

</style>