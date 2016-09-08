var src = "./src/",
		dist = "./dist/";

module.exports = {
	src : src,
	dist : dist,
	sass: {
		src: src + "sass/**/*.scss",
		dist: dist + "css/"
	},
	script: {
		js: {
			src: src + "js/**/*.js",
			dist: dist + "js/",
			dist_min: dist + "js/min/"
		},
		ts: {
			src: src + "ts/**/*.ts",
			dist: dist + "js/",
			typings: src + "typings"
		}
	},
	temp: {
		ejs: {
			src: [src + "**/*.ejs", src + "**/*.ejs", "!" + src + "**/_*.ejs"],
			dist: dist + ""
		},
		html: {
			src: src + "**/*.html",
			dist: dist + ""
		}
	}
};
