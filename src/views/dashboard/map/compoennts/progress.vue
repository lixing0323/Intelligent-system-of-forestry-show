<template>
  <div class="progress" :style="progressStyleObj">
    <div class="title" :style="titleStyleObj" @click="gotoPlot()">{{ title }}</div>
    <div class="line" :style="lineStyleObj">
      <span class="color" :style="colorStyleObj" />
      <span class="value"> <ht-count-number :start-val="0" :end-val="value" class="value" /></span>
    </div>
  </div>
</template>

<script>
import HtCountNumber from '@/components/HtCountNumber'
export default {
  components: { HtCountNumber },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: undefined
    },
    max: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      lineWidth: this.nowWidth(360)
    }
  },
  computed: {
    progressStyleObj() {
      return { 'height': `${this.nowHeight(30)}px`, 'line-height': `${this.nowHeight(22)}px` }
    },
    titleStyleObj() {
      return { 'font-size': `${this.nowSize(12)}px`, 'width': `${this.nowWidth(100)}px` }
    },
    lineStyleObj() {
      return { 'height': `${this.nowHeight(20)}px`, 'width': `${this.lineWidth}px` }
    },
    colorStyleObj() {
      return { 'height': `${this.nowHeight(20)}px`, 'width': `${this.getProgressWidth()}px` }
    }
  },
  methods: {
    getProgressWidth() {
      if (this.value) {
        return this.value * this.lineWidth / this.max
      }
    },
    gotoPlot() {
      this.$router.push({ name: 'PlotDetails', params: { id: '1' }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
  .progress {
    display: flex;
    flex-wrap: nowrap;
    .title {
      color: #D6D6D6;
      cursor: pointer;
    }
    .line {
      display: inline-block;
      margin-top: 1px;
      background-color: #191E2C;
      border-radius:20px;
      .color {
        background-color: $--color-font;
        border-radius:20px;
        display: inline-block;
      }
      .value {
        color: $--color-font;
        float: right;
        margin-right: 5px;
      }
    }

  }

</style>
