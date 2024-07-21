const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('src/main.scss')  // Update to main.scss
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', gulp.series('sass'));  // Watch for .scss files
});

gulp.task('default', gulp.series('sass', 'watch'));
