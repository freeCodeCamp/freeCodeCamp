import CSSTree, { CssLocation, List } from "css-tree";
import { Range } from "./range";

type ToESTree<Node extends CSSTree.CssNodeCommon> = Omit<
  Node,
  "type" | "children"
> & {
  range: Range;
  loc: CssLocation;
};

export type AnyCssNode =
  | CssStyleSheet
  | CssSelectorList
  | CssSelector
  | CssBlock
  | CssDeclaration
  | CssCombinator;

export type CssStyleSheet = ToESTree<CSSTree.StyleSheetPlain> & {
  parent?: AnyCssNode;
  type: "CssStyleSheet";
  children: List<AnyCssNode>;
};

export type CssSelectorList = ToESTree<CSSTree.SelectorListPlain> & {
  parent?: AnyCssNode;
  type: "CssSelectorList";
  children: List<AnyCssNode>;
};

export type CssSelector = ToESTree<CSSTree.SelectorPlain> & {
  parent?: AnyCssNode;
  type: "CssSelector";
  children: List<AnyCssNode>;
};

export type CssBlock = ToESTree<CSSTree.Block> & {
  parent?: AnyCssNode;
  type: "CssBlock";
  children: AnyCssNode[];
};

export type CssDeclaration = ToESTree<CSSTree.Declaration> & {
  parent?: AnyCssNode;
  type: "CssDeclaration";
  children: List<AnyCssNode>;
};

export type CssCombinator = ToESTree<CSSTree.Combinator> & {
  parent?: AnyCssNode;
  type: "CssCombinator";
  loc?: CssLocation | null;
};
