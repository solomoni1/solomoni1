const {
    addDecoratorsLegacy,
    disableEsLint, // eslint를 끄는 것은 아님
    override,
    addWebpackAlias,
  } = require('customize-cra');
  const path = require('path');
  
  module.exports = {
    webpack: override(disableEsLint(), addDecoratorsLegacy(), addWebpackAlias({'@': path.resolve(__dirname, 'src')})),
  };
  