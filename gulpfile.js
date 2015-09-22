var gulp = require('gulp');

// load configuration
var configure = require('./gulp/configure');
var config = configure(gulp);
var runSequence = require('run-sequence').use(gulp);

gulp.task('build', ['clean'], function(callback) {
  runSequence(['clean', '_jshint', '_process-scripts', '_process-scripts-minify'], callback);
});

gulp.task('default', function () {
  gulp.start('help');
});

gulp.task('help', function () {
  config.$.util.log('gulp list : Shows main tasks');
  config.$.util.log('gulp list-all : Shows all tasks');
  config.$.util.log('gulp == gulp default == gulp help');
  config.$.util.log('gulp tag');
  config.$.util.log('\tTags the branch with a patch 1.5.2=>1.5.3');
  config.$.util.log('gulp tag --feature');
  config.$.util.log('\tTags the branch with a feature bump 1.5.2=>1.6.0');
  config.$.util.log('gulp tag --release');
  config.$.util.log('\tTags the branch with a major bump 1.5.2=>2.0.0');
  config.$.util.log('\t\tDoes not automatically push the tags');
  config.$.util.log('\t\tUse: git push origin --tags');
  config.$.util.log('gulp build');
  config.$.util.log('options:');
  config.$.util.log('\tAssembles the distribution');
});

gulp.task('list', config.$.taskListing.withFilters(null, /_/));
gulp.task('list-all', config.$.taskListing.withFilters());
