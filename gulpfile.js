const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const minifyCss = require("gulp-clean-css");

// Função que compila os arquivos SASS para CSS Minificados
gulp.task("compile", function () {
  return (
    gulp
      // Caminho de onde estarão as pastas e arquivos SASS
      .src(["*.scss", "./src/sass/**/*.scss"])
      // Mensagem de log caso ocorra um erro de compilação
      .pipe(sass().on("error", sass.logError))
      // Minifica os arquivos CSS
      .pipe(minifyCss())
      // Pasta de destino para os arquivos compilados
      .pipe(gulp.dest("css"))
  );
});

// Função Watch - observa as mudanças nos arquivos
gulp.task("watch-sass", function () {
  gulp.watch(["*.scss", "./src/sass/**/*scss"], gulp.series("compile"));
});

// Função default executada sempre que o gulp for executado
gulp.task("default", gulp.series("watch-sass"));
