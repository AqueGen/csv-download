/**
 * cleanup.js is responsible for deleting build directories
 */
module.exports = function(gulp, config) {
  'use strict';

  /** Clean up  */
  gulp.task('clean', function (done) {
    return config.del([config.DIST + '/'], done);
  });

  /** End Cleanup */

};
