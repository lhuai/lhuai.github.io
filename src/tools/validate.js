export const validateMP = (rule, value, callback) => {
  if (value === '') callback(new Error('请输入MP地址'));
  else if (!value.startsWith('https://mp.weixin.qq.com/s/') || value.length !== 49) callback(new Error('MP地址有误'));
  else callback();
};

export const validateNum = (rule, value, callback) => {
  const reg = /^\+?[0-9][0-9]*$/;
  if (!reg.test(value)) callback(new Error('安全码有误'));
  else callback();
}

// 判断两次数据是否一致
export const validateRe = ({rekey, message}, value, callback) => {
  if (rekey !== value) callback(new Error(message));
  else callback();
};

export const validateUser = (rule, value, callback) => {
  const reg = /^[1-9][0-9]{4,10}$/
  const phoneReg = /^1[3456789]\d{9}$/;
  if (!(reg.test(value) || phoneReg.test(value))) callback(new Error('用户名格式有误（QQ号或者手机号）'));
  else callback();
};

export const validatePhone = (rule, value, callback) => {
  const reg = /^1[3456789]\d{9}$/;
  if (value && !reg.test(value)) callback(new Error('手机号码格式有误'));
  else callback();
};

export const validateMoney = ({min}, value, callback) => {
  const reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
  if (!reg.test(value)) callback(new Error('金额有误'));
  else if (Number(value) < min) callback(new Error(`最低充值${min}元`));
  else callback();
};
