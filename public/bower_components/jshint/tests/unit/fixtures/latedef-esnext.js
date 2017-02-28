let a = 1;
let b = () => a;
let d = () => c;
let c = 1;
let f = () => e;
const e = 1;
let g = () => { return h; };
let h = 1;
let j = i;
let i = 1;
function ag() {
    function ah() {
        ai = 2;
    }
    let ai;
    function aj() {
        function ak() {
            ai = 3;
        }
        let ai;
        ak();
    }
    ah();
    aj();
}
ag();
function bg() {
    function bh() {
        bi = 2;
    }
    let bi;
    function bj() {
        function bk() {
            bi = 3;
        }
        bk();
    }
    bh();
    bj();
}
bg();
function cg() {
    let ci;
    function cj() {
        function ck() {
            ci = 3;
        }
        let ci;
        ck();
    }
    ci = 2;
    ch();
    cj();
}
cg();
let da = () => da;
const db = () => db;
let dc = {
    dd() {
        return dc;
    }
};

// Regression test for gh-2658
export function de() {}
export class df {}
export var dg;
export let dh;
export const di = {};
