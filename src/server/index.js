/**
 * 封装axious
 */
import axios from 'axios';
import {stringify} from 'qs';
import {Message} from 'element-ui';

const {CancelToken} = axios;
const Axios = axios.create();

Axios.defaults.baseURL = '';
Axios.defaults.timeout = 5 * 1000;
Axios.defaults.transformRequest = [
  data => (typeof data === 'object' ? stringify(data) : data)
]

// 请求队列
const pending = [];
// 移除重复请求
const removePending = config => {
  if (pending.length > 1 && pending[pending.length -2].url === `${config.url}?${stringify(config.data)}`) {
    pending[pending.length -1].cancel('duplicate request interception');
    pending.splice(pending.length -1, 1)
  }
}

// 请求拦截
Axios.interceptors.request.use(
  config => {
    config.cancelToken = new CancelToken(cancel => {
      pending.push({
        url: `${config.url}?${stringify(config.data)}`,
        cancel
      })
    });
    removePending(config);
    return config;
  },
  err => {
    Message.error('请求超时！');
    return Promise.reject(err);
  }
);

// 响应拦截
Axios.interceptors.response.use(
  res => {
    const {config} = res;
    pending.splice(
      pending.findIndex(req => req.url === `${config.url}?${stringify(config.data)}`),
      1
    );
    if (res.data.status && Number(res.data.status) !== 200) {
      Message.error(res.data.desc);
      return Promise.reject(res.data.desc);
    }
    return res.data
  },
  err => {
    return Promise.reject(err);
  }
)

export default Axios;
