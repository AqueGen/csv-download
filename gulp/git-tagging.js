/**
 * Used by Hudson to tag snapshot and release versions
 */
module.exports = function (gulp, config) {
  'use strict';
  // setup runSequence
  var runSequence = require('run-sequence').use(gulp);

  /**
   * Bumping version number and tagging the repository with it.
   * Please read http://semver.org/
   *
   * You can use the commands
   *
   *     gulp patch     # makes v0.1.0 → v0.1.1
   *     gulp feature   # makes v0.1.1 → v0.2.0
   *     gulp release   # makes v0.2.1 → v1.0.0
   *
   * To bump the version numbers accordingly after you did a patch,
   * introduced a feature or made a backwards-incompatible release.
   */

  function inc(importance, message) {
    // get all the files to bump version in
    return gulp.src(['./package.json', './bower.json'])
      // bump the version number in those files
      .pipe(config.$.bump({type: importance}))
      // save it back to filesystem
      .pipe(gulp.dest('./'))
      // commit the changed version number
      .pipe(config.$.git.commit(message))

      // read only one file to get the version number
      .pipe(config.$.filter('package.json'))
      // **tag it in the repository**
      .pipe(config.$.tagVersion());
  }

  gulp.task('_patch', function() { return inc('patch', 'Patch update tag'); });
  gulp.task('_feature', function() { return inc('minor', 'Feature update tag'); });
  gulp.task('_release', function() { return inc('major', 'Release tag'); });

  gulp.task('tag', function (callback) {
    var tasks = [];
    if (config.buildOptions.releaseRevision) {
      tasks.push('_release');
    } else if (config.buildOptions.featureRevision) {
      tasks.push('_feature');
    } else {
      tasks.push('_patch');
    }
    runSequence(tasks, callback);
  });
};
