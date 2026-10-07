var MemoryStream = require('../index.js'),
    expect = require('expect.js'),
    STREAM = require('stream'),
    Q = require('q'),
    FS = require('fs');

describe('Test memory streams', function() { 
    
    var writeToStream = function (mem_stream, test_data, frequency) {
        var result = Q(),
            i = 0;
        
        frequency = frequency || 0;
        
        test_data.forEach(function (chunk) {
            var f = Q.nfbind(function (chunk,n, cb) {
                setTimeout(function () {
                    if (n >= (test_data.length - 1) ) {
                        mem_stream.end(chunk);
                    } else {
                        mem_stream.write(chunk, cb);
                    }
                }, frequency);
            }, chunk ,i++);
            result = result.then(function() { return f(); });
        });
        
        result.done();
    };
    
    var writeToStream2 = function (mem_stream, test_data) {
        var i;
        for (i = 0; i < test_data.length ; i++) {
            setTimeout((function(n) {
                return function () {
                    if (n >= (test_data.length - 1) ) {
                        mem_stream.end(test_data[n]);
                    } else {
                        mem_stream.write(test_data[n]);
                    }
                }
            })(i), i * 2);
        }
    };
    
    describe("constructor", function() {
        it('should have a MemoryStream class', function () {
            expect(MemoryStream).to.be.ok();
        });
        
        it('should create Readable stream', function () {
            var memory_stream = new MemoryStream([], {writable : false});
            expect(memory_stream).to.be.ok();
            expect(memory_stream).to.be.a(STREAM.Readable);
            
            memory_stream = MemoryStream.createReadStream([]);
            expect(memory_stream).to.be.a(STREAM.Readable);
        });
        
        it('should create Writable stream', function () {
            var memory_stream = new MemoryStream([], {readable : false});
            expect(memory_stream).to.be.ok();
            expect(memory_stream).to.be.a(STREAM.Writable);
            
            memory_stream = MemoryStream.createWriteStream([]);
            expect(memory_stream).to.be.a(STREAM.Writable);
        });
        
        it('should create Duplex stream', function () {
            var memory_stream = new MemoryStream([]);
            expect(memory_stream).to.be.ok();
            expect(memory_stream).to.be.a(STREAM.Duplex);
        });
        
    });
    
    describe("readable stream", function () {
        var test_data = 'abcdefghijklmnopqrstuvwxyz',
            frequence = 50;
        
        it("should read data from stream", function (done) {
            var mem_stream = MemoryStream.createReadStream(test_data.split(''));
            
            var data = '', chunks = 0;
            mem_stream.on('data',function(chunk){
                data += chunk;
                ++chunks;
            });
            
            mem_stream.on('end',function () {
                expect(chunks).to.be(test_data.length);
                expect(data).to.be(test_data);
                done();
            });
        });
        
        it("should read data from stream with frequency", function (done) {
            
            var mem_stream = new MemoryStream(test_data.split(''), {
                writable : false,
                frequence: frequence
            });
            
            var start_time = Date.now();
            
            var data = '';
            mem_stream.on('data',function(chunk){
                data += chunk;
            });
            
            mem_stream.on('end',function(){
                var execution_time = Date.now() - start_time;
                
                expect(data).to.be(test_data);
                expect(execution_time >= frequence * test_data.length).to.be(true);
                
                done();
            });
        });
        
        it("should read data pause/resume", function (done) {
            var mem_stream = MemoryStream.createReadStream(test_data.split(''));
            
            var start_time = Date.now();
            
            var data = '', chunks = 0;
            mem_stream.on('data',function(chunk){
                data += chunk;
                ++chunks;
                
                if (! (chunks % 10) ) {
                    mem_stream.pause();
                    setTimeout(function () {
                        mem_stream.resume();
                    },frequence);
                }
            });
            
            mem_stream.on('end',function() {
                var execution_time = Date.now() - start_time;
                
                expect(data).to.be(test_data);
                expect(execution_time >= frequence).to.be(true);
                
                done();
            });
        });
        
    });
    
    describe("writable stream", function () {
        var test_data = 'abcdefghijklmnopqrstuvwxyz';
            
        it("should write data to Writable", function (done) {
            var mem_stream = MemoryStream.createWriteStream(),
                i = 0;
            
            writeToStream(mem_stream, test_data.split(''));
            
            mem_stream.on('finish',function () {
                expect(mem_stream.toString()).to.be(test_data);
                done();
            });
            
        });
        
        it("should not write data to readable stream", function (done) {
            var mem_stream = new MemoryStream([], {writable : false});
            expect(function () {
                mem_stream.write("test");
            }).to.throwError();
            
            expect(function () {
                mem_stream.end("test");
            }).to.throwError();
            
            done();
        });
        
        it("#toString", function (done) {
            var mem_stream = new MemoryStream(null, {readable : false});
            writeToStream(mem_stream, test_data.split(''));
            
            mem_stream.on('finish',function () {
                expect(mem_stream.toString()).to.be(test_data);
                done();
            });
        });
        
        it("#toBuffer", function (done) {
            var mem_stream = new MemoryStream(null, {readable : false});
            writeToStream(mem_stream, test_data.split(''));
            
            mem_stream.on('finish',function () {
                expect(mem_stream.toBuffer().toString('utf-8')).to.be(test_data);
                done();
            });
        });
        
        it("#toBuffer all data in one buffer", function (done) {
            var i = 0,
                mem_stream = new MemoryStream(null, {readable : false}),
                arr_test_data = [],
                str_test_data = '';
            for (i = 0; i < 20; i++) {
                var b = new Buffer([i]);
                arr_test_data.push(b);
                str_test_data += b.toString('hex');
            }
            
            writeToStream(mem_stream, arr_test_data, 10);
            
            mem_stream.on('finish',function () {
                expect(mem_stream.toBuffer().toString('hex')).to.be(str_test_data);
                done();
            });
            
        });
        
        it("not write data to the overflowed buffer", function (done) {
            var mem_stream = new MemoryStream('data1'.split(''), {
                readable : false,
                maxbufsize : 10
            });
            
            mem_stream.write('data2', function (err) {
                expect(err).to.not.be.ok();
                expect(mem_stream.toString()).to.be('data1data2');
                mem_stream.write('data3', function (err) {
                    expect(err).to.not.be.ok();
                    expect(mem_stream.toString()).to.be('data1data2');
                    done();
                });
            });
        });
        
        it("should process error for overflowed buffer", function (done) {
            var mem_stream = new MemoryStream('data1'.split(''), {
                readable : false,
                maxbufsize : 10,
                bufoverflow : true
            });
            
            mem_stream.write('data2', function (err) {
                expect(err).to.not.be.ok();
                expect(mem_stream.toString()).to.be('data1data2');
                mem_stream.write('data3', function (err) {
                    expect(err).to.be.ok();
                    expect(mem_stream.toString()).to.be('data1data2');
                    done();
                });
                
            });
            
            mem_stream.on('error', function () {
            });
            
        });
    });
    
    describe("duplex stream", function () {
        var test_data = 'abcdefghijklmnopqrstuvwxyz';
        
        it("should write/read",function (done) {
            var mem_stream = new MemoryStream();
            
            var data = '';
            mem_stream.on('data',function(chunk){
                data += chunk;
            });
            
            writeToStream(mem_stream, test_data.split(''));
            
            mem_stream.on('end', function () {
                expect(data).to.be(test_data);
                done();
            });
        });

        it("should write/read data with init buffer", function (done) {

            var l = Math.floor(test_data.length / 2);

            var test_data1 = test_data.substr(0, l),
                test_data2 = test_data.substr(l);

            var mem_stream = new MemoryStream(test_data1.split(''));

            var data = '';
            mem_stream.on('data',function(chunk){
                data += chunk;
            });

            writeToStream2(mem_stream, test_data2);

            mem_stream.on('end', function() {
                expect(data).to.be(test_data);
                done();
            });

        });
        

        it("should piping data", function (done) {
            var src_mem_stream = MemoryStream.createReadStream(test_data.split(''), {frequency : 25});
            var dst_mem_stream = MemoryStream.createWriteStream();
            
            src_mem_stream.pipe(dst_mem_stream);
            
            dst_mem_stream.on('finish',function(){
                expect(dst_mem_stream.toString()).to.be(test_data);
                done();
            });
            
            
        });
        
        it("should readable/piping data", function (done) {
            var src_mem_stream = MemoryStream.createReadStream(test_data.split(''), {frequency : 25});
            var dst_mem_stream = MemoryStream.createWriteStream();
            
            src_mem_stream.once('readable', function () {
                src_mem_stream.pipe(dst_mem_stream);
            });
            
            dst_mem_stream.on('finish',function(){
                expect(dst_mem_stream.toString()).to.be(test_data);
                done();
            });
        });
        
    });
});
