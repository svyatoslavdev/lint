module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: ['react'],
  sourceType: "module",
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
  },
};
