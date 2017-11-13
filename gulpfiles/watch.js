var gulp = require('gulp'),
	watch = require('gulp-watch');

var browserSync = require("browser-sync").create();


gulp.task('watch-folder', function() {  
     browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
  gulp.watch('./client/**/*', ['prod']).on('change', browserSync.reload);;
});

