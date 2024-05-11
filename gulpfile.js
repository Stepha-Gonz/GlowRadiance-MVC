const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser-js");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");

const loadWebp = async () => {
  const webpModule = await import("gulp-webp");
  return webpModule.default;
};

const convertirWebp = async () => {
  const webp = await loadWebp();
  return gulp
    .src("src/img/*.jpg")
    .pipe(webp({ quality: 80 }))
    .pipe(gulp.dest("./public/build/img"));
};

function css(done) {
  gulp
    .src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./public/build/css"));
  done();
}

function javascript(done) {
  gulp
    .src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./public/build/js"));
  done();
}

function versionWebp(done) {
  convertirWebp();
  done();
}

function imagenes(done) {
  gulp.src("src/img/*.jpg").pipe(gulp.dest("./public/build/img"));
  done();
}

function dev(done) {
  gulp.watch("src/scss/**/*.scss", css);
  gulp.watch("src/js/**/*.js", javascript);
  gulp.watch("src/img/*.jpg", versionWebp);
  gulp.watch("src/img/*.jpg", imagenes);
  done();
}

function build(done) {
  const tasks = [css, javascript, versionWebp, imagenes];
  const runner = gulp.parallel(...tasks);
  runner(done);
}

exports.versionWebp = versionWebp;
exports.css = css;
exports.imagenes = imagenes;
exports.javascript = javascript;
exports.dev = dev;
exports.build = build;
