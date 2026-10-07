import { traverse, shiftSection } from "@webassemblyjs/ast";
import { encodeU32 } from "@webassemblyjs/wasm-gen/lib/encoder";
import { overrideBytesInBuffer } from "@webassemblyjs/helper-buffer";

function shiftFollowingSections(ast, _ref, deltaInSizeEncoding) {
  var section = _ref.section;
  // Once we hit our section every that is after needs to be shifted by the delta
  var encounteredSection = false;
  traverse(ast, {
    SectionMetadata: function SectionMetadata(path) {
      if (path.node.section === section) {
        encounteredSection = true;
        return;
      }

      if (encounteredSection === true) {
        shiftSection(ast, path.node, deltaInSizeEncoding);
      }
    }
  });
}

export function shrinkPaddedLEB128(ast, uint8Buffer) {
  traverse(ast, {
    SectionMetadata: function SectionMetadata(_ref2) {
      var node = _ref2.node;

      /**
       * Section size
       */
      {
        var newu32Encoded = encodeU32(node.size.value);
        var newu32EncodedLen = newu32Encoded.length;
        var start = node.size.loc.start.column;
        var end = node.size.loc.end.column;
        var oldu32EncodedLen = end - start;

        if (newu32EncodedLen !== oldu32EncodedLen) {
          var deltaInSizeEncoding = oldu32EncodedLen - newu32EncodedLen;
          uint8Buffer = overrideBytesInBuffer(uint8Buffer, start, end, newu32Encoded);
          shiftFollowingSections(ast, node, -deltaInSizeEncoding);
        }
      }
    }
  });
  return uint8Buffer;
}