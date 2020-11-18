<template>
  <div style="height:100vh;background:#fafafa">
    <div>
      <div class="flex align-center line" style="height:160rpx;">
        <div class="title">头像</div>
        <div class="left"></div>
        <img src="" style="width:110rpx;height:110rpx;border-radius:50%;" alt="">
        <img src="/static/admin/right.png" class="setting-r"  alt="">
      </div>
      <div class="flex align-center line">
        <div class="title">代理商名称</div>
        <div class="content">wx_15912510617</div>
        <div class="left"></div>
        <img src="/static/admin/right.png" class="setting-r"  alt="">
      </div>
      <div class="flex align-center line" @click="$router.push('/admin/')">
        <div class="title">修改手机</div>
        <div class="content">15912510617</div>
        <div class="left"></div>
        <img src="/static/admin/right.png" class="setting-r" alt="">
      </div>
      <div class="flex align-center line">
        <div class="title">修改密码</div>
        <div class="content"></div>
        <div class="left"></div>
        <img src="/static/admin/right.png" class="setting-r" alt="">
      </div>
    </div>
    <div style="height:.2rem;"></div>
    <div class="flex align-center line">
      <div class="title">关于我们</div>
      <div class="left"></div>
      <img src="/static/admin/right.png" class="setting-r" alt="">
    </div>
  </div>
  
</template>

<script>
export default {
  name: "AdminSetting"
}
</script>

<style lang="less" scoped>
.line{
  height: 100rpx;
  padding: 0 30rpx;
  background: #fff;
  border-bottom: 1px solid #fafafa;
  .title{
    width: 200rpx;
    color: #222;
    font-size: 15px;
  }
  .content{
    color: #999;
  }
}

.setting-r{
  width: 32rpx;
  height: 32rpx;
  margin-right: 16rpx;
}
</style>