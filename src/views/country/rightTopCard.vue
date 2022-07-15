<template>
  <div class="video-container" :style="{'width': `${nowWidth(400)}px`}">
    <div class="live"><live-content /></div>

    <div class="video" :style="{'margin-top': `${nowHeight(20)}px`}"><video-content /></div>
  </div>
</template>

<script>
import VideoContent from '@/views/country/bottom/components/video'
import LiveContent from '@/views/country/bottom/components/live'

export default {
  components: { LiveContent, VideoContent },
  props: {
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.video-container {
  position: absolute;
  top: 100px;
  display: block;
  right: 3%;
  .video {

  }
}

</style>
