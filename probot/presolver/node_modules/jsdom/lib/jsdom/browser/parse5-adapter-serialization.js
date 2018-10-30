"use strict";
const idlUtils = require("../living/generated/utils");
const nodeTypes = require("../living/node-type");
const { domSymbolTree } = require("../living/helpers/internal-constants");
// Serialization only requires a subset of the tree adapter interface.

// Tree traversing
exports.getFirstChild = node => node.firstChild;

exports.getChildNodes = node => node.childNodesForSerializing || domSymbolTree.childrenToArray(node);

exports.getParentNode = node => node.parentNode;

exports.getAttrList = node => idlUtils.wrapperForImpl(node._attributes);

// Node data
exports.getTagName = element => element._qualifiedName; // https://github.com/inikulin/parse5/issues/231

exports.getNamespaceURI = element => element.namespaceURI;

exports.getTextNodeContent = exports.getCommentNodeContent = node => node.data;

exports.getDocumentTypeNodeName = node => node.name;

exports.getDocumentTypeNodePublicId = node => node.publicId;

exports.getDocumentTypeNodeSystemId = node => node.systemId;

exports.getTemplateContent = templateElement => templateElement._templateContents;

exports.getDocumentMode = document => document._mode;

// Node types

exports.isTextNode = node => node.nodeType === nodeTypes.TEXT_NODE;

exports.isCommentNode = node => node.nodeType === nodeTypes.COMMENT_NODE;

exports.isDocumentTypeNode = node => node.nodeType === nodeTypes.DOCUMENT_TYPE_NODE;

exports.isElementNode = node => node.nodeType === nodeTypes.ELEMENT_NODE;
