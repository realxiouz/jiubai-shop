
<template>
  <div>
    <div class="child-header flex align-center">
      {{`超级管理员${1}个；分销商名额${2}个，剩余${3}个`}}
      <div class="left"></div>
      联系客服
      <img src="/static/admin/right-w.png" alt="">
    </div>
    <div class="flex align-center bg-primary" style="height:170rpx;">
      <img :src="avatar" style="width:100rpx;height:100rpx;border-radius:50%;margin:0 30rpx 0 20rpx;" alt="">
      <div class="left">
        <div class="text-bold" style="font-size:15px;">{{name}}</div>
        <div style="font-size:12px;">加入时间:{{addTime}}</div>
        <div class="tag color-primary">原归属：某某某代理商/某某分销商</div>
      </div>
    </div>
    <div class="flex font12 align-center" style="background:#1DC4B8;height:80rpx;">
      <div class="left"></div>
      <div style="height:40rpx;width:2rpx;background:#fff"></div>
      <div class="left"></div>
    </div>

    <bottom-bar :bar-height="90">
      <div style="line-height:90rpx" class="flex font14">
        <div class="bg-primary left text-center">申请记录</div>
        <div class="bg-white left color-primary text-center" @click="$go('/pages/admin/child/search')">新增分销商</div>
      </div>
    </bottom-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.child-header{
  height: 60rpx;
  background: #bbb;
  color: #fff;
  padding: 0 30rpx;
  font-size: 12px;
  >img{
    width: 24rpx;
    height: 24rpx;
    margin-left: 10rpx;
  }
}
</style>