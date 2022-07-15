<template>
  <el-card class="business-rectangle-card  sample-rectangle-container business-card-padding-5" :style="rectangleStyleObj" shadow="always">
    <div>
      <span class="sample-value" :style="valueStyleObj"> {{ value }}</span>
      <span class="sample-unit" :style="unitStyleObj"> {{ unit }}</span>
    </div>
    <div class="sample-title" :style="titleStyleObj">
      {{ title }}
    </div>
  </el-card>
</template>

<script>

export default {
  components: { },
  props: {
    title: {
      type: String,
      default: undefined
    },
    unit: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: ''
    }
  },
  data() {
    return {
    }
  },
  computed: {
    rectangleStyleObj() {
      return { 'width': `${this.nowWidth(151)}px`,
        'height': `50px`,
        'margin-bottom': `${this.nowHeight(10)}px`,
        'margin-right': `${this.nowWidth(15)}px` }
    },
    valueStyleObj() {
      return { 'font-size': `${this.nowSize(16)}px`, 'margin-top': `${this.nowHeight(10)}px` }
    },
    unitStyleObj() {
      return { 'font-size': `${this.nowSize(12)}px` }
    },
    titleStyleObj() {
      return { 'font-size': `${this.nowSize(12)}px`, 'margin-top': `${this.nowHeight(3)}px` }
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
.sample-rectangle-container {
  text-align: center;
  background-color: #191E2C !important;
  .sample-value {
    color: #2A9A30;
    font-weight: bold;
  }
  .sample-unit {
    color: #2A9A30;
  }
  .sample-title {
    color: #FFFFFF;
  }
}
</style>
