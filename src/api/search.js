import { commonParams } from './config'
import axios from 'axios'

export function getHotkey() {
  const url = '/api/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    format: 'json',
    platform: 'h5',
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

export function search(query, page, zhida, perpage) {
  const url = '/api/soso/fcgi-bin/search_for_qq_cp'
  const data = Object.assign({}, commonParams, {
    format: 'json',
    platform: 'h5',
    needNewCode: 1,
    uid: 0,
    w: query,
    p: page,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf - 8',
    sem: 1,
    aggr: 0,
    perpage: perpage,
    n: perpage,
    remoteplace: 'txt.mqq.all'
  })
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}