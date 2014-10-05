var espowerify = require('..'),
    fs = require('fs'),
    Stream = require('stream'),
    assert = require('assert');

describe('default case', function() {
    var stream = espowerify(
        '/absolute/path/to/test/fixtures/example.js',
        {
            _flags: {
                entries: [
                    './test/fixtures/example.js',
                    './test/fixtures/customized.js',
                    './test/fixtures/with-sourcemap.js'
                ],
                debug: true
            }
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
        '/absolute/path/to/test/fixtures/customized.js',
        {
            _flags: {
                entries: [
                    './test/fixtures/example.js',
                    './test/fixtures/customized.js',
                    './test/fixtures/with-sourcemap.js'
                ],
                debug: true
            },
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
    var stream = espowerify(
        '/absolute/path/to/test/fixtures/with-sourcemap.js',
        {
            _flags: {
                entries: [
                    './test/fixtures/example.js',
                    './test/fixtures/customized.js',
                    './test/fixtures/with-sourcemap.js'
                ],
                debug: true
            }
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
            var expected = fs.readFileSync('test/expected/with-sourcemap.js', 'utf8');
            assert.equal(output, expected);
            done();
        });
        file = fs.createReadStream('test/fixtures/with-sourcemap.js');
        file.pipe(stream);
    });
});

describe('when filepath is not in _flags.entries', function() {
    var stream = espowerify(
        '/absolute/path/to/test/fixtures/example.js',
        {
            _flags: {
                entries: [
                    './test/fixtures/customized.js',
                    './test/fixtures/with-sourcemap.js'
                ],
                debug: true
            }
        }
    );
    
    it('should return a stream', function() {
        assert(stream instanceof Stream);
    });
    
    it('should NOT transform module', function(done) {
        var output = '', file;
        stream.on('data', function(buf) {
            output += buf;
        });
        stream.on('end', function() {
            var expected = fs.readFileSync('test/fixtures/example.js', 'utf8');
            assert.equal(output, expected);
            done();
        });
        file = fs.createReadStream('test/fixtures/example.js');
        file.pipe(stream);
    });
});

describe('without _flags (browserify prior to 5.13.0)', function() {
    var stream = espowerify('/absolute/path/to/test/fixtures/example.js');
    
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
