import {styleTags, tags as t} from "@lezer/highlight"

export const htmlHighlighting = styleTags({
  "Text RawText IncompleteTag IncompleteCloseTag": t.content,
  "StartTag StartCloseTag SelfClosingEndTag EndTag": t.angleBracket,
  TagName: t.tagName,
  "MismatchedCloseTag/TagName": [t.tagName,  t.invalid],
  AttributeName: t.attributeName,
  "AttributeValue UnquotedAttributeValue": t.attributeValue,
  Is: t.definitionOperator,
  "EntityReference CharacterReference": t.character,
  Comment: t.blockComment,
  ProcessingInst: t.processingInstruction,
  DoctypeDecl: t.documentMeta
})
