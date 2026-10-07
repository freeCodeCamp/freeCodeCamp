'use strict';

// 汉语拼音方案
// http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/195802/t19580201_186000.html
// http://www.moe.gov.cn/ewebeditor/uploadfile/2015/03/02/20150302165814246.pdf

const regexp_Pinyin = /^(er[0-5]?|e[^0-5]|([zcs]h?|[bpmfdtnlgkhjqxywr])?(i[ao]ng|u[ae]ng|[aeo]ng|ia[on]|iou|ing|u[ae][in]|van|a[ion]?|ou?|e[in]?|i[aeun]?|u[aoein]?|v[en]?)(r[0-5]|[r0-5])?|ng|[zcs]h?|[bpmfdtnlgkhjqxywr])$/;

const _韵母表 = {
    a: ['a', 'ā', 'á', 'ǎ', 'à'], // a
    o: ['o', 'ō', 'ó', 'ǒ', 'ò'], // o
    e: ['e', 'ē', 'é', 'ě', 'è'], // e
    ai: ['ai', 'āi', 'ái', 'ǎi', 'ài'],
    ei: ['ei', 'ēi', 'éi', 'ěi', 'èi'],
    ao: ['ao', 'āo', 'áo', 'ǎo', 'ào'],
    ou: ['ou', 'ōu', 'óu', 'ǒu', 'òu'],
    an: ['an', 'ān', 'án', 'ǎn', 'àn'],
    en: ['en', 'ēn', 'én', 'ěn', 'èn'],
    ang: ['ang', 'āng', 'áng', 'ǎng', 'àng'],
    eng: ['eng', 'ēng', 'éng', 'ěng', 'èng'],
    ong: ['ong', 'ōng', 'óng', 'ǒng', 'òng'],

    i: ['i', 'ī', 'í', 'ǐ', 'ì'], // i
    ia: ['ia', 'iā', 'iá', 'iǎ', 'ià'],

    ie: ['ie', 'iē', 'ié', 'iě', 'iè'],
    iao: ['iao', 'iāo', 'iáo', 'iǎo', 'iào'],
    iou: ['iou', 'iōu', 'ióu', 'iǒu', 'iòu'],
    iu: ['iu', 'iū', 'iú', 'iǔ', 'iù'],
    ian: ['ian', 'iān', 'ián', 'iǎn', 'iàn'],
    in: ['in', 'īn', 'ín', 'ǐn', 'ìn'],
    iang: ['iang', 'iāng', 'iáng', 'iǎng', 'iàng'],
    ing: ['ing', 'īng', 'íng', 'ǐng', 'ìng'],
    iong: ['iong', 'iōng', 'ióng', 'iǒng', 'iòng'],

    ui: ['ui', 'uī', 'uí', 'uǐ', 'uì'], //ui

    u: ['u', 'ū', 'ú', 'ǔ', 'ù'], // u
    ua: ['ua', 'uā', 'uá', 'uǎ', 'uà'],
    uo: ['uo', 'uō', 'uó', 'uǒ', 'uò'],
    uai: ['uai', 'uāi', 'uái', 'uǎi', 'uài'],
    uei: ['uei', 'uēi', 'uéi', 'uěi', 'uèi'],
    uan: ['uan', 'uān', 'uán', 'uǎn', 'uàn'],
    uen: ['uen', 'uēn', 'uén', 'uěn', 'uèn'],
    un: ['un', 'ūn', 'ún', 'ǔn', 'ùn'],
    uang: ['uang', 'uāng', 'uáng', 'uǎng', 'uàng'],
    ueng: ['ueng', 'uēng', 'uéng', 'uěng', 'uèng'],

    ü: ['ü', 'ǖ', 'ǘ', 'ǚ', 'ǜ'], // ü
    v: ['ü', 'ǖ', 'ǘ', 'ǚ', 'ǜ'], // ü

    üe: ['üe', 'üē', 'üé', 'üě', 'üè'],
    ve: ['üe', 'üē', 'üé', 'üě', 'üè'],
    ue: ['ue', 'uē', 'ué', 'uě', 'uè'],

    üan: ['üan', 'üān', 'üán', 'üǎn', 'üàn'],
    van: ['üan', 'üān', 'üán', 'üǎn', 'üàn'],
    ün: ['ün', 'ǖn', 'ǘn', 'ǚn', 'ǜn'],
    vn: ['ün', 'ǖn', 'ǘn', 'ǚn', 'ǜn'],
};

const r = "r";

/**
 * Convert "letter + number" to "Pinyin tone"
 * @param {string} args like "ma1 ma2 ma3 ma4 ma"
 * @return {string} like "mā má mǎ mà ma"
 */
function pinyin_v1(args) {
    // args must be string, or return itself
    if (typeof args !== 'string') {
        return args;
    }

    // 分词
    let fragments = args.split(' ');

    // 是否是合规则的拼音
    const split_results = fragments.map(itself => {
        // 匹配regexp
        const exec_array = regexp_Pinyin.exec(itself)

        // 如果不匹配
        if (!Array.isArray(exec_array)) {
            return itself;
        }

        // 这里开始是匹配的情形
        const [_, _特殊, _声母, _韵母, _儿化音和声调] = exec_array;

        // 特殊情况按整体处理
        switch (_特殊) {
            // \er/
            case "er":
            case "er0":
            case "er5":
                return "er";

            case "er1":
                return "ēr";

            case "er2":
                return "ér";

            case "er3":
                return "ěr"

            case "er4":
                return "èr"

            // \/
            // case "e5":
            case "e^":
                return "ê";

            case "ng":
                return "ng";

            // 仅有\声母/
            case "b":
            case "p":
            case "m":
            case "f":
            case "d":
            case "t":
            case "n":
            case "l":
            case "g":
            case "k":
            case "h":
            case "j":
            case "q":
            case "x":
            case "z":
            case "c":
            case "s":
            case "r":
            case "y":
            case "w":
            case "zh":
            case "ch":
            case "sh":
                return _特殊;
        }

        // 如果没有声母，只有韵母和其他部分，按原样显示
        if (typeof _声母 === "undefined") {
            // 如果在韵母表中不存在
            if (typeof _韵母表[_韵母] === "undefined") {
                return itself;
            }

            // 这里开始有韵母……
            // 如果没有声调和儿化音
            if (typeof _儿化音和声调 === "undefined") {
                return _韵母表[_韵母][0];
            }

            // 这里开始有声调和儿化音
            switch (_儿化音和声调) {
                // 0=无声调、轻声
                case "":
                case "0":
                case "5":
                    return _韵母表[_韵母][0];

                case "r":
                case "5r":
                case "r5":
                    return _韵母表[_韵母][0] + r;

                // 1=阴平
                case "1":
                    return _韵母表[_韵母][1];

                case "r1":
                case "1r":
                    return _韵母表[_韵母][1] + r;

                // 2=阳平
                case "2":
                    return _韵母表[_韵母][2];

                case "2r":
                case "r2":
                    return _韵母表[_韵母][2] + r;

                // 3=上声
                case "3":
                    return _韵母表[_韵母][3];

                case "3r":
                case "r3":
                    return _韵母表[_韵母][3] + r;

                // 4=去声
                case "4":
                    return _韵母表[_韵母][4];

                case "4r":
                case "r4":
                    return _韵母表[_韵母][4] + r;

                // ？=意料之外
                default:
                    return itself;
            }
        } else {
            // 有声母也有韵母
            switch (_韵母) {
                case "v":
                    if (_声母 === "j" || _声母 === "q" || _声母 === "x" || _声母 === "y") {
                        return _声母 + alter(_儿化音和声调, "u ū ú ǔ ù".trim().split(" "));
                    }

                    return _声母 + alter(_儿化音和声调, "ü ǖ ǘ ǚ ǜ".trim().split(" "));

                case "van":
                    if (_声母 === "j" || _声母 === "q" || _声母 === "x" || _声母 === "y") {
                        return _声母 + alter(_儿化音和声调, "uan uān uán uǎn uàn".trim().split(" "));
                    }

                    return _声母 + alter(_儿化音和声调, "üan üān üán üǎn üàn".trim().split(" "));

                case "ve":
                    if (_声母 === "j" || _声母 === "q" || _声母 === "x" || _声母 === "y") {
                        return _声母 + alter(_儿化音和声调, "ue uē ué uě uè".trim().split(" "));///
                    }

                    return _声母 + alter(_儿化音和声调, "üe üē üé üě üè".trim().split(" "));

                case "uei":
                    return _声母 + alter(_儿化音和声调, "ui uī uí uǐ uì".trim().split(" "));

                case "uen":
                    return _声母 + alter(_儿化音和声调, "un ūn ún ǔn ùn".trim().split(" "));

                case "iou":
                    return _声母 + alter(_儿化音和声调, "iu iū iú iǔ iù".trim().split(" "));

                default:
                    return _声母 + alter(_儿化音和声调, _韵母表[_韵母]);
            }

        }
    });

    return split_results.join(' ');
}

/**
 *
 * @param {string} _儿化音和声调
 * @param {string[]} _韵母
 */
function alter(_儿化音和声调, _韵母) {
    // assert.strictEqual(_韵母.length, 5);

    switch (_儿化音和声调) {
        // 轻声=""|0
        case "":
        case "0":
        case "5":
            return _韵母[0];

        case "r":
        case "r0":
        case "0r":
        case "r5":
        case "5r":
            return _韵母[0] + r;

        case "1":
            return _韵母[1];

        case "r1":
        case "1r":
            return _韵母[1] + r;

        case "2":
            return _韵母[2];

        case "r2":
        case "2r":
            return _韵母[2] + r;

        case "3":
            return _韵母[3];

        case "r3":
        case "3r":
            return _韵母[3] + r;

        case "4":
            return _韵母[4];

        case "r4":
        case "4r":
            return _韵母[4] + r;

        default:
            return _韵母[0];
    }
}

export default pinyin_v1;