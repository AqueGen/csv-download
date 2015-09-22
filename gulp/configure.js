/**
 * orchestrator.js links tasks in sequence
 */
module.exports = function(gulp, runSequence) {
  'use strict';

  var pkg = require('../bower.json');
  var dollar = require('gulp-load-plugins')({
    pattern: ['gulp-*'],
    camelize: true,
    lazy: true
  });

  var SRC = 'src/**/*.js';

  var config = {
      $: dollar,
      del: require('del'),
      SRC: SRC,
      DIST: 'dist',
      JS_HINT:['gulpfile.js', 'gulp/*.js', SRC],
      JS_HINT_OPTS: {undef: true, globals:['angular', 'require']},
      JS_HINT_PREDEF: { },
      appTarget: pkg.name + '.js',
      appTargetMin: pkg.name + '.min.js'
  };

// load script files
    var buildTasks = require('./build');
    var taggingTasks = require('./git-tagging');
    var cleanTasks = require('./cleanup');


//initialize script paths
    buildTasks(gulp, config);
    taggingTasks(gulp, config);
    cleanTasks(gulp, config);


  config.handleError = function(err) {
    /* jshint ignore:start */
    this.emit('end');
    /* jshint ignore:end */
    var error = err.toString();
    console.log(error);
  };

  return config;

};
