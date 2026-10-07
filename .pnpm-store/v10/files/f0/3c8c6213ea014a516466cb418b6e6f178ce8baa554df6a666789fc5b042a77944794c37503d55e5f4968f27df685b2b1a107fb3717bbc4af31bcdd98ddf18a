/*
 * @fileoverview Main Doctrine object
 * @author Yusuke Suzuki <utatane.tea@gmail.com>
 * @author Dan Tao <daniel.tao@gmail.com>
 * @author Andrew Eisenberg <andrew@eisenberg.as>
 */

(function () {
    'use strict';

    var typed,
        utility,
        jsdoc,
        esutils,
        hasOwnProperty;

    esutils = require('esutils');
    typed = require('./typed');
    utility = require('./utility');

    function sliceSource(source, index, last) {
        return source.slice(index, last);
    }

    hasOwnProperty = (function () {
        var func = Object.prototype.hasOwnProperty;
        return function hasOwnProperty(obj, name) {
            return func.call(obj, name);
        };
    }());
    function shallowCopy(obj) {
        var ret = {}, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }

    function isASCIIAlphanumeric(ch) {
        return (ch >= 0x61  /* 'a' */ && ch <= 0x7A  /* 'z' */) ||
            (ch >= 0x41  /* 'A' */ && ch <= 0x5A  /* 'Z' */) ||
            (ch >= 0x30  /* '0' */ && ch <= 0x39  /* '9' */);
    }

    function isParamTitle(title) {
        return title === 'param' || title === 'argument' || title === 'arg';
    }

    function isReturnTitle(title) {
        return title === 'return' || title === 'returns';
    }

    function isProperty(title) {
        return title === 'property' || title === 'prop';
    }

    function isNameParameterRequired(title) {
        return isParamTitle(title) || isProperty(title) ||
            title === 'alias' || title === 'this' || title === 'mixes' || title === 'requires';
    }

    function isAllowedName(title) {
        return isNameParameterRequired(title) || title === 'const' || title === 'constant';
    }

    function isAllowedNested(title) {
        return isProperty(title) || isParamTitle(title);
    }

    function isAllowedOptional(title) {
        return isProperty(title) || isParamTitle(title);
    }

    function isTypeParameterRequired(title) {
        return isParamTitle(title) || isReturnTitle(title) ||
            title === 'define' || title === 'enum' ||
            title === 'implements' || title === 'this' ||
            title === 'type' || title === 'typedef' || isProperty(title);
    }

    // Consider deprecation instead using 'isTypeParameterRequired' and 'Rules' declaration to pick when a type is optional/required
    // This would require changes to 'parseType'
    function isAllowedType(title) {
        return isTypeParameterRequired(title) || title === 'throws' || title === 'const' || title === 'constant' ||
            title === 'namespace' || title === 'member' || title === 'var' || title === 'module' ||
            title === 'constructor' || title === 'class' || title === 'extends' || title === 'augments' ||
            title === 'public' || title === 'private' || title === 'protected';
    }

    // A regex character class that contains all whitespace except linebreak characters (\r, \n, \u2028, \u2029)
    var WHITESPACE = '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]';

    var STAR_MATCHER = '(' + WHITESPACE + '*(?:\\*' + WHITESPACE + '?)?)(.+|[\r\n\u2028\u2029])';

    function unwrapComment(doc) {
        // JSDoc comment is following form
        //   /**
        //    * .......
        //    */

        return doc.
            // remove /**
            replace(/^\/\*\*?/, '').
            // remove */
            replace(/\*\/$/, '').
            // remove ' * ' at the beginning of a line
            replace(new RegExp(STAR_MATCHER, 'g'), '$2').
            // remove trailing whitespace
            replace(/\s*$/, '');
    }

    /**
     * Converts an index in an "unwrapped" JSDoc comment to the corresponding index in the original "wrapped" version
     * @param {string} originalSource The original wrapped comment
     * @param {number} unwrappedIndex The index of a character in the unwrapped string
     * @returns {number} The index of the corresponding character in the original wrapped string
     */
    function convertUnwrappedCommentIndex(originalSource, unwrappedIndex) {
        var replacedSource = originalSource.replace(/^\/\*\*?/, '');
        var numSkippedChars = 0;
        var matcher = new RegExp(STAR_MATCHER, 'g');
        var match;

        while ((match = matcher.exec(replacedSource))) {
            numSkippedChars += match[1].length;

            if (match.index + match[0].length > unwrappedIndex + numSkippedChars) {
                return unwrappedIndex + numSkippedChars + originalSource.length - replacedSource.length;
            }
        }

        return originalSource.replace(/\*\/$/, '').replace(/\s*$/, '').length;
    }

    // JSDoc Tag Parser

    (function (exports) {
        var Rules,
            index,
            lineNumber,
            length,
            source,
            originalSource,
            recoverable,
            sloppy,
            strict;

        function advance() {
            var ch = source.charCodeAt(index);
            index += 1;
            if (esutils.code.isLineTerminator(ch) && !(ch === 0x0D  /* '\r' */ && source.charCodeAt(index) === 0x0A  /* '\n' */)) {
                lineNumber += 1;
            }
            return String.fromCharCode(ch);
        }

        function scanTitle() {
            var title = '';
            // waste '@'
            advance();

            while (index < length && isASCIIAlphanumeric(source.charCodeAt(index))) {
                title += advance();
            }

            return title;
        }

        function seekContent() {
            var ch, waiting, last = index;

            waiting = false;
            while (last < length) {
                ch = source.charCodeAt(last);
                if (esutils.code.isLineTerminator(ch) && !(ch === 0x0D  /* '\r' */ && source.charCodeAt(last + 1) === 0x0A  /* '\n' */)) {
                    waiting = true;
                } else if (waiting) {
                    if (ch === 0x40  /* '@' */) {
                        break;
                    }
                    if (!esutils.code.isWhiteSpace(ch)) {
                        waiting = false;
                    }
                }
                last += 1;
            }
            return last;
        }

        // type expression may have nest brace, such as,
        // { { ok: string } }
        //
        // therefore, scanning type expression with balancing braces.
        function parseType(title, last, addRange) {
            var ch, brace, type, startIndex, direct = false;


            // search '{'
            while (index < last) {
                ch = source.charCodeAt(index);
                if (esutils.code.isWhiteSpace(ch)) {
                    advance();
                } else if (ch === 0x7B  /* '{' */) {
                    advance();
                    break;
                } else {
                    // this is direct pattern
                    direct = true;
                    break;
                }
            }


            if (direct) {
                return null;
            }

            // type expression { is found
            brace = 1;
            type = '';
            while (index < last) {
                ch = source.charCodeAt(index);
                if (esutils.code.isLineTerminator(ch)) {
                    advance();
                } else {
                    if (ch === 0x7D  /* '}' */) {
                        brace -= 1;
                        if (brace === 0) {
                            advance();
                            break;
                        }
                    } else if (ch === 0x7B  /* '{' */) {
                        brace += 1;
                    }
                    if (type === '') {
                        startIndex = index;
                    }
                    type += advance();
                }
            }

            if (brace !== 0) {
                // braces is not balanced
                return utility.throwError('Braces are not balanced');
            }

            if (isAllowedOptional(title)) {
                return typed.parseParamType(type, {startIndex: convertIndex(startIndex), range: addRange});
            }

            return typed.parseType(type, {startIndex: convertIndex(startIndex), range: addRange});
        }

        function scanIdentifier(last) {
            var identifier;
            if (!esutils.code.isIdentifierStartES5(source.charCodeAt(index)) && !source[index].match(/[0-9]/)) {
                return null;
            }
            identifier = advance();
            while (index < last && esutils.code.isIdentifierPartES5(source.charCodeAt(index))) {
                identifier += advance();
            }
            return identifier;
        }

        function skipWhiteSpace(last) {
            while (index < last && (esutils.code.isWhiteSpace(source.charCodeAt(index)) || esutils.code.isLineTerminator(source.charCodeAt(index)))) {
                advance();
            }
        }

        function parseName(last, allowBrackets, allowNestedParams) {
            var name = '',
                useBrackets,
                insideString;


            skipWhiteSpace(last);

            if (index >= last) {
                return null;
            }

            if (source.charCodeAt(index) === 0x5B  /* '[' */) {
                if (allowBrackets) {
                    useBrackets = true;
                    name = advance();
                } else {
                    return null;
                }
            }

            name += scanIdentifier(last);

            if (allowNestedParams) {
                if (source.charCodeAt(index) === 0x3A /* ':' */ && (
                        name === 'module' ||
                        name === 'external' ||
                        name === 'event')) {
                    name += advance();
                    name += scanIdentifier(last);

                }
                if(source.charCodeAt(index) === 0x5B  /* '[' */ && source.charCodeAt(index + 1) === 0x5D  /* ']' */){
                    name += advance();
                    name += advance();
                }
                while (source.charCodeAt(index) === 0x2E  /* '.' */ ||
                        source.charCodeAt(index) === 0x2F  /* '/' */ ||
                        source.charCodeAt(index) === 0x23  /* '#' */ ||
                        source.charCodeAt(index) === 0x2D  /* '-' */ ||
                        source.charCodeAt(index) === 0x7E  /* '~' */) {
                    name += advance();
                    name += scanIdentifier(last);
                }
            }

            if (useBrackets) {
                skipWhiteSpace(last);
                // do we have a default value for this?
                if (source.charCodeAt(index) === 0x3D  /* '=' */) {
                    // consume the '='' symbol
                    name += advance();
                    skipWhiteSpace(last);

                    var ch;
                    var bracketDepth = 1;

                    // scan in the default value
                    while (index < last) {
                        ch = source.charCodeAt(index);

                        if (esutils.code.isWhiteSpace(ch)) {
                            if (!insideString) {
                                skipWhiteSpace(last);
                                ch = source.charCodeAt(index);
                            }
                        }

                        if (ch === 0x27 /* ''' */) {
                            if (!insideString) {
                                insideString = '\'';
                            } else {
                                if (insideString === '\'') {
                                    insideString = '';
                                }
                            }
                        }

                        if (ch === 0x22 /* '"' */) {
                            if (!insideString) {
                                insideString = '"';
                            } else {
                                if (insideString === '"') {
                                    insideString = '';
                                }
                            }
                        }

                        if (ch === 0x5B /* '[' */) {
                            bracketDepth++;
                        } else if (ch === 0x5D  /* ']' */ &&
                            --bracketDepth === 0) {
                            break;
                        }

                        name += advance();
                    }
                }

                skipWhiteSpace(last);

                if (index >= last || source.charCodeAt(index) !== 0x5D  /* ']' */) {
                    // we never found a closing ']'
                    return null;
                }

                // collect the last ']'
                name += advance();
            }

            return name;
        }

        function skipToTag() {
            while (index < length && source.charCodeAt(index) !== 0x40  /* '@' */) {
                advance();
            }
            if (index >= length) {
                return false;
            }
            utility.assert(source.charCodeAt(index) === 0x40  /* '@' */);
            return true;
        }

        function convertIndex(rangeIndex) {
            if (source === originalSource) {
                return rangeIndex;
            }
            return convertUnwrappedCommentIndex(originalSource, rangeIndex);
        }

        function TagParser(options, title) {
            this._options = options;
            this._title = title.toLowerCase();
            this._tag = {
                title: title,
                description: null
            };
            if (this._options.lineNumbers) {
                this._tag.lineNumber = lineNumber;
            }
            this._first = index - title.length - 1;
            this._last = 0;
            // space to save special information for title parsers.
            this._extra = { };
        }

        // addError(err, ...)
        TagParser.prototype.addError = function addError(errorText) {
            var args = Array.prototype.slice.call(arguments, 1),
                msg = errorText.replace(
                    /%(\d)/g,
                    function (whole, index) {
                        utility.assert(index < args.length, 'Message reference must be in range');
                        return args[index];
                    }
                );

            if (!this._tag.errors) {
                this._tag.errors = [];
            }
            if (strict) {
                utility.throwError(msg);
            }
            this._tag.errors.push(msg);
            return recoverable;
        };

        TagParser.prototype.parseType = function () {
            // type required titles
            if (isTypeParameterRequired(this._title)) {
                try {
                    this._tag.type = parseType(this._title, this._last, this._options.range);
                    if (!this._tag.type) {
                        if (!isParamTitle(this._title) && !isReturnTitle(this._title)) {
                            if (!this.addError('Missing or invalid tag type')) {
                                return false;
                            }
                        }
                    }
                } catch (error) {
                    this._tag.type = null;
                    if (!this.addError(error.message)) {
                        return false;
                    }
                }
            } else if (isAllowedType(this._title)) {
                // optional types
                try {
                    this._tag.type = parseType(this._title, this._last, this._options.range);
                } catch (e) {
                    //For optional types, lets drop the thrown error when we hit the end of the file
                }
            }
            return true;
        };

        TagParser.prototype._parseNamePath = function (optional) {
            var name;
            name = parseName(this._last, sloppy && isAllowedOptional(this._title), true);
            if (!name) {
                if (!optional) {
                    if (!this.addError('Missing or invalid tag name')) {
                        return false;
                    }
                }
            }
            this._tag.name = name;
            return true;
        };

        TagParser.prototype.parseNamePath = function () {
            return this._parseNamePath(false);
        };

        TagParser.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(true);
        };


        TagParser.prototype.parseName = function () {
            var assign, name;

            // param, property requires name
            if (isAllowedName(this._title)) {
                this._tag.name = parseName(this._last, sloppy && isAllowedOptional(this._title), isAllowedNested(this._title));
                if (!this._tag.name) {
                    if (!isNameParameterRequired(this._title)) {
                        return true;
                    }

                    // it's possible the name has already been parsed but interpreted as a type
                    // it's also possible this is a sloppy declaration, in which case it will be
                    // fixed at the end
                    if (isParamTitle(this._title) && this._tag.type && this._tag.type.name) {
                        this._extra.name = this._tag.type;
                        this._tag.name = this._tag.type.name;
                        this._tag.type = null;
                    } else {
                        if (!this.addError('Missing or invalid tag name')) {
                            return false;
                        }
                    }
                } else {
                    name = this._tag.name;
                    if (name.charAt(0) === '[' && name.charAt(name.length - 1) === ']') {
                        // extract the default value if there is one
                        // example: @param {string} [somebody=John Doe] description
                        assign = name.substring(1, name.length - 1).split('=');
                        if (assign.length > 1) {
                            this._tag['default'] = assign.slice(1).join('=');
                        }
                        this._tag.name = assign[0];

                        // convert to an optional type
                        if (this._tag.type && this._tag.type.type !== 'OptionalType') {
                            this._tag.type = {
                                type: 'OptionalType',
                                expression: this._tag.type
                            };
                        }
                    }
                }
            }


            return true;
        };

        TagParser.prototype.parseDescription = function parseDescription() {
            var description = sliceSource(source, index, this._last).trim();
            if (description) {
                if ((/^-\s+/).test(description)) {
                    description = description.substring(2);
                }
                this._tag.description = description;
            }
            return true;
        };

        TagParser.prototype.parseCaption = function parseDescription() {
            var description = sliceSource(source, index, this._last).trim();
            var captionStartTag = '<caption>';
            var captionEndTag = '</caption>';
            var captionStart = description.indexOf(captionStartTag);
            var captionEnd = description.indexOf(captionEndTag);
            if (captionStart >= 0 && captionEnd >= 0) {
                this._tag.caption = description.substring(
                    captionStart + captionStartTag.length, captionEnd).trim();
                this._tag.description = description.substring(captionEnd + captionEndTag.length).trim();
            } else {
                this._tag.description = description;
            }
            return true;
        };

        TagParser.prototype.parseKind = function parseKind() {
            var kind, kinds;
            kinds = {
                'class': true,
                'constant': true,
                'event': true,
                'external': true,
                'file': true,
                'function': true,
                'member': true,
                'mixin': true,
                'module': true,
                'namespace': true,
                'typedef': true
            };
            kind = sliceSource(source, index, this._last).trim();
            this._tag.kind = kind;
            if (!hasOwnProperty(kinds, kind)) {
                if (!this.addError('Invalid kind name \'%0\'', kind)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.parseAccess = function parseAccess() {
            var access;
            access = sliceSource(source, index, this._last).trim();
            this._tag.access = access;
            if (access !== 'private' && access !== 'protected' && access !== 'public') {
                if (!this.addError('Invalid access name \'%0\'', access)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.parseThis = function parseThis() {
            // this name may be a name expression (e.g. {foo.bar}),
            // an union (e.g. {foo.bar|foo.baz}) or a name path (e.g. foo.bar)
            var value = sliceSource(source, index, this._last).trim();
            if (value && value.charAt(0) === '{') {
                var gotType = this.parseType();
                if (gotType && this._tag.type.type === 'NameExpression' || this._tag.type.type === 'UnionType') {
                    this._tag.name = this._tag.type.name;
                    return true;
                } else {
                    return this.addError('Invalid name for this');
                }
            } else {
                return this.parseNamePath();
            }
        };

        TagParser.prototype.parseVariation = function parseVariation() {
            var variation, text;
            text = sliceSource(source, index, this._last).trim();
            variation = parseFloat(text, 10);
            this._tag.variation = variation;
            if (isNaN(variation)) {
                if (!this.addError('Invalid variation \'%0\'', text)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.ensureEnd = function () {
            var shouldBeEmpty = sliceSource(source, index, this._last).trim();
            if (shouldBeEmpty) {
                if (!this.addError('Unknown content \'%0\'', shouldBeEmpty)) {
                    return false;
                }
            }
            return true;
        };

        TagParser.prototype.epilogue = function epilogue() {
            var description;

            description = this._tag.description;
            // un-fix potentially sloppy declaration
            if (isAllowedOptional(this._title) && !this._tag.type && description && description.charAt(0) === '[') {
                this._tag.type = this._extra.name;
                if (!this._tag.name) {
                    this._tag.name = undefined;
                }

                if (!sloppy) {
                    if (!this.addError('Missing or invalid tag name')) {
                        return false;
                    }
                }
            }

            return true;
        };

        Rules = {
            // http://usejsdoc.org/tags-access.html
            'access': ['parseAccess'],
            // http://usejsdoc.org/tags-alias.html
            'alias': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-augments.html
            'augments': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-constructor.html
            'constructor': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-constructor.html
            'class': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-extends.html
            'extends': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-example.html
            'example': ['parseCaption'],
            // http://usejsdoc.org/tags-deprecated.html
            'deprecated': ['parseDescription'],
            // http://usejsdoc.org/tags-global.html
            'global': ['ensureEnd'],
            // http://usejsdoc.org/tags-inner.html
            'inner': ['ensureEnd'],
            // http://usejsdoc.org/tags-instance.html
            'instance': ['ensureEnd'],
            // http://usejsdoc.org/tags-kind.html
            'kind': ['parseKind'],
            // http://usejsdoc.org/tags-mixes.html
            'mixes': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-mixin.html
            'mixin': ['parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-member.html
            'member': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-method.html
            'method': ['parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-module.html
            'module': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-method.html
            'func': ['parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-method.html
            'function': ['parseNamePathOptional', 'ensureEnd'],
            // Synonym: http://usejsdoc.org/tags-member.html
            'var': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-name.html
            'name': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-namespace.html
            'namespace': ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            // http://usejsdoc.org/tags-private.html
            'private': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-protected.html
            'protected': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-public.html
            'public': ['parseType', 'parseDescription'],
            // http://usejsdoc.org/tags-readonly.html
            'readonly': ['ensureEnd'],
            // http://usejsdoc.org/tags-requires.html
            'requires': ['parseNamePath', 'ensureEnd'],
            // http://usejsdoc.org/tags-since.html
            'since': ['parseDescription'],
            // http://usejsdoc.org/tags-static.html
            'static': ['ensureEnd'],
            // http://usejsdoc.org/tags-summary.html
            'summary': ['parseDescription'],
            // http://usejsdoc.org/tags-this.html
            'this': ['parseThis', 'ensureEnd'],
            // http://usejsdoc.org/tags-todo.html
            'todo': ['parseDescription'],
            // http://usejsdoc.org/tags-typedef.html
            'typedef': ['parseType', 'parseNamePathOptional'],
            // http://usejsdoc.org/tags-variation.html
            'variation': ['parseVariation'],
            // http://usejsdoc.org/tags-version.html
            'version': ['parseDescription']
        };

        TagParser.prototype.parse = function parse() {
            var i, iz, sequences, method;


            // empty title
            if (!this._title) {
                if (!this.addError('Missing or invalid title')) {
                    return null;
                }
            }

            // Seek to content last index.
            this._last = seekContent(this._title);

            if (this._options.range) {
                this._tag.range = [this._first, source.slice(0, this._last).replace(/\s*$/, '').length].map(convertIndex);
            }

            if (hasOwnProperty(Rules, this._title)) {
                sequences = Rules[this._title];
            } else {
                // default sequences
                sequences = ['parseType', 'parseName', 'parseDescription', 'epilogue'];
            }

            for (i = 0, iz = sequences.length; i < iz; ++i) {
                method = sequences[i];
                if (!this[method]()) {
                    return null;
                }
            }

            return this._tag;
        };

        function parseTag(options) {
            var title, parser, tag;

            // skip to tag
            if (!skipToTag()) {
                return null;
            }

            // scan title
            title = scanTitle();

            // construct tag parser
            parser = new TagParser(options, title);
            tag = parser.parse();

            // Seek global index to end of this tag.
            while (index < parser._last) {
                advance();
            }

            return tag;
        }

        //
        // Parse JSDoc
        //

        function scanJSDocDescription(preserveWhitespace) {
            var description = '', ch, atAllowed;

            atAllowed = true;
            while (index < length) {
                ch = source.charCodeAt(index);

                if (atAllowed && ch === 0x40  /* '@' */) {
                    break;
                }

                if (esutils.code.isLineTerminator(ch)) {
                    atAllowed = true;
                } else if (atAllowed && !esutils.code.isWhiteSpace(ch)) {
                    atAllowed = false;
                }

                description += advance();
            }

            return preserveWhitespace ? description : description.trim();
        }

        function parse(comment, options) {
            var tags = [], tag, description, interestingTags, i, iz;

            if (options === undefined) {
                options = {};
            }

            if (typeof options.unwrap === 'boolean' && options.unwrap) {
                source = unwrapComment(comment);
            } else {
                source = comment;
            }

            originalSource = comment;

            // array of relevant tags
            if (options.tags) {
                if (Array.isArray(options.tags)) {
                    interestingTags = { };
                    for (i = 0, iz = options.tags.length; i < iz; i++) {
                        if (typeof options.tags[i] === 'string') {
                            interestingTags[options.tags[i]] = true;
                        } else {
                            utility.throwError('Invalid "tags" parameter: ' + options.tags);
                        }
                    }
                } else {
                    utility.throwError('Invalid "tags" parameter: ' + options.tags);
                }
            }

            length = source.length;
            index = 0;
            lineNumber = 0;
            recoverable = options.recoverable;
            sloppy = options.sloppy;
            strict = options.strict;

            description = scanJSDocDescription(options.preserveWhitespace);

            while (true) {
                tag = parseTag(options);
                if (!tag) {
                    break;
                }
                if (!interestingTags || interestingTags.hasOwnProperty(tag.title)) {
                    tags.push(tag);
                }
            }

            return {
                description: description,
                tags: tags
            };
        }
        exports.parse = parse;
    }(jsdoc = {}));

    exports.version = utility.VERSION;
    exports.parse = jsdoc.parse;
    exports.parseType = typed.parseType;
    exports.parseParamType = typed.parseParamType;
    exports.unwrapComment = unwrapComment;
    exports.Syntax = shallowCopy(typed.Syntax);
    exports.Error = utility.DoctrineError;
    exports.type = {
        Syntax: exports.Syntax,
        parseType: typed.parseType,
        parseParamType: typed.parseParamType,
        stringify: typed.stringify
    };
}());
/* vim: set sw=4 ts=4 et tw=80 : */
