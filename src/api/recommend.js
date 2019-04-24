import { commonParams } from './config'
// import jsonp from 'common/js/jsonp'
import axios from 'axios'
export function getRecommend() {
  const url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    format: 'json',
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getDiscList() {
  const url = '/api/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    picmid: 1,
    hostUin: 0,
    loginUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    format: 'json',
    rnd: Math.random()
  })

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function getMusicVkey(musicId) {
  const url = '/api/base/fcgi-bin/fcg_music_express_mobile3.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    loginUin: 0,
    uin: 0,
    needNewCode: 0,
    cid: 205361747,
    guid: 1415701640,
    songmid: musicId.songmid,
    filename: 'C400' + musicId.songmid + '.m4a',
    format: 'json'
  })
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}

// 推荐页面的歌单点击后歌单的歌曲列表接口,先写的死数据
export function getSongList(disstid) {
  const url = '/api/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  const data = Object.assign({}, commonParams, {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid,
    hostUin: 0,
    loginUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    format: 'json'
  })
  return axios
    .get(url, {
      params: data
    })
    .then((res) => {
      console.log(res)
      const a = {
        code: 0,
        subcode: 0,
        accessed_plaza_cache: 1,
        accessed_favbase: 0,
        login: 'on**',
        cdnum: 1,
        cdlist: [
          {
            disstid: '4223241703',
            coveradurl: '',
            dissid: 4223241,
            login: 'on**',
            uin: 'ownPNKokoiSANv**',
            encrypt_uin: 'ownPNKokoiSANv**',
            owndir: 0,
            dissname: '25首俘获少女心的无前奏男嗓',
            logo: 'http://p.qpic.cn/music_cover/7oEZniaD5qHmjHdLicsHsKhcH2HFEXVa2dNV7OQcA7T9weDDmWu2gydA/300?n=1',
            pic_mid: '',
            album_pic_mid: '',
            pic_dpi: 300,
            isAd: 0,
            desc: '清新芬芳的旋律带着温柔动情的男声绕耳转三转。<br>赠一片深情予你，你手握动情于心。<br>嗅着音乐里淡淡清香的味道，满心欢喜。<br>环绕耳际的旋律小精灵轻轻吹拂你的身心，陶醉不已。',
            ctime: 1532332990,
            mtime: 0,
            headurl: 'http://thirdqq.qlogo.cn/g?b=sdk&k=libQwZRysnctiar1IRNImT5A&s=140&t=1500267692',
            ifpicurl: 'https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/114042.png',
            nick: 'Krystal Lee',
            nickname: 'Krystal Lee',
            type: 2,
            singerid: 0,
            singermid: '',
            isvip: 1,
            isdj: 0,
            tags: [
              {
                id: 167,
                name: '英语',
                pid: 167
              },
              {
                id: 6,
                name: '流行',
                pid: 6
              },
              {
                id: 81,
                name: '旅行',
                pid: 81
              }
            ],
            songnum: 25,
            songids: '102781149,3913422,107347845,105917749,202615682,109290536,202830804,9483364,5162439,201248980,5222351,204706772,1021608,200811757,4731545,102636726,107586651,108988799,5050061,101133170,106533162,210077124,102389015,108984124,105646539',
            songtypes: '13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13',
            disstype: 0,
            dir_pic_url2: '',
            song_update_time: 0,
            song_update_num: 0,
            total_song_num: 25,
            song_begin: 0,
            cur_song_num: 25,
            songlist: [
              {
                albumdesc: '',
                albumid: 854317,
                albummid: '004OnjWD3RTM9t',
                albumname: 'Let It Go',
                alertid: 100002,
                belongCD: 5,
                cdIdx: 0,
                interval: 217,
                isonly: 1,
                label: '4611686018431582544',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 162883,
                    mid: '002lEZhw40S6NW',
                    name: 'James Bay'
                  }
                ],
                size128: 3475556,
                size320: 8688552,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4608500,
                songid: 102781149,
                songmid: '000nWtcc3Ag1l6',
                songname: 'Running',
                songorig: 'Running',
                songtype: 0,
                strMediaMid: '000nWtcc3Ag1l6',
                stream: 7,
                switch: 636675,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 338605,
                albummid: '000UCQll2w86zQ',
                albumname: 'The Eventually Home',
                alertid: 11,
                belongCD: 5,
                cdIdx: 0,
                interval: 107,
                isonly: 0,
                label: '4611686018435776784',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 112471,
                    mid: '004ac6pe0ipquO',
                    name: 'Right Away Great Captain'
                  }
                ],
                size128: 1717678,
                size320: 4293769,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 2956636,
                songid: 3913422,
                songmid: '0030HYRS126PZP',
                songname: 'What A Pity',
                songorig: 'What A Pity',
                songtype: 0,
                strMediaMid: '001jCWf10xnelu',
                stream: 5,
                switch: 81719,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 1479039,
                albummid: '0042hDtQ0LwdEK',
                albumname: 'The Best Crew',
                alertid: 100002,
                belongCD: 1,
                cdIdx: 0,
                interval: 236,
                isonly: 1,
                label: '4611686018435776528',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 964162,
                    mid: '000LQfEd1fIPvC',
                    name: 'Tep No'
                  }
                ],
                size128: 3789875,
                size320: 9474329,
                size5_1: 0,
                sizeape: 28112784,
                sizeflac: 28335331,
                sizeogg: 5912616,
                songid: 107347845,
                songmid: '003uIeFI0zSdmw',
                songname: 'The Best Crew',
                songorig: 'The Best Crew',
                songtype: 0,
                strMediaMid: '001xOqK33NTM0y',
                stream: 9,
                switch: 636675,
                type: 0,
                vid: 'm0021djxrot'
              },
              {
                albumdesc: '',
                albumid: 1327068,
                albummid: '004UKD3D3J2Ucn',
                albumname: 'The New England Sessions',
                alertid: 11,
                belongCD: 5,
                cdIdx: 0,
                interval: 188,
                isonly: 0,
                label: '4611686018431582288',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 27910,
                    mid: '004Q1Y1o1qv9Pr',
                    name: 'Ron Pope'
                  }
                ],
                size128: 3018801,
                size320: 0,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 0,
                songid: 105917749,
                songmid: '001B7Q894CxvWm',
                songname: 'I Do not Mind If You Do not Mind',
                songorig: 'I Do not Mind If You Do not Mind',
                songtype: 0,
                strMediaMid: '001B7Q894CxvWm',
                stream: 8,
                switch: 81683,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 2095140,
                albummid: '004GbomJ2Cx8RH',
                albumname: 'Golden Dandelions',
                alertid: 100002,
                belongCD: 1,
                cdIdx: 0,
                interval: 204,
                isonly: 1,
                label: '0',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 1045766,
                    mid: '00157Gnl2OMl4O',
                    name: 'Barns Courtney'
                  }
                ],
                size128: 3278743,
                size320: 8196451,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4735818,
                songid: 202615682,
                songmid: '004afWrp2SbhNH',
                songname: 'Golden Dandelions',
                songorig: 'Golden Dandelions',
                songtype: 0,
                strMediaMid: '004afWrp2SbhNH',
                stream: 0,
                switch: 636675,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 1699777,
                albummid: '00473rtI2wgIiS',
                albumname: 'She Looks So Perfect',
                alertid: 11,
                belongCD: 1,
                cdIdx: 0,
                interval: 159,
                isonly: 0,
                label: '4611686018427387920',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 180847,
                    mid: '002p1HJ53V67Ae',
                    name: 'MAX'
                  }
                ],
                size128: 2552738,
                size320: 0,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 0,
                songid: 109290536,
                songmid: '003GolXC2mqQva',
                songname: 'She Looks So Perfect',
                songorig: 'She Looks So Perfect',
                songtype: 0,
                strMediaMid: '003GolXC2mqQva',
                stream: 7,
                switch: 81683,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 2118379,
                albummid: '0001lRWB0Wc66f',
                albumname: '2:00am in LA',
                alertid: 11,
                belongCD: 5,
                cdIdx: 0,
                interval: 199,
                isonly: 0,
                label: '0',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 157734,
                    mid: '001dBswQ3gbvwT',
                    name: 'Jake Miller'
                  }
                ],
                size128: 3186342,
                size320: 7965497,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 3987651,
                songid: 202830804,
                songmid: '0037aSUi1ab4uT',
                songname: 'Palm Blvd',
                songorig: 'Palm Blvd',
                songtype: 0,
                strMediaMid: '0037aSUi1ab4uT',
                stream: 0,
                switch: 81719,
                type: 0,
                vid: 'p002468xp2i'
              },
              {
                albumdesc: '',
                albumid: 805903,
                albummid: '003dmScv0z6tlI',
                albumname: 'The World Is Ours',
                alertid: 100002,
                belongCD: 1,
                cdIdx: 0,
                interval: 235,
                isonly: 1,
                label: '4611686018435776528',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 156753,
                    mid: '001YxqHz3bwgCj',
                    name: 'Eleven Past One'
                  }
                ],
                size128: 3770683,
                size320: 9426298,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 5328973,
                songid: 9483364,
                songmid: '001xgXmL0i4obX',
                songname: 'The World Is Ours',
                songorig: 'The World Is Ours',
                songtype: 0,
                strMediaMid: '001xgXmL0i4obX',
                stream: 3,
                switch: 636675,
                type: 0,
                vid: 'o0022wik7u3'
              },
              {
                albumdesc: '',
                albumid: 454323,
                albummid: '0041ctEL3g6ffz',
                albumname: 'Timeshare - EP',
                alertid: 11,
                belongCD: 4,
                cdIdx: 0,
                interval: 203,
                isonly: 0,
                label: '4611686018435780624',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 177550,
                    mid: '002olipA0WH1IR',
                    name: 'Shy Girls'
                  }
                ],
                size128: 3263261,
                size320: 8157772,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4522682,
                songid: 5162439,
                songmid: '002qwGvI3L5z42',
                songname: 'Second Heartbeat',
                songorig: 'Second Heartbeat',
                songtype: 0,
                strMediaMid: '003qYq6V39hGF8',
                stream: 3,
                switch: 81719,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 1917848,
                albummid: '003HnMW72FhDL5',
                albumname: 'Chandelier',
                alertid: 11,
                belongCD: 1,
                cdIdx: 0,
                interval: 152,
                isonly: 0,
                label: '0',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 39000,
                    mid: '000jnR7q3pCzYG',
                    name: 'Charlie Puth'
                  }
                ],
                size128: 2444525,
                size320: 0,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 0,
                songid: 201248980,
                songmid: '000ZkvlD4dSP31',
                songname: 'Chandelier',
                songorig: 'Chandelier',
                songtype: 0,
                strMediaMid: '000ZkvlD4dSP31',
                stream: 0,
                switch: 81683,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 456422,
                albummid: '0009YumJ4NQAtg',
                albumname: 'One Day',
                alertid: 100002,
                belongCD: 2,
                cdIdx: 0,
                interval: 246,
                isonly: 1,
                label: '4611686018431582288',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 91395,
                    mid: '003Vel6S1aX3UU',
                    name: 'Kodaline'
                  }
                ],
                size128: 3952034,
                size320: 9879740,
                size5_1: 0,
                sizeape: 28267683,
                sizeflac: 28362712,
                sizeogg: 5544086,
                songid: 5222351,
                songmid: '003KKP340QuQQH',
                songname: 'Take Control',
                songorig: 'Take Control',
                songtype: 0,
                strMediaMid: '000yHDsf3ZkfKU',
                stream: 8,
                switch: 636675,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 2332356,
                albummid: '0018IzoF1Ydk6w',
                albumname: 'You & Me',
                alertid: 11,
                belongCD: 1,
                cdIdx: 0,
                interval: 190,
                isonly: 0,
                label: '0',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 1104128,
                    mid: '003T09nh37Pq4N',
                    name: 'Marshmello'
                  }
                ],
                size128: 3053419,
                size320: 7633207,
                size5_1: 0,
                sizeape: 23592914,
                sizeflac: 23555876,
                sizeogg: 4452535,
                songid: 204706772,
                songmid: '0017TCE24Q2Xy6',
                songname: 'You & Me',
                songorig: 'You & Me',
                songtype: 0,
                strMediaMid: '002JAmxf4QtDqJ',
                stream: 6,
                switch: 81719,
                type: 0,
                vid: 'j0025tsdeq4'
              },
              {
                albumdesc: '',
                albumid: 86891,
                albummid: '004WXnaV0T5p11',
                albumname: 'Falling Through Holes',
                alertid: 11,
                belongCD: 4,
                cdIdx: 0,
                interval: 205,
                isonly: 0,
                label: '4611686018435776528',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 24787,
                    mid: '004OEjhg3GMNWT',
                    name: 'Jared Lee'
                  }
                ],
                size128: 3292579,
                size320: 8227633,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4784938,
                songid: 1021608,
                songmid: '0021Jm173hJ8O2',
                songname: 'Out Of Breath',
                songorig: 'Out Of Breath',
                songtype: 0,
                strMediaMid: '0021Jm173hJ8O2',
                stream: 1,
                switch: 81719,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 1862907,
                albummid: '003GJEqz2hSBNy',
                albumname: 'Screw Me Up',
                alertid: 11,
                belongCD: 1,
                cdIdx: 0,
                interval: 199,
                isonly: 0,
                label: '0',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 56564,
                    mid: '000B24Bo3jmy7E',
                    name: 'Donny Montell'
                  }
                ],
                size128: 3192624,
                size320: 7981182,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4582956,
                songid: 200811757,
                songmid: '000K97tO2a0wLK',
                songname: 'Screw Me Up',
                songorig: 'Screw Me Up',
                songtype: 0,
                strMediaMid: '000K97tO2a0wLK',
                stream: 7,
                switch: 81719,
                type: 0,
                vid: 'f0022l3um76'
              },
              {
                albumdesc: '',
                albumid: 420814,
                albummid: '003pylB71rXUdP',
                albumname: 'Resolution',
                alertid: 11,
                belongCD: 3,
                cdIdx: 0,
                interval: 209,
                isonly: 0,
                label: '4611686018435776528',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 31937,
                    mid: '002ws5HJ2ICpKS',
                    name: 'Action Item'
                  }
                ],
                size128: 3349752,
                size320: 8374040,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4696549,
                songid: 4731545,
                songmid: '00233TW22FgEPQ',
                songname: 'Brave',
                songorig: 'Brave',
                songtype: 0,
                strMediaMid: '004WccV30EtBsJ',
                stream: 4,
                switch: 81719,
                type: 0,
                vid: 'r0018uig69b'
              },
              {
                albumdesc: '',
                albumid: 1015786,
                albummid: '00028LSc3qDG7s',
                albumname: 'Fashionably Late',
                alertid: 11,
                belongCD: 3,
                cdIdx: 0,
                interval: 259,
                isonly: 0,
                label: '4611686018435776528',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 31465,
                    mid: '000RExxI3qWnjj',
                    name: 'Travis Garland'
                  }
                ],
                size128: 4156464,
                size320: 0,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 0,
                songid: 102636726,
                songmid: '001XJRvR45yf4M',
                songname: 'Did not Stand A Chance',
                songorig: 'Did not Stand A Chance',
                songtype: 0,
                strMediaMid: '001XJRvR45yf4M',
                stream: 6,
                switch: 81683,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 1507614,
                albummid: '003KTcHM3817eA',
                albumname: 'Waking Up',
                alertid: 11,
                belongCD: 4,
                cdIdx: 0,
                interval: 251,
                isonly: 0,
                label: '4611686018427387920',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 90304,
                    mid: '002iItE74RiMWQ',
                    name: 'Emblem3'
                  }
                ],
                size128: 4028950,
                size320: 10072013,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 6053656,
                songid: 107586651,
                songmid: '001E6xZr3c6gSj',
                songname: 'Out of This World',
                songorig: 'Out of This World',
                songtype: 0,
                strMediaMid: '001E6xZr3c6gSj',
                stream: 4,
                switch: 606007,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 1660752,
                albummid: '003It96v3KNPSc',
                albumname: 'home',
                alertid: 100002,
                belongCD: 1,
                cdIdx: 0,
                interval: 216,
                isonly: 1,
                label: '4611686018435776528',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 180125,
                  tryend: 211077,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 1084159,
                    mid: '004A0oAW1tYnjI',
                    name: 'Gnash'
                  },
                  {
                    id: 1265815,
                    mid: '0030Odap1GnrsD',
                    name: 'Johnny Yukon'
                  }
                ],
                size128: 3457978,
                size320: 8644643,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 5321643,
                songid: 108988799,
                songmid: '003oNbmh3dCTpy',
                songname: 'home',
                songorig: 'home',
                songtype: 0,
                strMediaMid: '003oNbmh3dCTpy',
                stream: 2,
                switch: 636675,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 440725,
                albummid: '003L5Xjy4KAyg0',
                albumname: 'What a Heart Is Beating For',
                alertid: 100002,
                belongCD: 7,
                cdIdx: 0,
                interval: 183,
                isonly: 1,
                label: '4611686018435776592',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 43042,
                    mid: '001YBd200Fn4at',
                    name: 'Chris Rice'
                  }
                ],
                size128: 2938519,
                size320: 7359489,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4719993,
                songid: 5050061,
                songmid: '001iRF8f1hQMwX',
                songname: 'Lemonade',
                songorig: 'Lemonade',
                songtype: 0,
                strMediaMid: '001iRF8f1hQMwX',
                stream: 5,
                switch: 632579,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 438635,
                albummid: '000cpezj0bIAAW',
                albumname: 'Can We Dance',
                alertid: 100002,
                belongCD: 1,
                cdIdx: 0,
                interval: 192,
                isonly: 1,
                label: '4611686018431582288',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 158855,
                    mid: '003Ck1mm4Zj9oQ',
                    name: 'The Vamps'
                  }
                ],
                size128: 3085616,
                size320: 7713678,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4442104,
                songid: 101133170,
                songmid: '001PzyIA1bjOYL',
                songname: 'Can We Dance',
                songorig: 'Can We Dance',
                songtype: 0,
                strMediaMid: '001PzyIA1bjOYL',
                stream: 5,
                switch: 636675,
                type: 0,
                vid: 'j0016krld00'
              },
              {
                albumdesc: '',
                albumid: 1394093,
                albummid: '002Hm8Rn2VUK6Z',
                albumname: 'Take Me to Infinity',
                alertid: 100002,
                belongCD: 1,
                cdIdx: 0,
                interval: 207,
                isonly: 1,
                label: '4611686018427387920',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 32527,
                  tryend: 78156,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 113392,
                    mid: '003y98XV0l97gx',
                    name: 'Consoul Trainin'
                  }
                ],
                size128: 3324753,
                size320: 8311166,
                size5_1: 0,
                sizeape: 24377823,
                sizeflac: 24416097,
                sizeogg: 4856875,
                songid: 106533162,
                songmid: '004FJOWZ00rqHw',
                songname: 'Take Me to Infinity',
                songorig: 'Take Me to Infinity',
                songtype: 0,
                strMediaMid: '004FJOWZ00rqHw',
                stream: 3,
                switch: 636675,
                type: 0,
                vid: 'n00263vahb1'
              },
              {
                albumdesc: '',
                albumid: 3018192,
                albummid: '001x8H471rKnuz',
                albumname: 'Miss You',
                alertid: 23,
                belongCD: 1,
                cdIdx: 0,
                interval: 181,
                isonly: 1,
                label: '0',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 1300700,
                    mid: '000wpanb0Nv012',
                    name: 'Louis Tomlinson'
                  }
                ],
                size128: 2903382,
                size320: 7258099,
                size5_1: 0,
                sizeape: 22446739,
                sizeflac: 22481469,
                sizeogg: 4194972,
                songid: 210077124,
                songmid: '004AicWh4Q3UoG',
                songname: 'Miss You (Explicit)',
                songorig: 'Miss You',
                songtype: 0,
                strMediaMid: '000fBo1p0GsAqb',
                stream: 0,
                switch: 636675,
                type: 0,
                vid: 'q00256kq5xu'
              },
              {
                albumdesc: '',
                albumid: 778484,
                albummid: '002GlpBE0lEIxQ',
                albumname: 'The Long Way',
                alertid: 100002,
                belongCD: 1,
                cdIdx: 0,
                interval: 173,
                isonly: 1,
                label: '4611686018435776592',
                msgid: 14,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 1,
                  payinfo: 1,
                  payplay: 0,
                  paytrackmouth: 1,
                  paytrackprice: 200,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 60572,
                    mid: '004VFKY72vwxXK',
                    name: 'The Coronas'
                  }
                ],
                size128: 2775499,
                size320: 6938372,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4200700,
                songid: 102389015,
                songmid: '000VBGFs1aRYtn',
                songname: 'All the Others',
                songorig: 'All the Others',
                songtype: 0,
                strMediaMid: '001I5WfX4LXoQq',
                stream: 4,
                switch: 636675,
                type: 0,
                vid: 'e0014nd5h6c'
              },
              {
                albumdesc: '',
                albumid: 8623,
                albummid: '001ZaCQY2OxVMg',
                albumname: '   ',
                alertid: 11,
                belongCD: 3,
                cdIdx: 0,
                interval: 136,
                isonly: 0,
                label: '4611686018427387920',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 1265227,
                    mid: '004KDUkk0niZQD',
                    name: 'Justin Bryte'
                  }
                ],
                size128: 2190802,
                size320: 5476588,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 3144672,
                songid: 108984124,
                songmid: '001Hd6ex1Nktna',
                songname: 'One Last Time',
                songorig: 'One Last Time',
                songtype: 0,
                strMediaMid: '001Hd6ex1Nktna',
                stream: 3,
                switch: 81719,
                type: 0,
                vid: ''
              },
              {
                albumdesc: '',
                albumid: 1291531,
                albummid: '003xlOzD3TarFt',
                albumname: 'Stitches',
                alertid: 11,
                belongCD: 1,
                cdIdx: 0,
                interval: 199,
                isonly: 0,
                label: '4611686018435776528',
                msgid: 0,
                pay: {
                  payalbum: 0,
                  payalbumprice: 0,
                  paydownload: 0,
                  payinfo: 0,
                  payplay: 0,
                  paytrackmouth: 0,
                  paytrackprice: 0,
                  timefree: 0
                },
                preview: {
                  trybegin: 0,
                  tryend: 0,
                  trysize: 0
                },
                rate: 0,
                singer: [
                  {
                    id: 23135,
                    mid: '0001RhJI44f8tn',
                    name: 'Sam Tsui'
                  }
                ],
                size128: 3193432,
                size320: 7983244,
                size5_1: 0,
                sizeape: 0,
                sizeflac: 0,
                sizeogg: 4419674,
                songid: 105646539,
                songmid: '004W8h2R4K74c8',
                songname: 'Stitches',
                songorig: 'Stitches',
                songtype: 0,
                strMediaMid: '004W8h2R4K74c8',
                stream: 1,
                switch: 81719,
                type: 0,
                vid: ''
              }
            ],
            visitnum: 529775,
            cmtnum: 0,
            buynum: 0,
            scoreavage: '0.0',
            scoreusercount: 0
          }
        ],
        realcdnum: 1
      }
      return Promise.resolve(a)
    })
}