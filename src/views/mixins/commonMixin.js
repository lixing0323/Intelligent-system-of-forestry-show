export default {
  props: {
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    // 获取正常的宽度
    nowWidth(width) {
      let current = width
      const docEl = document.documentElement
      const clientWidth = docEl.clientWidth || window.innerWidth

      if (clientWidth) {
        current = width * clientWidth / 1920
      }
      return current
    },
    nowHeight(height) {
      let current = height
      const docEl = document.documentElement
      const clientHeight = docEl.clientHeight || window.innerHeight

      if (clientHeight) {
        current = height * clientHeight / 1080
      }
      return current
    },
    nowSize(size) {
      let current = size
      const docEl = document.documentElement
      const clientWidth = docEl.clientWidth || window.innerWidth

      if (clientWidth) {
        current = size * clientWidth / 1920
      }
      return current
    },
    getTitleStyle() {
      return { 'font-weight': 'bold', 'font-size': `${this.nowSize(24)}px`, 'padding': `${this.nowHeight(20)}px 0 0 ${this.nowWidth(20)}px` }
    },
    getCardStyle() {
      return { width: `${this.nowWidth(500)}px`, height: `${this.nowHeight(400)}px`, padding: `${this.nowHeight(20)}px` }
    }
  }
}

