<template>
  <div class="province-title" :style="{'font-size': `${nowSize(22)}px`}">
    <div><span class="center-title" :style="{ 'padding': `0 ${nowWidth(15)}px` }">{{ title }}</span></div>
  </div>
</template>

<script>

export default {
  components: { },
  props: {
    title: {
      type: String,
      default: '陕西省'
    }
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/element-variables.scss";
.province-title {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  color: $--color-font;;
  .center-title {
  }
}
.province-title:before,
.province-title:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid $--color-font;
  margin: auto;
}
</style>
