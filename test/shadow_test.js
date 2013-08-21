'use strict';

var grunt = require('grunt');

exports.shadow = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/jquery.cat.shadowed.js');
    var expected = grunt.file.read('test/expected/jquery.cat.shadowed.js');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    actual = grunt.file.read('tmp/jquery.dog.shadowed.js');
    expected = grunt.file.read('test/expected/jquery.dog.shadowed.js');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};
