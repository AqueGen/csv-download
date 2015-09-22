/**
 * build.js contains all the assembly tasks
 */
module.exports = function(gulp, config) {
  'use strict';

  /* jshint ignore:start */
  function handleError(err) {
    this.emit('end');
    var error = err.toString();
    console.log(error);
  }
  /* jshint ignore:end */

  // JS Hint
  gulp.task('_jshint', function() {
    return gulp.src(config.JS_HINT, config.JS_HINT_OPTS, config.JS_HINT_PREDEF)
      .pipe(config.$.jshint())
      .pipe(config.$.jshint.reporter('jshint-stylish'))
      .pipe(config.$.jshint.reporter('fail'))
      .pipe(config.$.size());
  });

  // Simple concatenation for raw scripts
  gulp.task('_process-scripts', function() {
    return gulp.src(config.SRC)
        .pipe(config.$.concat(config.appTarget, {newLine: ';'}))
        .pipe(gulp.dest(config.DIST))
        .pipe(config.$.size());
    });

  // JS concat, strip debugging and (if !config.rawFla) uglify and minify
  gulp.task('_process-scripts-minify', function() {
    return gulp.src(config.SRC)
      .pipe(config.$.concat(config.appTargetMin, {newLine: ';'}))
      .pipe(config.$.stripDebug())
      .pipe(config.$.uglify({mangle:false}))
      .pipe(gulp.dest(config.DIST))
      .pipe(config.$.size());
  });

};
