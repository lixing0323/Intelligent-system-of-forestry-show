<template>
  <div class="rectangle" :style="{width: `${width}px`, height: `${height}px`}">
    <div class="rectangle-title" :style="{'font-size': `${nowSize(18)}px`, 'padding-top': `${nowSize(30)}px` }">{{ title }}</div>
    <div class="rectangle-value">
      <span><ht-count-number :start-val="0" :end-val="Number(area)" class="number" :style="numberStyle" :decimals="0" /></span>
      <span class="unit" :style="unitStyle">万公顷</span>
      <span>/<ht-count-number :start-val="0" :end-val="Number(weight)" class="number" :style="numberStyle" :decimals="0" /></span>
      <span class="unit" :style="unitStyle">百万吨</span>
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
    area: {
      type: [Number, String],
      default: undefined
    },
    weight: {
      type: [Number, String],
      default: undefined
    },
    width: {
      type: Number,
      default: 220
    },
    height: {
      type: Number,
      default: 120
    }
  },
  data() {
    return {
    }
  },
  computed: {
    numberStyle() {
      return { 'font-size': `${this.nowSize(24)}px` }
    },
    unitStyle() {
      return { 'font-size': `${this.nowSize(10)}px` }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
  .rectangle {
    background-color: #191E2C;

    .rectangle-title {
      color: #BEBEBE;
      text-align: center;
    }
    .rectangle-value {
      margin-top: 5px;
      text-align: center;
      .number {
        color: $--color-font;
        font-weight: bold;
      }
      .unit {
        color: $--color-font;
      }
    }

  }

</style>
