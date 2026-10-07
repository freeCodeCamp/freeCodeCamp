import * as estree from "estree";
import { SourceLocation } from "./source-location";
import { Range } from "./range";

export interface EstreeNode extends estree.BaseNode {
  type: string;
  loc: SourceLocation;
  range: Range;
}

export interface TaggedTemplateExpression
  extends estree.TaggedTemplateExpression {
  parent: EstreeNode | null;
  quasi: TemplateLiteral;
  loc: SourceLocation;
  range: Range;
}

export interface TemplateLiteral extends estree.TemplateLiteral {
  parent: EstreeNode | null;
  quasis: TemplateElement[];
  loc: SourceLocation;
  range: Range;
}

export interface TemplateElement extends estree.TemplateElement {
  parent: EstreeNode | null;
  loc: SourceLocation;
  range: Range;
}

export type AnyJsNode =
  | TaggedTemplateExpression
  | TemplateLiteral
  | TemplateElement;
