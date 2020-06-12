import axios from '../index';
// 注册
export const doRegister = params => axios.post('/base/users/add', params);
// 登录
export const doLogin = params => axios.post('/base/users/login', params);
// 找回密码
export const findPassword = params => axios.get('/customer/findpwd.php', {params});
// 修改密码
export const resetPass = params => axios.get('/customer/resetpwd.php', {params});