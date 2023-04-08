// importando pacote do gulp
const gulp = require('gulp');
// importando os pacotes do sass
const sass = require('gulp-sass') (require('sass'));
const sourcemaps = require('gulp-sourcemaps');
// importando os pacotes do JS
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// função para compilação do Sass
function compilationSass () {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function minificationImages () {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
}

function manificationJs () {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}
exports.javascript = manificationJs;
exports.images = minificationImages;
exports.compilateSass = compilationSass;

exports.default = function () {
    gulp.watch('./source/styles/*.scss', {ignoreInitial:false}, gulp.series(compilationSass))
    gulp.watch('./source/scripts/*.js', {ignoreInitial:false}, gulp.series(manificationJs))
    gulp.watch('./source/images/*', {ignoreInitial:false}, gulp.series(minificationImages))
}