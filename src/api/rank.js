import { commonParams } from './config'
import axios from 'axios'

export function getTopList() {
  const url = '/api/v8/fcg-bin/fcg_myqq_toplist.fcg'
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

export function getMusicList(topid) {
  const url = '/api/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParams, {
    format: 'json',
    platform: 'h5',
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid,
    needNewCode: 1,
    _: 1533266170925
  })
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}