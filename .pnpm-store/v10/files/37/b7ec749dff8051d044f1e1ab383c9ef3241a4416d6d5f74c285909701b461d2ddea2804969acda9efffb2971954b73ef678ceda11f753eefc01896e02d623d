'use strict';

const punycode = require('../punycode');
const mimeFuncs = require('../mime-funcs');
const crypto = require('crypto');

/**
 * Returns DKIM signature header line
 *
 * @param {Object} headers Parsed headers object from MessageParser
 * @param {String} bodyHash Base64 encoded hash of the message
 * @param {Object} options DKIM options
 * @param {String} options.domainName Domain name to be signed for
 * @param {String} options.keySelector DKIM key selector to use
 * @param {String} options.privateKey DKIM private key to use
 * @return {String} Complete header line
 */

module.exports = (headers, hashAlgo, bodyHash, options) => {
    options = options || {};

    // all listed fields from RFC4871 #5.5
    let defaultFieldNames =
        'From:Sender:Reply-To:Subject:Date:Message-ID:To:' +
        'Cc:MIME-Version:Content-Type:Content-Transfer-Encoding:Content-ID:' +
        'Content-Description:Resent-Date:Resent-From:Resent-Sender:' +
        'Resent-To:Resent-Cc:Resent-Message-ID:In-Reply-To:References:' +
        'List-Id:List-Help:List-Unsubscribe:List-Subscribe:List-Post:' +
        'List-Owner:List-Archive';

    let fieldNames = options.headerFieldNames || defaultFieldNames;

    let canonicalizedHeaderData = relaxedHeaders(headers, fieldNames, options.skipFields);
    let dkimHeader = generateDKIMHeader(options.domainName, options.keySelector, canonicalizedHeaderData.fieldNames, hashAlgo, bodyHash);

    let signer, signature;

    canonicalizedHeaderData.headers += 'dkim-signature:' + relaxedHeaderLine(dkimHeader);

    signer = crypto.createSign(('rsa-' + hashAlgo).toUpperCase());
    signer.update(canonicalizedHeaderData.headers);
    try {
        signature = signer.sign(options.privateKey, 'base64');
    } catch (E) {
        return false;
    }

    return dkimHeader + signature.replace(/(^.{73}|.{75}(?!\r?\n|\r))/g, '$&\r\n ').trim();
};

module.exports.relaxedHeaders = relaxedHeaders;

function generateDKIMHeader(domainName, keySelector, fieldNames, hashAlgo, bodyHash) {
    let dkim = [
        'v=1',
        'a=rsa-' + hashAlgo,
        'c=relaxed/relaxed',
        'd=' + punycode.toASCII(domainName),
        'q=dns/txt',
        's=' + keySelector,
        'bh=' + bodyHash,
        'h=' + fieldNames
    ].join('; ');

    return mimeFuncs.foldLines('DKIM-Signature: ' + dkim, 76) + ';\r\n b=';
}

function relaxedHeaders(headers, fieldNames, skipFields) {
    let includedFields = new Set();
    let skip = new Set();
    let headerFields = new Map();

    (skipFields || '')
        .toLowerCase()
        .split(':')
        .forEach(field => {
            skip.add(field.trim());
        });

    (fieldNames || '')
        .toLowerCase()
        .split(':')
        .filter(field => !skip.has(field.trim()))
        .forEach(field => {
            includedFields.add(field.trim());
        });

    for (let i = headers.length - 1; i >= 0; i--) {
        let line = headers[i];
        // only include the first value from bottom to top
        if (includedFields.has(line.key) && !headerFields.has(line.key)) {
            headerFields.set(line.key, relaxedHeaderLine(line.line));
        }
    }

    let headersList = [];
    let fields = [];
    includedFields.forEach(field => {
        if (headerFields.has(field)) {
            fields.push(field);
            headersList.push(field + ':' + headerFields.get(field));
        }
    });

    return {
        headers: headersList.join('\r\n') + '\r\n',
        fieldNames: fields.join(':')
    };
}

function relaxedHeaderLine(line) {
    return line
        .substr(line.indexOf(':') + 1)
        .replace(/\r?\n/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}
