<template>
  <div>
    <div ref="province" class="province-label" :style="{left: left, top: '100px', width: `${width}px`, 'text-align': 'center', 'margin-top':`${nowHeight(10)}px`}">
      <center-title :title="title" />

      <div v-if="showStatistics" class="province-flex-card" :style="{'margin-top': `${nowHeight(20)}px`}">
        <total-statistics :count="115" :area="1781.58" :quantity="4967.90" />
      </div>
    </div>

    <div
      v-if="showBar"
      class="area-card"
      :style="{left: left, width: `${width}px`,
               'padding': `${nowHeight(20)}px`, 'margin-top': `${top}px`}"
    >
      <div class="title" :style="{'font-size': `${nowSize(18)}px`}">各区域分布
        <el-radio-group v-model="radio" class="tree-check-radio area-radio" @change="changeRadio">
          <el-radio v-for="(l, index) in labels" :key="index" :label="l">{{ l }}</el-radio>
        </el-radio-group>
      </div>
      <echarts-bar
        class="echarts-bar"
        :style="{ 'margin-top': `${nowHeight(10)}px`}"
        :chart-data="items"
        :width="width-40"
        :height="nowHeight(150)"
      />
    </div>
  </div>

</template>

<script>
// 顶部中间位置
import EchartsBar from '@/views/dashboard/map/compoennts/bar'
import TotalStatistics from './compoennts/totalStatistics'
import CenterTitle from './compoennts/centerTitle'

export default {
  components: { EchartsBar, CenterTitle, TotalStatistics },
  props: {
    title: {
      type: String,
      default: '陕西省'
    },
    showStatistics: {
      type: Boolean,
      default: true
    },
    showBar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: [],
      width: document.documentElement.clientWidth / 3,
      top: undefined,
      radio: '样地数',
      labels: ['样地数', '面积', '碳储量'],
      items: []
    }
  },
  computed: {
    left() {
      return `${(document.documentElement.clientWidth - this.width) / 2}px`
    }
  },
  created() {
    this.data = [
      { value: 25, name: '林地', label: { color: '#E57F2C' }, itemStyle: { color: '#D1985C' }},
      { value: 25, name: '草原', label: { color: '#4374CB' }, itemStyle: { color: '#4374CB' }},
      { value: 25, name: '荒漠', label: { color: '#2CE57F' }, itemStyle: { color: '#5CC76A' }},
      { value: 25, name: '湿地', label: { color: '#17C3DA' }, itemStyle: { color: '#28A6E9' }}
    ]
    this.items = [120, 190, 150, 80, 70, 110, 130]
  },
  mounted() {
    this.top = this.$refs.province.offsetHeight + 100 + this.nowHeight(15 + 20)
  },
  methods: {
    changeRadio(val) {
      if (val !== '样地数') {
        for (let i = 0, len = this.items.length; i < len; i++) {
          const rand = parseInt(Math.random() * len)
          const temp = this.items[rand]
          this.items[rand] = this.items[i]
          this.items[i] = temp
        }
      } else {
        this.items = Object.assign([], this.values)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
.province-label {
  display: block;
  position: absolute;
}
.province-flex-card {
  position: relative;
}

.area-card {
  background: rgba(46, 53, 71, 0.5);
  background-clip: border-box;
  border-width: 0;
  color: $--color-font;
  border-radius: 0.4rem;
  position: relative;
  .title {
  }
  .area-radio {
    float: right;
  }
  .echarts-bar {
  }
}
</style>
