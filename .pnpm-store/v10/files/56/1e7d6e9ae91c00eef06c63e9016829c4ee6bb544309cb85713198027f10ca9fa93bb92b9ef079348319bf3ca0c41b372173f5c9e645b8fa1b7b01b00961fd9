/**
 * @import {Directive, HtmlOptions} from 'micromark-extension-directive'
 * @import {CompileContext, Handle as MicromarkHandle, HtmlExtension} from 'micromark-util-types'
 */

import {ok as assert} from 'devlop'
import {parseEntities} from 'parse-entities'

const own = {}.hasOwnProperty

/**
 * Create an extension for `micromark` to support directives when serializing
 * to HTML.
 *
 * @param {HtmlOptions | null | undefined} [options={}]
 *   Configuration (default: `{}`).
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions`, to
 *   support directives when serializing to HTML.
 */
export function directiveHtml(options) {
  const options_ = options || {}
  return {
    enter: {
      directiveContainer() {
        enter.call(this, 'containerDirective')
      },
      directiveContainerAttributes: enterAttributes,
      directiveContainerLabel: enterLabel,
      directiveContainerContent() {
        this.buffer()
      },

      directiveLeaf() {
        enter.call(this, 'leafDirective')
      },
      directiveLeafAttributes: enterAttributes,
      directiveLeafLabel: enterLabel,

      directiveText() {
        enter.call(this, 'textDirective')
      },
      directiveTextAttributes: enterAttributes,
      directiveTextLabel: enterLabel
    },
    exit: {
      directiveContainer: exit,
      directiveContainerAttributeClassValue: exitAttributeClassValue,
      directiveContainerAttributeIdValue: exitAttributeIdValue,
      directiveContainerAttributeName: exitAttributeName,
      directiveContainerAttributeValue: exitAttributeValue,
      directiveContainerAttributes: exitAttributes,
      directiveContainerContent: exitContainerContent,
      directiveContainerFence: exitContainerFence,
      directiveContainerLabel: exitLabel,
      directiveContainerName: exitName,

      directiveLeaf: exit,
      directiveLeafAttributeClassValue: exitAttributeClassValue,
      directiveLeafAttributeIdValue: exitAttributeIdValue,
      directiveLeafAttributeName: exitAttributeName,
      directiveLeafAttributeValue: exitAttributeValue,
      directiveLeafAttributes: exitAttributes,
      directiveLeafLabel: exitLabel,
      directiveLeafName: exitName,

      directiveText: exit,
      directiveTextAttributeClassValue: exitAttributeClassValue,
      directiveTextAttributeIdValue: exitAttributeIdValue,
      directiveTextAttributeName: exitAttributeName,
      directiveTextAttributeValue: exitAttributeValue,
      directiveTextAttributes: exitAttributes,
      directiveTextLabel: exitLabel,
      directiveTextName: exitName
    }
  }

  /**
   * @this {CompileContext}
   * @param {Directive['type']} type
   */
  function enter(type) {
    let stack = this.getData('directiveStack')
    if (!stack) this.setData('directiveStack', (stack = []))
    stack.push({type, name: ''})
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitName(token) {
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    stack[stack.length - 1].name = this.sliceSerialize(token)
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function enterLabel() {
    this.buffer()
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitLabel() {
    const data = this.resume()
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    stack[stack.length - 1].label = data
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function enterAttributes() {
    this.buffer()
    this.setData('directiveAttributes', [])
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitAttributeIdValue(token) {
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')
    attributes.push([
      'id',
      parseEntities(this.sliceSerialize(token), {
        attribute: true
      })
    ])
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitAttributeClassValue(token) {
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')

    attributes.push([
      'class',
      parseEntities(this.sliceSerialize(token), {
        attribute: true
      })
    ])
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitAttributeName(token) {
    // Attribute names in CommonMark are significantly limited, so character
    // references can’t exist.
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')

    attributes.push([this.sliceSerialize(token), ''])
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitAttributeValue(token) {
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')
    attributes[attributes.length - 1][1] = parseEntities(
      this.sliceSerialize(token),
      {attribute: true}
    )
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitAttributes() {
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    const attributes = this.getData('directiveAttributes')
    assert(attributes, 'expected attributes')
    /** @type {Record<string, string>} */
    const cleaned = {}
    let index = -1

    while (++index < attributes.length) {
      const attribute = attributes[index]

      if (attribute[0] === 'class' && cleaned.class) {
        cleaned.class += ' ' + attribute[1]
      } else {
        cleaned[attribute[0]] = attribute[1]
      }
    }

    this.resume()
    this.setData('directiveAttributes')
    stack[stack.length - 1].attributes = cleaned
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitContainerContent() {
    const data = this.resume()
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    stack[stack.length - 1].content = data
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exitContainerFence() {
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    const directive = stack[stack.length - 1]
    if (!directive._fenceCount) directive._fenceCount = 0
    directive._fenceCount++
    if (directive._fenceCount === 1) this.setData('slurpOneLineEnding', true)
  }

  /**
   * @this {CompileContext}
   * @type {MicromarkHandle}
   */
  function exit() {
    const stack = this.getData('directiveStack')
    assert(stack, 'expected directive stack')
    const directive = stack.pop()
    assert(directive, 'expected directive')
    /** @type {boolean | undefined} */
    let found
    /** @type {boolean | undefined} */
    let result

    assert(directive.name, 'expected `name`')

    if (own.call(options_, directive.name)) {
      result = options_[directive.name].call(this, directive)
      found = result !== false
    }

    if (!found && own.call(options_, '*')) {
      result = options_['*'].call(this, directive)
      found = result !== false
    }

    if (!found && directive.type !== 'textDirective') {
      this.setData('slurpOneLineEnding', true)
    }
  }
}
