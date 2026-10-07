"use strict";

const path = require(`path`);
const debug = require(`debug`)(`gatsby:component-shadowing`);
const fs = require(`fs`);
const _ = require(`lodash`);
const {
  splitComponentPath
} = require(`gatsby-core-utils`);

// A file can be shadowed by a file of the same extension, or a file of a
// "compatible" file extension; two files extensions are compatible if they both
// belongs to the same "category". For example, a .JS file (that is code), may
// be shadowed by a .TS file or a .JSX file (both are code), but not by a .CSS
// file (that is a stylesheet) or a .PNG file (that is an image). The following
// list establish to which category a given file extension belongs. Note that if
// a file is not present in this list, then it can only be shadowed by a file
// of the same extension.

// FIXME: Determine how this list can be extended by user/plugins
const DEFAULT_FILE_EXTENSIONS_CATEGORIES = {
  // Code formats
  js: `code`,
  jsx: `code`,
  ts: `code`,
  tsx: `code`,
  cjs: `code`,
  mjs: `code`,
  mts: `code`,
  coffee: `code`,
  // JSON-like data formats
  json: `json`,
  yaml: `json`,
  yml: `json`,
  // Stylesheets formats
  css: `stylesheet`,
  sass: `stylesheet`,
  scss: `stylesheet`,
  less: `stylesheet`,
  "css.js": `stylesheet`,
  // Images formats
  jpeg: `image`,
  jpg: `image`,
  jfif: `image`,
  png: `image`,
  tiff: `image`,
  webp: `image`,
  avif: `image`,
  gif: `image`,
  // Fonts
  woff: `font`,
  woff2: `font`
};

// TO-DO:
//  - implement ability to add/remove shadowed modules from the webpack chain as file are being created/deleted
//    ( https://github.com/gatsbyjs/gatsby/issues/11456 ):
//    - this will also need to add memo invalidation for page template shadowing:
//      see memoized `shadowCreatePagePath` function used in `createPage` action creator.

module.exports = class GatsbyThemeComponentShadowingResolverPlugin {
  constructor({
    projectRoot,
    themes,
    extensions,
    extensionsCategory
  }) {
    debug(`themes list`, themes.map(({
      themeName
    }) => themeName));
    this.themes = themes;
    this.projectRoot = projectRoot;
    this.extensions = extensions !== null && extensions !== void 0 ? extensions : [];
    this.extensionsCategory = {
      ...DEFAULT_FILE_EXTENSIONS_CATEGORIES,
      ...extensionsCategory
    };
    this.additionalShadowExtensions = this.buildAdditionalShadowExtensions();
  }
  buildAdditionalShadowExtensions() {
    const extensionsByCategory = _.groupBy(this.extensions, ext => this.extensionsCategory[ext.substring(1)] || `undefined`);
    const additionalExtensions = [];
    for (const [category, exts] of Object.entries(extensionsByCategory)) {
      if (category === `undefined`) continue;
      for (const ext of exts) {
        additionalExtensions.push({
          key: ext,
          value: exts
        });
      }
    }

    // Sort extensions in reverse length order, so that something such as
    // ".css.js" get caught before ".js"
    return additionalExtensions.sort(({
      key: a
    }, {
      key: b
    }) => a.length <= b.length);
  }
  apply(resolver) {
    // This hook is executed very early and captures the original file name
    resolver.getHook(`resolve`).tapAsync(`GatsbyThemeComponentShadowingResolverPlugin`, (request, stack, callback) => {
      if (!request._gatsbyThemeShadowingOriginalRequestPath) {
        request._gatsbyThemeShadowingOriginalRequestPath = request.request;
      }
      return callback();
    });

    // This is where the magic really happens
    resolver.getHook(`before-resolved`).tapAsync(`GatsbyThemeComponentShadowingResolverPlugin`, (request, stack, callback) => {
      const [theme, component] = this.getThemeAndComponent(request.path);
      if (!theme) {
        return callback();
      }
      if (
      /**
       * if someone adds
       * ```
       * modules: [path.resolve(__dirname, /src'), 'node_modules'],
       * ```
       * to the webpack config, `issuer` is `null`, so we skip this check.
       * note that it's probably a bad idea in general to set `modules`
       * like this in a theme, but we also shouldn't artificially break
       * people that do.
       */
      request.context.issuer &&
      /**
       * An issuer is the file making the require request. It can
       * be in a user's site or a theme. If the issuer is requesting
       * a path in the shadow chain that it participates in, then we
       * will let the request through as normal. Otherwise, we
       * engage the shadowing algorithm.
       */
      this.requestPathIsIssuerShadowPath({
        component,
        theme,
        issuerPath: request.context.issuer,
        userSiteDir: this.projectRoot
      })) {
        return callback();
      }
      const originalRequestPath = request._gatsbyThemeShadowingOriginalRequestPath;
      const originalRequestComponent = path.basename(originalRequestPath);

      // This is the shadowing algorithm.
      const builtComponentPath = this.resolveComponentPath({
        theme,
        component,
        originalRequestComponent
      });
      if (builtComponentPath) {
        return resolver.doResolve(resolver.hooks.describedRelative, {
          ...request,
          path: builtComponentPath
        }, null, {}, callback);
      } else {
        return callback();
      }
    });
  }

  // check the user's project and the theme files
  resolveComponentPath({
    theme,
    component: originalComponent,
    originalRequestComponent
  }) {
    const [component, content] = splitComponentPath(originalComponent);

    // don't include matching theme in possible shadowing paths
    const themes = this.themes.filter(({
      themeName
    }) => themeName !== theme.themeName);
    const themesArray = [path.join(this.projectRoot, `src`, theme.themeName)].concat(themes.reverse().map(({
      themeDir
    }) => path.join(themeDir, `src`, theme.themeName)));
    const acceptableShadowFileNames = this.getAcceptableShadowFileNames(path.basename(component), originalRequestComponent);
    for (const theme of themesArray) {
      const possibleComponentPath = path.join(theme, component);
      debug(`possibleComponentPath`, possibleComponentPath);
      let dir;
      try {
        // we use fs/path instead of require.resolve to work with
        // TypeScript and alternate syntaxes
        dir = fs.readdirSync(path.dirname(possibleComponentPath));
      } catch (e) {
        continue;
      }
      const existsDir = dir.map(filepath => path.basename(filepath));

      // if no exact path, search for extension
      const matchingShadowFile = acceptableShadowFileNames.find(shadowFile => existsDir.includes(shadowFile));
      if (matchingShadowFile) {
        const shadowPath = path.join(path.dirname(possibleComponentPath), matchingShadowFile);
        if (content) {
          return `${shadowPath}?__contentFilePath=${content}`;
        }
        return shadowPath;
      }
    }
    return null;
  }
  getThemeAndComponent(filepath) {
    // find out which theme's src/components dir we're requiring from
    const allMatchingThemes = this.themes.filter(({
      themeDir
    }) => filepath.startsWith(path.join(themeDir, `src`)));

    // The same theme can be included twice in the themes list causing multiple
    // matches. This case should only be counted as a single match for that theme.
    const matchingThemes = _.uniqBy(allMatchingThemes, `themeName`);

    // 0 matching themes happens a lot for paths we don't want to handle
    // > 1 matching theme means we have a path like
    //   `gatsby-theme-blog/src/components/gatsby-theme-something/src/components`
    if (matchingThemes.length > 1) {
      throw new Error(`Gatsby can't differentiate between themes ${matchingThemes.map(theme => theme.themeName).join(` and `)} for path ${filepath}`);
    }
    if (matchingThemes.length === 0) {
      return [null, null];
    }
    const theme = matchingThemes[0];

    // get the location of the component relative to its theme's src/
    const [, component] = filepath.split(path.join(theme.themeDir, `src`));
    return [theme, component];
  }

  // given a theme name, return all of the possible shadow locations
  getBaseShadowDirsForThemes(theme) {
    return Array.from(this.themes).reverse().map(({
      themeName,
      themeDir
    }) => {
      if (themeName === theme) {
        return path.join(themeDir, `src`);
      } else {
        return path.join(themeDir, `src`, theme);
      }
    });
  }
  requestPathIsIssuerShadowPath({
    theme,
    component,
    issuerPath,
    userSiteDir
  }) {
    if (!theme || !component) {
      return false;
    }

    // get list of potential shadow locations
    const shadowFiles = this.getBaseShadowDirsForThemes(theme.themeName).concat(path.join(userSiteDir, `src`, theme.themeName)).map(dir => path.join(dir, component)).flatMap(comp => this.getAcceptableShadowFileNames(comp));

    // if the issuer is requesting a path that is a potential shadow path of itself
    return shadowFiles.includes(issuerPath);
  }
  getAcceptableShadowFileNames(componentName, originalRequestComponent) {
    const matchingEntry = this.additionalShadowExtensions.find(entry => componentName.endsWith(entry.key));
    let additionalNames = [];
    if (matchingEntry) {
      const baseName = componentName.slice(0, -matchingEntry.key.length);
      additionalNames = matchingEntry.value.map(ext => `${baseName}${ext}`);
    }
    let legacyAdditionalNames = [];
    if (originalRequestComponent) {
      legacyAdditionalNames = this.extensions.map(ext => `${originalRequestComponent}${ext}`);
    }
    return _.uniq([componentName, ...additionalNames, ...legacyAdditionalNames]);
  }
};
//# sourceMappingURL=index.js.map