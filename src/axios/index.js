import axios from 'axios'

export function http(config) {
  const http = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
    // method: 'POST'
  })

  http.interceptors.request.use(config => {
    return config
  }, error => {

  })

  http.interceptors.response.use(res => {
    return res.data
  }, error => {

  })

  //发送网络请求
  return http(config)
}
