import {http} from './index'

export function getHomeMultidata() {
  return http({
    url: '/home/multidata',
  })
}
