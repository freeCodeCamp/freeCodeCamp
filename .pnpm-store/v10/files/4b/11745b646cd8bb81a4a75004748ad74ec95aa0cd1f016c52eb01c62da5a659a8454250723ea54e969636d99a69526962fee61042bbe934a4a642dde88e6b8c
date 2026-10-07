"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = void 0;
const rules = [
    [/(m)an$/gi, '$1en'],
    [/(pe)rson$/gi, '$1ople'],
    [/(child)$/gi, '$1ren'],
    [/^(ox)$/gi, '$1en'],
    [/(ax|test)is$/gi, '$1es'],
    [/(octop|vir)us$/gi, '$1i'],
    [/(alias|status)$/gi, '$1es'],
    [/(bu)s$/gi, '$1ses'],
    [/(buffal|tomat|potat)o$/gi, '$1oes'],
    [/([ti])um$/gi, '$1a'],
    [/sis$/gi, 'ses'],
    [/(?:([^f])fe|([lr])f)$/gi, '$1$2ves'],
    [/(hive)$/gi, '$1s'],
    [/([^aeiouy]|qu)y$/gi, '$1ies'],
    [/(x|ch|ss|sh)$/gi, '$1es'],
    [/(matr|vert|ind)ix|ex$/gi, '$1ices'],
    [/([m|l])ouse$/gi, '$1ice'],
    [/(kn|w|l)ife$/gi, '$1ives'],
    [/(quiz)$/gi, '$1zes'],
    [/s$/gi, 's'],
    [/([^a-z])$/, '$1'],
    [/$/gi, 's'],
];
const uncountable = [
    'advice',
    'energy',
    'excretion',
    'digestion',
    'cooperation',
    'health',
    'justice',
    'labour',
    'machinery',
    'equipment',
    'information',
    'pollution',
    'sewage',
    'paper',
    'money',
    'species',
    'series',
    'rain',
    'rice',
    'fish',
    'sheep',
    'moose',
    'deer',
    'news',
    'expertise',
    'status',
    'media',
];
function pluralize(str) {
    let found;
    if (!~uncountable.indexOf(str.toLowerCase())) {
        found = rules.filter((rule) => str.match(rule[0]));
        if (found[0]) {
            return str.replace(found[0][0], found[0][1]);
        }
    }
    return str;
}
exports.pluralize = pluralize;
//# sourceMappingURL=pluralize.js.map