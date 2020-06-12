/**
 * 用户信息接口
 */
import axios from '../index';
 
export const getUserList = params => axios.post('/base/users/getList', params);
export const addUser = params => axios.post('/base/users/add', params);
// 发送邮件
export const senEmail = params => axios.post('/base/correspond/sendEmail', params);
