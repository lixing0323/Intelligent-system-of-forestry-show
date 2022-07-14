<template>
  <div class="input-card" style="right:3%;top:100px" :style="getCardStyle()">
    <dv-loading v-if="cardLoading">加载中</dv-loading>

    <template v-if="!cardLoading">
      <div class="title" :style="getTitleStyle()">总面积及总碳储量</div>
      <div class="rectangle-flex">
        <div :style="itemStyleObj"><rectangle :title="'林地面积/碳储'" :area="1247.6" :weight="2034.26" :width="itemWidth" :height="itemHeight" /></div>
        <div :style="[itemStyleObj, rightStyleObj]"> <rectangle :title="'草原面积/碳储'" :area="222.87" :weight="479.37" :width="itemWidth" :height="itemHeight" /></div>
        <div :style="[itemStyleObj, topStyleObj]"><rectangle :title="'湿地面积/碳储'" :area="280.27" :weight="2453.7" :width="itemWidth" :height="itemHeight" /></div>
        <div :style="[itemStyleObj, topStyleObj, rightStyleObj]"><rectangle :title="'荒漠面积/碳储'" :area="30.85" :weight="0.57" :width="itemWidth" :height="itemHeight" /></div>
      </div>
    </template>
  </div>
</template>

<script>
import Rectangle from './compoennts/rectangle'
export default {
  components: { Rectangle },
  props: {
    forestry: {
      type: Object,
      default: () => {}
    },
    cardLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [],
      rectangleLoading: false
    }
  },
  computed: {
    itemWidth() {
      return this.nowWidth(220)
    },
    itemHeight() {
      return this.nowHeight(120)
    },
    itemStyleObj() {
      return { width: `${this.itemWidth}px`, 'margin-top': `${this.nowSize(20)}px`, 'vertical-align': 'middle' }
    },
    rightStyleObj() {
      return { 'margin-left': `${this.nowSize(20)}px` }
    },
    topStyleObj() {
      return { 'margin-top': `${this.nowSize(20)}px` }
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
  .input-card {
    background: rgba(46, 53, 71, 0.5);
    background-clip: border-box;
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    display: block;
    position: absolute;
    .title {
      font-weight: bold;
    }

    .rectangle-flex {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
