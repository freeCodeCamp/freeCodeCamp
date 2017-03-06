var ga;
let ga;

var gb;
const gb = 1;

var gc;
if (gc) {
    let gc;
}

let gd;
if (gd) {
    var gd;
}

var ge;
if (ge) {
    const ge = 1;
}

const gf = 1;
if (gf) {
    var gf;
}

gg: while(true) {
    let gg;
}

gh: while(true) {
    const gh = 1;
}

gi: while(true) {
    var gi;
}

let gj;
gj: while(true) {
}

const gk = 1;
gk: while(true) {
}

var gl;
gl: while(true) {
}

let gm;
if (gm) {
    gm: while (true) {
    }
}

const gn = 1;
if (gn) {
    gn: while (true) {
    }
}

var go;
if (go) {
    go: while (true) {
    }
}

let gp;
if (gp) {
    let gp;
}

const gq = 1;
if (gq) {
    let gq;
}

let gr;
if (gr) {
    const gr = 1;
}

const gs = 1;
if (gs) {
    const gs = 1;
}

var gt;
(function() {
    let gt;
}());

let gu;
(function() {
    var gu;
}());

var gv;
(function() {
    const gv = 1;
}());

const gw = 1;
(function() {
    var gw;
}());

let gx;
let gx;

let gy;
const gy = 1;

const gz = 1;
const gz = 1;

let gza;
var gza;

const gzb = 1;
var gzb;

if (true) {
    let gzc;
}
let gzc;

if (true) {
    var gzd;
}
let gzd;

if (true) {
    let gzd2;
}
var gzd2;

if (true) {
    const gze = 1;
}
const gze = 1;

if (true) {
    var gzf;
}
const gzf = 1;

if (true) {
    const gzg = 1;
}
var gzg;

function zz() {
    var a;
    let a;

    var b;
    const b = 1;

    var c;
    if (c) {
        let c;
    }

    let d;
    if (d) {
        var d;
    }

    var e;
    if (e) {
        const e = 1;
    }

    const f = 1;
    if (f) {
        var f;
    }

    g: while(true) {
        let g;
    }

    h: while(true) {
        const h = 1;
    }

    i: while(true) {
        var i;
    }

    let j;
    j: while(true) {
    }

    const k = 1;
    k: while(true) {
    }

    var l;
    l: while(true) {
    }

    let m;
    if (m) {
        m: while (true) {
        }
    }

    const n = 1;
    if (n) {
        n: while (true) {
        }
    }

    var o;
    if (o) {
        o: while (true) {
        }
    }

    let p;
    if (p) {
        let p;
    }

    const q = 1;
    if (q) {
        let q;
    }

    let r;
    if (r) {
        const r = 1;
    }

    const s = 1;
    if (s) {
        const s = 1;
    }

    var t;
    (function() {
        let t;
    }());

    let u;
    (function() {
        var u;
    }());

    var v;
    (function() {
        const v = 1;
    }());

    const w = 1;
    (function() {
        var w;
    }());

    let x;
    let x;

    let y;
    const y = 1;

    const z = 1;
    const z = 1;

    let za;
    var za;

    const zb = 1;
    var zb;

    if (true) {
        let zc;
    }
    let zc;

    if (true) {
        var zd;
    }
    let zd;

    if (true) {
        let zd2;
    }
    var zd2;

    if (true) {
        const ze = 1;
    }
    const ze = 1;

    if (true) {
        var zf;
    }
    const zf = 1;

    if (true) {
        const zg = 1;
    }
    var zg;

    zh: while(true) {
        break zh;
    }
    // works fine - zh is in scope of the while only
    zh: while(true) {
        break zh;
    }

    zi: while(true) {
        zi: while(true) {
            break zi;
        }
    }
}

function zz2() {
    let zza = 1;
    const zzb = 1;
    let zzc = 1;
    const zzd = 1;
    let zze = 1;
    const zzf = 1;
    function y() {
        function x() {
            var zza = 2;
            var zzb = 2;
            let zzc = 2;
            let zzd = 2;
            let zze = 2;
            let zzf = 2;
        }
    }
}

function zzg(zzh, zzi, zzj) {
    var zzh = 1;
    let zzi = 1;
    const zzj = 1;
}

(function(zzk) { var zzk = zzk; return zzk; }());
(function(zzl) { const zzl = zzl; return zzl; }());
(function(zzm) { let zzm = zzm; return zzm; }());

{
    var zzn = null; // expected warning
    const zzo = null;
    let zzp = null;
}
(function() {
    var zzn = null;
    const zzo = null;
    let zzp = null;
}());

zj: while(true) {
    zj: while(true) {
        break zj;
    }
}