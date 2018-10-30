var should  = require('should')
var needle  = require('./../')

describe('follow redirects when read_timeout is set', function () {

    it('clear timeout before following redirect', function (done) {
        var opts = {
            open_timeout: 1000,
            read_timeout: 3000,
            follow: 5,
            user_agent: 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
        }

        var timedOut = 0
        var redirects = 0

        var timer = setTimeout(function () {
            var hasRedirects = redirects > 0
            hasRedirects.should.equal(true)
            done()
        }, opts.read_timeout || 3000)

        var resp = needle.get('http://google.com/', opts, function (err, resp, body) {
            var noErr = err === null
            var hasBody = body.length > 0
            noErr.should.equal(true);
            hasBody.should.equal(true);
        });

        resp.on('redirect', function (location) {
            redirects++
            // console.info('    Redirected to ', location)
        })

        resp.on('timeout', function (type) {
            timedOut++
            timedOut.should.equal(0)
            // console.error('   ', type, 'timeout')
            clearTimeout(timer)
            done()
        })

    }).timeout(30000)

})