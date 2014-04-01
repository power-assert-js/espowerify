var espowerify = require('..'),
    fs = require('fs'),
    Stream = require('stream'),
    expect = require('expect.js');

describe('espowerify with default options', function() {
    var stream = espowerify('test/fixtures/example.js');
    
    it('should return a stream', function() {
        expect(stream).to.be.a(Stream);
    });
    
    it('should transform module', function(done) {
        var output = '', file;
        stream.on('data', function(buf) {
            output += buf;
        });
        stream.on('end', function() {
            var expected = fs.readFileSync('test/expected/example.js', 'utf8');
            expect(output).to.be(expected);
            done();
        });
        file = fs.createReadStream('test/fixtures/example.js');
        file.pipe(stream);
    });
});

describe('espowerify with customized options', function() {
    var stream = espowerify(
        'test/fixtures/customized.js',
        {
            destructive: true,
            powerAssertVariableName: 'refute',
            targetMethods: {
                oneArg: [
                    'isNull'
                ],
                twoArgs: [
                    'same'
                ]
            }
        });
    
    it('should return a stream', function() {
        expect(stream).to.be.a(Stream);
    });
    
    it('should transform module', function(done) {
        var output = '', file;
        stream.on('data', function(buf) {
            output += buf;
        });
        stream.on('end', function() {
            var expected = fs.readFileSync('test/expected/customized.js', 'utf8');
            expect(output.toString()).to.be(expected.toString());
            done();
        });
        file = fs.createReadStream('test/fixtures/customized.js');
        file.pipe(stream);
    });
});
