module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> | <%= pkg.author %> | <%= pkg.license %> */\n",
                sourceMap: true
            },
            build: {
                files: [
                    {
                        src: "src/sprintf.js",
                        dest: "dist/sprintf.min.js"
                    },
                    {
                        src: "src/angular-sprintf.js",
                        dest: "dist/angular-sprintf.min.js"
                    }
                ]
            }
        },

        watch: {
            js: {
                files: "src/*.js",
                tasks: ["uglify"]
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-uglify")
    grunt.loadNpmTasks("grunt-contrib-watch")

    grunt.registerTask("default", ["uglify", "watch"])
}
