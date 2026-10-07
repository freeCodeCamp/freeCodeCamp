"use strict";

exports.__esModule = true;
exports.overridableBuiltInTypeNames = exports.internalTypeNames = exports.builtInTypeDefinitions = exports.builtInScalarTypeNames = void 0;
var _graphql = require("graphql");
// TODO v5: mark File type as @dontInfer (requires @childOf directive to all children types like ImageSharp)

const fileType = `
  type File implements Node @infer {
    sourceInstanceName: String!
    absolutePath: String!
    relativePath: String!
    extension: String!
    size: Int!
    prettySize: String!
    modifiedTime: Date! @dateformat
    accessTime: Date! @dateformat
    changeTime: Date! @dateformat
    birthTime: Date! @dateformat
    root: String!
    dir: String!
    base: String!
    ext: String!
    name: String!
    relativeDirectory: String!
    dev: Int!
    mode: Int!
    nlink: Int!
    uid: Int!
    gid: Int!
    rdev: Int!
    ino: Float!
    atimeMs: Float!
    mtimeMs: Float!
    ctimeMs: Float!
    atime: Date! @dateformat
    mtime: Date! @dateformat
    ctime: Date! @dateformat
    birthtime: Date @deprecated(reason: "Use \`birthTime\` instead")
    birthtimeMs: Float @deprecated(reason: "Use \`birthTime\` instead")
  }
`;
const siteFunctionType = `
  type SiteFunction implements Node @dontInfer {
    functionRoute: String!
    pluginName: String!
    originalAbsoluteFilePath: String!
    originalRelativeFilePath: String!
    relativeCompiledFilePath: String!
    absoluteCompiledFilePath: String!
    matchPath: String
  }
`;
const directoryType = `
  type Directory implements Node @dontInfer {
    sourceInstanceName: String!
    absolutePath: String!
    relativePath: String!
    extension: String!
    size: Int!
    prettySize: String!
    modifiedTime: Date! @dateformat
    accessTime: Date! @dateformat
    changeTime: Date! @dateformat
    birthTime: Date! @dateformat
    root: String!
    dir: String!
    base: String!
    ext: String!
    name: String!
    relativeDirectory: String!
    dev: Int!
    mode: Int!
    nlink: Int!
    uid: Int!
    gid: Int!
    rdev: Int!
    ino: Float!
    atimeMs: Float!
    mtimeMs: Float!
    ctimeMs: Float!
    atime: Date! @dateformat
    mtime: Date! @dateformat
    ctime: Date! @dateformat
    birthtime: Date @deprecated(reason: "Use \`birthTime\` instead")
    birthtimeMs: Float @deprecated(reason: "Use \`birthTime\` instead")
  }
`;
const siteType = `
  type Site implements Node @infer {
    buildTime: Date @dateformat
    siteMetadata: SiteSiteMetadata
  }
`;
const siteSiteMetadataType = `
  type SiteSiteMetadata {
    title: String
    description: String
  }
`;
const sitePageType = `
  type SitePage implements Node @dontInfer {
    path: String!
    component: String!
    internalComponentName: String!
    componentChunkName: String!
    matchPath: String
    pageContext: JSON @proxy(from: "context")
    pluginCreator: SitePlugin @link(from: "pluginCreatorId")
  }
`;
const sitePluginType = `
  type SitePlugin implements Node @dontInfer {
    resolve: String
    name: String
    version: String
    nodeAPIs: [String]
    browserAPIs: [String]
    ssrAPIs: [String]
    pluginFilepath: String
    pluginOptions: JSON
    packageJson: JSON
  }
`;
const siteBuildMetadataType = `
  type SiteBuildMetadata implements Node @dontInfer {
    buildTime: Date @dateformat
  }
`;
const allSdlTypes = [fileType, directoryType, siteType, siteSiteMetadataType, siteFunctionType, sitePageType, sitePluginType, siteBuildMetadataType];
const overridableBuiltInTypeNames = new Set([`SiteSiteMetadata`]);
exports.overridableBuiltInTypeNames = overridableBuiltInTypeNames;
const builtInTypeDefinitions = () => allSdlTypes.map(type => (0, _graphql.parse)(type));
exports.builtInTypeDefinitions = builtInTypeDefinitions;
const builtInScalarTypeNames = [`Boolean`, `Date`, `Float`, `ID`, `Int`, `JSON`, `String`, `GatsbyImageData`];
exports.builtInScalarTypeNames = builtInScalarTypeNames;
const internalTypeNames = [...builtInScalarTypeNames, `Buffer`, `Internal`, `InternalInput`, `Node`, `NodeInput`, `Query`];
exports.internalTypeNames = internalTypeNames;
//# sourceMappingURL=built-in-types.js.map