// ========================================================
// JAVASCRIPT
// ========================================================

var gulp         = require('gulp'),
	plumber        = require('gulp-plumber'),
	rename      	 = require('gulp-rename'),
	uglify         = require('gulp-uglify'),
	ts     = require('gulp-typescript'),
	conf           = require('../config');

gulp.task('js', function() {
	gulp.src(conf.script.js.src)
		.pipe(plumber())
		.pipe(gulp.dest(conf.script.js.dist))
		.pipe(uglify())
		.pipe(rename(function(path){
			if(path.dirname == !'lib'){
				path.extname = '.min.js';
			}
		}))
		.pipe(gulp.dest(conf.script.js.dist_min))
});

// =========================================================
// TYPESCRIPT
// =========================================================

var webpack = require('gulp-webpack');

var typescriptProject = ts.createProject({
	target: "ES5",
	removeComments: true,
	sortOutput: true,
	out: "app.js"
});
gulp.task('ts', function () {
	var tsResult = gulp.src([conf.script.ts.src, conf.script.ts.typings])
		.pipe(ts(typescriptProject, function(){}))
		.pipe(gulp.dest("./dist/js/"));
	return tsResult.pipe(gulp.dest(conf.script.ts.dist));
});


gulp.task('script', ['js', 'ts']);