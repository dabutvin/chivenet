const webpackConfig = require('./webpack.config')

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-devserver')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-webpack')

  grunt.initConfig({
    clean: ['./dist'],
    copy: {
      all: {
        files: [
          {
            expand: true,
            cwd: 'node_modules',
            src: [
              'axios/dist/**',
              'vue/dist/**'
            ],
            dest: 'dist/lib/'
          },
          {
            expand: true,
            cwd: 'src',
            src: ['favicon.ico', 'index.html'],
            dest: 'dist'
          }
        ]
      }
    },
    webpack: {
      prod: Object.assign({ mode: 'production' }, webpackConfig),
      dev: Object.assign({ watch: true, mode: 'development' }, webpackConfig)
    },
    watch: {
      site: {
        files: ['src/**/*.*'],
        tasks: ['gen'],
        options: {
          spawn: false
        }
      },
      webpack: {
        files: ['src/**/*.*'],
        tasks: ['webpack:dev'],
        options: {
          spawn: false
        }
      }
    },
    devserver: {
      dist: {
        options: {
          base: 'dist'
        }
      }
    }
  })

  grunt.registerTask('gen', [
    'clean',
    'copy'
  ])
}
