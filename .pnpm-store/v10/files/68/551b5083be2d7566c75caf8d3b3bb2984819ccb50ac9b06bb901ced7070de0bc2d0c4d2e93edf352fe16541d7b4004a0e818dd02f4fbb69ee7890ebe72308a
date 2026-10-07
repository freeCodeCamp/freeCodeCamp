export var tokenize = initializeDocument

import codes from '../character/codes.mjs'
import markdownLineEnding from '../character/markdown-line-ending.mjs'
import constants from '../constant/constants.mjs'
import types from '../constant/types.mjs'
import spaceFactory from '../tokenize/factory-space.mjs'
import blank from '../tokenize/partial-blank-line.mjs'

var containerConstruct = {tokenize: tokenizeContainer}
var lazyFlowConstruct = {tokenize: tokenizeLazyFlow}

function initializeDocument(effects) {
  var self = this
  var stack = []
  var continued = 0
  var inspectConstruct = {tokenize: tokenizeInspect, partial: true}
  var inspectResult
  var childFlow
  var childToken

  return start

  function start(code) {
    if (continued < stack.length) {
      self.containerState = stack[continued][1]
      return effects.attempt(
        stack[continued][0].continuation,
        documentContinue,
        documentContinued
      )(code)
    }

    return documentContinued(code)
  }

  function documentContinue(code) {
    continued++
    return start(code)
  }

  function documentContinued(code) {
    // If we’re in a concrete construct (such as when expecting another line of
    // HTML, or we resulted in lazy content), we can immediately start flow.
    if (inspectResult && inspectResult.flowContinue) {
      return flowStart(code)
    }

    self.interrupt =
      childFlow &&
      childFlow.currentConstruct &&
      childFlow.currentConstruct.interruptible
    self.containerState = {}
    return effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code)
  }

  function containerContinue(code) {
    stack.push([self.currentConstruct, self.containerState])
    self.containerState = undefined
    return documentContinued(code)
  }

  function flowStart(code) {
    if (code === codes.eof) {
      exitContainers(0, true)
      effects.consume(code)
      return
    }

    childFlow = childFlow || self.parser.flow(self.now())

    effects.enter(types.chunkFlow, {
      contentType: constants.contentTypeFlow,
      previous: childToken,
      _tokenizer: childFlow
    })

    return flowContinue(code)
  }

  function flowContinue(code) {
    if (code === codes.eof) {
      continueFlow(effects.exit(types.chunkFlow))
      return flowStart(code)
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      continueFlow(effects.exit(types.chunkFlow))
      return effects.check(inspectConstruct, documentAfterPeek)
    }

    effects.consume(code)
    return flowContinue
  }

  function documentAfterPeek(code) {
    exitContainers(
      inspectResult.continued,
      inspectResult && inspectResult.flowEnd
    )
    continued = 0
    return start(code)
  }

  function continueFlow(token) {
    if (childToken) childToken.next = token
    childToken = token
    childFlow.lazy = inspectResult && inspectResult.lazy
    childFlow.defineSkip(token.start)
    childFlow.write(self.sliceStream(token))
  }

  function exitContainers(size, end) {
    var index = stack.length

    // Close the flow.
    if (childFlow && end) {
      childFlow.write([codes.eof])
      childToken = childFlow = undefined
    }

    // Exit open containers.
    while (index-- > size) {
      self.containerState = stack[index][1]
      stack[index][0].exit.call(self, effects)
    }

    stack.length = size
  }

  function tokenizeInspect(effects, ok) {
    var subcontinued = 0

    inspectResult = {}

    return inspectStart

    function inspectStart(code) {
      if (subcontinued < stack.length) {
        self.containerState = stack[subcontinued][1]
        return effects.attempt(
          stack[subcontinued][0].continuation,
          inspectContinue,
          inspectLess
        )(code)
      }

      // If we’re continued but in a concrete flow, we can’t have more
      // containers.
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        inspectResult.flowContinue = true
        return inspectDone(code)
      }

      self.interrupt =
        childFlow.currentConstruct && childFlow.currentConstruct.interruptible
      self.containerState = {}
      return effects.attempt(
        containerConstruct,
        inspectFlowEnd,
        inspectDone
      )(code)
    }

    function inspectContinue(code) {
      subcontinued++
      return self.containerState._closeFlow
        ? inspectFlowEnd(code)
        : inspectStart(code)
    }

    function inspectLess(code) {
      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
        // Maybe another container?
        self.containerState = {}
        return effects.attempt(
          containerConstruct,
          inspectFlowEnd,
          // Maybe flow, or a blank line?
          effects.attempt(
            lazyFlowConstruct,
            inspectFlowEnd,
            effects.check(blank, inspectFlowEnd, inspectLazy)
          )
        )(code)
      }

      // Otherwise we’re interrupting.
      return inspectFlowEnd(code)
    }

    function inspectLazy(code) {
      // Act as if all containers are continued.
      subcontinued = stack.length
      inspectResult.lazy = true
      inspectResult.flowContinue = true
      return inspectDone(code)
    }

    // We’re done with flow if we have more containers, or an interruption.
    function inspectFlowEnd(code) {
      inspectResult.flowEnd = true
      return inspectDone(code)
    }

    function inspectDone(code) {
      inspectResult.continued = subcontinued
      self.interrupt = self.containerState = undefined
      return ok(code)
    }
  }
}

function tokenizeContainer(effects, ok, nok) {
  return spaceFactory(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    types.linePrefix,
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : constants.tabSize
  )
}

function tokenizeLazyFlow(effects, ok, nok) {
  return spaceFactory(
    effects,
    effects.lazy(this.parser.constructs.flow, ok, nok),
    types.linePrefix,
    this.parser.constructs.disable.null.indexOf('codeIndented') > -1
      ? undefined
      : constants.tabSize
  )
}
