import axios from 'axios'

export function http(config) {
  const http = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  http.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error);
  })

  http.interceptors.response.use(res => {
    // console.log(res);
    return res.data.data
  }, error => {
    console.log(error);
  })

  //发送网络请求
  return http(config)
}
