import { traverse, getSectionMetadatas, shiftSection } from "@webassemblyjs/ast";
import { overrideBytesInBuffer } from "@webassemblyjs/helper-buffer";
export function removeSections(ast, uint8Buffer, section) {
  var sectionMetadatas = getSectionMetadatas(ast, section);

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
    traverse(ast, {
      SectionMetadata: function SectionMetadata(path) {
        if (path.node.section === section) {
          encounteredSection = true;
          return path.remove();
        }

        if (encounteredSection === true) {
          shiftSection(ast, path.node, delta);
        }
      }
    }); // replacement is nothing

    var replacement = [];
    return overrideBytesInBuffer(uint8Buffer, startsIncludingId, ends, replacement);
  }, uint8Buffer);
}