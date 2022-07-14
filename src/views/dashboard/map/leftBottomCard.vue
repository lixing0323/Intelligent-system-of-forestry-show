<template>
  <div class="input-card" style="left:3%;bottom:3%" :style="getCardStyle()">
    <dv-loading v-if="cardLoading">加载中</dv-loading>
    <template v-if="!cardLoading">
      <div class="title" :style="getTitleStyle()">样地碳汇量/碳储量占比</div>
      <div class="pie-dot">
        <span> <i class="summary-i" /> 碳汇量</span>
        <span class="store"> <i class="store-i" /> 碳储量</span>
      </div>
      <div class="circle-flex">
        <circle-chart id="first" :chart-data="first" :main-title="'40.95%'" :sub-title="'林地'" :width="itemWidth" :height="itemHeight" :style="itemStyleObj" />
        <circle-chart id="second" :chart-data="second" :main-title="'9.65%'" :sub-title="'草原'" :width="itemWidth" :height="itemHeight" :style="itemStyleObj" />
        <circle-chart id="third" :chart-data="third" :main-title="'49.39%'" :sub-title="'湿地'" :width="itemWidth" :height="itemHeight" :style="itemStyleObj" />
        <circle-chart id="four" :chart-data="four" :main-title="'0.01%'" :sub-title="'荒漠'" :width="itemWidth" :height="itemHeight" :style="itemStyleObj" />
      </div>
    </template>

  </div>
</template>

<script>
import CircleChart from './compoennts/circle'

export default {
  components: { CircleChart },
  props: {
    cardLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      first: [],
      second: [],
      third: [],
      four: []
    }
  },
  computed: {
    itemWidth() {
      return this.nowWidth(230)
    },
    itemHeight() {
      return this.nowHeight(125)
    },
    itemStyleObj() {
      return { width: `${this.itemWidth}px`, 'margin-top': `${this.nowSize(10)}px` }
    }
  },
  created() {
    this.first = [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' }
    ]
    this.second = [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' }
    ]
    this.third = [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' }
    ]
    this.four = [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' }
    ]
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
  .input-card {
    background-clip: border-box;
    background: rgba(46, 53, 71, 0.5);
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    display: block;
    position: absolute;
    .title {
      font-weight: bold;
    }
  }
  .circle-flex {
    display: flex;
    flex-wrap: wrap;
  }
  .pie-dot {
    text-align: right;
    font-size: 12px;
    i {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    .summary-i {
      background-color: #00D93C;
    }
    .store {
      margin-left: 10px;
      color: #00C8DF;
    }
    .store-i {
      background-color: #00C8DF;
    }
  }
</style>
