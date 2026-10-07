'use strict';
import b from './b.js';
import br from './br.js';
import c from './c.js';
import ch from './ch.js';
import chr from './chr.js';
import cr from './cr.js';
import d from './d.js';
import dr from './dr.js';
import f from './f.js';
import fr from './fr.js';
import g from './g.js';
import gr from './gr.js';
import h from './h.js';
import hr from './hr.js';
import j from './j.js';
import jr from './jr.js';
import k from './k.js';
import kr from './kr.js';
import l from './l.js';
import lr from './lr.js';
import m from './m.js';
import mr from './mr.js';
import n from './n.js';
import nr from './nr.js';
import p from './p.js';
import pr from './pr.js';
import q from './q.js';
import qr from './qr.js';
import r from './r.js';
import rr from './rr.js';
import s from './s.js';
import sh from './sh.js';
import shr from './shr.js';
import special from './special.js';
import sr from './sr.js';
import t from './t.js';
import tr from './tr.js';
import v from './v.js';
import vr from './vr.js';
import w from './w.js';
import wr from './wr.js';
import x from './x.js';
import xr from './xr.js';
import y from './y.js';
import yr from './yr.js';
import yunmu from './yunmu.js';
import yunmur from './yunmur.js';
import z from './z.js';
import zh from './zh.js';
import zhr from './zhr.js';
import zr from './zr.js';

const pinyin_dict_v2 = Object.assign({}, b, br, c, ch, chr, cr, d, dr, f, fr, g, gr, h, hr, j, jr, k, kr, l, lr, m, mr, n, nr, p, pr, q, qr, r, rr, s, sr, sh, shr, special, sr, t, tr, v, vr, w, wr, x, xr, y, yr, yunmu, yunmur, z, zh, zhr, zr);

// console.log(pinyin_dict_v2)

const regex = /(?<abc>[a-z]+)(?<num>[01234^]?)/;

/**
 *
 * @param {string} longString
 * @return {string}
 */
function toPinyinTones(longString) {
    const stringArray = longString.trim().split(' ');

    return stringArray.map((str) => {
        const match = regex.exec(str);
        // if match and not undefined
        if (match && pinyin_dict_v2[match.groups.abc]) {
            return pinyin_dict_v2[match.groups.abc][parseInt(match.groups.num) || 0]; // is pinyin
        }
        return str; // is NOT pinyin
    }).join(' ');
}

/**
 * split syllables string by number
 * @param {string} text
 * @returns {string}
 */
function splitUnspacedSyllables(text){
    // insert a separator between each number
    return text.replace(/(\d)/g, '$1 ') // add space after each number
    .replace(/\s+/g, ' ') // remove multiple spaces
    .trim() // remove leading and trailing spaces
}

/**
 * output pinyin string without space like "hànyǔpīnyīn"
 * @param {string} unspacedSyllables unspaced pinyin string like "han4yu3pin1yin1"
 * @returns {string}
 */
function convertUnspacedPinyin(unspacedSyllables){
    return toPinyinTones(splitUnspacedSyllables(unspacedSyllables)).split(' ').join('')
}

export default toPinyinTones;
export {splitUnspacedSyllables};
export {convertUnspacedPinyin};