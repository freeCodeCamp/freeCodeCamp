'use strict';

var Mixin = require('../../utils/mixin'),
    Tokenizer = require('../../tokenizer'),
    LocationInfoTokenizerMixin = require('./tokenizer_mixin'),
    PositionTrackingPreprocessorMixin = require('../position_tracking/preprocessor_mixin'),
    LocationInfoOpenElementStackMixin = require('./open_element_stack_mixin'),
    HTML = require('../../common/html'),
    inherits = require('util').inherits;


//Aliases
var $ = HTML.TAG_NAMES;

var LocationInfoParserMixin = module.exports = function (parser) {
    Mixin.call(this, parser);

    this.parser = parser;
    this.posTracker = null;
    this.lastStartTagToken = null;
    this.lastFosterParentingLocation = null;
    this.currentToken = null;
};

inherits(LocationInfoParserMixin, Mixin);


LocationInfoParserMixin.prototype._setStartLocation = function (element) {
    if (this.lastStartTagToken) {
        element.__location = Object.create(this.lastStartTagToken.location);
        element.__location.startTag = this.lastStartTagToken.location;
    }
    else
        element.__location = null;
};

LocationInfoParserMixin.prototype._setEndLocation = function (element, closingToken) {
    var loc = element.__location;

    if (loc) {
        if (closingToken.location) {
            var ctLoc = closingToken.location,
                tn = this.parser.treeAdapter.getTagName(element);

            // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
            // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
            var isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN && tn === closingToken.tagName;

            if (isClosingEndTag) {
                loc.endTag = Object.create(ctLoc);
                loc.endOffset = ctLoc.endOffset;
            }

            else
                loc.endOffset = ctLoc.startOffset;
        }

        else if (closingToken.type === Tokenizer.EOF_TOKEN)
            loc.endOffset = this.posTracker.offset;
    }
};

LocationInfoParserMixin.prototype._getOverriddenMethods = function (mxn, orig) {
    return {
        _bootstrap: function (document, fragmentContext) {
            orig._bootstrap.call(this, document, fragmentContext);

            mxn.lastStartTagToken = null;
            mxn.lastFosterParentingLocation = null;
            mxn.currentToken = null;
            mxn.posTracker = new PositionTrackingPreprocessorMixin(this.tokenizer.preprocessor);

            new LocationInfoTokenizerMixin(this.tokenizer);

            new LocationInfoOpenElementStackMixin(this.openElements, {
                onItemPop: function (element) {
                    mxn._setEndLocation(element, mxn.currentToken);
                }
            });
        },

        _runParsingLoop: function (scriptHandler) {
            orig._runParsingLoop.call(this, scriptHandler);

            // NOTE: generate location info for elements
            // that remains on open element stack
            for (var i = this.openElements.stackTop; i >= 0; i--)
                mxn._setEndLocation(this.openElements.items[i], mxn.currentToken);
        },


        //Token processing
        _processTokenInForeignContent: function (token) {
            mxn.currentToken = token;
            orig._processTokenInForeignContent.call(this, token);
        },

        _processToken: function (token) {
            mxn.currentToken = token;
            orig._processToken.call(this, token);

            //NOTE: <body> and <html> are never popped from the stack, so we need to updated
            //their end location explicitly.
            var requireExplicitUpdate = token.type === Tokenizer.END_TAG_TOKEN &&
                                        (token.tagName === $.HTML ||
                                         token.tagName === $.BODY && this.openElements.hasInScope($.BODY));

            if (requireExplicitUpdate) {
                for (var i = this.openElements.stackTop; i >= 0; i--) {
                    var element = this.openElements.items[i];

                    if (this.treeAdapter.getTagName(element) === token.tagName) {
                        mxn._setEndLocation(element, token);
                        break;
                    }
                }
            }
        },


        //Doctype
        _setDocumentType: function (token) {
            orig._setDocumentType.call(this, token);

            var documentChildren = this.treeAdapter.getChildNodes(this.document),
                cnLength = documentChildren.length;

            for (var i = 0; i < cnLength; i++) {
                var node = documentChildren[i];

                if (this.treeAdapter.isDocumentTypeNode(node)) {
                    node.__location = token.location;
                    break;
                }
            }
        },


        //Elements
        _attachElementToTree: function (element) {
            //NOTE: _attachElementToTree is called from _appendElement, _insertElement and _insertTemplate methods.
            //So we will use token location stored in this methods for the element.
            mxn._setStartLocation(element);
            mxn.lastStartTagToken = null;
            orig._attachElementToTree.call(this, element);
        },

        _appendElement: function (token, namespaceURI) {
            mxn.lastStartTagToken = token;
            orig._appendElement.call(this, token, namespaceURI);
        },

        _insertElement: function (token, namespaceURI) {
            mxn.lastStartTagToken = token;
            orig._insertElement.call(this, token, namespaceURI);
        },

        _insertTemplate: function (token) {
            mxn.lastStartTagToken = token;
            orig._insertTemplate.call(this, token);

            var tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);

            tmplContent.__location = null;
        },

        _insertFakeRootElement: function () {
            orig._insertFakeRootElement.call(this);
            this.openElements.current.__location = null;
        },

        //Comments
        _appendCommentNode: function (token, parent) {
            orig._appendCommentNode.call(this, token, parent);

            var children = this.treeAdapter.getChildNodes(parent),
                commentNode = children[children.length - 1];

            commentNode.__location = token.location;
        },

        //Text
        _findFosterParentingLocation: function () {
            //NOTE: store last foster parenting location, so we will be able to find inserted text
            //in case of foster parenting
            mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);

            return mxn.lastFosterParentingLocation;
        },

        _insertCharacters: function (token) {
            orig._insertCharacters.call(this, token);

            var hasFosterParent = this._shouldFosterParentOnInsertion(),
                parent = hasFosterParent && mxn.lastFosterParentingLocation.parent ||
                         this.openElements.currentTmplContent ||
                         this.openElements.current,
                siblings = this.treeAdapter.getChildNodes(parent),
                textNodeIdx = hasFosterParent && mxn.lastFosterParentingLocation.beforeElement ?
                siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1 :
                siblings.length - 1,
                textNode = siblings[textNodeIdx];

            //NOTE: if we have location assigned by another token, then just update end position
            if (textNode.__location)
                textNode.__location.endOffset = token.location.endOffset;

            else
                textNode.__location = token.location;
        }
    };
};

