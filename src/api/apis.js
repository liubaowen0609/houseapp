// 统一接口封装api
import axios from 'axios'
import qs from 'qs'

// 设置服务器请求
axios.defaults.baseURL = 'http://129.211.169.131:33833'

// 登录
export const login = (acc,pwd) => axios.post('/login.php',qs.stringify({acc,pwd}))

// 注册
export const reg = (acc,pwd) => axios.post('/reg.php',qs.stringify({acc,pwd}))

// 获取验证码
export const Verification = () => axios.get('/valitecode.php',qs.stringify({}))

// 猜你喜欢
export const gethouselist = () =>axios.get('/gethouselist.php',qs.stringify({}))