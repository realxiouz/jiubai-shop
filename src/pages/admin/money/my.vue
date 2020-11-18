<template>
  <div>
    <div class="flex align-center bg-primary" style="height:170rpx;">
      <img :src="avatar" style="width:100rpx;height:100rpx;border-radius:50%;margin:0 30rpx 0 20rpx;" alt="">
      <div class="left">
        <div class="text-bold" style="font-size:15px;">{{name}}</div>
        <div style="font-size:12px;">加入时间:{{addTime}}</div>
        <div class="tag color-primary">原归属：某某某代理商/某某分销商</div>
      </div>
    </div>
    <div style="padding:0 30rpx;">
      <div class="divider text-bold">业绩看板</div>
      <div class="flex justify-between">
        <div class="box flex column" >
          <div class="left flex column align-center justify-around" style="width:100%;">
            <div style="color:#1EDACC;font-size:60rpx;">1000</div>
            <div class="bg-primary text-center" style="width:230rpx;height:40rpx;border-radius:20rpx;line-height:40rpx;">提现</div>
            <div style="color:#999;font-size:24rpx;">已提现金额: <span style="color:#222;">{{1000}}</span></div>
          </div>
          <div @click="$router.push(`/pages/admin/withdraw`)" style="line-height:70rpx;color:#222;background:#FAFAFA;" class="text-center font14">提现明细</div>
        </div>
        <div class="box flex column text-center">
          <div style="height:110rpx;border-bottom:1px solid #F0F0F0;">
            <div style="color:#1EDACC;font-size:60rpx;">999</div>
            <div style="line-height:20rpx;color:#999;" class="font12">累计收益</div>
          </div>
          <div class="left flex" style="width:100%;">
            <div class="left" style="border-right:1px solid #F0F0F0;">
              <div class="text-bold" style="font-size:32rpx;margin-top:30rpx">80.00</div>
              <div style="color:#BBBBBB;font-size:20rpx">直属收益(元)</div>
            </div>
            <div class="left">
              <div class="text-bold" style="font-size:32rpx;margin-top:30rpx">80.00</div>
              <div style="color:#BBBBBB;font-size:20rpx">直属收益(元)</div>
            </div>
          </div>
          <div style="line-height:70rpx;color:#999;background:#FAFAFA;" class="text-center font14">预估收益(元)  80.00</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="less">
.box{
  width: 330rpx;
  height: 300rpx;
  background: #fff;
  border-radius: 16rpx;
}
</style>