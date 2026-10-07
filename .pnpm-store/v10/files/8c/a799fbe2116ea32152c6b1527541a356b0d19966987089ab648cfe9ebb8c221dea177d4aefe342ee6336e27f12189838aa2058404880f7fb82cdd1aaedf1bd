"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecimalLiteral = DecimalLiteral;
exports.Noop = Noop;
exports.RecordExpression = RecordExpression;
exports.TSExpressionWithTypeArguments = TSExpressionWithTypeArguments;
exports.TupleExpression = TupleExpression;
function Noop() {}
function TSExpressionWithTypeArguments(node) {
  this.print(node.expression);
  this.print(node.typeParameters);
}
function DecimalLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.word(raw);
    return;
  }
  this.word(node.value + "m");
}
function RecordExpression(node) {
  const props = node.properties;
  let startToken;
  let endToken;
  if (this.format.recordAndTupleSyntaxType === "bar") {
    startToken = "{|";
    endToken = "|}";
  } else if (this.format.recordAndTupleSyntaxType !== "hash" && this.format.recordAndTupleSyntaxType != null) {
    throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);
  } else {
    startToken = "#{";
    endToken = "}";
  }
  this.token(startToken);
  if (props.length) {
    this.space();
    this.printList(props, this.shouldPrintTrailingComma(endToken), true, true);
    this.space();
  }
  this.token(endToken);
}
function TupleExpression(node) {
  const elems = node.elements;
  const len = elems.length;
  let startToken;
  let endToken;
  if (this.format.recordAndTupleSyntaxType === "bar") {
    startToken = "[|";
    endToken = "|]";
  } else if (this.format.recordAndTupleSyntaxType === "hash") {
    startToken = "#[";
    endToken = "]";
  } else {
    throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);
  }
  this.token(startToken);
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    if (elem) {
      if (i > 0) this.space();
      this.print(elem);
      if (i < len - 1 || this.shouldPrintTrailingComma(endToken)) {
        this.token(",", false, i);
      }
    }
  }
  this.token(endToken);
}

//# sourceMappingURL=deprecated.js.map
