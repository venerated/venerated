'use strict';

var gulp =          require('gulp'),
    newer =         require('gulp-newer'),
    imagemin =      require('gulp-imagemin'),
    htmlclean =     require('gulp-htmlclean'),
    sass =          require('gulp-sass'),
    headerfooter =  require('gulp-headerfooter'),
    uglify =        require('gulp-uglify'),
    pump =          require('pump'),
    folder = {
      src: 'src/',
      build: 'build/'
    };

gulp.task('images', function() {
  var out = folder.build + 'images/';
  return gulp.src(folder.src + 'images/**/*')
    .pipe(newer(out))
    .pipe(imagemin(
      {optimizationLevel: 5}
      ))
    .pipe(gulp.dest(out));
});

gulp.task('html', ['images'], function() {
  var out = folder.build,
      page = gulp.src(folder.src + 'html/**/*')
      .pipe(newer(out));
      page = page.pipe(htmlclean());
  return page.pipe(gulp.dest(out));
});

gulp.task('concat', ['images'], function() {
  gulp.src(folder.src + 'content/*.html')
      .pipe(headerfooter.header(folder.src + 'partials/header.html'))
      .pipe(headerfooter.footer(folder.src + 'partials/footer.html'))
      .pipe(gulp.dest(folder.build));
});

gulp.task('sass', function() {
  return gulp.src(folder.src + 'scss/style.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe(gulp.dest(folder.build + 'css/'));
});

gulp.task('uglify', function (cb) {
  pump([
        gulp.src(folder.src + 'js/*.js'),
        uglify(),
        gulp.dest(folder.build + '/js/')
    ],
    cb
  );
});

gulp.task ('default', ['html', 'sass']);

gulp.task('watch', function() {
  gulp.watch(folder.src + 'images/**/*', ['images']);
  gulp.watch(folder.src + 'content/**/*', ['concat']);
  gulp.watch(folder.src + 'partials/**/*', ['concat']);
  gulp.watch(folder.src + 'js/**/*', ['uglify']);
  gulp.watch(folder.src + 'scss/**/*', ['sass']);
});