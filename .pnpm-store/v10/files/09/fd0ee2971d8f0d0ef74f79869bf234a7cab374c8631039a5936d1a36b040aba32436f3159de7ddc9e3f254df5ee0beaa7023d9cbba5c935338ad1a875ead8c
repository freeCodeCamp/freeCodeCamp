type X2jOptions = {
  preserveOrder: boolean;
  attributeNamePrefix: string;
  attributesGroupName: false | string;
  textNodeName: string;
  ignoreAttributes: boolean;
  removeNSPrefix: boolean;
  allowBooleanAttributes: boolean;
  parseTagValue: boolean;
  parseAttributeValue: boolean;
  trimValues: boolean;
  cdataPropName: false | string;
  commentPropName: false | string;
    /**
Control how tag value should be parsed. Called only if tag value is not empty

@returns {undefined|null} `undefined` or `null` to set original value.
@returns {unknown} 
1. Different value or value with different data type to set new value. <br>
2. Same value to set parsed value if `parseTagValue: true`.
   */
  tagValueProcessor: (tagName: string, tagValue: string, jPath: string, hasAttributes: boolean, isLeafNode: boolean) => unknown;
  attributeValueProcessor: (attrName: string, attrValue: string, jPath: string) => unknown;
  numberParseOptions: strnumOptions;
  stopNodes: string[];
  unpairedTags: string[];
  alwaysCreateTextNode: boolean;
  isArray: (tagName: string, jPath: string, isLeafNode: boolean, isAttribute: boolean) => boolean;
  processEntities: boolean;
  htmlEntities: boolean;
  ignoreDeclaration: boolean;
  ignorePiTags: boolean;
  transformTagName: ((tagName: string) => string) | false;
  transformAttributeName: ((attributeName: string) => string) | false;
    /**
Change the tag name when a different name is returned. Skip the tag from parsed result when false is returned. 
Modify `attrs` object to control attributes for the given tag.

@returns {string} new tag name.
@returns false to skip the tag
   */
  updateTag: (tagName: string, jPath: string, attrs: {[k: string]: string}) =>  string | boolean;
};
type strnumOptions = {
  hex: boolean;
  leadingZeros: boolean,
  skipLike?: RegExp,
  eNotation?: boolean
}
type X2jOptionsOptional = Partial<X2jOptions>;
type validationOptions = {
  allowBooleanAttributes: boolean;
  unpairedTags: string[];
};
type validationOptionsOptional = Partial<validationOptions>;

type XmlBuilderOptions = {
  attributeNamePrefix: string;
  attributesGroupName: false | string;
  textNodeName: string;
  ignoreAttributes: boolean;
  cdataPropName: false | string;
  commentPropName: false | string;
  format: boolean;
  indentBy: string;
  arrayNodeName: string;
  suppressEmptyNode: boolean;
  suppressUnpairedNode: boolean;
  suppressBooleanAttributes: boolean;
  preserveOrder: boolean;
  unpairedTags: string[];
  stopNodes: string[];
  tagValueProcessor: (name: string, value: unknown) => string;
  attributeValueProcessor: (name: string, value: unknown) => string;
  processEntities: boolean;
  oneListGroup: boolean;
};
type XmlBuilderOptionsOptional = Partial<XmlBuilderOptions>;

type ESchema = string | object | Array<string|object>;

type ValidationError = {
  err: { 
    code: string;
    msg: string,
    line: number,
    col: number 
  };
};

export class XMLParser {
  constructor(options?: X2jOptionsOptional);
  parse(xmlData: string | Buffer ,validationOptions?: validationOptionsOptional | boolean): any;
  /**
   * Add Entity which is not by default supported by this library
   * @param entityIndentifier {string} Eg: 'ent' for &ent;
   * @param entityValue {string} Eg: '\r'
   */
  addEntity(entityIndentifier: string, entityValue: string): void;
}

export class XMLValidator{
  static validate(  xmlData: string,  options?: validationOptionsOptional): true | ValidationError;
}
export class XMLBuilder {
  constructor(options?: XmlBuilderOptionsOptional);
  build(jObj: any): any;
}
