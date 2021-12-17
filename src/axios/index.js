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
    return res.data
  }, error => {
    console.log(error);
  })

  //发送网络请求
  return http(config)
}

//创建基础的请求
export function baseRequest(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8088/index',
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error);
  })

  instance.interceptors.response.use(function (res) {
    const goods = res.data.split('(')[1].split(')')[0];
    const goodsInfo = JSON.parse(goods).result.wall.docs;
    return goodsInfo
  }, error => {
    console.log(error);
  })

  return instance(config)
}

//蘑菇街获取商品接口：https://list.mogu.com/search?callback=jQuery2110832440271308613_1639561621839&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=bags&ptp=31.OifDKb.0.0.KuwthHH3&_=1639561621840
//配饰：
// 综合：https://list.mogu.com/search?callback=jQuery21109935695951373968_1639616442332&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=50797&action=accessories&acm=3.mce.1_10_1td6i.132244.0.xYIbnsRIjp8SB.pos_877-m_685025-sd_119&ptp=31.v5mL0b._head.0.EXKhoXyK&_=1639616442333
// 销量：https://list.mogu.com/search?callback=jQuery21107490675080429021_1639616584642&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=sell&ad=0&fcid=50797&action=accessories&crowIds=%255B%2522103751%2522%255D&contentWhiteUser=false&cpc_offset=0&offset=&_=1639616584644
// 新品：https://list.mogu.com/search?callback=jQuery21107490675080429021_1639616584642&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=new&ad=0&fcid=50797&action=accessories&crowIds=%255B%2522103751%2522%255D&contentWhiteUser=false&cpc_offset=0&offset=&_=1639616584645
//url: "https://list.mogu.com/search?callback=jQuery21109935695951373968_1639616442332&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=50797&action=accessories&acm=3.mce.1_10_1td6i.132244.0.xYIbnsRIjp8SB.pos_877-m_685025-sd_119&ptp=31.v5mL0b._head.0.EXKhoXyK&_=1639616442333"

