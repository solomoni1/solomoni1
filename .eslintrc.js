module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  root: true,
  extends: ['react-app', 'prettier', 'airbnb'],
  plugins: [],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-array-index-key': 1,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/state-in-constructor': 0,
    'import/extensions': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'func-names': 0,
    'no-unused-vars': 1,
    'prefer-arrow-callback': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-continue': 0,
    'no-use-before-define': 0,
    'no-nested-ternary': 0,
    'operator-linebreak': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0,
    'function-paren-newline': 0,
    'no-return-assign': 0,
    'object-curly-newline': 'off',
    'generator-star-spacing': 0,
    'no-param-reassign': 0,
    'prefer-template': 0,
  },
};
