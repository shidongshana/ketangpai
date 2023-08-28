<script >
export default {
  name: 'PortalFooter'
}
</script>

<template>
  <div class="portal-footer">
    <div class="layer-one">
      <div class="left">
        <div class="bottom-logo">
          <img src="../assets/imags/common/bottom-logo.png" alt="">
        </div>
        <ul>
          <li><a>关于我们</a></li>
          <li><a>服务条款</a></li>
          <li><a>产品动态</a></li>
          <li><a>浏览器下载</a></li>
        </ul>
      </div>
      <div class="right">
        <div class="contact"><p>联系我们</p>
          <p>(工作日09:30～18:30)</p>
          <p><img src="../assets/imags/common/telephone.png" alt=""> 010-57748642 </p>
          <p><img src="../assets/imags/common/email.png" alt=""> hi@ketangpai.com </p></div>
        <div class="qrcode"><img src="../assets/imags/common/paipaikefu.bf408c12.png" alt="">
          <p>课堂派客服-派派</p></div>
        <div class="qrcode"><img src="../assets/imags/common/portalQRcode.24a37b5d.png" alt="">
          <p>扫码开启移动教学</p></div>
      </div>
    </div>
    <div class="layer-two">
      <span> Copyright © 2014 ketangpai.com All Rights Reserved. <a target="_blank"  href="https://beian.miit.gov.cn/#/Integrated/recordQuery">京ICP备14023276号-4</a></span>
      <span style="display: none;">
        <a target="_blank" href="https://app.eduyun.cn/mapp/mappCorpDetail?id=003344">教APP备1101923号</a>
      </span>
      <span>
        <a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011402010566">京公网安备 11011402010566号</a>
      </span>
    </div>
  </div>
</template>

<style >
.portal-footer {
  min-width: 1224px;
}
.portal-footer .layer-one{
  height: 236px;
  background: #272e38;
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
}
.portal-footer .layer-one .left{
  padding: 65px 0;
}
.portal-footer .layer-one .left .bottom-logo{
  width: 128px;
  margin-bottom: 8px;
}
.portal-footer .layer-one .left .bottom-logo img{
  border: none;
}
.portal-footer .layer-one .left ul{
  display: flex;
  margin-top: 30px;
}
.portal-footer .layer-one .left ul li{
  list-style-type: none;
  margin-right: 64px;
}
.portal-footer .layer-one .left ul li a{
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
}
.portal-footer .layer-one .right{
  display: flex;
}
.portal-footer .layer-one .right .contact{
  padding: 60px 0;
  margin-right: 20px;
}
.portal-footer .layer-one .right .contact p{
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  display: flex;
}
.portal-footer .layer-one .right .contact p img{
  margin-right: 8px;
}
.portal-footer .layer-one .right .qrcode{
  padding: 40px 0;
  margin-left: 20px;
}
.portal-footer .layer-one .right .qrcode img{
  width: 120px;
}
.portal-footer .layer-one .right .qrcode p{
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  text-align: center;
}
.portal-footer .layer-two{
  width: 100%;
  height: 48px;
  background: #15191f;
  text-align: center;
}
.portal-footer .layer-two span{
  font-size: 12px;
  color: #647184;
  margin-right: 60px;
  line-height: 48px;
}
.portal-footer .layer-two span a{
  text-decoration: none;
  color: #647184;
}

</style>