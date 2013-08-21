/*
 * grunt-shadow
 * https://github.com/tristanguo/grunt-shadow
 *
 * Copyright (c) 2013 Tristan Guo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    shadow: {
      'jquery.cat' : {
        'options' : {
          'map' : {
            'jQuery' : 'jquery',
            '$' : 'jquery'
          },
          'exports' : 'jQuery'
        },
        'files' : [
          {'./tmp/jquery.cat.shadowed.js' : './test/fixtures/jquery.cat.js'},
          {'./tmp/jquery.dog.shadowed.js' : ['./test/fixtures/jquery.dog.js']}
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');


  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'shadow', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
