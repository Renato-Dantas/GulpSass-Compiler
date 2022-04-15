const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const minifyCss = require("gulp-clean-css");

// Function that compile the Scss files into minified Css files
gulp.task("compile", function () {
  return (
    gulp
      // Path to the Scss folders and files
      .src(["*.scss", "./src/sass/**/*.scss"])
      // Log message when occurs a compilation error
      .pipe(sass().on("error", sass.logError))
      // Function that minify the Css files
      .pipe(minifyCss())
      // Destiny path to css minified files folder
      .pipe(gulp.dest("css"))
  );
});

// Function that watch for changes on the files
gulp.task("watch-sass", function () {
  gulp.watch(["*.scss", "./src/sass/**/*scss"], gulp.series("compile"));
});

// Gulp default function
gulp.task("default", gulp.series("watch-sass"));
