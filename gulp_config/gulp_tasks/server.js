// ========================================================
// WEB_SERVER
// ========================================================

var gulp     = require('gulp'),
	server   = require('gulp-webserver'),
	conf     = require('../config');

gulp.task('server', function () {
	gulp.src(conf.dist)
		.pipe(server({
			host: 'localhost',
			port: 8000
		}));
});