<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script>
import MusicList from '../music-list/music-list'
import {mapGetters} from 'vuex'
import {getSongList, getMusicVkey} from 'api/recommend'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'

export default {
  name: 'disc',
  props: {},
  data() {
    return {
      songs: []
    }
  },
  computed: {
    title() {
      return this.disc.dissname
    },
    bgImage() {
      return this.disc.imgurl
    },
    ...mapGetters([
      'disc'
    ])
  },
  created() {
    this._getSongList()
  },
  methods: {
    _getSongList() {
      if (!this.disc.dissid) {
        this.$router.push('./recommend')
        return
      }
      getSongList(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._noramlizeSongs(res.cdlist[0].songlist)
          console.log(this.songs)
        }
      })
    },
    _noramlizeSongs(list) {
      let ret = []
      list.forEach(musicData => {
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
  .slide-enter-active, .slider-leave-active
    transition all 0.3s
  .slider-enter, .slider-leave-to
    transform translate3d(100%, 0, 0)
</style>