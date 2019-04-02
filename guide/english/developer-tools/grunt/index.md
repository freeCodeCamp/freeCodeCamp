---
title: Grunt
---
## Grunt

`Grunt` is a JavaScript Task Runner you can use to automate repetitive tasks.

### Why Use Grunt?

There are many repetitive tasks in web development. For example: compiling, minifying, and copying files. Doing these tasks manually takes a lot of effort and time.

You will make your job easier with Grunt. You only need to configure the tasks through a <a href='https://gruntjs.com/sample-gruntfile' target='_blank' rel='nofollow'>Gruntfile</a>.

### Getting Started

1. Install <a href='https://www.npmjs.org/' target='_blank' rel='nofollow'>npm</a>.
2. Install Grunt's command line interface (CLI) globally with `npm install -g grunt-cli`.
3. List Grunt and the Grunt plugins as devDependencies in a `package.json` file.
4. Install Grunt and the Grunt plugins with `npm i`.
5. Configure tasks in a `Gruntfile.js` file.
6. Run Grunt with `grunt`.

### Example

Below is an example of a `package.json` and `Gruntfile.js` to do the following tasks:

1. Minify HTML files.
2. Add vendor prefixes and minify CSS file.
3. Concatenate and minify JavaScript files.
4. Minify images.

#### package.json

```json
{
  "name": "project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "latest",
    "grunt-contrib-htmlmin": "latest",
    "grunt-postcss": "latest",
    "autoprefixer": "latest",
    "cssnano": "latest",
    "grunt-contrib-uglify": "latest",
    "grunt-contrib-imagemin": "latest",
  }
}
```

#### Gruntfile.js

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      html: {
        files: [{
          expand: true,
          cwd: "src/",
          src: "**/*.html",
          dest: "dest/"
        }]
      }
    },
    
    postcss: {
      options: {
        processors: [
          require("autoprefixer")(),
          require("cssnano")()
        ]
      },
      css: {
        src: "dest/css/*.css"
      }
    },
    
     uglify: {
      js: {
        files: {
          "dest/js/main.js": "src/js/*.js"
        }
      },
    },
    
    imagemin: {
      img: {
        options: {
          optimizationLevel: 5,
          quality: 75
        },
        files: [{
          expand: true,
          cwd: "src/img/",
          src: "**",
          dest: "dest/img/"
        }]
      }
    },
  });
  
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  
  grunt.registerTask("default", ["htmlmin", "postcss", "uglify, imagemin"]);
};
```

#### More Information:

Grunt documentation: <a href='https://gruntjs.com/getting-started' target='_blank' rel='nofollow'>Getting Started</a>
