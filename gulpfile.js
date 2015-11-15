gulp = require('gulp');
sass = require('gulp-sass');

gulp.task('default', function() {
  return gulp.src('./demo.sass')
  .pipe(sass({includePaths: './node_modules/susy/sass/'}))
  .pipe(gulp.dest('test.css'))
});
