/* 
npm install gulp
npm install gulp-sass
npm install gulp-autoprefixer
npm install gulp-sourcemaps
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function (done) {
  gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css/'))
    .on('end', done); 
});


gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', gulp.series('sass'));
});