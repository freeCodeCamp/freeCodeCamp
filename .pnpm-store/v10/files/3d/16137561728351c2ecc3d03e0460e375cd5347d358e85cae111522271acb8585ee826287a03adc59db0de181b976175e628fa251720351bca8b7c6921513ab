"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSections = removeSections;

var _ast = require("@webassemblyjs/ast");

var _helperBuffer = require("@webassemblyjs/helper-buffer");

function removeSections(ast, uint8Buffer, section) {
  var sectionMetadatas = (0, _ast.getSectionMetadatas)(ast, section);

  if (sectionMetadatas.length === 0) {
    throw new Error("Section metadata not found");
  }

  return sectionMetadatas.reverse().reduce(function (uint8Buffer, sectionMetadata) {
    var startsIncludingId = sectionMetadata.startOffset - 1;
    var ends = section === "start" ? sectionMetadata.size.loc.end.column + 1 : sectionMetadata.startOffset + sectionMetadata.size.value + 1;
    var delta = -(ends - startsIncludingId);
    /**
     * update AST
     */
    // Once we hit our section every that is after needs to be shifted by the delta

    var encounteredSection = false;
    (0, _ast.traverse)(ast, {
      SectionMetadata: function SectionMetadata(path) {
        if (path.node.section === section) {
          encounteredSection = true;
          return path.remove();
        }

        if (encounteredSection === true) {
          (0, _ast.shiftSection)(ast, path.node, delta);
        }
      }
    }); // replacement is nothing

    var replacement = [];
    return (0, _helperBuffer.overrideBytesInBuffer)(uint8Buffer, startsIncludingId, ends, replacement);
  }, uint8Buffer);
}