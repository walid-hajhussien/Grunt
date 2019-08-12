module.exports = function(grunt) {
  const sass = require("node-sass");

  // configration
  grunt.initConfig({
    concat: {
      js: {
        src: ["js/*.js"],
        dest: "build/script.js"
      },
      css: {
        src: ["css/*.css"],
        dest: "build/styles.css"
      },
      sass: {
        src: ["css/sass/*.scss"],
        dest: "css/allSass/styles.scss"
      }
    },
    clean: {
      build: ["build/**"],
      style: ["css/style.css", "css/style.css.map", "css/allSass/**"]
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      build: {
        files: [
          {
            src: "css/allSass/styles.scss",
            dest: "css/style.css"
          }
        ]
      }
    }
  });

  //load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-sass");

  //register task

  // concat js only
  grunt.registerTask("concat-js", ["concat:js"]);

  // concat css only
  grunt.registerTask("concat-css", ["concat:css"]);

  //concat sass only
  grunt.registerTask("concat-sass", ["concat:sass"]);

  // concat all file
  grunt.registerTask("concat-all", [
    "clean-all",
    "sass-css",
    "concat-js",
    "concat-css"
  ]);

  // clean build file
  grunt.registerTask("clean-build", ["clean:build"]);

  // clean style file
  grunt.registerTask("clean-style", ["clean:style"]);

  // clean all file
  grunt.registerTask("clean-all", ["clean"]);

  //convert sass to css
  grunt.registerTask("sass-css", ["concat-sass", "sass"]);
};
