/*
 * grunt-shadow
 * https://github.com/tristanguo/grunt-shadow
 *
 * Copyright (c) 2013 Tristan.Guo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  function amdify (content, options) {
    var deps = [];
    var args = [];
    var map = options.map;
    var keys = Object.keys(map);
    var exportVariable = options.exports;

    if (exportVariable && exportVariable.length > 0) {
      content += ";\nreturn " + exportVariable + ";\n";
    }

    keys.forEach(function (k) {
      deps.push("'" + map[k] + "'");
      args.push(k);
    });

    return "define([ " + deps.join(", ") + " ], function (" + args.join(", ") + ") {\n"
      + content
      + "});";
  }

  grunt.registerMultiTask('shadow', 'replace global variables', function() {
    var options = this.options();
    var content;
    var src;

    this.files.forEach(function (f) {
      if (Array.isArray(f.src) && f.src.length > 1) {
        src = f.src[0];
        grunt.log.warn('Unexpected more than 1 source file, only first one is shadowed.');
      }
      else {
        src = f.src;
      }

      content = amdify(grunt.file.read(src), options);
      grunt.file.write(f.dest, content);
    });

  });

};
