<template>
  <div class="input-card" :style="{right:'3%', bottom: '3%', width: '500px', height: '400px' }">
    <dv-loading v-if="cardLoading">加载中</dv-loading>
    <template v-if="!cardLoading">
      <div class="title">样地碳储量排名</div>
      <el-radio-group v-model="radio" class="tree-check-radio" @change="changeRadio">
        <el-radio v-for="(l, index) in labels" :key="index" :label="l">{{ l }}</el-radio>
      </el-radio-group>
      <div class="progress-div">
        <div class="right-title">碳储量(吨)</div>
        <progress-line v-for="(item, index) in items" :key="index" :title="item.title" :value="item.value" :max="40" />
      </div>
    </template>
  </div>
</template>

<script>
import ProgressLine from './compoennts/progress'

export default {
  components: { ProgressLine },
  props: {
    cardLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radio: '全部',
      labels: ['全部', '林地', '草原', '湿地', '荒漠'],
      items: [],
      values: [
        { title: '澄城壶梯山', value: 11.21 },
        { title: '澄城樊家川', value: 18 },
        { title: '澄城邓母', value: 22 },
        { title: '澄城阿銮寨', value: 31 },
        { title: '澄城南社', value: 26.52 },
        { title: '澄城团结', value: 10 },
        { title: '澄城权家河', value: 25.98 },
        { title: '澄城寺前镇', value: 8 },
        { title: '澄城赵庄镇', value: 19.62 }
      ]
    }
  },
  created() {
    this.items = Object.assign([], this.values)
  },
  methods: {
    changeRadio(val) {
      if (val !== '全部') {
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
  .input-card {
    background: rgba(46, 53, 71, 0.5);
    background-clip: border-box;
    border-width: 0;
    color: $--color-font;
    border-radius: 0.4rem;
    padding: 20px;
    display: block;
    position: absolute;
    .title {
      font-size: 24px;
      font-weight: bold;
      padding: 20px 0 0 20px;
    }
    .tree-check-radio {
      margin-top: 20px;
    }
    .progress-div {
      .right-title {
        text-align: right;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
  }

</style>
