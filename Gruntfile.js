module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      mydemo: {
        src: './app/frontend/js/mydemo/app.js',
        dest: './app/assets/javascripts/mydemo_bundle.js'
      },
      comment: {
        src: './app/frontend/js/comment/app.js',
        dest: './app/assets/javascripts/comment_bundle.js'
      }
    },
    watch: {
      mydemo: {
        files: [
          './app/frontend/js/mydemo/*.js',
          './app/frontend/js/mydemo/**/*.js',
          './app/frontend/js/mydemo/**/*.jsx'
        ],
        tasks: [
          'browserify:mydemo'
        ]
      },
      comment: {
        files: [
          './app/frontend/js/comment/*.js',
          './app/frontend/js/comment/**/*.js',
          './app/frontend/js/comment/**/*.jsx'
        ],
        tasks: [
          'browserify:comment'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserify']);
};
