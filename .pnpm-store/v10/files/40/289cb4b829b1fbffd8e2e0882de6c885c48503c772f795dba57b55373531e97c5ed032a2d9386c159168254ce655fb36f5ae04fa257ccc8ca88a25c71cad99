"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iterateJsdoc;
exports.getSettings = void 0;
Object.defineProperty(exports, "parseComment", {
  enumerable: true,
  get: function () {
    return _jsdoccomment.parseComment;
  }
});
var jsdocUtils = _interopRequireWildcard(require("./jsdocUtils.cjs"));
var _jsdoccomment = require("@es-joy/jsdoccomment");
var _commentParser = require("comment-parser");
var _esquery = _interopRequireDefault(require("esquery"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * @typedef {number} Integer
 */

/**
 * @typedef {import('@es-joy/jsdoccomment').JsdocBlockWithInline} JsdocBlockWithInline
 */

/**
 * @typedef {{
 *   disallowName?: string,
 *   allowName?: string,
 *   context?: string,
 *   comment?: string,
 *   tags?: string[],
 *   replacement?: string,
 *   minimum?: Integer,
 *   message?: string,
 *   forceRequireReturn?: boolean
 * }} ContextObject
 */
/**
 * @typedef {string|ContextObject} Context
 */

/**
 * @callback CheckJsdoc
 * @param {{
 *   lastIndex?: Integer,
 *   isFunctionContext?: boolean,
 *   selector?: string,
 *   comment?: string
 * }} info
 * @param {null|((jsdoc: import('@es-joy/jsdoccomment').JsdocBlockWithInline) => boolean|undefined)} handler
 * @param {import('eslint').Rule.Node} node
 * @returns {void}
 */

/**
 * @callback ForEachPreferredTag
 * @param {string} tagName
 * @param {(
 *   matchingJsdocTag: import('@es-joy/jsdoccomment').JsdocTagWithInline,
 *   targetTagName: string
 * ) => void} arrayHandler
 * @param {boolean} [skipReportingBlockedTag]
 * @returns {void}
 */

/**
 * @callback ReportSettings
 * @param {string} message
 * @returns {void}
 */

/**
 * @callback ParseClosureTemplateTag
 * @param {import('comment-parser').Spec} tag
 * @returns {string[]}
 */

/**
 * @callback GetPreferredTagNameObject
 * @param {{
 *   tagName: string
 * }} cfg
 * @returns {string|false|{
 *   message: string;
 *   replacement?: string|undefined
 * }|{
 *   blocked: true,
 *   tagName: string
 * }}
 */

/**
 * @typedef {{
 *   forEachPreferredTag: ForEachPreferredTag,
 *   reportSettings: ReportSettings,
 *   parseClosureTemplateTag: ParseClosureTemplateTag,
 *   getPreferredTagNameObject: GetPreferredTagNameObject,
 *   pathDoesNotBeginWith: import('./jsdocUtils.js').PathDoesNotBeginWith
 * }} BasicUtils
 */

/**
 * @callback IsIteratingFunction
 * @returns {boolean}
 */

/**
 * @callback IsVirtualFunction
 * @returns {boolean}
 */

/**
 * @callback Stringify
 * @param {import('comment-parser').Block} tagBlock
 * @param {boolean} [specRewire]
 * @returns {string}
 */

/**
 * @callback ReportJSDoc
 * @param {string} msg
 * @param {null|import('comment-parser').Spec|{line: Integer, column?: Integer}} [tag]
 * @param {(() => void)|null} [handler]
 * @param {boolean} [specRewire]
 * @param {undefined|{
 *   [key: string]: string
 * }} [data]
 */

/**
 * @callback GetRegexFromString
 * @param {string} str
 * @param {string} [requiredFlags]
 * @returns {RegExp}
 */

/**
 * @callback GetTagDescription
 * @param {import('comment-parser').Spec} tg
 * @param {boolean} [returnArray]
 * @returns {string[]|string}
 */

/**
 * @callback SetTagDescription
 * @param {import('comment-parser').Spec} tg
 * @param {RegExp} matcher
 * @param {(description: string) => string} setter
 * @returns {Integer}
 */

/**
 * @callback GetDescription
 * @returns {{
 *   description: string,
 *   descriptions: string[],
 *   lastDescriptionLine: Integer
 * }}
 */

/**
 * @callback SetBlockDescription
 * @param {(
 *   info: {
 *     delimiter: string,
 *     postDelimiter: string,
 *     start: string
 *   },
 *   seedTokens: (
 *     tokens?: Partial<import('comment-parser').Tokens>
 *   ) => import('comment-parser').Tokens,
 *   descLines: string[]
 * ) => import('comment-parser').Line[]} setter
 * @returns {void}
 */

/**
 * @callback SetDescriptionLines
 * @param {RegExp} matcher
 * @param {(description: string) => string} setter
 * @returns {Integer}
 */

/**
 * @callback ChangeTag
 * @param {import('comment-parser').Spec} tag
 * @param {...Partial<import('comment-parser').Tokens>} tokens
 * @returns {void}
 */

/**
 * @callback SetTag
 * @param {import('comment-parser').Spec & {
 *   line: Integer
 * }} tag
 * @param {Partial<import('comment-parser').Tokens>} [tokens]
 * @returns {void}
 */

/**
 * @callback RemoveTag
 * @param {Integer} tagIndex
 * @param {{
 *   removeEmptyBlock?: boolean,
 *   tagSourceOffset?: Integer
 * }} [cfg]
 * @returns {void}
 */

/**
 * @callback AddTag
 * @param {string} targetTagName
 * @param {Integer} [number]
 * @param {import('comment-parser').Tokens|{}} [tokens]
 * @returns {void}
 */

/**
 * @callback GetFirstLine
 * @returns {Integer|undefined}
 */

/**
 * @typedef {(
 *   tokens?: Partial<import('comment-parser').Tokens> | undefined
 * ) => import('comment-parser').Tokens} SeedTokens
 */

/**
 * Sets tokens to empty string.
 * @callback EmptyTokens
 * @param {import('comment-parser').Tokens} tokens
 * @returns {void}
 */

/**
 * @callback AddLine
 * @param {Integer} sourceIndex
 * @param {Partial<import('comment-parser').Tokens>} tokens
 * @returns {void}
 */

/**
 * @callback AddLines
 * @param {Integer} tagIndex
 * @param {Integer} tagSourceOffset
 * @param {Integer} numLines
 * @returns {void}
 */

/**
 * @callback MakeMultiline
 * @returns {void}
 */

/**
 * @callback GetFunctionParameterNames
 * @param {boolean} [useDefaultObjectProperties]
 * @returns {import('./jsdocUtils.js').ParamNameInfo[]}
 */

/**
 * @callback HasParams
 * @returns {Integer}
 */

/**
 * @callback IsGenerator
 * @returns {boolean}
 */

/**
 * @callback IsConstructor
 * @returns {boolean}
 */

/**
 * @callback GetJsdocTagsDeep
 * @param {string} tagName
 * @returns {false|{
 *   idx: Integer,
 *   name: string,
 *   type: string
 * }[]}
 */

/**
 * @callback GetPreferredTagName
 * @param {{
 *   tagName: string,
 *   skipReportingBlockedTag?: boolean,
 *   allowObjectReturn?: boolean,
 *   defaultMessage?: string
 * }} cfg
 * @returns {string|undefined|false|{
 *   message: string;
 *   replacement?: string|undefined;
 * }|{
 *   blocked: true,
 *   tagName: string
 * }}
 */

/**
 * @callback IsValidTag
 * @param {string} name
 * @param {string[]} definedTags
 * @returns {boolean}
 */

/**
 * @callback HasATag
 * @param {string[]} names
 * @returns {boolean}
 */

/**
 * @callback HasTag
 * @param {string} name
 * @returns {boolean}
 */

/**
 * @callback ComparePaths
 * @param {string} name
 * @returns {(otherPathName: string) => boolean}
 */

/**
 * @callback DropPathSegmentQuotes
 * @param {string} name
 * @returns {string}
 */

/**
 * @callback AvoidDocs
 * @returns {boolean}
 */

/**
 * @callback TagMightHaveNamePositionTypePosition
 * @param {string} tagName
 * @param {import('./getDefaultTagStructureForMode.js').
 *   TagStructure[]} [otherModeMaps]
 * @returns {boolean|{otherMode: true}}
 */

/**
 * @callback TagMustHave
 * @param {string} tagName
 * @param {import('./getDefaultTagStructureForMode.js').
 *   TagStructure[]} otherModeMaps
 * @returns {boolean|{
 *   otherMode: false
 * }}
 */

/**
 * @callback TagMissingRequiredTypeOrNamepath
 * @param {import('comment-parser').Spec} tag
 * @param {import('./getDefaultTagStructureForMode.js').
 *   TagStructure[]} otherModeMaps
 * @returns {boolean|{
 *   otherMode: false
 * }}
 */

/**
 * @callback IsNamepathX
 * @param {string} tagName
 * @returns {boolean}
 */

/**
 * @callback GetTagStructureForMode
 * @param {import('./jsdocUtils.js').ParserMode} mde
 * @returns {import('./getDefaultTagStructureForMode.js').TagStructure}
 */

/**
 * @callback MayBeUndefinedTypeTag
 * @param {import('comment-parser').Spec} tag
 * @returns {boolean}
 */

/**
 * @callback HasValueOrExecutorHasNonEmptyResolveValue
 * @param {boolean} anyPromiseAsReturn
 * @param {boolean} [allBranches]
 * @returns {boolean}
 */

/**
 * @callback HasYieldValue
 * @returns {boolean}
 */

/**
 * @callback HasYieldReturnValue
 * @returns {boolean}
 */

/**
 * @callback HasThrowValue
 * @returns {boolean}
 */

/**
 * @callback IsAsync
 * @returns {boolean|undefined}
 */

/**
 * @callback GetTags
 * @param {string} tagName
 * @returns {import('comment-parser').Spec[]}
 */

/**
 * @callback GetPresentTags
 * @param {string[]} tagList
 * @returns {import('@es-joy/jsdoccomment').JsdocTagWithInline[]}
 */

/**
 * @callback FilterTags
 * @param {(tag: import('@es-joy/jsdoccomment').JsdocTagWithInline) => boolean} filter
 * @returns {import('@es-joy/jsdoccomment').JsdocTagWithInline[]}
 */

/**
 * @callback FilterAllTags
 * @param {(tag: (import('comment-parser').Spec|
 *   import('@es-joy/jsdoccomment').JsdocInlineTagNoType)) => boolean} filter
 * @returns {(import('comment-parser').Spec|
 *   import('@es-joy/jsdoccomment').JsdocInlineTagNoType)[]}
 */

/**
 * @callback GetTagsByType
 * @param {import('comment-parser').Spec[]} tags
 * @returns {{
 *   tagsWithNames: import('comment-parser').Spec[],
 *   tagsWithoutNames: import('comment-parser').Spec[]
 * }}
 */

/**
 * @callback HasOptionTag
 * @param {string} tagName
 * @returns {boolean}
 */

/**
 * @callback GetClassNode
 * @returns {Node|null}
 */

/**
 * @callback GetClassJsdoc
 * @returns {null|JsdocBlockWithInline}
 */

/**
 * @callback ClassHasTag
 * @param {string} tagName
 * @returns {boolean}
 */

/**
 * @callback FindContext
 * @param {Context[]} contexts
 * @param {string|undefined} comment
 * @returns {{
 *   foundContext: Context|undefined,
 *   contextStr: string
 * }}
 */

/**
 * @typedef {BasicUtils & {
 *   isIteratingFunction: IsIteratingFunction,
 *   isVirtualFunction: IsVirtualFunction,
 *   stringify: Stringify,
 *   reportJSDoc: ReportJSDoc,
 *   getRegexFromString: GetRegexFromString,
 *   getTagDescription: GetTagDescription,
 *   setTagDescription: SetTagDescription,
 *   getDescription: GetDescription,
 *   setBlockDescription: SetBlockDescription,
 *   setDescriptionLines: SetDescriptionLines,
 *   changeTag: ChangeTag,
 *   setTag: SetTag,
 *   removeTag: RemoveTag,
 *   addTag: AddTag,
 *   getFirstLine: GetFirstLine,
 *   seedTokens: SeedTokens,
 *   emptyTokens: EmptyTokens,
 *   addLine: AddLine,
 *   addLines: AddLines,
 *   makeMultiline: MakeMultiline,
 *   flattenRoots: import('./jsdocUtils.js').FlattenRoots,
 *   getFunctionParameterNames: GetFunctionParameterNames,
 *   hasParams: HasParams,
 *   isGenerator: IsGenerator,
 *   isConstructor: IsConstructor,
 *   getJsdocTagsDeep: GetJsdocTagsDeep,
 *   getPreferredTagName: GetPreferredTagName,
 *   isValidTag: IsValidTag,
 *   hasATag: HasATag,
 *   hasTag: HasTag,
 *   comparePaths: ComparePaths,
 *   dropPathSegmentQuotes: DropPathSegmentQuotes,
 *   avoidDocs: AvoidDocs,
 *   tagMightHaveNamePosition: TagMightHaveNamePositionTypePosition,
 *   tagMightHaveTypePosition: TagMightHaveNamePositionTypePosition,
 *   tagMustHaveNamePosition: TagMustHave,
 *   tagMustHaveTypePosition: TagMustHave,
 *   tagMissingRequiredTypeOrNamepath: TagMissingRequiredTypeOrNamepath,
 *   isNamepathDefiningTag: IsNamepathX,
 *   isNamepathReferencingTag: IsNamepathX,
 *   isNamepathOrUrlReferencingTag: IsNamepathX,
 *   tagMightHaveNamepath: IsNamepathX,
 *   getTagStructureForMode: GetTagStructureForMode,
 *   mayBeUndefinedTypeTag: MayBeUndefinedTypeTag,
 *   hasValueOrExecutorHasNonEmptyResolveValue: HasValueOrExecutorHasNonEmptyResolveValue,
 *   hasYieldValue: HasYieldValue,
 *   hasYieldReturnValue: HasYieldReturnValue,
 *   hasThrowValue: HasThrowValue,
 *   isAsync: IsAsync,
 *   getTags: GetTags,
 *   getPresentTags: GetPresentTags,
 *   filterTags: FilterTags,
 *   filterAllTags: FilterAllTags,
 *   getTagsByType: GetTagsByType,
 *   hasOptionTag: HasOptionTag,
 *   getClassNode: GetClassNode,
 *   getClassJsdoc: GetClassJsdoc,
 *   classHasTag: ClassHasTag,
 *   findContext: FindContext
 * }} Utils
 */

const {
  rewireSpecs,
  seedTokens
} = _commentParser.util;

// todo: Change these `any` types once importing types properly.

/**
 * Should use ESLint rule's typing.
 * @typedef {import('eslint').Rule.RuleMetaData} EslintRuleMeta
 */

/**
 * A plain object for tracking state as needed by rules across iterations.
 * @typedef {{
 *   globalTags: {},
 *   hasDuplicates: {
 *     [key: string]: boolean
 *   },
 *   selectorMap: {
 *     [selector: string]: {
 *       [comment: string]: Integer
 *     }
 *   },
 *   hasTag: {
 *     [key: string]: boolean
 *   },
 *   hasNonComment: number,
 *   hasNonCommentBeforeTag: {
 *     [key: string]: boolean|number
 *   }
 * }} StateObject
 */

/**
 * The Node AST as supplied by the parser.
 * @typedef {import('eslint').Rule.Node} Node
 */

/*
const {
   align as commentAlign,
  flow: commentFlow,
  indent: commentIndent,
} = transforms;
*/

const globalState = new Map();
/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {{
 *   tagNamePreference?: import('./jsdocUtils.js').TagNamePreference,
 *   mode?: import('./jsdocUtils.js').ParserMode
 * }} cfg
 * @returns {BasicUtils}
 */
const getBasicUtils = (context, {
  tagNamePreference,
  mode
}) => {
  /** @type {BasicUtils} */
  const utils = {};

  /** @type {ReportSettings} */
  utils.reportSettings = message => {
    context.report({
      loc: {
        end: {
          column: 1,
          line: 1
        },
        start: {
          column: 1,
          line: 1
        }
      },
      message
    });
  };

  /** @type {ParseClosureTemplateTag} */
  utils.parseClosureTemplateTag = tag => {
    return jsdocUtils.parseClosureTemplateTag(tag);
  };
  utils.pathDoesNotBeginWith = jsdocUtils.pathDoesNotBeginWith;

  /** @type {GetPreferredTagNameObject} */
  utils.getPreferredTagNameObject = ({
    tagName
  }) => {
    const ret = jsdocUtils.getPreferredTagNameSimple(tagName, /** @type {import('./jsdocUtils.js').ParserMode} */mode, tagNamePreference, context);
    const isObject = ret && typeof ret === 'object';
    if (ret === false || isObject && !ret.replacement) {
      return {
        blocked: true,
        tagName
      };
    }
    return ret;
  };
  return utils;
};

/**
 * @callback Report
 * @param {string} message
 * @param {import('eslint').Rule.ReportFixer|null} [fix]
 * @param {null|
 *   {line?: Integer, column?: Integer}|
 *   import('comment-parser').Spec & {line?: Integer}
 * } [jsdocLoc]
 * @param {undefined|{
 *   [key: string]: string
 * }} [data]
 * @returns {void}
 */

/**
 * @param {Node|null} node
 * @param {JsdocBlockWithInline} jsdoc
 * @param {import('eslint').AST.Token} jsdocNode
 * @param {Settings} settings
 * @param {Report} report
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('eslint').SourceCode} sc
 * @param {boolean|undefined} iteratingAll
 * @param {RuleConfig} ruleConfig
 * @param {string} indent
 * @returns {Utils}
 */
const getUtils = (node, jsdoc, jsdocNode, settings, report, context, sc, iteratingAll, ruleConfig, indent) => {
  const ancestors = /** @type {import('eslint').Rule.Node[]} */node ? sc.getAncestors ? sc.getAncestors(node)
  /* c8 ignore next 4 */ : context.getAncestors() : [];

  /* c8 ignore next -- Fallback to deprecated method */
  const {
    sourceCode = context.getSourceCode()
  } = context;
  const utils = /** @type {Utils} */getBasicUtils(context, settings);
  const {
    tagNamePreference,
    overrideReplacesDocs,
    ignoreReplacesDocs,
    implementsReplacesDocs,
    augmentsExtendsReplacesDocs,
    maxLines,
    minLines,
    mode
  } = settings;

  /** @type {IsIteratingFunction} */
  utils.isIteratingFunction = () => {
    return !iteratingAll || ['MethodDefinition', 'ArrowFunctionExpression', 'FunctionDeclaration', 'FunctionExpression'].includes(String(node && node.type));
  };

  /** @type {IsVirtualFunction} */
  utils.isVirtualFunction = () => {
    return Boolean(iteratingAll) && utils.hasATag(['callback', 'function', 'func', 'method']);
  };

  /** @type {Stringify} */
  utils.stringify = (tagBlock, specRewire) => {
    let block;
    if (specRewire) {
      block = rewireSpecs(tagBlock);
    }
    return (0, _commentParser.stringify)( /** @type {import('comment-parser').Block} */
    specRewire ? block : tagBlock);
  };

  /** @type {ReportJSDoc} */
  utils.reportJSDoc = (msg, tag, handler, specRewire, data) => {
    report(msg, handler ? /** @type {import('eslint').Rule.ReportFixer} */fixer => {
      handler();
      const replacement = utils.stringify(jsdoc, specRewire);
      if (!replacement) {
        const text = sourceCode.getText();
        const lastLineBreakPos = text.slice(0, jsdocNode.range[0]).search(/\n[ \t]*$/u);
        if (lastLineBreakPos > -1) {
          return fixer.removeRange([lastLineBreakPos, jsdocNode.range[1]]);
        }
        return fixer.removeRange(/\s/u.test(text.charAt(jsdocNode.range[1])) ? [jsdocNode.range[0], jsdocNode.range[1] + 1] : jsdocNode.range);
      }
      return fixer.replaceText(jsdocNode, replacement);
    } : null, tag, data);
  };

  /** @type {GetRegexFromString} */
  utils.getRegexFromString = (str, requiredFlags) => {
    return jsdocUtils.getRegexFromString(str, requiredFlags);
  };

  /** @type {GetTagDescription} */
  utils.getTagDescription = (tg, returnArray) => {
    return jsdocUtils.getTagDescription(tg, returnArray);
  };

  /** @type {SetTagDescription} */
  utils.setTagDescription = (tg, matcher, setter) => {
    let finalIdx = 0;
    tg.source.some(({
      tokens: {
        description
      }
    }, idx) => {
      if (description && matcher.test(description)) {
        tg.source[idx].tokens.description = setter(description);
        finalIdx = idx;
        return true;
      }
      return false;
    });
    return finalIdx;
  };

  /** @type {GetDescription} */
  utils.getDescription = () => {
    /** @type {string[]} */
    const descriptions = [];
    let lastDescriptionLine = 0;
    let tagsBegun = false;
    jsdoc.source.some(({
      tokens: {
        description,
        tag,
        end
      }
    }, idx) => {
      if (tag) {
        tagsBegun = true;
      }
      if (idx && (tag || end)) {
        lastDescriptionLine = idx - 1;
        if (!tagsBegun && description) {
          descriptions.push(description);
        }
        return true;
      }
      if (!tagsBegun && (idx || description)) {
        descriptions.push(description || (descriptions.length ? '' : '\n'));
      }
      return false;
    });
    return {
      description: descriptions.join('\n'),
      descriptions,
      lastDescriptionLine
    };
  };

  /** @type {SetBlockDescription} */
  utils.setBlockDescription = setter => {
    /** @type {string[]} */
    const descLines = [];
    /**
     * @type {undefined|Integer}
     */
    let startIdx;
    /**
     * @type {undefined|Integer}
     */
    let endIdx;

    /**
     * @type {undefined|{
     *   delimiter: string,
     *   postDelimiter: string,
     *   start: string
     * }}
     */
    let info;
    jsdoc.source.some(({
      tokens: {
        description,
        start,
        delimiter,
        postDelimiter,
        tag,
        end
      }
    }, idx) => {
      if (delimiter === '/**') {
        return false;
      }
      if (startIdx === undefined) {
        startIdx = idx;
        info = {
          delimiter,
          postDelimiter,
          start
        };
      }
      if (tag || end) {
        endIdx = idx;
        return true;
      }
      descLines.push(description);
      return false;
    });

    /* c8 ignore else -- Won't be called if missing */
    if (descLines.length) {
      jsdoc.source.splice( /** @type {Integer} */startIdx, /** @type {Integer} */endIdx - ( /** @type {Integer} */startIdx), ...setter(
      /**
       * @type {{
       *   delimiter: string,
       *   postDelimiter: string,
       *   start: string
       * }}
       */
      info, seedTokens, descLines));
    }
  };

  /** @type {SetDescriptionLines} */
  utils.setDescriptionLines = (matcher, setter) => {
    let finalIdx = 0;
    jsdoc.source.some(({
      tokens: {
        description,
        tag,
        end
      }
    }, idx) => {
      /* c8 ignore next 3 -- Already checked */
      if (idx && (tag || end)) {
        return true;
      }
      if (description && matcher.test(description)) {
        jsdoc.source[idx].tokens.description = setter(description);
        finalIdx = idx;
        return true;
      }
      return false;
    });
    return finalIdx;
  };

  /** @type {ChangeTag} */
  utils.changeTag = (tag, ...tokens) => {
    for (const [idx, src] of tag.source.entries()) {
      src.tokens = {
        ...src.tokens,
        ...tokens[idx]
      };
    }
  };

  /** @type {SetTag} */
  utils.setTag = (tag, tokens) => {
    tag.source = [{
      number: tag.line,
      // Or tag.source[0].number?
      source: '',
      tokens: seedTokens({
        delimiter: '*',
        postDelimiter: ' ',
        start: indent + ' ',
        tag: '@' + tag.tag,
        ...tokens
      })
    }];
  };

  /** @type {RemoveTag} */
  utils.removeTag = (tagIndex, {
    removeEmptyBlock = false,
    tagSourceOffset = 0
  } = {}) => {
    const {
      source: tagSource
    } = jsdoc.tags[tagIndex];
    /** @type {Integer|undefined} */
    let lastIndex;
    const firstNumber = jsdoc.source[0].number;
    tagSource.some(({
      number
    }, tagIdx) => {
      const sourceIndex = jsdoc.source.findIndex(({
        number: srcNumber
      }) => {
        return number === srcNumber;
      });
      // c8 ignore else
      if (sourceIndex > -1) {
        let spliceCount = 1;
        tagSource.slice(tagIdx + 1).some(({
          tokens: {
            tag,
            end: ending
          }
        }) => {
          if (!tag && !ending) {
            spliceCount++;
            return false;
          }
          return true;
        });
        const spliceIdx = sourceIndex + tagSourceOffset;
        const {
          delimiter,
          end
        } = jsdoc.source[spliceIdx].tokens;
        if (spliceIdx === 0 && jsdoc.tags.length >= 2 || !removeEmptyBlock && (end || delimiter === '/**')) {
          const {
            tokens
          } = jsdoc.source[spliceIdx];
          for (const item of ['postDelimiter', 'tag', 'postTag', 'type', 'postType', 'name', 'postName', 'description']) {
            tokens[(
            /**
             * @type {"postDelimiter"|"tag"|"type"|"postType"|
             *   "postTag"|"name"|"postName"|"description"}
             */
            item)] = '';
          }
        } else {
          jsdoc.source.splice(spliceIdx, spliceCount - tagSourceOffset + (spliceIdx ? 0 : jsdoc.source.length));
          tagSource.splice(tagIdx + tagSourceOffset, spliceCount - tagSourceOffset + (spliceIdx ? 0 : jsdoc.source.length));
        }
        lastIndex = sourceIndex;
        return true;
      }
      /* c8 ignore next */
      return false;
    });
    for (const [idx, src] of jsdoc.source.slice(lastIndex).entries()) {
      src.number = firstNumber + ( /** @type {Integer} */lastIndex) + idx;
    }

    // Todo: Once rewiring of tags may be fixed in comment-parser to reflect
    //         missing tags, this step should be added here (so that, e.g.,
    //         if accessing `jsdoc.tags`, such as to add a new tag, the
    //         correct information will be available)
  };

  /** @type {AddTag} */
  utils.addTag = (targetTagName, number = ((_jsdoc$tags => (_jsdoc$tags = jsdoc.tags[jsdoc.tags.length - 1]) === null || _jsdoc$tags === void 0 || (_jsdoc$tags = _jsdoc$tags.source[0]) === null || _jsdoc$tags === void 0 ? void 0 : _jsdoc$tags.number)() ?? jsdoc.source.findIndex(({
    tokens: {
      tag
    }
  }) => {
    return tag;
  }) - 1) + 1, tokens = {}) => {
    jsdoc.source.splice(number, 0, {
      number,
      source: '',
      tokens: seedTokens({
        delimiter: '*',
        postDelimiter: ' ',
        start: indent + ' ',
        tag: `@${targetTagName}`,
        ...tokens
      })
    });
    for (const src of jsdoc.source.slice(number + 1)) {
      src.number++;
    }
  };

  /** @type {GetFirstLine} */
  utils.getFirstLine = () => {
    let firstLine;
    for (const {
      number,
      tokens: {
        tag
      }
    } of jsdoc.source) {
      if (tag) {
        firstLine = number;
        break;
      }
    }
    return firstLine;
  };

  /** @type {SeedTokens} */
  utils.seedTokens = seedTokens;

  /** @type {EmptyTokens} */
  utils.emptyTokens = tokens => {
    for (const prop of ['start', 'postDelimiter', 'tag', 'type', 'postType', 'postTag', 'name', 'postName', 'description', 'end', 'lineEnd']) {
      tokens[(
      /**
       * @type {"start"|"postDelimiter"|"tag"|"type"|"postType"|
       *   "postTag"|"name"|"postName"|"description"|"end"|"lineEnd"}
       */
      prop)] = '';
    }
  };

  /** @type {AddLine} */
  utils.addLine = (sourceIndex, tokens) => {
    var _jsdoc$source;
    const number = (((_jsdoc$source = jsdoc.source[sourceIndex - 1]) === null || _jsdoc$source === void 0 ? void 0 : _jsdoc$source.number) || 0) + 1;
    jsdoc.source.splice(sourceIndex, 0, {
      number,
      source: '',
      tokens: seedTokens(tokens)
    });
    for (const src of jsdoc.source.slice(number + 1)) {
      src.number++;
    }
    // If necessary, we can rewire the tags (misnamed method)
    // rewireSource(jsdoc);
  };

  /** @type {AddLines} */
  utils.addLines = (tagIndex, tagSourceOffset, numLines) => {
    const {
      source: tagSource
    } = jsdoc.tags[tagIndex];
    /** @type {Integer|undefined} */
    let lastIndex;
    const firstNumber = jsdoc.source[0].number;
    tagSource.some(({
      number
    }) => {
      const makeLine = () => {
        return {
          number,
          source: '',
          tokens: seedTokens({
            delimiter: '*',
            start: indent + ' '
          })
        };
      };
      const makeLines = () => {
        return Array.from({
          length: numLines
        }, makeLine);
      };
      const sourceIndex = jsdoc.source.findIndex(({
        number: srcNumber,
        tokens: {
          end
        }
      }) => {
        return number === srcNumber && !end;
      });
      // c8 ignore else
      if (sourceIndex > -1) {
        const lines = makeLines();
        jsdoc.source.splice(sourceIndex + tagSourceOffset, 0, ...lines);

        // tagSource.splice(tagIdx + 1, 0, ...makeLines());
        lastIndex = sourceIndex;
        return true;
      }
      /* c8 ignore next */
      return false;
    });
    for (const [idx, src] of jsdoc.source.slice(lastIndex).entries()) {
      src.number = firstNumber + ( /** @type {Integer} */lastIndex) + idx;
    }
  };

  /** @type {MakeMultiline} */
  utils.makeMultiline = () => {
    const {
      source: [{
        tokens
      }]
    } = jsdoc;
    const {
      postDelimiter,
      description,
      lineEnd,
      tag,
      name,
      type
    } = tokens;
    let {
      tokens: {
        postName,
        postTag,
        postType
      }
    } = jsdoc.source[0];

    // Strip trailing leftovers from single line ending
    if (!description) {
      if (postName) {
        postName = '';
      } else if (postType) {
        postType = '';
      } else /* c8 ignore else -- `comment-parser` prevents empty blocks currently per https://github.com/syavorsky/comment-parser/issues/128 */if (postTag) {
          postTag = '';
        }
    }
    utils.emptyTokens(tokens);
    utils.addLine(1, {
      delimiter: '*',
      // If a description were present, it may have whitespace attached
      //   due to being at the end of the single line
      description: description.trimEnd(),
      name,
      postDelimiter,
      postName,
      postTag,
      postType,
      start: indent + ' ',
      tag,
      type
    });
    utils.addLine(2, {
      end: '*/',
      lineEnd,
      start: indent + ' '
    });
  };

  /**
   * @type {import('./jsdocUtils.js').FlattenRoots}
   */
  utils.flattenRoots = jsdocUtils.flattenRoots;

  /** @type {GetFunctionParameterNames} */
  utils.getFunctionParameterNames = useDefaultObjectProperties => {
    return jsdocUtils.getFunctionParameterNames(node, useDefaultObjectProperties);
  };

  /** @type {HasParams} */
  utils.hasParams = () => {
    return jsdocUtils.hasParams( /** @type {Node} */node);
  };

  /** @type {IsGenerator} */
  utils.isGenerator = () => {
    var _node$declaration;
    return node !== null && Boolean(
    /**
     * @type {import('estree').FunctionDeclaration|
     *   import('estree').FunctionExpression}
     */
    node.generator || node.type === 'MethodDefinition' && node.value.generator || ['ExportNamedDeclaration', 'ExportDefaultDeclaration'].includes(node.type) && ( /** @type {import('estree').FunctionDeclaration} */(_node$declaration =
    /**
     * @type {import('estree').ExportNamedDeclaration|
     *   import('estree').ExportDefaultDeclaration}
     */
    node.declaration) === null || _node$declaration === void 0 ? void 0 : _node$declaration.generator));
  };

  /** @type {IsConstructor} */
  utils.isConstructor = () => {
    return jsdocUtils.isConstructor( /** @type {Node} */node);
  };

  /** @type {GetJsdocTagsDeep} */
  utils.getJsdocTagsDeep = tagName => {
    const name = /** @type {string|false} */utils.getPreferredTagName({
      tagName
    });
    if (!name) {
      return false;
    }
    return jsdocUtils.getJsdocTagsDeep(jsdoc, name);
  };

  /** @type {GetPreferredTagName} */
  utils.getPreferredTagName = args => {
    return jsdocUtils.getPreferredTagName(jsdoc, {
      ...args,
      context,
      mode,
      report,
      tagNamePreference
    });
  };

  /** @type {IsValidTag} */
  utils.isValidTag = (name, definedTags) => {
    return jsdocUtils.isValidTag(context, mode, name, definedTags);
  };

  /** @type {HasATag} */
  utils.hasATag = names => {
    return jsdocUtils.hasATag(jsdoc, names);
  };

  /** @type {HasTag} */
  utils.hasTag = name => {
    return jsdocUtils.hasTag(jsdoc, name);
  };

  /** @type {ComparePaths} */
  utils.comparePaths = name => {
    return jsdocUtils.comparePaths(name);
  };

  /** @type {DropPathSegmentQuotes} */
  utils.dropPathSegmentQuotes = name => {
    return jsdocUtils.dropPathSegmentQuotes(name);
  };

  /** @type {AvoidDocs} */
  utils.avoidDocs = () => {
    var _context$options$;
    if (ignoreReplacesDocs !== false && (utils.hasTag('ignore') || utils.classHasTag('ignore')) || overrideReplacesDocs !== false && (utils.hasTag('override') || utils.classHasTag('override')) || implementsReplacesDocs !== false && (utils.hasTag('implements') || utils.classHasTag('implements')) || augmentsExtendsReplacesDocs && (utils.hasATag(['augments', 'extends']) || utils.classHasTag('augments') || utils.classHasTag('extends'))) {
      return true;
    }
    if (jsdocUtils.exemptSpeciaMethods(jsdoc, node, context, /** @type {import('json-schema').JSONSchema4|import('json-schema').JSONSchema4[]} */
    ruleConfig.meta.schema)) {
      return true;
    }
    const exemptedBy = ((_context$options$ = context.options[0]) === null || _context$options$ === void 0 ? void 0 : _context$options$.exemptedBy) ?? ['inheritDoc', ...(mode === 'closure' ? [] : ['inheritdoc'])];
    if (exemptedBy.length && utils.getPresentTags(exemptedBy).length) {
      return true;
    }
    return false;
  };
  for (const method of ['tagMightHaveNamePosition', 'tagMightHaveTypePosition']) {
    /** @type {TagMightHaveNamePositionTypePosition} */
    utils[( /** @type {"tagMightHaveNamePosition"|"tagMightHaveTypePosition"} */
    method)] = (tagName, otherModeMaps) => {
      const result = jsdocUtils[( /** @type {"tagMightHaveNamePosition"|"tagMightHaveTypePosition"} */
      method)](tagName);
      if (result) {
        return true;
      }
      if (!otherModeMaps) {
        return false;
      }
      const otherResult = otherModeMaps.some(otherModeMap => {
        return jsdocUtils[( /** @type {"tagMightHaveNamePosition"|"tagMightHaveTypePosition"} */
        method)](tagName, otherModeMap);
      });
      return otherResult ? {
        otherMode: true
      } : false;
    };
  }

  /** @type {TagMissingRequiredTypeOrNamepath} */
  utils.tagMissingRequiredTypeOrNamepath = (tagName, otherModeMaps) => {
    const result = jsdocUtils.tagMissingRequiredTypeOrNamepath(tagName);
    if (!result) {
      return false;
    }
    const otherResult = otherModeMaps.every(otherModeMap => {
      return jsdocUtils.tagMissingRequiredTypeOrNamepath(tagName, otherModeMap);
    });
    return otherResult ? true : {
      otherMode: false
    };
  };
  for (const method of ['tagMustHaveNamePosition', 'tagMustHaveTypePosition']) {
    /** @type {TagMustHave} */
    utils[( /** @type {"tagMustHaveNamePosition"|"tagMustHaveTypePosition"} */
    method)] = (tagName, otherModeMaps) => {
      const result = jsdocUtils[( /** @type {"tagMustHaveNamePosition"|"tagMustHaveTypePosition"} */
      method)](tagName);
      if (!result) {
        return false;
      }

      // if (!otherModeMaps) { return true; }

      const otherResult = otherModeMaps.every(otherModeMap => {
        return jsdocUtils[( /** @type {"tagMustHaveNamePosition"|"tagMustHaveTypePosition"} */
        method)](tagName, otherModeMap);
      });
      return otherResult ? true : {
        otherMode: false
      };
    };
  }
  for (const method of ['isNamepathDefiningTag', 'isNamepathReferencingTag', 'isNamepathOrUrlReferencingTag', 'tagMightHaveNamepath']) {
    /** @type {IsNamepathX} */
    utils[( /** @type {"isNamepathDefiningTag"|"isNamepathReferencingTag"|"isNamepathOrUrlReferencingTag"|"tagMightHaveNamepath"} */
    method)] = tagName => {
      return jsdocUtils[( /** @type {"isNamepathDefiningTag"|"isNamepathReferencingTag"|"isNamepathOrUrlReferencingTag"|"tagMightHaveNamepath"} */
      method)](tagName);
    };
  }

  /** @type {GetTagStructureForMode} */
  utils.getTagStructureForMode = mde => {
    return jsdocUtils.getTagStructureForMode(mde, settings.structuredTags);
  };

  /** @type {MayBeUndefinedTypeTag} */
  utils.mayBeUndefinedTypeTag = tag => {
    return jsdocUtils.mayBeUndefinedTypeTag(tag, settings.mode);
  };

  /** @type {HasValueOrExecutorHasNonEmptyResolveValue} */
  utils.hasValueOrExecutorHasNonEmptyResolveValue = (anyPromiseAsReturn, allBranches) => {
    return jsdocUtils.hasValueOrExecutorHasNonEmptyResolveValue( /** @type {Node} */node, anyPromiseAsReturn, allBranches);
  };

  /** @type {HasYieldValue} */
  utils.hasYieldValue = () => {
    if (['ExportNamedDeclaration', 'ExportDefaultDeclaration'].includes( /** @type {Node} */node.type)) {
      return jsdocUtils.hasYieldValue( /** @type {import('estree').Declaration|import('estree').Expression} */
      /** @type {import('estree').ExportNamedDeclaration|import('estree').ExportDefaultDeclaration} */
      node.declaration);
    }
    return jsdocUtils.hasYieldValue( /** @type {Node} */node);
  };

  /** @type {HasYieldReturnValue} */
  utils.hasYieldReturnValue = () => {
    return jsdocUtils.hasYieldValue( /** @type {Node} */node, true);
  };

  /** @type {HasThrowValue} */
  utils.hasThrowValue = () => {
    return jsdocUtils.hasThrowValue(node);
  };

  /** @type {IsAsync} */
  utils.isAsync = () => {
    return Boolean(node && 'async' in node && node.async);
  };

  /** @type {GetTags} */
  utils.getTags = tagName => {
    return jsdocUtils.getTags(jsdoc, tagName);
  };

  /** @type {GetPresentTags} */
  utils.getPresentTags = tagList => {
    return jsdocUtils.filterTags(jsdoc, tag => {
      return tagList.includes(tag.tag);
    });
  };

  /** @type {FilterTags} */
  utils.filterTags = filter => {
    return jsdocUtils.filterTags(jsdoc, tag => {
      return filter(tag);
    });
  };

  /** @type {FilterAllTags} */
  utils.filterAllTags = filter => {
    const tags = jsdocUtils.getAllTags(jsdoc);
    return tags.filter(tag => {
      return filter(tag);
    });
  };

  /** @type {GetTagsByType} */
  utils.getTagsByType = tags => {
    return jsdocUtils.getTagsByType(context, mode, tags);
  };

  /** @type {HasOptionTag} */
  utils.hasOptionTag = tagName => {
    const {
      tags
    } = context.options[0] ?? {};
    return Boolean(tags && tags.includes(tagName));
  };

  /** @type {GetClassNode} */
  utils.getClassNode = () => {
    return [...ancestors, node].reverse().find(parent => {
      return parent && ['ClassDeclaration', 'ClassExpression'].includes(parent.type);
    }) ?? null;
  };

  /** @type {GetClassJsdoc} */
  utils.getClassJsdoc = () => {
    const classNode = utils.getClassNode();
    if (!classNode) {
      return null;
    }
    const classJsdocNode = (0, _jsdoccomment.getJSDocComment)(sourceCode, classNode, {
      maxLines,
      minLines
    });
    if (classJsdocNode) {
      return (0, _jsdoccomment.parseComment)(classJsdocNode, '');
    }
    return null;
  };

  /** @type {ClassHasTag} */
  utils.classHasTag = tagName => {
    const classJsdoc = utils.getClassJsdoc();
    return classJsdoc !== null && jsdocUtils.hasTag(classJsdoc, tagName);
  };

  /** @type {ForEachPreferredTag} */
  utils.forEachPreferredTag = (tagName, arrayHandler, skipReportingBlockedTag) => {
    return jsdocUtils.forEachPreferredTag(jsdoc, tagName, arrayHandler, {
      skipReportingBlockedTag,
      context,
      mode,
      report,
      tagNamePreference
    });
  };

  /** @type {FindContext} */
  utils.findContext = (contexts, comment) => {
    const foundContext = contexts.find(cntxt => {
      return typeof cntxt === 'string' ? _esquery.default.matches( /** @type {Node} */node, _esquery.default.parse(cntxt), undefined, {
        visitorKeys: sourceCode.visitorKeys
      }) : (!cntxt.context || cntxt.context === 'any' || _esquery.default.matches( /** @type {Node} */node, _esquery.default.parse(cntxt.context), undefined, {
        visitorKeys: sourceCode.visitorKeys
      })) && comment === cntxt.comment;
    });
    const contextStr = typeof foundContext === 'object' ? foundContext.context ?? 'any' : String(foundContext);
    return {
      contextStr,
      foundContext
    };
  };
  return utils;
};

/**
 * @typedef {{
 *   [key: string]: false|string|{
 *     message: string,
 *     replacement?: false|string
 *     skipRootChecking?: boolean
 *   }
 * }} PreferredTypes
 */
/**
 * @typedef {{
 *   [key: string]: {
 *     name?: "text"|"namepath-defining"|"namepath-referencing"|false,
 *     type?: boolean|string[],
 *     required?: ("name"|"type"|"typeOrNameRequired")[]
 *   }
 * }} StructuredTags
 */
/**
 * Settings from ESLint types.
 * @typedef {{
 *   maxLines: Integer,
 *   minLines: Integer,
 *   tagNamePreference: import('./jsdocUtils.js').TagNamePreference,
 *   mode: import('./jsdocUtils.js').ParserMode,
 *   preferredTypes: PreferredTypes,
 *   structuredTags: StructuredTags,
 *   [name: string]: any,
 *   contexts?: Context[]
 * }} Settings
 */

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @returns {Settings|false}
 */
const getSettings = context => {
  var _context$settings$jsd, _context$settings$jsd2, _context$settings$jsd3, _context$settings$jsd4, _context$settings$jsd5, _context$settings$jsd6, _context$settings$jsd7, _context$settings$jsd8, _context$settings$jsd9, _context$settings$jsd10, _context$settings$jsd11, _context$settings$jsd12, _context$settings$jsd13, _context$settings$jsd14;
  /* dslint-disable canonical/sort-keys */
  const settings = {
    // All rules
    ignorePrivate: Boolean((_context$settings$jsd = context.settings.jsdoc) === null || _context$settings$jsd === void 0 ? void 0 : _context$settings$jsd.ignorePrivate),
    ignoreInternal: Boolean((_context$settings$jsd2 = context.settings.jsdoc) === null || _context$settings$jsd2 === void 0 ? void 0 : _context$settings$jsd2.ignoreInternal),
    maxLines: Number(((_context$settings$jsd3 = context.settings.jsdoc) === null || _context$settings$jsd3 === void 0 ? void 0 : _context$settings$jsd3.maxLines) ?? 1),
    minLines: Number(((_context$settings$jsd4 = context.settings.jsdoc) === null || _context$settings$jsd4 === void 0 ? void 0 : _context$settings$jsd4.minLines) ?? 0),
    // `check-tag-names` and many returns/param rules
    tagNamePreference: ((_context$settings$jsd5 = context.settings.jsdoc) === null || _context$settings$jsd5 === void 0 ? void 0 : _context$settings$jsd5.tagNamePreference) ?? {},
    // `check-types` and `no-undefined-types`
    preferredTypes: ((_context$settings$jsd6 = context.settings.jsdoc) === null || _context$settings$jsd6 === void 0 ? void 0 : _context$settings$jsd6.preferredTypes) ?? {},
    // `check-types`, `no-undefined-types`, `valid-types`
    structuredTags: ((_context$settings$jsd7 = context.settings.jsdoc) === null || _context$settings$jsd7 === void 0 ? void 0 : _context$settings$jsd7.structuredTags) ?? {},
    // `require-param`, `require-description`, `require-example`,
    // `require-returns`, `require-throw`, `require-yields`
    overrideReplacesDocs: (_context$settings$jsd8 = context.settings.jsdoc) === null || _context$settings$jsd8 === void 0 ? void 0 : _context$settings$jsd8.overrideReplacesDocs,
    ignoreReplacesDocs: (_context$settings$jsd9 = context.settings.jsdoc) === null || _context$settings$jsd9 === void 0 ? void 0 : _context$settings$jsd9.ignoreReplacesDocs,
    implementsReplacesDocs: (_context$settings$jsd10 = context.settings.jsdoc) === null || _context$settings$jsd10 === void 0 ? void 0 : _context$settings$jsd10.implementsReplacesDocs,
    augmentsExtendsReplacesDocs: (_context$settings$jsd11 = context.settings.jsdoc) === null || _context$settings$jsd11 === void 0 ? void 0 : _context$settings$jsd11.augmentsExtendsReplacesDocs,
    // `require-param-type`, `require-param-description`
    exemptDestructuredRootsFromChecks: (_context$settings$jsd12 = context.settings.jsdoc) === null || _context$settings$jsd12 === void 0 ? void 0 : _context$settings$jsd12.exemptDestructuredRootsFromChecks,
    // Many rules, e.g., `check-tag-names`
    mode: ((_context$settings$jsd13 = context.settings.jsdoc) === null || _context$settings$jsd13 === void 0 ? void 0 : _context$settings$jsd13.mode) ?? 'typescript',
    // Many rules
    contexts: (_context$settings$jsd14 = context.settings.jsdoc) === null || _context$settings$jsd14 === void 0 ? void 0 : _context$settings$jsd14.contexts
  };
  /* dslint-enable canonical/sort-keys */

  jsdocUtils.setTagStructure(settings.mode);
  try {
    jsdocUtils.overrideTagStructure(settings.structuredTags);
  } catch (error) {
    context.report({
      loc: {
        end: {
          column: 1,
          line: 1
        },
        start: {
          column: 1,
          line: 1
        }
      },
      message: /** @type {Error} */error.message
    });
    return false;
  }
  return settings;
};

/**
 * Create the report function
 * @callback MakeReport
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('estree').Node} commentNode
 * @returns {Report}
 */

/** @type {MakeReport} */
exports.getSettings = getSettings;
const makeReport = (context, commentNode) => {
  /** @type {Report} */
  const report = (message, fix = null, jsdocLoc = null, data = undefined) => {
    let loc;
    if (jsdocLoc) {
      if (!('line' in jsdocLoc)) {
        jsdocLoc.line = /** @type {import('comment-parser').Spec & {line?: Integer}} */jsdocLoc.source[0].number;
      }
      const lineNumber = /** @type {import('eslint').AST.SourceLocation} */commentNode.loc.start.line + ( /** @type {Integer} */jsdocLoc.line);
      loc = {
        end: {
          column: 0,
          line: lineNumber
        },
        start: {
          column: 0,
          line: lineNumber
        }
      };

      // Todo: Remove ignore once `check-examples` can be restored for ESLint 8+
      if ('column' in jsdocLoc && typeof jsdocLoc.column === 'number') {
        const colNumber = /** @type {import('eslint').AST.SourceLocation} */commentNode.loc.start.column + jsdocLoc.column;
        loc.end.column = colNumber;
        loc.start.column = colNumber;
      }
    }
    context.report({
      data,
      fix,
      loc,
      message,
      node: commentNode
    });
  };
  return report;
};

/**
 * @typedef {(
 *   arg: {
 *     context: import('eslint').Rule.RuleContext,
 *     sourceCode: import('eslint').SourceCode,
 *     indent?: string,
 *     info?: {
 *       comment?: string|undefined,
 *       lastIndex?: Integer|undefined
 *     },
 *     state?: StateObject,
 *     globalState?: Map<string, Map<string, string>>,
 *     jsdoc?: JsdocBlockWithInline,
 *     jsdocNode?: import('eslint').Rule.Node & {
 *       range: [number, number]
 *     },
 *     node?: Node,
 *     allComments?: import('estree').Node[]
 *     report?: Report,
 *     makeReport?: MakeReport,
 *     settings: Settings,
 *     utils: BasicUtils,
 *   }
 * ) => any } JsdocVisitorBasic
 */
/**
 * @typedef {(
 *   arg: {
 *     context: import('eslint').Rule.RuleContext,
 *     sourceCode: import('eslint').SourceCode,
 *     indent: string,
 *     info: {
 *       comment?: string|undefined,
 *       lastIndex?: Integer|undefined
 *     },
 *     state: StateObject,
 *     globalState: Map<string, Map<string, string>>,
 *     jsdoc: JsdocBlockWithInline,
 *     jsdocNode: import('eslint').Rule.Node & {
 *       range: [number, number]
 *     },
 *     node: Node|null,
 *     allComments?: import('estree').Node[]
 *     report: Report,
 *     makeReport?: MakeReport,
 *     settings: Settings,
 *     utils: Utils,
 *   }
 * ) => any } JsdocVisitor
 */

/**
 * @param {{
 *   comment?: string,
 *   lastIndex?: Integer,
 *   selector?: string,
 *   isFunctionContext?: boolean,
 * }} info
 * @param {string} indent
 * @param {JsdocBlockWithInline} jsdoc
 * @param {RuleConfig} ruleConfig
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('@es-joy/jsdoccomment').Token} jsdocNode
 * @param {Node|null} node
 * @param {Settings} settings
 * @param {import('eslint').SourceCode} sourceCode
 * @param {JsdocVisitor} iterator
 * @param {StateObject} state
 * @param {boolean} [iteratingAll]
 * @returns {void}
 */
const iterate = (info, indent, jsdoc, ruleConfig, context, jsdocNode, node, settings, sourceCode, iterator, state, iteratingAll) => {
  const jsdocNde = /** @type {unknown} */jsdocNode;
  const report = makeReport(context, /** @type {import('estree').Node} */
  jsdocNde);
  const utils = getUtils(node, jsdoc, /** @type {import('eslint').AST.Token} */
  jsdocNode, settings, report, context, sourceCode, iteratingAll, ruleConfig, indent);
  if (!ruleConfig.checkInternal && settings.ignoreInternal && utils.hasTag('internal')) {
    return;
  }
  if (!ruleConfig.checkPrivate && settings.ignorePrivate && (utils.hasTag('private') || jsdocUtils.filterTags(jsdoc, ({
    tag
  }) => {
    return tag === 'access';
  }).some(({
    description
  }) => {
    return description === 'private';
  }))) {
    return;
  }
  iterator({
    context,
    globalState,
    indent,
    info,
    jsdoc,
    jsdocNode: (
    /**
     * @type {import('eslint').Rule.Node & {
     *  range: [number, number];}}
     */
    jsdocNde),
    node,
    report,
    settings,
    sourceCode,
    state,
    utils
  });
};

/**
 * @param {string[]} lines
 * @param {import('estree').Comment} jsdocNode
 * @returns {[indent: string, jsdoc: JsdocBlockWithInline]}
 */
const getIndentAndJSDoc = function (lines, jsdocNode) {
  const sourceLine = lines[/** @type {import('estree').SourceLocation} */
  jsdocNode.loc.start.line - 1];
  const indnt = sourceLine.charAt(0).repeat( /** @type {import('estree').SourceLocation} */
  jsdocNode.loc.start.column);
  const jsdc = (0, _jsdoccomment.parseComment)(jsdocNode, '');
  return [indnt, jsdc];
};

/**
 *
 * @typedef {{node: Node & {
 *   range: [number, number]
 * }, state: StateObject}} NonCommentArgs
 */

/**
 * @typedef {object} RuleConfig
 * @property {EslintRuleMeta} meta ESLint rule meta
 * @property {import('./jsdocUtils.js').DefaultContexts} [contextDefaults] Any default contexts
 * @property {true} [contextSelected] Whether to force a `contexts` check
 * @property {true} [iterateAllJsdocs] Whether to iterate all JSDoc blocks by default
 *   regardless of context
 * @property {true} [checkPrivate] Whether to check `@private` blocks (normally exempted)
 * @property {true} [checkInternal] Whether to check `@internal` blocks (normally exempted)
 * @property {true} [checkFile] Whether to iterates over all JSDoc blocks regardless of attachment
 * @property {true} [nonGlobalSettings] Whether to avoid relying on settings for global contexts
 * @property {true} [noTracking] Whether to disable the tracking of visited comment nodes (as
 *   non-tracked may conduct further actions)
 * @property {true} [matchContext] Whether the rule expects contexts to be based on a match option
 * @property {(args: {
 *   context: import('eslint').Rule.RuleContext,
 *   state: StateObject,
 *   settings: Settings,
 *   utils: BasicUtils
 * }) => void} [exit] Handler to be executed upon exiting iteration of program AST
 * @property {(nca: NonCommentArgs) => void} [nonComment] Handler to be executed if rule wishes
 *   to be supplied nodes without comments
 */

/**
 * Create an eslint rule that iterates over all JSDocs, regardless of whether
 * they are attached to a function-like node.
 * @param {JsdocVisitor} iterator
 * @param {RuleConfig} ruleConfig The rule's configuration
 * @param {ContextObject[]|null} [contexts] The `contexts` containing relevant `comment` info.
 * @param {boolean} [additiveCommentContexts] If true, will have a separate
 *   iteration for each matching comment context. Otherwise, will iterate
 *   once if there is a single matching comment context.
 * @returns {import('eslint').Rule.RuleModule}
 */
const iterateAllJsdocs = (iterator, ruleConfig, contexts, additiveCommentContexts) => {
  const trackedJsdocs = new Set();

  /** @type {import('@es-joy/jsdoccomment').CommentHandler} */
  let handler;

  /** @type {Settings|false} */
  let settings;

  /**
   * @param {import('eslint').Rule.RuleContext} context
   * @param {Node|null} node
   * @param {import('estree').Comment[]} jsdocNodes
   * @param {StateObject} state
   * @param {boolean} [lastCall]
   * @returns {void}
   */
  const callIterator = (context, node, jsdocNodes, state, lastCall) => {
    /* c8 ignore next -- Fallback to deprecated method */
    const {
      sourceCode = context.getSourceCode()
    } = context;
    const {
      lines
    } = sourceCode;
    const utils = getBasicUtils(context, /** @type {Settings} */settings);
    for (const jsdocNode of jsdocNodes) {
      const jsdocNde = /** @type {unknown} */jsdocNode;
      if (!/^\/\*\*\s/u.test(sourceCode.getText( /** @type {import('estree').Node} */
      jsdocNde))) {
        continue;
      }
      const [indent, jsdoc] = getIndentAndJSDoc(lines, jsdocNode);
      if (additiveCommentContexts) {
        for (const [idx, {
          comment
        }] of /** @type {ContextObject[]} */contexts.entries()) {
          if (comment && handler(comment, jsdoc) === false) {
            continue;
          }
          iterate({
            comment,
            lastIndex: idx,
            selector: node === null || node === void 0 ? void 0 : node.type
          }, indent, jsdoc, ruleConfig, context, jsdocNode, /** @type {Node} */
          node, /** @type {Settings} */
          settings, sourceCode, iterator, state, true);
        }
        continue;
      }
      let lastComment;
      let lastIndex;
      // eslint-disable-next-line no-loop-func
      if (contexts && contexts.every(({
        comment
      }, idx) => {
        lastComment = comment;
        lastIndex = idx;
        return comment && handler(comment, jsdoc) === false;
      })) {
        continue;
      }
      iterate(lastComment ? {
        comment: lastComment,
        lastIndex,
        selector: node === null || node === void 0 ? void 0 : node.type
      } : {
        lastIndex,
        selector: node === null || node === void 0 ? void 0 : node.type
      }, indent, jsdoc, ruleConfig, context, jsdocNode, node, /** @type {Settings} */
      settings, sourceCode, iterator, state, true);
    }
    const settngs = /** @type {Settings} */settings;
    if (lastCall && ruleConfig.exit) {
      ruleConfig.exit({
        context,
        settings: settngs,
        state,
        utils
      });
    }
  };
  return {
    // @ts-expect-error ESLint accepts
    create(context) {
      /* c8 ignore next -- Fallback to deprecated method */
      const {
        sourceCode = context.getSourceCode()
      } = context;
      settings = getSettings(context);
      if (!settings) {
        return {};
      }
      if (contexts) {
        handler = (0, _jsdoccomment.commentHandler)(settings);
      }
      const state = {};
      return {
        /**
         * @param {import('eslint').Rule.Node & {
         *   range: [Integer, Integer];
         * }} node
         * @returns {void}
         */
        '*:not(Program)'(node) {
          const commentNode = (0, _jsdoccomment.getJSDocComment)(sourceCode, node, /** @type {Settings} */settings);
          if (!ruleConfig.noTracking && trackedJsdocs.has(commentNode)) {
            return;
          }
          if (!commentNode) {
            if (ruleConfig.nonComment) {
              const ste = /** @type {StateObject} */state;
              ruleConfig.nonComment({
                node,
                state: ste
              });
            }
            return;
          }
          trackedJsdocs.add(commentNode);
          callIterator(context, node, [( /** @type {import('estree').Comment} */
          commentNode)], /** @type {StateObject} */state);
        },
        'Program:exit'() {
          const allComments = sourceCode.getAllComments();
          const untrackedJSdoc = allComments.filter(node => {
            return !trackedJsdocs.has(node);
          });
          callIterator(context, null, untrackedJSdoc, /** @type {StateObject} */
          state, true);
        }
      };
    },
    meta: ruleConfig.meta
  };
};

/**
 * Create an eslint rule that iterates over all JSDocs, regardless of whether
 * they are attached to a function-like node.
 * @param {JsdocVisitorBasic} iterator
 * @param {RuleConfig} ruleConfig
 * @returns {import('eslint').Rule.RuleModule}
 */
const checkFile = (iterator, ruleConfig) => {
  return {
    create(context) {
      /* c8 ignore next -- Fallback to deprecated method */
      const {
        sourceCode = context.getSourceCode()
      } = context;
      const settings = getSettings(context);
      if (!settings) {
        return {};
      }
      return {
        'Program:exit'() {
          const allComms = /** @type {unknown} */sourceCode.getAllComments();
          const utils = getBasicUtils(context, settings);
          iterator({
            allComments: ( /** @type {import('estree').Node[]} */allComms),
            context,
            makeReport,
            settings,
            sourceCode,
            utils
          });
        }
      };
    },
    meta: ruleConfig.meta
  };
};
/**
 * @param {JsdocVisitor} iterator
 * @param {RuleConfig} ruleConfig
 * @returns {import('eslint').Rule.RuleModule}
 */
function iterateJsdoc(iterator, ruleConfig) {
  var _ruleConfig$meta;
  const metaType = ruleConfig === null || ruleConfig === void 0 || (_ruleConfig$meta = ruleConfig.meta) === null || _ruleConfig$meta === void 0 ? void 0 : _ruleConfig$meta.type;
  if (!metaType || !['problem', 'suggestion', 'layout'].includes(metaType)) {
    throw new TypeError('Rule must include `meta.type` option (with value "problem", "suggestion", or "layout")');
  }
  if (typeof iterator !== 'function') {
    throw new TypeError('The iterator argument must be a function.');
  }
  if (ruleConfig.checkFile) {
    return checkFile( /** @type {JsdocVisitorBasic} */iterator, ruleConfig);
  }
  if (ruleConfig.iterateAllJsdocs) {
    return iterateAllJsdocs(iterator, ruleConfig);
  }

  /** @type {import('eslint').Rule.RuleModule} */
  return {
    /**
     * The entrypoint for the JSDoc rule.
     * @param {import('eslint').Rule.RuleContext} context
     *   a reference to the context which hold all important information
     *   like settings and the sourcecode to check.
     * @returns {import('eslint').Rule.RuleListener}
     *   a listener with parser callback function.
     */
    create(context) {
      const settings = getSettings(context);
      if (!settings) {
        return {};
      }

      /**
       * @type {Context[]|undefined}
       */
      let contexts;
      if (ruleConfig.contextDefaults || ruleConfig.contextSelected || ruleConfig.matchContext) {
        var _context$options$2, _contexts, _contexts2;
        contexts = ruleConfig.matchContext && (_context$options$2 = context.options[0]) !== null && _context$options$2 !== void 0 && _context$options$2.match ? context.options[0].match : jsdocUtils.enforcedContexts(context, ruleConfig.contextDefaults, ruleConfig.nonGlobalSettings ? {} : settings);
        if (contexts) {
          contexts = contexts.map(obj => {
            if (typeof obj === 'object' && !obj.context) {
              return {
                ...obj,
                context: 'any'
              };
            }
            return obj;
          });
        }
        const hasPlainAny = (_contexts = contexts) === null || _contexts === void 0 ? void 0 : _contexts.includes('any');
        const hasObjectAny = !hasPlainAny && ((_contexts2 = contexts) === null || _contexts2 === void 0 ? void 0 : _contexts2.find(ctxt => {
          if (typeof ctxt === 'string') {
            return false;
          }
          return (ctxt === null || ctxt === void 0 ? void 0 : ctxt.context) === 'any';
        }));
        if (hasPlainAny || hasObjectAny) {
          return iterateAllJsdocs(iterator, ruleConfig, hasObjectAny ? ( /** @type {ContextObject[]} */contexts) : null, ruleConfig.matchContext).create(context);
        }
      }

      /* c8 ignore next -- Fallback to deprecated method */
      const {
        sourceCode = context.getSourceCode()
      } = context;
      const {
        lines
      } = sourceCode;

      /** @type {Partial<StateObject>} */
      const state = {};

      /** @type {CheckJsdoc} */
      const checkJsdoc = (info, handler, node) => {
        const jsdocNode = (0, _jsdoccomment.getJSDocComment)(sourceCode, node, settings);
        if (!jsdocNode) {
          return;
        }
        const [indent, jsdoc] = getIndentAndJSDoc(lines, /** @type {import('estree').Comment} */
        jsdocNode);
        if (
        // Note, `handler` should already be bound in its first argument
        //  with these only to be called after the value of
        //  `comment`
        handler && handler(jsdoc) === false) {
          return;
        }
        iterate(info, indent, jsdoc, ruleConfig, context, jsdocNode, node, settings, sourceCode, iterator, /** @type {StateObject} */
        state);
      };

      /** @type {import('eslint').Rule.RuleListener} */
      let contextObject = {};
      if (contexts && (ruleConfig.contextDefaults || ruleConfig.contextSelected || ruleConfig.matchContext)) {
        contextObject = jsdocUtils.getContextObject(contexts, checkJsdoc, (0, _jsdoccomment.commentHandler)(settings));
      } else {
        for (const prop of ['ArrowFunctionExpression', 'FunctionDeclaration', 'FunctionExpression', 'TSDeclareFunction']) {
          contextObject[prop] = checkJsdoc.bind(null, {
            selector: prop
          }, null);
        }
      }
      if (typeof ruleConfig.exit === 'function') {
        contextObject['Program:exit'] = () => {
          const ste = /** @type {StateObject} */state;

          // @ts-expect-error `utils` not needed at this point
          /** @type {Required<RuleConfig>} */
          ruleConfig.exit({
            context,
            settings,
            state: ste
          });
        };
      }
      return contextObject;
    },
    meta: ruleConfig.meta
  };
}
//# sourceMappingURL=iterateJsdoc.cjs.map