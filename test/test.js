var espowerify = require('..'),
    fs = require('fs'),
    Stream = require('stream'),
    assert = require('assert');

describe('with default options', function() {
    var stream = espowerify('test/fixtures/example.js');
    
    it('should return a stream', function() {
        assert(stream instanceof Stream);
    });
    
    it('should transform module', function(done) {
        var output = '', file;
        stream.on('data', function(buf) {
            output += buf;
        });
        stream.on('end', function() {
            var expected = fs.readFileSync('test/expected/example.js', 'utf8');
            assert.equal(output, expected);
            done();
        });
        file = fs.createReadStream('test/fixtures/example.js');
        file.pipe(stream);
    });
});

describe('with customized options', function() {
    var stream = espowerify(
        'test/fixtures/customized.js',
        {
            patterns: [
                'refute(actual, [message])',
                'refute.same(actual, expected, [message])',
                'refute.isNull(object, [message])'
            ]
        });
    
    it('should return a stream', function() {
        assert(stream instanceof Stream);
    });
    
    it('should transform module', function(done) {
        var output = '', file;
        stream.on('data', function(buf) {
            output += buf;
        });
        stream.on('end', function() {
            var expected = fs.readFileSync('test/expected/customized.js', 'utf8');
            assert.equal(output, expected);
            done();
        });
        file = fs.createReadStream('test/fixtures/customized.js');
        file.pipe(stream);
    });
});

describe('incoming code with SourceMap comment', function() {
    var stream = espowerify('test/fixtures/with-sourcemap.js');
    
    it('should return a stream', function() {
        assert(stream instanceof Stream);
    });
    
    it('should transform module', function(done) {
        var output = '', file;
        stream.on('data', function(buf) {
            output += buf;
        });
        stream.on('end', function() {
            var expected = fs.readFileSync('test/expected/with-sourcemap.js', 'utf8');
            assert.equal(output, expected);
            done();
        });
        file = fs.createReadStream('test/fixtures/with-sourcemap.js');
        file.pipe(stream);
    });
});

