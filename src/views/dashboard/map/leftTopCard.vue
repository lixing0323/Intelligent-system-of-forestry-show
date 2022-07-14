<template>
  <div class="input-card" style="left:3%;top:100px" :style="getCardStyle()">
    <dv-loading v-if="cardLoading">加载中</dv-loading>
    <template v-if="!cardLoading">
      <div class="title" :style="getTitleStyle()">碳储量总面积占比</div>
      <pie-chart :id="'area'" ref="eChart" :chart-data="data" :width="nowWidth(430)" :height="nowHeight(300)" class="pie" />
    </template>

  </div>
</template>

<script>
import PieChart from './compoennts/pie'

export default {
  components: { PieChart },
  props: {
    cardLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: []
    }
  },
  created() {
    this.data = [
      { value: 12.51, name: '草原', label: { color: '#E57F2C' }, itemStyle: { color: '#D1985C' }},
      { value: 1.73, name: '荒漠', label: { color: '#4374CB' }, itemStyle: { color: '#4374CB' }},
      { value: 15.73, name: '湿地', label: { color: '#2CE57F' }, itemStyle: { color: '#5CC76A' }},
      { value: 70.3, name: '林地', label: { color: '#17C3DA' }, itemStyle: { color: '#28A6E9' }}
    ]
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
    .pie {
      margin: 10px;
    }
  }
</style>
