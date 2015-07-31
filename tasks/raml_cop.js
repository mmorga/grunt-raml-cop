/*
 * grunt-raml-cop
 * https://github.com/mmorga/grunt-raml-cop
 *
 * Copyright (c) 2015 Mark Morga
 * Licensed under the Apache-2.0 license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('raml_cop', 'Grunt plugin for RAML Cop.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      grunt.util.spawn({cmd: 'raml-cop', args: [f] }, function (error, result, code) {
        // If the exit code was non-zero and a fallback wasn't specified, an Error
        // object, otherwise null.
        if (error) {
          grunt.fail.warn(String(result), result.code);
        }

        grunt.log.ok(String(result));
      });
    });
  });
};
