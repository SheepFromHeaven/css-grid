const Config = require('webpack-config').Config;
const environment = require('webpack-config').environment;

environment.setAll({
  env: () => process.env.NODE_ENV || 'development'
});

// Also you may use `'conf/webpack.[NODE_ENV].config.js'`
module.exports = new Config().extend('config/webpack.[env].config.js');

