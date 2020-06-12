
const rules = {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  // quotes: [
  //   0,
  //   "single",
  //   {
  //     avoidEscape: true, // 允许包含单引号的字符串使用双引号
  //     allowTemplateLiterals: true // 允许使用模板字符串
  //   }
  // ],
  // // 对象的最后一项后面是否写逗号
  // // @off 此项目不关心
  // // @fixable 对于 PC 项目考虑兼容性时需要设置
  // "comma-dangle": ["error", "never"],
  // // function 的圆括号之前是否使用空格
  // "space-before-function-paren": ["error", "never"],
  // // 箭头参数是否省略括号
  // "arrow-parens": ["error", "as-needed"],
  // // class 没有使用this 可以不使用静态方法
  // "class-methods-use-this": "off",
  // // 箭头函数周围强制使用大括号
  // // "arrow-body-style": ["error", "always"],
  // // 允许别名
  // "import/no-unresolved": "off",
  // // vue可以放在dependencies
  // "import/no-extraneous-dependencies": "off",
  // // 关闭require一定要位于顶层
  // "global-require": "off",
  // // 关闭强制执行统一的行结尾
  // "linebreak-style": "off",
  // // 允许 for...in for...of 语法
  // "guard-for-in": "off",
  // // 此规则不允许指定（即用户定义）语法
  // "no-restricted-syntax": "off",
  // "react/react-in-jsx-scope": "off",
  // "react/no-unknown-property": "off",
  // "react/jsx-filename-extension": "off"
};

const eslintConfig = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'
    // 'airbnb'
  ],
  rules,
  parserOptions: {
    parser: 'babel-eslint'
  }
};

module.exports = eslintConfig;
