require! <[./build fs ./config]>
module.exports = (grunt)->
  grunt.loadNpmTasks \grunt-contrib-clean
  grunt.loadNpmTasks \grunt-contrib-copy
  grunt.loadNpmTasks \grunt-contrib-uglify
  grunt.loadNpmTasks \grunt-contrib-watch
  grunt.loadNpmTasks \grunt-livescript
  grunt.loadNpmTasks \grunt-karma
  grunt.initConfig do
    pkg: grunt.file.readJSON './package.json'
    uglify: build:
      files: '<%=grunt.option("path")%>.min.js': '<%=grunt.option("path")%>.js'
      options:
        mangle: {+keep_fnames}
        compress: {+keep_fnames, +pure_getters}
        output: {max_line_len: 32000}
        ie8: on
        sourceMap: on
        banner: config.banner
    livescript: src: files:
      './tests/helpers.js': './tests/helpers/*'
      './tests/tests.js': './tests/tests/*'
      './tests/library.js': './tests/library/*'
      './tests/es.js': './tests/tests/es*'
      './tests/experimental.js': './tests/experimental/*'
      './build/index.js': './build/build.ls*'
    clean: <[./library]>
    copy: lib: files:
      * expand: on
        cwd: './'
        src: <[es5/** es6/** es7/** stage/** web/** core/** fn/** index.js shim.js]>
        dest: './library/'
      * expand: on
        cwd: './'
        src: <[modules/*]>
        dest: './library/'
        filter: \isFile
      * expand: on
        cwd: './modules/library/'
        src: '*'
        dest: './library/modules/'
    watch:
      core:
        files: './modules/*'
        tasks: \default
      tests:
        files: './tests/tests/*'
        tasks: \livescript
    karma:
      'options':
        configFile: './tests/karma.conf.js'
        browsers: <[PhantomJS]>
        singleRun: on
      'default': {}
      'library': files: <[client/library.js tests/helpers.js tests/library.js]>map -> src: it
  grunt.registerTask \build (options)->
    done = @async!
    build {
      modules:   (options || 'es5,es6,es7,js,web,core')split \,
      blacklist: (grunt.option(\blacklist) || '')split \,
      library:   grunt.option(\library) in <[yes on true]>
      umd:       grunt.option(\umd) not in <[no off false]>
    }
    .then !->
      grunt.option(\path) || grunt.option(\path, './custom')
      fs.writeFile grunt.option(\path) + '.js', it, done
    .catch !->
      console.error it
      process.exit 1
  grunt.registerTask \client ->
    grunt.option \library ''
    grunt.option \path './client/core'
    grunt.task.run <[build:es5,es6,es7,js,web,core uglify]>
  grunt.registerTask \library ->
    grunt.option \library 'true'
    grunt.option \path './client/library'
    grunt.task.run <[build:es5,es6,es7,js,web,core uglify]>
  grunt.registerTask \shim ->
    grunt.option \library ''
    grunt.option \path './client/shim'
    grunt.task.run <[build:es5,es6,es7,js,web uglify]>
  grunt.registerTask \e ->
    grunt.option \library ''>
    grunt.option \path './client/core'
    grunt.task.run <[build:es5,es6,es7,js,web,core,exp uglify]>
  grunt.registerTask \default <[clean copy client library shim]>