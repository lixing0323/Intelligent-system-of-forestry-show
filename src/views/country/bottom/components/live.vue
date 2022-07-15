<template>
  <div class="player">
    <video-player
      class="video-player vjs-custom-skin"
      :options="playerOptions"
      @ready="playerReadied"
    />
  </div>
</template>

<script>
// custom skin css
// videojs
import videojs from 'video.js'
window.videojs = videojs
// hls plugin for videojs6
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
import LiveImage from '@/assets/city/1.png'

export default {
  components: { },
  props: {
  },
  data() {
    return {
      playerOptions: {
        id: 'live',
        // videojs and plugin options
        height: String(this.nowHeight(225)),
        width: String(this.nowHeight(400)),
        language: 'zh-CN',
        sources: [{
          withCredentials: false,
          type: 'application/x-mpegURL',
          src: 'https://open.ys7.com/v3/openlive/G23645265_1_2.m3u8?expire=1663383212&id=360740393407492096&t=363b50f70b10c95667855463f0e400d4c308497dbb8e470bc83b94af6cd88c56&ev=100'
        }],
        controlBar: {
          timeDivider: false,
          durationDisplay: false
        },
        flash: { hls: { withCredentials: false }},
        html5: { hls: { withCredentials: false }},
        poster: LiveImage
      }
    }
  },
  created() {
  },
  methods: {
    playerReadied(player) {
      player.tech({ IWillNotUseThisInPlugins: true }).hls
      player.tech_.hls.xhr.beforeRequest = function(options) {
        return options
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
