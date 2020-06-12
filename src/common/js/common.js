// 公共方法
import { Message } from 'element-ui';
// 判断移动设备类型
export const isPhone = () => {
  return !!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
}
// 复制
export const doCopy = (message, tips = '复制成功') => {
  const isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  const oInput = document.createElement('input');
  oInput.value = message;
  document.body.appendChild(oInput);
  if (isIos) oInput.setSelectionRange(0, message.length);
  else oInput.select();
  document.execCommand("Copy");
  oInput.blur();
  oInput.className = 'oInput';
  oInput.style.display = 'none';
  Message.success(tips);
}
