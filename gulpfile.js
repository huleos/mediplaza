const gulp            = require('gulp'),
			sequence        = require('run-sequence'),
			spawn           = require('cross-spawn'),
			imagemin        = require('gulp-imagemin'),
			uglify          = require('gulp-uglify'),
			concat          = require('gulp-concat'),
			sass            = require('gulp-sass'),
			prefix          = require('gulp-autoprefixer'),
			sourcemaps      = require('gulp-sourcemaps'),
			plumber         = require('gulp-plumber'),
			gutil           = require('gulp-util'),
			browserSync     = require('browser-sync').create();


// Check for --production flag
const PRODUCTION = gutil.env.production;


// Javascript Paths
const jsFiles = [
	'node_modules/jquery/dist/jquery.js',
	'./_source/assets/js/vendor/jquery-ui.js',
	'node_modules/jquery-validation/dist/jquery.validate.js',
	'node_modules/lightbox2/dist/js/lightbox.js',
	'./_source/assets/js/vendor/jquery.elevatezoom.js',
	'./_source/assets/js/main.js'
];


// Compile Scss
gulp.task('styles', () => {
	return gulp.src('./_source/assets/scss/**/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers: [
				'last 4 versions',
				'ie >= 9'
			],
			cascade: false
		}))
		.pipe(PRODUCTION ? sass({outputStyle: 'compressed'}) : gutil.noop())
		.pipe(!PRODUCTION ? sourcemaps.write('.') : gutil.noop())
		.pipe(gulp.dest('./_source/assets/css'));
});


// Combine JavaScript into one file
gulp.task('scripts', () => {
		return gulp.src(jsFiles)
		.pipe(plumber())
		.pipe(sourcemaps.init())
	  .pipe(concat('bundle.js'))
	  .pipe(PRODUCTION ? uglify()
	  	.on('error', e => { console.log(e); })
	  	: gutil.noop())
		.pipe(!PRODUCTION ? sourcemaps.write('.') : gutil.noop())
	  .pipe(gulp.dest('./_source/assets/js'));
});


// Copy images to the 'dist' folder
gulp.task('images', () => {
	return gulp.src('./_source/assets/img/**/*')
		.pipe(plumber())
	  .pipe(PRODUCTION ?
			imagemin({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true
			}) : gutil.noop())
	  .pipe(gulp.dest('./_source/assets/img'));
});


// Start a server with BrowserSync to preview the site in
gulp.task('server', (done) => {
  browserSync.init({
    files: ['_build/**'],
    port: 4000,
    server: {
      baseDir: '_build'
    }
  });
  done();
});

// Start a server with Jekyll
gulp.task('jekyll', (done) => {
	spawn('bundle', [
		'exec',
		'jekyll',
		'build',
		'--watch',
		'--incremental'], { stdio: 'inherit' });
	done();
});

gulp.task('jekyll:build', (done) => {
	spawn('bundle', [
		'exec',
		'jekyll',
		'build'], { stdio: 'inherit' })
		done();
});

// Build the "build" folder by running all of the below tasks
gulp.task('build', (done) => {
	sequence(['styles', 'scripts', 'images'], done);
});

gulp.task('build:master', (done) => {
	sequence(['styles', 'scripts', 'images'], 'jekyll:build', done);
});

// Build the "build" folder for production
gulp.task('production', (done) => {
	spawn('gulp', [
		'build:master',
		'--production'], { stdio: 'inherit' })
		done();
});

// Build the site, run the server, and watch for file changes
// Watch for changes to static assets, Scss, and JavaScript
gulp.task('default', ['build', 'jekyll', 'server'], () => {
	gulp.watch('./_source/**/*.{html,md,markdown}').on('change', browserSync.reload);
	gulp.watch(['./_source/assets/scss/**/*.scss'], ['styles']).on('change', browserSync.reload);
	gulp.watch(['./_source/assets/js/*.js'], ['scripts']).on('change', browserSync.reload);
	gulp.watch(['./_source/assets/img/**/*'], ['images']).on('change', browserSync.reload);
});


