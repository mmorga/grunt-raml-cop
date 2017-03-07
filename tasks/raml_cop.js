/*
 * grunt-raml-cop
 * https://github.com/mmorga/grunt-raml-cop
 *
 * Copyright (c) 2015 Mark Morga
 * Licensed under the Apache-2.0 license.
 */

'use strict';

var async     = require('async');
var raml      = require('raml-parser');
var utils     = require('raml-cop/src/lib/utils.js');
var reporter  = require('raml-cop/src/lib/reporter.js');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('raml_cop', 'Grunt plugin for RAML Cop.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({}),
      done = this.async(),
      errorCount = 0,
      srcs = this.files.map(function (f) { return f.src; }).
        reduce(function (pv,cv) {return pv.concat(cv);}, []);

    if(srcs.length == 0) {
      grunt.log.error('No files to validate found.');
    } else {
      grunt.log.writeln('Validating target: ' + this.target);
    }

    // Parse each argument in sequence.
    async.eachSeries(srcs,
      function(arg, callback) {
        // Parse file
        raml.loadFile(arg).then(function(data) {
          reporter.success(arg, data);
        }, function(err) {
          reporter.error(arg, err);
          errorCount++;
        }).finally(callback);
    }, function(err) {
      if (err) { done(err); }

      // Clean up
      reporter.flush();

      if (errorCount > 0) {
        done(new Error("RAML errors: " + errorCount));
      }
      done(true);
    });
  });
};
