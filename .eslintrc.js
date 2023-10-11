/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'react/jsx-filename-extension': 0,
    'no-restricted-exports': 0,
    'default-param-last': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0
  }
};
