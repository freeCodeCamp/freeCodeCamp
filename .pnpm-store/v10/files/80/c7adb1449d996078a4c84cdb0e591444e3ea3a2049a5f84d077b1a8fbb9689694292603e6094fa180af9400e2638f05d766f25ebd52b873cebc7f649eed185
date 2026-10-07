export type XastDoctype = {
  type: 'doctype';
  name: string;
  data: {
    doctype: string;
  };
};

export type XastInstruction = {
  type: 'instruction';
  name: string;
  value: string;
};

export type XastComment = {
  type: 'comment';
  value: string;
};

export type XastCdata = {
  type: 'cdata';
  value: string;
};

export type XastText = {
  type: 'text';
  value: string;
};

export type XastElement = {
  type: 'element';
  name: string;
  attributes: Record<string, string>;
  children: Array<XastChild>;
};

export type XastChild =
  | XastDoctype
  | XastInstruction
  | XastComment
  | XastCdata
  | XastText
  | XastElement;

export type XastRoot = {
  type: 'root';
  children: Array<XastChild>;
};

export type XastParent = XastRoot | XastElement;

export type XastNode = XastRoot | XastChild;

export type StringifyOptions = {
  doctypeStart?: string;
  doctypeEnd?: string;
  procInstStart?: string;
  procInstEnd?: string;
  tagOpenStart?: string;
  tagOpenEnd?: string;
  tagCloseStart?: string;
  tagCloseEnd?: string;
  tagShortStart?: string;
  tagShortEnd?: string;
  attrStart?: string;
  attrEnd?: string;
  commentStart?: string;
  commentEnd?: string;
  cdataStart?: string;
  cdataEnd?: string;
  textStart?: string;
  textEnd?: string;
  indent?: number | string;
  regEntities?: RegExp;
  regValEntities?: RegExp;
  encodeEntity?: (char: string) => string;
  pretty?: boolean;
  useShortTags?: boolean;
  eol?: 'lf' | 'crlf';
  finalNewline?: boolean;
};

type VisitorNode<Node> = {
  enter?: (node: Node, parentNode: XastParent) => void | symbol;
  exit?: (node: Node, parentNode: XastParent) => void;
};

type VisitorRoot = {
  enter?: (node: XastRoot, parentNode: null) => void;
  exit?: (node: XastRoot, parentNode: null) => void;
};

export type Visitor = {
  doctype?: VisitorNode<XastDoctype>;
  instruction?: VisitorNode<XastInstruction>;
  comment?: VisitorNode<XastComment>;
  cdata?: VisitorNode<XastCdata>;
  text?: VisitorNode<XastText>;
  element?: VisitorNode<XastElement>;
  root?: VisitorRoot;
};

export type PluginInfo = {
  path?: string;
  multipassCount: number;
};

export type Plugin<Params> = (
  root: XastRoot,
  params: Params,
  info: PluginInfo
) => null | Visitor;

export type Specificity = [number, number, number, number];

export type StylesheetDeclaration = {
  name: string;
  value: string;
  important: boolean;
};

export type StylesheetRule = {
  dynamic: boolean;
  selectors: string;
  specificity: Specificity;
  declarations: Array<StylesheetDeclaration>;
};

export type Stylesheet = {
  rules: Array<StylesheetRule>;
  parents: Map<XastElement, XastParent>;
};

type StaticStyle = {
  type: 'static';
  inherited: boolean;
  value: string;
};

type DynamicStyle = {
  type: 'dynamic';
  inherited: boolean;
};

export type ComputedStyles = Record<string, StaticStyle | DynamicStyle>;

export type PathDataCommand =
  | 'M'
  | 'm'
  | 'Z'
  | 'z'
  | 'L'
  | 'l'
  | 'H'
  | 'h'
  | 'V'
  | 'v'
  | 'C'
  | 'c'
  | 'S'
  | 's'
  | 'Q'
  | 'q'
  | 'T'
  | 't'
  | 'A'
  | 'a';

export type PathDataItem = {
  command: PathDataCommand;
  args: Array<number>;
};
