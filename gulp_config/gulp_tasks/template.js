var gulp     = require('gulp'),
	plumber  = require('gulp-plumber'),
	ejs      = require('gulp-ejs'),
	prettify = require('gulp-prettify'),
	conf     = require('../config');

// ====================================================
// EJS
// ====================================================

gulp.task('ejs', function(){
	gulp.src(conf.temp.ejs.src)
		.pipe(plumber())
		.pipe(ejs('',{'ext': '.html'}))
		.pipe(prettify({indent_size: 4}))
		.pipe(gulp.dest(conf.temp.ejs.dist));
});
gulp.task('html', function() {
	gulp.src(conf.temp.html.src)
		.pipe(plumber())
		.pipe(prettify({indent_size: 4}))
		.pipe(gulp.dest(conf.temp.html.dist));
} );

gulp.task('temp', ['ejs', 'html']);