<script >
import HomeCard from "@/components/component-home_card.vue";

export default {
  name: 'classChapter',
  components: {HomeCard},
  props: {
    msg: String
  }
}
</script>

<template>
<div class="class-chapter common-border">
  <div class="class-box" style="max-height: 320px;"><!---->
    <home-card/>
  </div>
</div>
</template>

<style >
.class-chapter {
  padding: 18px;
  background: rgb(248, 249, 250);
  margin-bottom: 24px;
  height: 322px;
}
</style>