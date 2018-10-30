module.exports = function (rows_, opts) {
    if (!opts) opts = {};
    var hsep = opts.hsep === undefined ? '  ' : opts.hsep;
    var align = opts.align || [];
    var stringLength = opts.stringLength
        || function (s) { return String(s).length; }
    ;
    
    var dotsizes = reduce(rows_, function (acc, row) {
        forEach(row, function (c, ix) {
            var n = dotindex(c);
            if (!acc[ix] || n > acc[ix]) acc[ix] = n;
        });
        return acc;
    }, []);
    
    var rows = map(rows_, function (row) {
        return map(row, function (c_, ix) {
            var c = String(c_);
            if (align[ix] === '.') {
                var index = dotindex(c);
                var size = dotsizes[ix] + (/\./.test(c) ? 1 : 2)
                    - (stringLength(c) - index)
                ;
                return c + Array(size).join(' ');
            }
            else return c;
        });
    });
    
    var sizes = reduce(rows, function (acc, row) {
        forEach(row, function (c, ix) {
            var n = stringLength(c);
            if (!acc[ix] || n > acc[ix]) acc[ix] = n;
        });
        return acc;
    }, []);
    
    return map(rows, function (row) {
        return map(row, function (c, ix) {
            var n = (sizes[ix] - stringLength(c)) || 0;
            var s = Array(Math.max(n + 1, 1)).join(' ');
            if (align[ix] === 'r' || align[ix] === '.') {
                return s + c;
            }
            if (align[ix] === 'c') {
                return Array(Math.ceil(n / 2 + 1)).join(' ')
                    + c + Array(Math.floor(n / 2 + 1)).join(' ')
                ;
            }
            
            return c + s;
        }).join(hsep).replace(/\s+$/, '');
    }).join('\n');
};

function dotindex (c) {
    var m = /\.[^.]*$/.exec(c);
    return m ? m.index + 1 : c.length;
}

function reduce (xs, f, init) {
    if (xs.reduce) return xs.reduce(f, init);
    var i = 0;
    var acc = arguments.length >= 3 ? init : xs[i++];
    for (; i < xs.length; i++) {
        f(acc, xs[i], i);
    }
    return acc;
}

function forEach (xs, f) {
    if (xs.forEach) return xs.forEach(f);
    for (var i = 0; i < xs.length; i++) {
        f.call(xs, xs[i], i);
    }
}

function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        res.push(f.call(xs, xs[i], i));
    }
    return res;
}
