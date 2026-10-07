"use strict";

var definitions = {};

function defineType(typeName, metadata) {
  definitions[typeName] = metadata;
}

defineType("Module", {
  spec: {
    wasm: "https://webassembly.github.io/spec/core/binary/modules.html#binary-module",
    wat: "https://webassembly.github.io/spec/core/text/modules.html#text-module"
  },
  doc: "A module consists of a sequence of sections (termed fields in the text format).",
  unionType: ["Node"],
  fields: {
    id: {
      maybe: true,
      type: "string"
    },
    fields: {
      array: true,
      type: "Node"
    },
    metadata: {
      optional: true,
      type: "ModuleMetadata"
    }
  }
});
defineType("ModuleMetadata", {
  unionType: ["Node"],
  fields: {
    sections: {
      array: true,
      type: "SectionMetadata"
    },
    functionNames: {
      optional: true,
      array: true,
      type: "FunctionNameMetadata"
    },
    localNames: {
      optional: true,
      array: true,
      type: "ModuleMetadata"
    },
    producers: {
      optional: true,
      array: true,
      type: "ProducersSectionMetadata"
    }
  }
});
defineType("ModuleNameMetadata", {
  unionType: ["Node"],
  fields: {
    value: {
      type: "string"
    }
  }
});
defineType("FunctionNameMetadata", {
  unionType: ["Node"],
  fields: {
    value: {
      type: "string"
    },
    index: {
      type: "number"
    }
  }
});
defineType("LocalNameMetadata", {
  unionType: ["Node"],
  fields: {
    value: {
      type: "string"
    },
    localIndex: {
      type: "number"
    },
    functionIndex: {
      type: "number"
    }
  }
});
defineType("BinaryModule", {
  unionType: ["Node"],
  fields: {
    id: {
      maybe: true,
      type: "string"
    },
    blob: {
      array: true,
      type: "string"
    }
  }
});
defineType("QuoteModule", {
  unionType: ["Node"],
  fields: {
    id: {
      maybe: true,
      type: "string"
    },
    string: {
      array: true,
      type: "string"
    }
  }
});
defineType("SectionMetadata", {
  unionType: ["Node"],
  fields: {
    section: {
      type: "SectionName"
    },
    startOffset: {
      type: "number"
    },
    size: {
      type: "NumberLiteral"
    },
    vectorOfSize: {
      comment: "Size of the vector in the section (if any)",
      type: "NumberLiteral"
    }
  }
});
defineType("ProducersSectionMetadata", {
  unionType: ["Node"],
  fields: {
    producers: {
      array: true,
      type: "ProducerMetadata"
    }
  }
});
defineType("ProducerMetadata", {
  unionType: ["Node"],
  fields: {
    language: {
      type: "ProducerMetadataVersionedName",
      array: true
    },
    processedBy: {
      type: "ProducerMetadataVersionedName",
      array: true
    },
    sdk: {
      type: "ProducerMetadataVersionedName",
      array: true
    }
  }
});
defineType("ProducerMetadataVersionedName", {
  unionType: ["Node"],
  fields: {
    name: {
      type: "string"
    },
    version: {
      type: "string"
    }
  }
});
/*
Instructions
*/

defineType("LoopInstruction", {
  unionType: ["Node", "Block", "Instruction"],
  fields: {
    id: {
      constant: true,
      type: "string",
      value: "loop"
    },
    label: {
      maybe: true,
      type: "Identifier"
    },
    resulttype: {
      maybe: true,
      type: "Valtype"
    },
    instr: {
      array: true,
      type: "Instruction"
    }
  }
});
defineType("Instr", {
  unionType: ["Node", "Expression", "Instruction"],
  fields: {
    id: {
      type: "string"
    },
    object: {
      optional: true,
      type: "Valtype"
    },
    args: {
      array: true,
      type: "Expression"
    },
    namedArgs: {
      optional: true,
      type: "Object"
    }
  }
});
defineType("IfInstruction", {
  unionType: ["Node", "Instruction"],
  fields: {
    id: {
      constant: true,
      type: "string",
      value: "if"
    },
    testLabel: {
      comment: "only for WAST",
      type: "Identifier"
    },
    test: {
      array: true,
      type: "Instruction"
    },
    result: {
      maybe: true,
      type: "Valtype"
    },
    consequent: {
      array: true,
      type: "Instruction"
    },
    alternate: {
      array: true,
      type: "Instruction"
    }
  }
});
/* 
Concrete value types
*/

defineType("StringLiteral", {
  unionType: ["Node", "Expression"],
  fields: {
    value: {
      type: "string"
    }
  }
});
defineType("NumberLiteral", {
  unionType: ["Node", "NumericLiteral", "Expression"],
  fields: {
    value: {
      type: "number"
    },
    raw: {
      type: "string"
    }
  }
});
defineType("LongNumberLiteral", {
  unionType: ["Node", "NumericLiteral", "Expression"],
  fields: {
    value: {
      type: "LongNumber"
    },
    raw: {
      type: "string"
    }
  }
});
defineType("FloatLiteral", {
  unionType: ["Node", "NumericLiteral", "Expression"],
  fields: {
    value: {
      type: "number"
    },
    nan: {
      optional: true,
      type: "boolean"
    },
    inf: {
      optional: true,
      type: "boolean"
    },
    raw: {
      type: "string"
    }
  }
});
defineType("Elem", {
  unionType: ["Node"],
  fields: {
    table: {
      type: "Index"
    },
    offset: {
      array: true,
      type: "Instruction"
    },
    funcs: {
      array: true,
      type: "Index"
    }
  }
});
defineType("IndexInFuncSection", {
  unionType: ["Node"],
  fields: {
    index: {
      type: "Index"
    }
  }
});
defineType("ValtypeLiteral", {
  unionType: ["Node", "Expression"],
  fields: {
    name: {
      type: "Valtype"
    }
  }
});
defineType("TypeInstruction", {
  unionType: ["Node", "Instruction"],
  fields: {
    id: {
      maybe: true,
      type: "Index"
    },
    functype: {
      type: "Signature"
    }
  }
});
defineType("Start", {
  unionType: ["Node"],
  fields: {
    index: {
      type: "Index"
    }
  }
});
defineType("GlobalType", {
  unionType: ["Node", "ImportDescr"],
  fields: {
    valtype: {
      type: "Valtype"
    },
    mutability: {
      type: "Mutability"
    }
  }
});
defineType("LeadingComment", {
  unionType: ["Node"],
  fields: {
    value: {
      type: "string"
    }
  }
});
defineType("BlockComment", {
  unionType: ["Node"],
  fields: {
    value: {
      type: "string"
    }
  }
});
defineType("Data", {
  unionType: ["Node"],
  fields: {
    memoryIndex: {
      type: "Memidx"
    },
    offset: {
      type: "Instruction"
    },
    init: {
      type: "ByteArray"
    }
  }
});
defineType("Global", {
  unionType: ["Node"],
  fields: {
    globalType: {
      type: "GlobalType"
    },
    init: {
      array: true,
      type: "Instruction"
    },
    name: {
      maybe: true,
      type: "Identifier"
    }
  }
});
defineType("Table", {
  unionType: ["Node", "ImportDescr"],
  fields: {
    elementType: {
      type: "TableElementType"
    },
    limits: {
      assertNodeType: true,
      type: "Limit"
    },
    name: {
      maybe: true,
      type: "Identifier"
    },
    elements: {
      array: true,
      optional: true,
      type: "Index"
    }
  }
});
defineType("Memory", {
  unionType: ["Node", "ImportDescr"],
  fields: {
    limits: {
      type: "Limit"
    },
    id: {
      maybe: true,
      type: "Index"
    }
  }
});
defineType("FuncImportDescr", {
  unionType: ["Node", "ImportDescr"],
  fields: {
    id: {
      type: "Identifier"
    },
    signature: {
      type: "Signature"
    }
  }
});
defineType("ModuleImport", {
  unionType: ["Node"],
  fields: {
    module: {
      type: "string"
    },
    name: {
      type: "string"
    },
    descr: {
      type: "ImportDescr"
    }
  }
});
defineType("ModuleExportDescr", {
  unionType: ["Node"],
  fields: {
    exportType: {
      type: "ExportDescrType"
    },
    id: {
      type: "Index"
    }
  }
});
defineType("ModuleExport", {
  unionType: ["Node"],
  fields: {
    name: {
      type: "string"
    },
    descr: {
      type: "ModuleExportDescr"
    }
  }
});
defineType("Limit", {
  unionType: ["Node"],
  fields: {
    min: {
      type: "number"
    },
    max: {
      optional: true,
      type: "number"
    },
    // Threads proposal, shared memory
    shared: {
      optional: true,
      type: "boolean"
    }
  }
});
defineType("Signature", {
  unionType: ["Node"],
  fields: {
    params: {
      array: true,
      type: "FuncParam"
    },
    results: {
      array: true,
      type: "Valtype"
    }
  }
});
defineType("Program", {
  unionType: ["Node"],
  fields: {
    body: {
      array: true,
      type: "Node"
    }
  }
});
defineType("Identifier", {
  unionType: ["Node", "Expression"],
  fields: {
    value: {
      type: "string"
    },
    raw: {
      optional: true,
      type: "string"
    }
  }
});
defineType("BlockInstruction", {
  unionType: ["Node", "Block", "Instruction"],
  fields: {
    id: {
      constant: true,
      type: "string",
      value: "block"
    },
    label: {
      maybe: true,
      type: "Identifier"
    },
    instr: {
      array: true,
      type: "Instruction"
    },
    result: {
      maybe: true,
      type: "Valtype"
    }
  }
});
defineType("CallInstruction", {
  unionType: ["Node", "Instruction"],
  fields: {
    id: {
      constant: true,
      type: "string",
      value: "call"
    },
    index: {
      type: "Index"
    },
    instrArgs: {
      array: true,
      optional: true,
      type: "Expression"
    },
    numeric: {
      type: "Index",
      optional: true
    }
  }
});
defineType("CallIndirectInstruction", {
  unionType: ["Node", "Instruction"],
  fields: {
    id: {
      constant: true,
      type: "string",
      value: "call_indirect"
    },
    signature: {
      type: "SignatureOrTypeRef"
    },
    intrs: {
      array: true,
      optional: true,
      type: "Expression"
    }
  }
});
defineType("ByteArray", {
  unionType: ["Node"],
  fields: {
    values: {
      array: true,
      type: "Byte"
    }
  }
});
defineType("Func", {
  unionType: ["Node", "Block"],
  fields: {
    name: {
      maybe: true,
      type: "Index"
    },
    signature: {
      type: "SignatureOrTypeRef"
    },
    body: {
      array: true,
      type: "Instruction"
    },
    isExternal: {
      comment: "means that it has been imported from the outside js",
      optional: true,
      type: "boolean"
    },
    metadata: {
      optional: true,
      type: "FuncMetadata"
    }
  }
});
/**
 * Intrinsics
 */

defineType("InternalBrUnless", {
  unionType: ["Node", "Intrinsic"],
  fields: {
    target: {
      type: "number"
    }
  }
});
defineType("InternalGoto", {
  unionType: ["Node", "Intrinsic"],
  fields: {
    target: {
      type: "number"
    }
  }
});
defineType("InternalCallExtern", {
  unionType: ["Node", "Intrinsic"],
  fields: {
    target: {
      type: "number"
    }
  }
}); // function bodies are terminated by an `end` instruction but are missing a
// return instruction
//
// Since we can't inject a new instruction we are injecting a new instruction.

defineType("InternalEndAndReturn", {
  unionType: ["Node", "Intrinsic"],
  fields: {}
});
module.exports = definitions;