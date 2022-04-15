# Compiler Sass to Minify CSS

## To use these files, please, ensure that you had installed Node & NPM.

### Automatic installation

First, save the file "gulpfile.js" and "package.json" in the project root folder.
Then run on the terminal:

```
    npm install
```

This command will install all dependences in your project to run the Gulp file.

### To install manualy the dependences, please run:

- Creating a package.json file

```
    npm init
```

- To install SASS (as global)

```
    npm install sass
```

- To install Gulp (as global)

```
    npm install --global gulp
```

- To install Gulp Sass (Dev enviroment)

```
    npm install -D gulp-sass
```

- To install Gulp Clean CSS (Dev Enviroment)

```
    npm install gulp-clean-css
```

## Dev Dependenses

The dev dependenses will just be used in development enviroment and will not be sended to production.

- gulp-sass: used to compile Scss files to CSS
- gulp-clean-css: used to minify the CSS files

## Running in your project

With the dependenses intalled, you just need to run the follow command on the terminal:

```
    gulp
```

## Modifing the file(s) folder(s)

This project acess the folder "./src/sass" and compile all the files with the extention ".scss", even inside other folder, and create the folder/file inside a folder called "css" outside the src folder.

If you want to change the path, you just need to change the path inside functions ".src" and "dest" on the task "compile" inside the file "gulpfile.js".

# Enjoy!
