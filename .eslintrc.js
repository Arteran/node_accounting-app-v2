module.exports = {
  extends: 'eslint:recommended',
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
