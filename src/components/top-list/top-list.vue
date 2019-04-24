<template>
  <transition name="slide">
    <music-list :rank="rank" :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
import MusicList from '../music-list/music-list'
import { mapGetters } from 'vuex'
import { getMusicList } from 'api/rank'
import { getMusicVkey } from 'api/recommend'
import { createSong } from 'common/js/song'
import { ERR_OK } from 'api/config'

export default {
  name: '',
  props: {},
  data() {
    return {
      songs: [],
      rank: true
    }
  },
  computed: {
    title() {
      return this.topList.topTitle
    },
    bgImage() {
      if (this.songs.length) {
        return this.songs[0].image
      }
      return ''
    },
    ...mapGetters([
      'topList'
    ])
  },
  methods: {
    _getTopList() {
      if (!this.topList.id) {
        this.$router.push('./rank')
        return
      }
      getMusicList(this.topList.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songs = this._normalizeSongs(res.songlist)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach(item => {
        let musicData = item.data
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
  created() {
    this._getTopList()
  },
  components: {
    MusicList
  }
}
</script>
<style lang="stylus" scoped>
.slide-enter-active, .slide-leaver-active
  transition all 0.3s ease
.slide-enter, .slide-leave-to
  transform translate3d(100%, 0, 0)
</style>