
import router from '../router/index';
// 获取用户信息
export const getUserData = () => {
  const user = JSON.parse(localStorage.getItem('userInfo') || '{}');
  // if (!user.username) {
  //   router.push({name: 'login', query: {redirectTo: router.fullPath}});
  //   return;
  // }
  return user;
};
// 更新用户信息
export const updateUserInfo = params => {
  const user = JSON.parse(localStorage.getItem('userInfo') || '{}');
  // if (!user.username) {
  //   router.push({name: 'login', query: {redirectTo: router.fullPath}});
  //   return;
  // }
  const newUser = {
    ...user,
    ...params
  };
  localStorage.setItem('userInfo', JSON.stringify(newUser));
  return newUser;
};
// 判断移动设备类型
export const isPhone = () => {
  return !!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
};
// 对象数组排序
export const objSort = p => {
  return (m, n) => n[p] - m[p]
}

// 将秒数转为时分秒
export const fixTimer = (value) => {
  let secondTime = parseInt(value);
  let minuteTime = 0;
  let hourTime = 0;
  if (secondTime > 60) {
    minuteTime = parseInt(secondTime / 60);
    secondTime = parseInt(secondTime % 60);
    if (minuteTime > 60) {
      hourTime = parseInt(minuteTime / 60);
      minuteTime = parseInt(minuteTime % 60);
    }
  }
  let result = "" + parseInt(secondTime) + "秒";
  if (minuteTime > 0) result = "" + parseInt(minuteTime) + "分" + result;
  if (hourTime > 0) result = "" + parseInt(hourTime) + "小时" + result;
  return result;
};
