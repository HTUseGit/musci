<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { getMusicVkey } from 'api/recommend'
import { createSong } from 'common/js/song'
import { ERR_OK } from 'api/config'
import MusicList from '../music-list/music-list'
export default {
  name: 'singer-detail',
  props: {},
  data() {
    return {
      songs: []
    }
  },
  computed: {
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    this._getDetail()
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push('/singer')
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach(item => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          getMusicVkey(musicData).then((res) => {
            let vkey = res.data.items[0].vkey
            ret.push(createSong(musicData, vkey))
          })
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
.slide-enter-active, .slide-leave-active
  transition all 0.3s
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>