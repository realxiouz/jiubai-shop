<template>
  <div>
    <div class="shop-line flex align-center bg-white" style="margin:20rpx 0;">
      <div class="font14 text-bold">店铺缩略图</div>
      <div class="font12 c99">（图片尺寸建议上传1:1）</div>
      <div class="left"></div>
      <img class="upload" src="/static/admin/upload.png" alt="">
    </div>
    <div>
      <div class="shop-line flex align-center bg-white">
        <div class="font14 text-bold" style="width:180rpx;">店铺名称</div>
        <input class="left" type="text" placeholder="请输入" v-model="name" />
      </div>
      <div class="shop-line flex align-center bg-white">
        <div class="font14 text-bold" style="width:180rpx;">联系电话</div>
        <input class="left" type="text" placeholder="请输入" v-model="phone" />
      </div>
      <div class="shop-line flex align-center bg-white" @click="onLocation">
        <div class="font14 text-bold" style="width:180rpx;">店铺地址</div>
        <div class="left" ></div>
      </div>
      <div class="shop-line flex align-center bg-white">
        <div class="font14 text-bold" style="width:180rpx;">简介</div>
        <input class="left" type="text" placeholder="请输入" v-model="introduction" />
      </div>
    </div>

    <bottom-bar style="height:90rpx;">
      <div class="bg-white bg-primary text-center" style="line-height:90rpx;" @click="onAdd">确 认</div>
    </bottom-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      latitude: '',
      longitude: '',
      address: '',
      introduction: '',
      image: 'https://image.dayouqiantu.cn/news.png'
    }
  },
  methods: {
    onLocation() {
      uni.chooseLocation({
        success: r => {
          console.log(r)
          let {name, address, latitude, longitude} = r
          this.latitude = latitude
          this.longitude = longitude
          this.address = address
        }
      })
    },

    onAdd() {
      let d = {
        name: this.name,
        phone: this.phone,
        latitude: this.latitude,
        longitude: this.longitude,
        address: this.address,
        introduction: this.introduction,
        image: this.image
      }
      this.$post('/addStore', d)
        .then(r => {
          uni.navigateBack({
            delta: 1
          })
        })
    },
  }
}
</script>

<style lang="less" scoped>
.shop-line{
  padding: 30rpx;
  // border-bottom: 1px solid #999;
  &:last-child{
    border-bottom: none;
  }
  .upload{
    width: 100rpx;
    height: 100rpx;
  }
}
</style>