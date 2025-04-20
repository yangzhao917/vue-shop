module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module' // 支持模块化
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 根据你的需求选择是否强制分号
    semi: ['error', 'always'],
    // 强制使用单引号
    quotes: ['error', 'single'],
    'space-before-function-paren': 0,
    'no-unused-vars': 'warn' // 将未使用的变量设为警告而非错误
  }
};
