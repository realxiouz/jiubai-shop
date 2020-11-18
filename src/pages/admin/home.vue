<template>
  <div style="background:#f2f2f2;">
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

      <div class="divider text-bold">团队看板 <span style="color:#999;font-size:12px;margin-left:20rpx">总人数:200</span>
      </div>
      <div class="flex justify-between">
        <div class="box flex column">
          <div style="color:#999;font-size:24rpx;margin-left:20rpx;margin-top:10rpx;" class="text-left">分销商</div>
          <div class="left flex align-center justify-around text-bold color-primary" style="width:100%;font-size:80rpx;">
            90
          </div>
          <div style="line-height:70rpx;color:#999;background:#FAFAFA;" class="text-center font14">昨日新增 <span class="color-primary">8</span></div>
        </div>
        <div class="box flex column text-center">
          <div style="height:110rpx;border-bottom:1px solid #F0F0F0;">
            <div style="color:#999;font-size:24rpx;margin-left:20rpx;margin-top:10rpx;" class="text-left">终端会员</div>
            <div style="color:#1EDACC;font-size:60rpx;">456</div>
          </div>
          <div class="left flex" style="width:100%;">
            <div class="left" style="border-right:1px solid #F0F0F0;">
              <div class="text-bold" style="font-size:32rpx;margin-top:30rpx">30</div>
              <div style="color:#BBBBBB;font-size:20rpx">直属会员</div>
            </div>
            <div class="left">
              <div class="text-bold" style="font-size:32rpx;margin-top:30rpx">40</div>
              <div style="color:#BBBBBB;font-size:20rpx">拓展会员</div>
            </div>
          </div>
          <div style="line-height:70rpx;color:#999;background:#FAFAFA;" class="text-center font14">昨日新增 <span class="color-primary">3</span></div>
        </div>
      </div>
      
      <div style="height:60rpx;"></div>
      <div class="home-line flex align-center">
        <img src="/static/admin/fxgl.png" class="ic1" alt="">
        <div>分销商管理</div>
        <div class="left"></div>
        <img class="right" src="/static/admin/right.png" />
      </div>
      <div class="home-line flex align-center">
        <img src="/static//admin/zshymx.png" class="ic1" alt="">
        <div>直属会员明细</div>
        <div class="left"></div>
        <img class="right" src="/static/admin/right.png" />
      </div>
      <div class="home-line flex align-center">
        <img src="/static//admin/wddp.png" class="ic1" alt="">
        <div>我的店铺</div>
        <div class="left"></div>
        <img class="right" src="/static/admin/right.png" />
      </div>
      <div class="home-line flex align-center">
        <img src="/static//admin/wdsy.png" class="ic1" alt="">
        <div>我的收益</div>
        <div class="left"></div>
        <img class="right" src="/static/admin/right.png" />
      </div>
      <div class="home-line flex align-center">
        <img src="/static//admin/yhkgl.png" class="ic1" alt="">
        <div>银行卡管理</div>
        <div class="left"></div>
        <img class="right" src="/static/admin/right.png" />
      </div>
      <div class="home-line flex align-center" @click="$go('/pages/admin/setting')">
        <img src="/static/admin/sz.png" class="ic1" alt="">
        <div>设置</div>
        <div class="left"></div>
        <img class="right" src="/static/admin/right.png" />
      </div>

      <div class="logout">退 出</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdminHome',
  mounted() {
    this.$post('/agentHome', {phone: '15912510617'})
      .then(r => {
        let {
          avatar,
          name,
          addTime,
        } = r.data
        this.avatar = avatar
        this.addTime = addTime
        this.name = name
      })
  },
  data() {
    return {
      avatar: '',
      name: '',
      addTime: '',
    }
  },
}
</script>

<style lang="less" scoped>
.tag{
  padding: 0 16rpx;
  height: 30rpx;
  line-height: 30rpx;
  border-radius: 6rpx;
  background: #fff;
  width: auto;
  font-size: 10px;
  display: inline-block;
}

.home-line{
  height: 90rpx;
  margin-bottom: 20rpx;
  border-radius: 16rpx;
  background: #fff;
  padding: 0 30rpx;
  font-size: 14px;
  color: #222;
  .ic1{
    width: 48rpx;
    height: 48rpx;
    margin-right: 30rpx;
  }
  .right{
    width: 32rpx;
    height: 32rpx;
  }

}
.logout{
  line-height: 90rpx;
  margin-top: 50rpx;
  border-radius: 16rpx;
  background: #FD6969;
  padding: 0 30rpx;
  font-size: 14px;
  color: #fff;
  text-align: center;
}

.divider{
  line-height: 90rpx;
  font-size: 15px;
}

.box{
  width: 330rpx;
  height: 300rpx;
  background: #fff;
  border-radius: 16rpx;
}
</style>