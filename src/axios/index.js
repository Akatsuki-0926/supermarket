import axios from 'axios'

export function getRequest(config) {
  const http = axios.create({
    baseURL: 'http://localhost:8088',
    timeout: 5000,
    method: 'POST'
  })

  return http(config)
}