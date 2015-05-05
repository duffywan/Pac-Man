module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['src/*.js'],
      tasks: []
    },
    concat: {
      options: {
        separator: ';',
      },
    dist: {
        // Order is important! gameLogic.js must be first because it defines myApp angular module.
        //src: ['src/gameLogic.js', 'src/game.js'],
        //dest: 'dist/everything.js',
      },
             },
    uglify: {
      options: {
        sourceMap: true,
      },
      my_target: {
        files: {
          'gameSetting.min.js': ['gameSetting.js'],
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'game.min.html': ['game.html']
        }
      }
    },
    manifest: {
      generate: {
        options: {
          basePath: '.',
          cache: [
            'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js',
            'http://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-touch.min.js',
            'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.1/ui-bootstrap-tpls.min.js',
            'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css',
            'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/fonts/glyphicons-halflings-regular.woff',
            'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/fonts/glyphicons-halflings-regular.ttf',
            'http://yoav-zibin.github.io/emulator/dist/turnBasedServices.2.min.js',
            'http://yoav-zibin.github.io/emulator/main.css',
            'js/jquery-1.10.2.min.js',
            'js/jquery.hammer.min.js',
            'gameSetting.min.js',
            'languages/en.js',
            'languages/zh.js',
            'helper.css',
            'pacman-canvas.css',
            'style.css',
            'imgs/audio-icon-mute.png',
            'imgs/audio-icon.png',
            'imgs/bg-pattern-black.png',
            'imgs/heart.png',
            'imgs/Icon-32x32.png',
            'imgs/Icon-106x106.png',
            'imgs/icon-128_old.png',
            'imgs/icon-128.png',
            'imgs/Icon-130x130.png',
            'imgs/Icon-200x200.png',
            'imgs/platzh1rsch-logo.png',
            'imgs/blinky.svg',
            'imgs/clyde.svg',
            'imgs/dazzled.svg',
            'imgs/dazzled2.svg',
            'imgs/dead.svg',
            'imgs/inky.svg',
            'imgs/Pacman-Icon.svg',
            'imgs/pinky.svg',
          ],
          network: ['dist/everything.min.js.map', 'dist/everything.js'],
          timestamp: true
        },
        dest: 'game.appcache',
        src: []
      }
    },
    });
 


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-manifest');
//  grunt.loadNpmTasks('grunt-http-server');
//  grunt.loadNpmTasks('grunt-protractor-runner');

  // Default task(s).
  grunt.registerTask('default', [
      'concat', 'uglify',
      'processhtml', 'manifest'//,
      //'http-server', 'protractor'
      ]);

};