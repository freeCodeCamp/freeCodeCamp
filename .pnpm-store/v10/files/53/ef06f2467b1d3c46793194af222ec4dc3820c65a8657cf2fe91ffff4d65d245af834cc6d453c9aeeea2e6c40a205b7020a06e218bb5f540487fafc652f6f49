"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaggedTemplateExpression = TaggedTemplateExpression;
exports.TemplateElement = TemplateElement;
exports.TemplateLiteral = TemplateLiteral;
exports._printTemplate = _printTemplate;
function TaggedTemplateExpression(node) {
  this.print(node.tag);
  this.print(node.typeParameters);
  this.print(node.quasi);
}
function TemplateElement() {
  throw new Error("TemplateElement printing is handled in TemplateLiteral");
}
function _printTemplate(node, substitutions) {
  const quasis = node.quasis;
  let partRaw = "`";
  for (let i = 0; i < quasis.length - 1; i++) {
    partRaw += quasis[i].value.raw;
    this.token(partRaw + "${", true);
    this.print(substitutions[i]);
    partRaw = "}";
    if (this.tokenMap) {
      const token = this.tokenMap.findMatching(node, "}", i);
      if (token) this._catchUpTo(token.loc.start);
    }
  }
  partRaw += quasis[quasis.length - 1].value.raw;
  this.token(partRaw + "`", true);
}
function TemplateLiteral(node) {
  _printTemplate.call(this, node, node.expressions);
}

//# sourceMappingURL=template-literals.js.map
