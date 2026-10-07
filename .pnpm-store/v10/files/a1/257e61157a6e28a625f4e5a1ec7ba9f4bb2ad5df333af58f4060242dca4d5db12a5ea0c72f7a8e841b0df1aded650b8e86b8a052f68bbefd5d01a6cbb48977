'use strict';

var identity = require('./nodes/identity.js');
var publicApi = require('./public-api.js');
var visit = require('./visit.js');

const scalarChar = {
    BLOCK_FOLDED: '>',
    BLOCK_LITERAL: '|',
    PLAIN: ':',
    QUOTE_DOUBLE: '"',
    QUOTE_SINGLE: "'"
};
function anchorExists(doc, anchor) {
    let found = false;
    visit.visit(doc, {
        Value(_key, node) {
            if (node.anchor === anchor) {
                found = true;
                return visit.visit.BREAK;
            }
        }
    });
    return found;
}
// test harness for yaml-test-suite event tests
function testEvents(src) {
    const docs = publicApi.parseAllDocuments(src);
    const errDoc = docs.find(doc => doc.errors.length > 0);
    const error = errDoc ? errDoc.errors[0].message : null;
    const events = ['+STR'];
    try {
        for (let i = 0; i < docs.length; ++i) {
            const doc = docs[i];
            let root = doc.contents;
            if (Array.isArray(root))
                root = root[0];
            const [rootStart] = doc.range || [0];
            const error = doc.errors[0];
            if (error && (!error.pos || error.pos[0] < rootStart))
                throw new Error();
            let docStart = '+DOC';
            if (doc.directives.docStart)
                docStart += ' ---';
            else if (doc.contents &&
                doc.contents.range[2] === doc.contents.range[0] &&
                !doc.contents.anchor &&
                !doc.contents.tag)
                continue;
            events.push(docStart);
            addEvents(events, doc, error?.pos[0] ?? -1, root);
            let docEnd = '-DOC';
            if (doc.directives.docEnd)
                docEnd += ' ...';
            events.push(docEnd);
        }
    }
    catch (e) {
        return { events, error: error ?? e };
    }
    events.push('-STR');
    return { events, error };
}
function addEvents(events, doc, errPos, node) {
    if (!node) {
        events.push('=VAL :');
        return;
    }
    if (errPos !== -1 && identity.isNode(node) && node.range[0] >= errPos)
        throw new Error();
    let props = '';
    let anchor = identity.isScalar(node) || identity.isCollection(node) ? node.anchor : undefined;
    if (anchor) {
        if (/\d$/.test(anchor)) {
            const alt = anchor.replace(/\d$/, '');
            if (anchorExists(doc, alt))
                anchor = alt;
        }
        props = ` &${anchor}`;
    }
    if (identity.isNode(node) && node.tag)
        props += ` <${node.tag}>`;
    if (identity.isMap(node)) {
        const ev = node.flow ? '+MAP {}' : '+MAP';
        events.push(`${ev}${props}`);
        node.items.forEach(({ key, value }) => {
            addEvents(events, doc, errPos, key);
            addEvents(events, doc, errPos, value);
        });
        events.push('-MAP');
    }
    else if (identity.isSeq(node)) {
        const ev = node.flow ? '+SEQ []' : '+SEQ';
        events.push(`${ev}${props}`);
        node.items.forEach(item => {
            addEvents(events, doc, errPos, item);
        });
        events.push('-SEQ');
    }
    else if (identity.isPair(node)) {
        events.push(`+MAP${props}`);
        addEvents(events, doc, errPos, node.key);
        addEvents(events, doc, errPos, node.value);
        events.push('-MAP');
    }
    else if (identity.isAlias(node)) {
        let alias = node.source;
        if (alias && /\d$/.test(alias)) {
            const alt = alias.replace(/\d$/, '');
            if (anchorExists(doc, alt))
                alias = alt;
        }
        events.push(`=ALI${props} *${alias}`);
    }
    else {
        const scalar = scalarChar[String(node.type)];
        if (!scalar)
            throw new Error(`Unexpected node type ${node.type}`);
        const value = node.source
            .replace(/\\/g, '\\\\')
            .replace(/\0/g, '\\0')
            .replace(/\x07/g, '\\a')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g, '\\t')
            .replace(/\n/g, '\\n')
            .replace(/\v/g, '\\v')
            .replace(/\f/g, '\\f')
            .replace(/\r/g, '\\r')
            .replace(/\x1b/g, '\\e');
        events.push(`=VAL${props} ${scalar}${value}`);
    }
}

exports.testEvents = testEvents;
