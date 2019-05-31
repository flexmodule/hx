import request from '../utils/request.js';

import * as url from './url'
export function getgoodslist(data) {//
  return request.get(url.getgoodslist, {params:data}).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function holdOrderList(data) {
  return request.post(url.holdOrder, data, {
    headers: {
      
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

