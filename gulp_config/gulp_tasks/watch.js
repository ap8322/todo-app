// ========================================================
// WATCH
// ========================================================

var gulp = require('gulp'),
	conf = require('../config');

gulp.task('watch', ['sass', 'js', 'ts', 'ejs', 'html', 'server'], function(){
	gulp.watch(conf.sass.src, ['sass']);
	gulp.watch(conf.script.js.src, ['js']);
	gulp.watch(conf.script.ts.src, ['ts']);
	gulp.watch(conf.temp.ejs.src, ['ejs']);
	gulp.watch(conf.temp.html.src, ['html']);
});

gulp.task('default', ['watch']);