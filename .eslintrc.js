module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    no-var:'off',
    quotes:["error",'double'],
    linebreak-style:'off',
    no-console:'off',
    vars-on-to^p:'off',
    func-name:'off',
    prefer-arrow-callback:'off'

  },
};
