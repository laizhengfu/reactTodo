module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      mydemo: {
        src: './app/frontend/js/mydemo/app.js',
        dest: './app/assets/javascripts/mydemo_bundle.js'
      }
    },
    watch: {
      mydemo: {
        files: [
          './app/frontend/js/mydemo/*.js',
          './app/frontend/js/mydemo/**/*.js',
          './app/frontend/js/mydemo/**/*.jsx',
        ],
        tasks: [
          'browserify:mydemo'
        ]
      },
      files: [
        './app/frontend/js/mydemo/**/*.js',
        './app/frontend/js/mydemo/**/*.jsx',
      ],
      tasks: [
        'browserify:mydemo'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserify']);
};
