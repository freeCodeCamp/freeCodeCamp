"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeSectionByteSize = resizeSectionByteSize;
exports.resizeSectionVecSize = resizeSectionVecSize;

var _wasmGen = require("@webassemblyjs/wasm-gen");

var _ast = require("@webassemblyjs/ast");

var _helperBuffer = require("@webassemblyjs/helper-buffer");

function resizeSectionByteSize(ast, uint8Buffer, section, deltaBytes) {
  var sectionMetadata = (0, _ast.getSectionMetadata)(ast, section);

  if (typeof sectionMetadata === "undefined") {
    throw new Error("Section metadata not found");
  }

  if (typeof sectionMetadata.size.loc === "undefined") {
    throw new Error("SectionMetadata " + section + " has no loc");
  } // keep old node location to be overriden


  var start = sectionMetadata.size.loc.start.column;
  var end = sectionMetadata.size.loc.end.column;
  var newSectionSize = sectionMetadata.size.value + deltaBytes;
  var newBytes = (0, _wasmGen.encodeU32)(newSectionSize);
  /**
   * update AST
   */

  sectionMetadata.size.value = newSectionSize;
  var oldu32EncodedLen = end - start;
  var newu32EncodedLen = newBytes.length; // the new u32 has a different encoded length

  if (newu32EncodedLen !== oldu32EncodedLen) {
    var deltaInSizeEncoding = newu32EncodedLen - oldu32EncodedLen;
    sectionMetadata.size.loc.end.column = start + newu32EncodedLen;
    deltaBytes += deltaInSizeEncoding; // move the vec size pointer size the section size is now smaller

    sectionMetadata.vectorOfSize.loc.start.column += deltaInSizeEncoding;
    sectionMetadata.vectorOfSize.loc.end.column += deltaInSizeEncoding;
  } // Once we hit our section every that is after needs to be shifted by the delta


  var encounteredSection = false;
  (0, _ast.traverse)(ast, {
    SectionMetadata: function SectionMetadata(path) {
      if (path.node.section === section) {
        encounteredSection = true;
        return;
      }

      if (encounteredSection === true) {
        (0, _ast.shiftSection)(ast, path.node, deltaBytes);
      }
    }
  });
  return (0, _helperBuffer.overrideBytesInBuffer)(uint8Buffer, start, end, newBytes);
}

function resizeSectionVecSize(ast, uint8Buffer, section, deltaElements) {
  var sectionMetadata = (0, _ast.getSectionMetadata)(ast, section);

  if (typeof sectionMetadata === "undefined") {
    throw new Error("Section metadata not found");
  }

  if (typeof sectionMetadata.vectorOfSize.loc === "undefined") {
    throw new Error("SectionMetadata " + section + " has no loc");
  } // Section has no vector


  if (sectionMetadata.vectorOfSize.value === -1) {
    return uint8Buffer;
  } // keep old node location to be overriden


  var start = sectionMetadata.vectorOfSize.loc.start.column;
  var end = sectionMetadata.vectorOfSize.loc.end.column;
  var newValue = sectionMetadata.vectorOfSize.value + deltaElements;
  var newBytes = (0, _wasmGen.encodeU32)(newValue); // Update AST

  sectionMetadata.vectorOfSize.value = newValue;
  sectionMetadata.vectorOfSize.loc.end.column = start + newBytes.length;
  return (0, _helperBuffer.overrideBytesInBuffer)(uint8Buffer, start, end, newBytes);
}