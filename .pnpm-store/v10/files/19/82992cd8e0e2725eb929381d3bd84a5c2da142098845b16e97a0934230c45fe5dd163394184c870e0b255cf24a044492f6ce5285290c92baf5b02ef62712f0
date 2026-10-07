import {ScriptText, StyleText, TextareaText,
        Element, TagName, Attribute, AttributeName, OpenTag, CloseTag,
        AttributeValue, UnquotedAttributeValue} from "./parser.terms.js"
import {parseMixed} from "@lezer/common"

function getAttrs(openTag, input) {
  let attrs = Object.create(null)
  for (let att of openTag.getChildren(Attribute)) {
    let name = att.getChild(AttributeName), value = att.getChild(AttributeValue) || att.getChild(UnquotedAttributeValue)
    if (name) attrs[input.read(name.from, name.to)] =
      !value ? "" : value.type.id == AttributeValue ? input.read(value.from + 1, value.to - 1) : input.read(value.from, value.to)
  }
  return attrs
}

function findTagName(openTag, input) {
  let tagNameNode = openTag.getChild(TagName)
  return tagNameNode ? input.read(tagNameNode.from, tagNameNode.to) : " "
}

function maybeNest(node, input, tags) {
  let attrs
  for (let tag of tags) {
    if (!tag.attrs || tag.attrs(attrs || (attrs = getAttrs(node.node.parent.firstChild, input))))
      return {parser: tag.parser}
  }
  return null
}

// tags?: {
//   tag: string,
//   attrs?: ({[attr: string]: string}) => boolean,
//   parser: Parser
// }[]
// attributes?: {
//   name: string,
//   tagName?: string,
//   parser: Parser
// }[]
 
export function configureNesting(tags = [], attributes = []) {
  let script = [], style = [], textarea = [], other = []
  for (let tag of tags) {
    let array = tag.tag == "script" ? script : tag.tag == "style" ? style : tag.tag == "textarea" ? textarea : other
    array.push(tag)
  }
  let attrs = attributes.length ? Object.create(null) : null
  for (let attr of attributes) (attrs[attr.name] || (attrs[attr.name] = [])).push(attr)

  return parseMixed((node, input) => {
    let id = node.type.id
    if (id == ScriptText) return maybeNest(node, input, script)
    if (id == StyleText) return maybeNest(node, input, style)
    if (id == TextareaText) return maybeNest(node, input, textarea)

    if (id == Element && other.length) {
      let n = node.node, open = n.firstChild, tagName = open && findTagName(open, input), attrs
      if (tagName) for (let tag of other) {
        if (tag.tag == tagName && (!tag.attrs || tag.attrs(attrs || (attrs = getAttrs(open, input))))) {
          let close = n.lastChild
          let to = close.type.id == CloseTag ? close.from : n.to
          if (to > open.to)
            return {parser: tag.parser, overlay: [{from: open.to, to}]}
        }
      }
    }

    if (attrs && id == Attribute) {
      let n = node.node, nameNode
      if (nameNode = n.firstChild) {
        let matches = attrs[input.read(nameNode.from, nameNode.to)]
        if (matches) for (let attr of matches) {
          if (attr.tagName && attr.tagName != findTagName(n.parent, input)) continue
          let value = n.lastChild
          if (value.type.id == AttributeValue) {
            let from = value.from + 1
            let last = value.lastChild, to = value.to - (last && last.isError ? 0 : 1)
            if (to > from) return {parser: attr.parser, overlay: [{from, to}]}
          } else if (value.type.id == UnquotedAttributeValue) {
            return {parser: attr.parser, overlay: [{from: value.from, to: value.to}]}
          }
        }
      }
    }
    return null
  })
}
