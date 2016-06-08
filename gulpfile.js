//PLUGINS
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var prefix      = require('gulp-autoprefixer');
var less        = require('gulp-less');

//Less
gulp.task('compile-less', function () {
    gulp.src('./css/*.less') // path to your file
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(less().on('error', function(err) {
        console.log(err);
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream:true}));
});


//Browser Sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
});

gulp.task('watch', function () {
    gulp.watch('css/*.less', ['compile-less']);
    gulp.watch(['*.html', 'js/*.js'], browserSync.reload);
});

gulp.task('default', ['compile-less', 'browser-sync', 'watch']);
