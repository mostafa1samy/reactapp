const gulp = require('gulp')
const gulpsass = require('gulp-sass')
const sass = gulpsass(require('sass'))
gulp.task('sass', async function() {
    gulp.src('src/component/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
})