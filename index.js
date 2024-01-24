module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: [ 'react',],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
  },
};
