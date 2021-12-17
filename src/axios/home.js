import {http, baseRequest} from './index'

export function getHomeMultidata() {
  return http({
    url: '/home/multidata',
  })
}

//获取商品数据，page从1开始
export function getGoods(type, page) {
  return baseRequest({
    url: 'getGoods',
    params: {
      type,
      page
    }
  })
}

