module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    builddir: '.',
    less: {
      dist: {
        options: {
          compress: false
        },
        files: {
          "css/style.css": "css/style.less"
        }
      }
    },
    concat: {
      dist: {
        src: [],
        dest: ''
      }
    },
    watch: {
      files: ['*/variables.less', '*/bootswatch.less', '*/index.html'],
      tasks: 'build',
      options: {
        livereload: true,
        nospawn: true
      }
    }
  });
};