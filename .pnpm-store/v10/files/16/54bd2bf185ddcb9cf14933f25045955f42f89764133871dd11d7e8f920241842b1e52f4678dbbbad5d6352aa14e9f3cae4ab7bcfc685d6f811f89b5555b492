"use strict";

const Remark = require(`remark`);
const {
  selectAll
} = require(`unist-util-select`);
const _ = require(`lodash`);
const visit = require(`unist-util-visit`);
const toHAST = require(`mdast-util-to-hast`);
const hastToHTML = require(`hast-util-to-html`);
const mdastToToc = require(`mdast-util-toc`);
const mdastToString = require(`mdast-util-to-string`);
const unified = require(`unified`);
const parse = require(`remark-parse`);
const remarkGfm = require(`remark-gfm`);
const remarkFootnotes = require(`remark-footnotes`);
const stringify = require(`remark-stringify`);
const english = require(`retext-english`);
const remark2retext = require(`remark-retext`);
const stripPosition = require(`unist-util-remove-position`);
const hastReparseRaw = require(`hast-util-raw`);
const prune = require(`underscore.string/prune`);
const {
  getConcatenatedValue,
  cloneTreeUntil,
  findLastTextNode
} = require(`./hast-processing`);
const codeHandler = require(`./code-handler`);
const {
  getHeadingID
} = require(`./utils/get-heading-id`);
const {
  timeToRead
} = require(`./utils/time-to-read`);
let fileNodes;
let pluginsCacheStr = ``;
let pathPrefixCacheStr = ``;
const CACHE_TYPE_AST = `ast`;
const CACHE_TYPE_HTMLAST = `html-ast`;
const CACHE_TYPE_HTML = `html`;
const CACHE_TYPE_HEADINGS = `headings`;
const CACHE_TYPE_TOC = `toc`;
const CACHE_TYPE_NODE_DEPS = `node-dependencies`;
const cacheTypesWithOptions = [CACHE_TYPE_TOC];
const cacheTypesUsingNodeId = [CACHE_TYPE_NODE_DEPS];
const getCacheKey = (cacheType, node, options = {}) => {
  const keyVars = [cacheTypesUsingNodeId.indexOf(cacheType) >= 0 ? node.id : node.internal.contentDigest, pluginsCacheStr, pathPrefixCacheStr];
  if (cacheTypesWithOptions.indexOf(cacheType) >= 0) {
    keyVars.push(JSON.stringify(options));
  }
  return `transformer-remark-markdown-${cacheType}-${keyVars.join(`-`)}`;
};

// ensure only one `/` in new url
const withPathPrefix = (url, pathPrefix) => (pathPrefix + url).replace(/\/\//, `/`);

/**
 * Map that keeps track of generation of AST to not generate it multiple
 * times in parallel.
 *
 * @type {Map<string,Promise>}
 */
const ASTPromiseMap = new Map();

/**
 * Set of all Markdown node types which, when encountered, generate an extra to
 * separate text.
 *
 * @type {Set<string>}
 */
const SpaceMarkdownNodeTypesSet = new Set([`paragraph`, `heading`, `tableCell`, `break`]);
const headingLevels = [...Array(6).keys()].reduce((acc, i) => {
  acc[`h${i}`] = i;
  return acc;
}, {});
module.exports = function remarkExtendNodeType({
  type,
  basePath,
  getNode,
  getNodesByType,
  cache,
  getCache,
  reporter,
  ...rest
}, pluginOptions) {
  if (type.name !== `MarkdownRemark`) {
    return {};
  }
  pluginsCacheStr = pluginOptions.plugins.map(p => p.name).join(``);
  pathPrefixCacheStr = basePath || ``;
  return new Promise((resolve, reject) => {
    // Setup Remark.
    const {
      blocks,
      footnotes = true,
      gfm = true,
      tableOfContents = {
        heading: null,
        maxDepth: 6
      }
    } = pluginOptions;
    const tocOptions = tableOfContents;
    const remarkOptions = {};
    if (_.isArray(blocks)) {
      remarkOptions.blocks = blocks;
    }
    let remark = new Remark().data(`settings`, remarkOptions);
    if (gfm) {
      // TODO: deprecate `gfm` option in favor of explicit remark-gfm as a plugin?
      remark = remark.use(remarkGfm);
    }
    if (footnotes) {
      // TODO: deprecate `footnotes` option in favor of explicit remark-footnotes as a plugin?
      remark = remark.use(remarkFootnotes, {
        inlineNotes: true
      });
    }
    for (const plugin of pluginOptions.plugins) {
      const requiredPlugin = plugin.module;
      if (_.isFunction(requiredPlugin.setParserPlugins)) {
        for (const parserPlugin of requiredPlugin.setParserPlugins(plugin.pluginOptions)) {
          if (_.isArray(parserPlugin)) {
            const [parser, options] = parserPlugin;
            remark = remark.use(parser, options);
          } else {
            remark = remark.use(parserPlugin);
          }
        }
      }
    }
    async function getFileWithNodeDependencyTracking(inMemoryNodeDependencyCache, context, markdownNode, queryFilter) {
      const depNode = await context.nodeModel.findOne({
        query: {
          filter: queryFilter
        },
        type: `File`
      });

      // if we can't find it, just hand off the response of findOne
      if (!depNode) {
        return depNode;
      }

      // get the current dependencies of the markdownNode using the in memory cache
      // we do this so we don't overwrite during concurrent remark plugins
      const depCacheKey = getCacheKey(CACHE_TYPE_NODE_DEPS, markdownNode);
      const dependencies = inMemoryNodeDependencyCache;
      if (dependencies[depNode.id] !== depNode.internal.contentDigest) {
        dependencies[depNode.id] = depNode.internal.contentDigest;
        await cache.set(depCacheKey, dependencies);
      }
      return depNode;
    }
    async function getCacheWithNodeDependencyValidation(cacheKey, markdownNode, context) {
      const depCacheKey = getCacheKey(CACHE_TYPE_NODE_DEPS, markdownNode);
      const dependencies = await cache.get(depCacheKey);
      if (dependencies && context) {
        for (const depNodeId of Object.keys(dependencies)) {
          // get current contentDigest
          const depNode = context.nodeModel.getNodeById({
            id: depNodeId,
            type: `File`
          });
          if (!depNode) {
            // the depNode was not found, probably deleted
            // invalidate the cache so we can re-map dependencies
            return undefined;
          }
          const curDepDigest = depNode.internal.contentDigest;
          const prevDepDigest = dependencies[depNodeId];

          // if the contentDigests don't match, we'll invalidate the cache
          // this also causes a check of the depNodes, so we don't need to set them here
          if (prevDepDigest !== curDepDigest) {
            return undefined;
          }
        }
      }
      const cachedValue = await cache.get(cacheKey);
      return cachedValue;
    }
    async function getAST(markdownNode, context) {
      const cacheKey = getCacheKey(CACHE_TYPE_AST, markdownNode);
      const promise = ASTPromiseMap.get(cacheKey);
      if (promise) {
        // We are already generating AST, so let's wait for it
        return promise;
      }
      const cachedAST = await getCacheWithNodeDependencyValidation(cacheKey, markdownNode, context);
      if (cachedAST) {
        return cachedAST;
      }
      const ASTGenerationPromise = getMarkdownAST(markdownNode, context);
      ASTPromiseMap.set(cacheKey, ASTGenerationPromise);

      // Return the promise that will cache the result if good, and deletes the promise from local cache either way
      // Note that if this cache hits for another parse, it won't have to wait for the cache
      try {
        const markdownAST = await ASTGenerationPromise;
        await cache.set(cacheKey, markdownAST);
        return markdownAST;
      } finally {
        ASTPromiseMap.delete(cacheKey);
      }
    }

    // Parse a markdown string and its AST representation, applying the remark plugins if necessary
    async function parseString(string, markdownNode, context) {
      // compiler to inject in the remark plugins
      // so that they can use our parser/generator
      // with all the options and plugins from the user
      const compiler = {
        parseString: string => parseString(string, markdownNode, context),
        generateHTML: ast => hastToHTML(markdownASTToHTMLAst(ast), {
          allowDangerousHtml: true
        })
      };
      const markdownAST = remark.parse(string);
      if (basePath) {
        // Ensure relative links include `pathPrefix`
        visit(markdownAST, [`link`, `definition`], node => {
          if (node.url && node.url.startsWith(`/`) && !node.url.startsWith(`//`)) {
            node.url = withPathPrefix(node.url, basePath);
          }
        });
      }
      if (process.env.NODE_ENV !== `production` || !fileNodes) {
        fileNodes = getNodesByType(`File`);
      }

      // Used to track dependencies for a given markDown node
      // Enables rebuilding of a markdown even if it's contents don't change,
      // but a dependency does. We use a copy of the local cache here
      // to avoid multiple processes overwriting this value.
      // type {[depNodeId: string]: string}
      const inMemoryNodeDependencyCache = {};

      // Use a for loop to run remark plugins serially.
      for (const plugin of pluginOptions.plugins) {
        const requiredPlugin = plugin.module;

        // Allow both exports = function(), and exports.default = function()
        const defaultFunction = _.isFunction(requiredPlugin) ? requiredPlugin : _.isFunction(requiredPlugin.default) ? requiredPlugin.default : undefined;
        if (defaultFunction) {
          await defaultFunction({
            markdownAST,
            markdownNode,
            getNode,
            getNodesByType,
            files: fileNodes,
            basePath,
            reporter,
            cache: getCache(plugin.name),
            getCache,
            compiler,
            context,
            getRemarkFileDependency: queryFilter => getFileWithNodeDependencyTracking(inMemoryNodeDependencyCache, context, markdownNode, queryFilter),
            ...rest
          }, plugin.pluginOptions);
        }
      }

      // Set up dependency cache for this markdownNode
      const depCacheKey = getCacheKey(CACHE_TYPE_NODE_DEPS, markdownNode);
      await cache.set(depCacheKey, inMemoryNodeDependencyCache);
      return markdownAST;
    }
    async function getMarkdownAST(markdownNode, context = undefined) {
      if (process.env.NODE_ENV !== `production` || !fileNodes) {
        fileNodes = getNodesByType(`File`);
      }

      // Execute the remark plugins that can mutate the node
      // before parsing its content
      //
      // Use for loop to run remark plugins serially.
      for (const plugin of pluginOptions.plugins) {
        const requiredPlugin = plugin.module;
        if (typeof requiredPlugin.mutateSource === `function`) {
          await requiredPlugin.mutateSource({
            markdownNode,
            files: fileNodes,
            getNode,
            reporter,
            cache: getCache(plugin.name),
            getCache,
            ...rest
          }, plugin.pluginOptions);
        }
      }
      return parseString(markdownNode.internal.content, markdownNode, context);
    }
    async function getHeadings(markdownNode, context) {
      const markdownCacheKey = getCacheKey(CACHE_TYPE_HEADINGS, markdownNode);
      const cachedHeadings = await getCacheWithNodeDependencyValidation(markdownCacheKey, markdownNode, context);
      if (cachedHeadings) {
        return cachedHeadings;
      }
      const ast = await getAST(markdownNode, context);
      const headings = selectAll(`heading`, ast).map(heading => {
        return {
          id: getHeadingID(heading),
          value: mdastToString(heading),
          depth: heading.depth
        };
      });
      await cache.set(markdownCacheKey, headings);
      return headings;
    }
    function addSlugToUrl(markdownNode, slugField, appliedTocOptions, node) {
      if (node.url) {
        if (slugField === undefined) {
          console.warn(`Skipping TableOfContents. Field '${appliedTocOptions.pathToSlugField}' missing from markdown node`);
          return null;
        }
        node.url = [basePath, slugField, node.url].join(`/`).replace(/\/\//g, `/`);
      }
      if (node.children) {
        node.children = node.children.map(node => addSlugToUrl(markdownNode, slugField, appliedTocOptions, node)).filter(Boolean);
      }
      return node;
    }
    async function getTableOfContents(markdownNode, gqlTocOptions, context) {
      // fetch defaults
      const appliedTocOptions = {
        ...tocOptions,
        ...gqlTocOptions
      };
      const tocKey = getCacheKey(CACHE_TYPE_TOC, markdownNode, appliedTocOptions);

      // get cached toc
      const cachedToc = await getCacheWithNodeDependencyValidation(tocKey, markdownNode, context);
      if (cachedToc) {
        return cachedToc;
      }
      const ast = await getAST(markdownNode, context);
      const tocAst = mdastToToc(ast, appliedTocOptions);
      let toc = ``;
      if (tocAst.map) {
        if (appliedTocOptions.absolute) {
          const slugField = _.get(markdownNode, appliedTocOptions.pathToSlugField);
          tocAst.map = addSlugToUrl(markdownNode, slugField, appliedTocOptions, tocAst.map);
        }

        // addSlugToUrl may clear the map
        if (tocAst.map) {
          toc = hastToHTML(toHAST(tocAst.map, {
            allowDangerousHtml: true
          }), {
            allowDangerousHtml: true
          });
        }
      }
      await cache.set(tocKey, toc);
      return toc;
    }
    function markdownASTToHTMLAst(ast) {
      return toHAST(ast, {
        allowDangerousHtml: true,
        handlers: {
          code: codeHandler
        }
      });
    }
    async function getHTMLAst(markdownNode, context) {
      const key = getCacheKey(CACHE_TYPE_HTMLAST, markdownNode);
      const cachedAst = await getCacheWithNodeDependencyValidation(key, markdownNode, context);
      if (cachedAst) {
        return cachedAst;
      } else {
        const ast = await getAST(markdownNode, context);
        const htmlAst = markdownASTToHTMLAst(ast);

        // Save new HTML AST to cache and return
        await cache.set(key, htmlAst);
        return htmlAst;
      }
    }
    async function getHTML(markdownNode, context) {
      const cacheKey = getCacheKey(CACHE_TYPE_HTML, markdownNode);
      const cachedHTML = await getCacheWithNodeDependencyValidation(cacheKey, markdownNode, context);
      if (cachedHTML) {
        return cachedHTML;
      } else {
        const ast = await getHTMLAst(markdownNode, context);
        // Save new HTML to cache and return
        const html = hastToHTML(ast, {
          allowDangerousHtml: true
        });

        // Save new HTML to cache
        await cache.set(cacheKey, html);
        return html;
      }
    }
    async function getExcerptAst(fullAST, markdownNode, {
      pruneLength,
      truncate,
      excerptSeparator
    }) {
      if (excerptSeparator && markdownNode.excerpt !== ``) {
        return cloneTreeUntil(fullAST, ({
          nextNode
        }) => nextNode.type === `raw` && nextNode.value === excerptSeparator);
      }
      if (!fullAST.children.length) {
        return fullAST;
      }
      const excerptAST = cloneTreeUntil(fullAST, ({
        root
      }) => {
        const totalExcerptSoFar = getConcatenatedValue(root);
        return totalExcerptSoFar && totalExcerptSoFar.length > pruneLength;
      });
      const unprunedExcerpt = getConcatenatedValue(excerptAST);
      if (!unprunedExcerpt || pruneLength && unprunedExcerpt.length < pruneLength) {
        return excerptAST;
      }
      const lastTextNode = findLastTextNode(excerptAST);
      const amountToPruneBy = unprunedExcerpt.length - pruneLength;
      const desiredLengthOfLastNode = lastTextNode.value.length - amountToPruneBy;
      if (!truncate) {
        lastTextNode.value = prune(lastTextNode.value, desiredLengthOfLastNode, `…`);
      } else {
        lastTextNode.value = _.truncate(lastTextNode.value, {
          length: pruneLength,
          omission: `…`
        });
      }
      return excerptAST;
    }
    async function getExcerptHtml(markdownNode, pruneLength, truncate, excerptSeparator, context) {
      const fullAST = await getHTMLAst(markdownNode, context);
      const excerptAST = await getExcerptAst(fullAST, markdownNode, {
        pruneLength,
        truncate,
        excerptSeparator
      });
      return hastToHTML(excerptAST, {
        allowDangerousHtml: true
      });
    }
    async function getExcerptMarkdown(markdownNode, pruneLength, truncate, excerptSeparator) {
      // if excerptSeparator in options and excerptSeparator in content then we will get an excerpt from grayMatter that we can use
      if (excerptSeparator && markdownNode.excerpt !== ``) {
        return markdownNode.excerpt;
      }
      const ast = await getMarkdownAST(markdownNode);
      const excerptAST = await getExcerptAst(ast, markdownNode, {
        pruneLength,
        truncate,
        excerptSeparator
      });
      return unified().use(stringify).stringify(excerptAST);
    }
    async function getExcerptPlain(markdownNode, pruneLength, truncate, excerptSeparator, context) {
      const ast = await getAST(markdownNode, context);
      const excerptNodes = [];
      let isBeforeSeparator = true;
      visit(ast, node => isBeforeSeparator, node => {
        if (excerptSeparator && node.value === excerptSeparator) {
          isBeforeSeparator = false;
        } else if (node.type === `text` || node.type === `inlineCode`) {
          excerptNodes.push(node.value);
        } else if (node.type === `image`) {
          excerptNodes.push(node.alt);
        } else if (SpaceMarkdownNodeTypesSet.has(node.type)) {
          // Add a space when encountering one of these node types.
          excerptNodes.push(` `);
        }
      });
      const excerptText = excerptNodes.join(``).trim();
      if (excerptSeparator && !isBeforeSeparator) {
        return excerptText;
      }
      if (!truncate) {
        return prune(excerptText, pruneLength, `…`);
      }
      return _.truncate(excerptText, {
        length: pruneLength,
        omission: `…`
      });
    }
    async function getExcerpt(markdownNode, {
      format,
      pruneLength,
      truncate,
      excerptSeparator
    }, context) {
      if (format === `HTML`) {
        return getExcerptHtml(markdownNode, pruneLength, truncate, excerptSeparator, context);
      }
      if (format === `MARKDOWN`) {
        return getExcerptMarkdown(markdownNode, pruneLength, truncate, excerptSeparator, context);
      }
      return getExcerptPlain(markdownNode, pruneLength, truncate, excerptSeparator, context);
    }
    return resolve({
      html: {
        type: `String`,
        async resolve(markdownNode, opt, context) {
          return getHTML(markdownNode, context);
        }
      },
      htmlAst: {
        type: `JSON`,
        async resolve(markdownNode, opt, context) {
          const ast = await getHTMLAst(markdownNode, context);
          const strippedAst = stripPosition(_.clone(ast), true);
          return hastReparseRaw(strippedAst);
        }
      },
      excerpt: {
        type: `String`,
        args: {
          pruneLength: {
            type: `Int`,
            defaultValue: 140
          },
          truncate: {
            type: `Boolean`,
            defaultValue: false
          },
          format: {
            type: `MarkdownExcerptFormats`,
            defaultValue: `PLAIN`
          }
        },
        resolve(markdownNode, {
          format,
          pruneLength,
          truncate
        }, context) {
          return getExcerpt(markdownNode, {
            format,
            pruneLength,
            truncate,
            excerptSeparator: pluginOptions.excerpt_separator
          }, context);
        }
      },
      excerptAst: {
        type: `JSON`,
        args: {
          pruneLength: {
            type: `Int`,
            defaultValue: 140
          },
          truncate: {
            type: `Boolean`,
            defaultValue: false
          }
        },
        async resolve(markdownNode, {
          pruneLength,
          truncate
        }, context) {
          const fullAST = await getHTMLAst(markdownNode, context);
          const ast = await getExcerptAst(fullAST, markdownNode, {
            pruneLength,
            truncate,
            excerptSeparator: pluginOptions.excerpt_separator
          });
          const strippedAst = stripPosition(_.clone(ast), true);
          return hastReparseRaw(strippedAst);
        }
      },
      headings: {
        type: [`MarkdownHeading`],
        args: {
          depth: `MarkdownHeadingLevels`
        },
        async resolve(markdownNode, {
          depth
        }, context) {
          let headings = await getHeadings(markdownNode, context);
          const level = depth && headingLevels[depth];
          if (typeof level === `number`) {
            headings = headings.filter(heading => heading.depth === level);
          }
          return headings;
        }
      },
      timeToRead: {
        type: `Int`,
        async resolve(markdownNode, opt, context) {
          const r = await getHTML(markdownNode, context);
          return timeToRead(r);
        }
      },
      tableOfContents: {
        type: `String`,
        args: {
          absolute: {
            type: `Boolean`,
            defaultValue: false
          },
          pathToSlugField: {
            type: `String`,
            defaultValue: ``
          },
          maxDepth: `Int`,
          heading: `String`
        },
        resolve(markdownNode, args, context) {
          return getTableOfContents(markdownNode, args, context);
        }
      },
      // TODO add support for non-latin languages https://github.com/wooorm/remark/issues/251#issuecomment-296731071
      wordCount: {
        type: `MarkdownWordCount`,
        resolve(markdownNode) {
          const counts = {};
          unified().use(parse).use(remark2retext, unified().use(english).use(count)).use(stringify).processSync(markdownNode.internal.content);
          return {
            paragraphs: counts.ParagraphNode,
            sentences: counts.SentenceNode,
            words: counts.WordNode
          };
          function count() {
            return counter;
            function counter(tree) {
              visit(tree, visitor);
              function visitor(node) {
                counts[node.type] = (counts[node.type] || 0) + 1;
              }
            }
          }
        }
      }
    });
  });
};