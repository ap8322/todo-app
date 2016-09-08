var gulp       = require('gulp'),
	plumber    = require('gulp-plumber'),
	sass       = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	conf       = require('../config');

gulp.task('sass', function(){
	gulp.src(conf.sass.src)
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass())
		.pipe(sourcemaps.write(conf.sass.dist + 'maps/'))
		.pipe(gulp.dest(conf.sass.dist));
});