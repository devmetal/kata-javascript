// Karma configuration
// Generated on Mon Mar 30 2015 10:27:41 GMT+0200 (Central Europe Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['requirejs','chai','mocha'],
    files: [
      'src/js/*.js',
      'src/test/*.spec.js'
    ],
    exclude: [
        'src/js/jasmine.js',
        'src/test/jasmine.spec.js',
        'src/test/*.jasmine.spec.js'
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
