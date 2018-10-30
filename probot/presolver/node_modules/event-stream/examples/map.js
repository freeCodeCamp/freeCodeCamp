var es = require('..')

process.stdin
    .pipe(es.map(function (data, callback) {
        for (var i = 0; i < data.length; i++) {
            if (data[i] == 0x61) {
                data[i] = 0x41
            }
        }
        callback(null, data)
    }))
    .pipe(process.stdout)

// echo abcdabcd | node map.js 
// AbcdAbcd