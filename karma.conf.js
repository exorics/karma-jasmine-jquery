// Karma configuration
// Generated on Sat Sep 24 2016 19:30:20 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','jquery-1.11.0','seajs',],
    plugin: [
        'karma-jasmine',
        'karma-jquery',
        'karma-seajs',
        'karma-jasmine-html-reporter'
    ],

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/**': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage','kjhtml'/*,'junit'*/],

    // junitReporter: {
    //   outputDir: '', // results will be saved as $outputDir/$browserName.xml 
    //   outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile 
    //   suite: '', // suite will become the package name attribute in xml testsuite element 
    //   useBrowserName: true, // add browser name to report and classes names 
    //   nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element 
    //   classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element 
    //   properties: {} // key value pair of properties to add to the <properties> section of the report 
    // },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      clearContext: false,
      qunit: {
        showUI: true,
        testTimeout: 5000
      }
    }
  })
}
