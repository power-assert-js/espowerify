var espowerify = require('..'),
    fs = require('fs'),
    Stream = require('stream'),
    expect = require('expect.js');

describe('espowerify', function() {
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
