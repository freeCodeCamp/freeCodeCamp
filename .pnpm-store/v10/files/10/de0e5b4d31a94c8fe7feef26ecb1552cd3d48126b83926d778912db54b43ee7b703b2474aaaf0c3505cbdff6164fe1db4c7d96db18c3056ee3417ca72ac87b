"use strict";

const {
  onCreateNode,
  shouldOnCreateNode
} = require(`./on-node-create`);
exports.onCreateNode = onCreateNode;
exports.shouldOnCreateNode = shouldOnCreateNode;
exports.createSchemaCustomization = require(`./create-schema-customization`);
exports.setFieldsOnGraphQLNodeType = require(`./extend-node-type`);

// Dedupe warning
let warnedAboutJSFrontmatterEngine = false;
exports.pluginOptionsSchema = function ({
  Joi
}) {
  return Joi.object({
    footnotes: Joi.boolean().description(`Activates Footnotes mode (default: true)`),
    gfm: Joi.boolean().description(`Activates GitHub Flavored Markdown mode (default: true)`),
    excerpt_separator: Joi.string().description(`If your Markdown file contains HTML, excerpt will not return a value. In that case, you can set an excerpt_separator to an HTML tag. Edit your Markdown files to include that HTML tag after the text you’d like to appear in the excerpt.`),
    plugins: Joi.subPlugins().description(`A list of remark plugins. See also: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-remark for examples`),
    // TODO(v6): Remove and disallow any custom engines (including JS)
    jsFrontmatterEngine: Joi.boolean().default(false).description(`Enable JS for https://github.com/jonschlinkert/gray-matter#optionsengines`)
  }).custom(value => {
    const {
      jsFrontmatterEngine,
      engines = {}
    } = value || {};
    if (jsFrontmatterEngine) {
      // show this warning only once in main process
      if (!process.env.GATSBY_WORKER_ID) {
        console.warn(`JS frontmatter engine is enabled in gatsby-transformer-remark (via jsFrontmatterEngine: true). This can cause a security risk, see https://github.com/gatsbyjs/gatsby/security/advisories/GHSA-7ch4-rr99-cqcw. If you are not relying on this feature we strongly suggest disabling it via the "jsFrontmatterEngine: false" plugin option. If you rely on this feature make sure to properly secure or sanitize your content source.`);
      }
      return value;
    }
    const js = () => {
      if (!warnedAboutJSFrontmatterEngine) {
        console.warn(`You have frontmatter declared with "---js" or "---javascript" that is not parsed by default to mitigate a security risk (see https://github.com/gatsbyjs/gatsby/security/advisories/GHSA-7ch4-rr99-cqcw). If you require this feature it can be enabled by setting "jsFrontmatterEngine: true" in the plugin options of gatsby-transformer-remark.`);
        warnedAboutJSFrontmatterEngine = true;
      }
      // we still have to return a frontmatter, so we just stub it with empty object
      return {};
    };
    return {
      ...value,
      engines: {
        ...engines,
        js,
        javascript: js
      }
    };
  });
};