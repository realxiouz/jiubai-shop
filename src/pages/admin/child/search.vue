<template>
  <div>
    <div style="height:100rpx;padding:0 30rpx;" class="bg-white flex align-center">
      <div style="width:140rpx" class="text-bold font14">手机号</div>
      <input type="text" class="left" v-model="phone">
    </div>
    <bottom-bar :bar-height="90">
      <div style="line-height:90rpx" class="flex">
        <div class="bg-primary left text-center" @click="onSearch">搜索</div>
      </div>
    </bottom-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    onSearch() {
      this.$post('/getysUserByPhone', {
        phone: this.phone
      }).then(r => {
        
      })
    }
  }
}
</script>

<style>

</style>