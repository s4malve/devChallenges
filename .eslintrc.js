module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
