<template>
  <div class="search-wrap flex align-center font12" >
    <div class="bzIcon-search" style="font-size:12px;margin-right:16rpx;"></div>
    <input v-if="canInput" class="left" type="text" v-model="kw" :placeholder="placeholder" confirm-type="search" :maxlength="6" @confirm="onSearch"/>
    <div class="left" @click.stop="$go(goPath)" v-else>{{placeholder}}</div>
  </div>
</template>

<script>
export default {
  props: {
    canInput: {
      type: Boolean,
      default: true
    },
    goPath: {
      type: String,
      default: '/pages/search/index'
    },
    placeholder: {
      type: String,
      default: '搜一搜'
    }
  },
  data() {
    return {
      kw: ''
    }
  },
  methods: {
    onSearch() {
      this.$emit('search', this.kw)
    }
  }
}
</script>

<style lang="less">
.search-wrap{
  height: 60rpx;
  width: 400rpx;
  border-radius: 30rpx;
  background: #f2f2f2;
  padding: 0 25rpx;
}
</style>