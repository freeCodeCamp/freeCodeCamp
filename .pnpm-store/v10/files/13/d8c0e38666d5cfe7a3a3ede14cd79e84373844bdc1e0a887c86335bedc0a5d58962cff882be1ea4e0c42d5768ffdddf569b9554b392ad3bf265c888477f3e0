"use strict";

const typeDefs = `
  type MarkdownHeading {
    id: String
    value: String
    depth: Int
  }

  enum MarkdownHeadingLevels {
    h1
    h2
    h3
    h4
    h5
    h6
  }

  enum MarkdownExcerptFormats {
    PLAIN
    HTML
    MARKDOWN
  }

  type MarkdownWordCount {
    paragraphs: Int
    sentences: Int
    words: Int
  }

  type MarkdownRemark implements Node @infer @childOf(mimeTypes: ["text/markdown", "text/x-markdown"]) {
    id: ID!
  }
`;
module.exports = (nodeApiArgs, pluginOptions = {}) => {
  const {
    plugins = []
  } = pluginOptions;
  nodeApiArgs.actions.createTypes(typeDefs);

  // This allows subplugins to use Node APIs bound to `gatsby-transformer-remark`
  // to customize the GraphQL schema. This makes it possible for subplugins to
  // modify types owned by `gatsby-transformer-remark`.
  plugins.forEach(plugin => {
    const resolvedPlugin = plugin.module;
    if (typeof resolvedPlugin.createSchemaCustomization === `function`) {
      resolvedPlugin.createSchemaCustomization(nodeApiArgs, plugin.pluginOptions);
    }
  });
};
module.exports.typeDefs = typeDefs;