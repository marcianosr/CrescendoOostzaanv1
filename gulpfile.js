
//to do:
// * minify html
// * sourcemaps
// * clean
// * fonts
// * production version
// * testing

// PACKAGES
const gulp        = require('gulp');
      sass        = require('gulp-sass'),               // compile sass to css
      sassGlob    = require('gulp-sass-glob'),          // allow importing wildcards .scss
      gulpIf      = require('gulp-if'),
      cssnano     = require('gulp-cssnano'),
      jshint      = require('gulp-jshint'),
      sassLint    = require('gulp-sass-lint'),
      stylish     = require('jshint-stylish'),
      browserSync = require('browser-sync').create(),
      historyFallback = require('connect-history-api-fallback'), //http://thomastuts.com/blog/browsersync-spa-routing-pretty-urls.html
      webpack     = require('gulp-webpack'),           // run webpack within gulp
      imagemin    = require('gulp-imagemin');


// OWN
const devWebpack = require('./webpack.config.js');

gulp.task('styles', function () {
  return gulp.src([
    './app/sass/main.scss'])
    .pipe(sassGlob())
    .pipe(sass({
      // errLogToConsole: true,
      includePaths: [
        './node_modules/normalize.css/',
        './node_modules/bourbon/app/assets/stylesheets/',
        './node_modules/slick-carousel/slick/'
      ]
    })
    .on('error', sass.logError))
    .pipe(browserSync.stream())
    .pipe(gulp.dest('./.tmp/css'))
    .pipe(gulp.dest('./dist/css'))
});


gulp.task('lint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// webpack gulp translator. This uses the webpack.config.js file and calls the `webpack` command to handle the JS.
gulp.task('webpack', function() {
  return gulp.src('app/app.js')
         .pipe(webpack(devWebpack))
         .pipe(gulp.dest('.tmp/js'));
});

gulp.task('images', () =>
	gulp.src('assets/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets'))
)



gulp.task('serve', ['styles', 'webpack'], function() {
    browserSync.init({
        server: {
            baseDir: ['.tmp', 'app'],
            // Set the routes so the server will recognize bower_components folder, else it'll bitch you with 404
            // and also for the assets folder to get the icon fonts
            routes: {
            '/bower_components': 'bower_components',
            '/assets': 'assets',
            '/dist': 'dist'
            },
            middleware: [
              historyFallback()
            ],

        },
        serveStatic: [{
            route: ['/artikelen'],
            dir: ['.tmp', 'app']
        }]

    });

    // watch mode calls webpack to recompile
    gulp.watch("app/sass/**/*.scss", ['styles']);

    // remove lint temporary
    gulp.watch('app/components/**/*.js', ['webpack', browserSync.reload]);
    gulp.watch('app/*.js', ['webpack', browserSync.reload]);
    gulp.watch('app/pages/**/*.js', ['webpack', browserSync.reload]);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});




gulp.task('production', ['styles', 'images'],  function() {
  return gulp.src('app/*.html')
         .pipe(gulpIf('*.css', cssnano()))
         .pipe(gulp.dest('./dist'));
});


// Run website on production level:

gulp.task('serve:dist', ['styles'],  function(){
  browserSync.init({
      // server: {
      //     baseDir: "./dist",
      //     // Set the routes so the server will recognize bower_components folder, else it'll bitch you with 404
      //       routes: {
      //     '/bower_components': 'bower_components'
      //     }
      // }

      server: {
          baseDir: './dist',
          // Set the routes so the server will recognize bower_components folder, else it'll bitch you with 404
          // and also for the assets folder to get the icon fonts
          routes: {
          '/bower_components': 'bower_components',
          '/assets': 'assets',
          '/dist': 'dist'
          },
          middleware: [
            historyFallback()
          ],

      },
      serveStatic: [{
          route: ['/artikelen'],
          dir: 'dist'
      }]
  });
});
