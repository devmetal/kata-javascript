// Karma configuration
// Generated on Mon Mar 30 2015 10:27:41 GMT+0200 (Central Europe Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['chai','mocha'],
    files: [
      'src/js/**/*.js',
      'src/test/**/*.mocha.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
