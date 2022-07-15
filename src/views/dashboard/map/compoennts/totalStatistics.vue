<template>
  <div class="total-container">
    <div class="input-card" :style="inputCardStyleObj">
      <div class="label" :style="labelStyleObj">样地总数</div>
      <div class="number" :style="numberStyleObj">
        <span><ht-count-number :start-val="0" :end-val="115" class="value" :decimals="0" :style="valueStyleObj" /></span>
        <span class="unit" :style="unitStyleObj" />
      </div>
    </div>
    <div class="input-card" :style="[inputCardStyleObj, marginStyleObj]">
      <div class="label" :style="labelStyleObj">总面积</div>
      <div class="number" :style="numberStyleObj">
        <span><ht-count-number :start-val="0" :end-val="1781.58" class="value" :style="valueStyleObj" /></span>
        <span class="unit" :style="unitStyleObj">万公顷</span>
      </div>
    </div>
    <div class="input-card" :style="inputCardStyleObj">
      <div class="label" :style="labelStyleObj">总储量</div>
      <div class="number" :style="numberStyleObj">
        <span><ht-count-number :start-val="0" :end-val="4967.9" class="value" :style="valueStyleObj" /></span>
        <span class="unit" :style="unitStyleObj">百万吨</span>
      </div>
    </div>
  </div>

</template>

<script>
import HtCountNumber from '@/components/HtCountNumber'

export default {
  components: { HtCountNumber },
  props: {
    count: {
      type: Number,
      default: 0
    },
    area: {
      type: Number,
      default: 0
    },
    quantity: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    }
  },
  computed: {
    inputCardStyleObj() {
      return { 'padding-top': `${this.nowHeight(5)}px`, 'height': `${this.nowHeight(100)}px` }
    },
    labelStyleObj() {
      return { 'font-size': `${this.nowSize(18)}px`, 'color': '#BEBEBE', 'margin-top': `${this.nowSize(15)}px` }
    },
    marginStyleObj() {
      return { 'margin': `0 ${this.nowSize(20)}px` }
    },
    numberStyleObj() {
      return { 'margin-top': `${this.nowHeight(5)}px` }
    },
    valueStyleObj() {
      return { 'font-size': `${this.nowSize(26)}px` }
    },
    unitStyleObj() {
      return { 'font-size': `${this.nowSize(16)}px` }
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
.total-container {
  display: flex;
  flex-wrap: nowrap;
  .input-card {
    background: rgba(0, 0, 0, 0.5);
    background-clip: border-box;
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    vertical-align: middle;
    flex: 1;

    .label {
    }
    .number {
      color: $--color-font;
      .value {
      }
      .unit {
      }
    }
  }
}

</style>
