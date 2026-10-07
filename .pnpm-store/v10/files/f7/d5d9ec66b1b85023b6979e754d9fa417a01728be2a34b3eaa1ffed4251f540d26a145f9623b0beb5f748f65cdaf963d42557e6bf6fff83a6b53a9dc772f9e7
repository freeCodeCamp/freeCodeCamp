<a name="6.1.0"></a>

# [6.1.0](https://github.com/nfl/react-helmet/compare/6.0.0...6.1.0) (2020-06-08)

### Features

-   Re-add Helmet as a default export [(#547)](https://github.com/nfl/react-helmet/pull/547)
    -   Note: You may now choose `import Helmet` or `import {Helmet}`
-   Updates react-fast-compare to get support for Preact [(#559)](https://github.com/nfl/react-helmet/pull/559)

<a name="6.0.0"></a>

# [6.0.0](https://github.com/nfl/react-helmet/compare/5.2.0...6.0.0) (2020-04-09)

### Features

-   Bundle with Rollup instead of Webpack - As a result, the default export was removed and Helmet must now be imported as a named component - `import {Helmet} from "react-helmet"` [(#395)](https://github.com/nfl/react-helmet/pull/395)
-   Replace deepEqual with isEqual [(#402)](https://github.com/nfl/react-helmet/pull/402)

<a name="6.0.0-beta.2"></a>

# [6.0.0-beta.2](https://github.com/nfl/react-helmet/compare/6.0.0-beta...6.0.0-beta.2) (2020-01-27)

<a name="6.0.0-beta"></a>

# [6.0.0-beta](https://github.com/nfl/react-helmet/compare/5.2.0...6.0.0-beta) (2018-12-07)

<a name="5.2.0"></a>

# [5.2.0](https://github.com/nfl/react-helmet/compare/5.1.3...5.2.0) (2017-08-29)

### Features

-   Adds support for synchronously updated tags
    ([#297](https://github.com/nfl/react-helmet/pull/297))
    ([6a3d3bf](https://github.com/nfl/react-helmet/commit/6a3d3bf)), closes [#291](https://github.com/nfl/react-helmet/issues/291)

### Bug Fixes

-   Remove unexpected comma in server-rendered title ([#289](https://github.com/nfl/react-helmet/pull/289)) ([66b8212](https://github.com/nfl/react-helmet/commit/66b8212)), closes [#286](https://github.com/nfl/react-helmet/issues/286)
-   Replace requestIdleCallback with requestAnimationFrame for a more consistent DOM write cycle. ([#307](https://github.com/nfl/react-helmet/issues/307)) ([a2323ad](https://github.com/nfl/react-helmet/commit/a2323ad))

<a name="5.1.3"></a>

## [5.1.3](https://github.com/nfl/react-helmet/compare/5.0.3...5.1.3) (2017-05-18)

### Bug Fixes

-   Add support for renderable Arrays of strings ([#275](https://github.com/nfl/react-helmet/issues/275)) ([aad5457](https://github.com/nfl/react-helmet/commit/aad5457)), closes [#272](https://github.com/nfl/react-helmet/issues/272)

<a name="5.0.3"></a>

## [5.0.3](https://github.com/nfl/react-helmet/compare/5.0.2...5.0.3) (2017-04-10)

### Bug Fixes

-   React.propTypes -> PropTypes ([#265](https://github.com/nfl/react-helmet/issues/265)) ([68ece0c](https://github.com/nfl/react-helmet/commit/68ece0c))

<a name="5.0.2"></a>

## [5.0.2](https://github.com/nfl/react-helmet/compare/5.0.1...5.0.2) (2017-03-28)

### Bug Fixes

-   prevent clearing existing title ([#259](https://github.com/nfl/react-helmet/issues/259)) ([549b603](https://github.com/nfl/react-helmet/commit/549b603))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/nfl/react-helmet/compare/5.0.0...5.0.1) (2017-03-24)

### Bug Fixes

-   handle falsy children values ([#256](https://github.com/nfl/react-helmet/issues/256)) ([4a60765](https://github.com/nfl/react-helmet/commit/4a60765))

<a name="5.0.0"></a>

# [5.0.0](https://github.com/nfl/react-helmet/compare/4.0.0...5.0.0) (2017-03-21)

### Features

-   New Simplified API (fully backward-compatible) - Helmet now takes plain HTML tags for the majority of the API with just a few remaining props for Helmet - retaining `titleTemplate`, `defaultTitle`, `onChangeClientState`, and one new - `encodeSpecialCharacters` - refer to README for details. Directly passing Helmet props will be deprecated in the future. [(#246)](https://github.com/nfl/react-helmet/pull/246)
-   `requestIdleCallback` utilized to consolidate DOM changes and makes these non-blocking for things like animations. Fixes first client-side render not matching server-side render. Maintains one DOM change between route changes on the client-side as well. [(#248)](https://github.com/nfl/react-helmet/pull/248)
-   On server-side, `Helmet.renderStatic()` aliased to `Helmet.rewind()` for more clarity. `rewind` will be deprecated in the future.
-   Yarn support

# 4.0.0

### Features

-   Replacing PlainComponent with stateless functional component `NullComponent`, with a hard requirement to use React 15 or higher.

# 3.3.2

### Bugfixes

-   Removed stateless functional component `NullComponent` because of it's incompatibility with React 14 and reverted back to PlainComponent.

# 3.3.1 [BROKEN]

### Bugfixes

-   README updates - npm badge and helmet image
-   Bump react-side-effect to 1.1.0
-   Removing PlainComponent, replaced with NullComponent defined within Helmet.js
-   Refactored code - cut lines of code and used `reduce` to simplify functions
-   Replaced PlainComponent with NullComponent (now within Helmet.js)

# 3.3.0

### Features

-   `itemprop` available in meta tags
-   New API - `titleAttributes` to add attributes to the title tag
-   `class` support for html tag

# 3.2.3

### Bugfixes

-   applied previous fix (undefined value for primary attribute key) to base tag
-   fix htmlAttributes fallback value when calling rewind() on blank Helmet
-   Removed unneeded dependencies - shallowequal, warning
-   babel configuration moved into .babelrc
-   eslint configuration moved into .eslintrc

# 3.2.2

### Bugfixes

-   Removed breaking changes `jsnext:main` and `module` from package.json. `es` version required special babel configuration for end users and needs to be re-thought for major release.
-   Reverted `canUseDOM` setter in `Helmet.js`, as this was a breaking change for some users.
-   [fix] runtime error when providing undefined value for primary attribute key (applies to meta, link, script, noscript, style)

# 3.2.1 [BROKEN]

### Bugfixes

-   Removing "engines" field in package.json.

# 3.2.0 [BROKEN]

### Features

-   `<noscript>` support

### Bugfixes

-   Prevent stripping dollar signs from title when titleTemplate is present
-   Offering jsnext:main build
-   Removed Gulp Dependency
-   Bump Dependencies
-   IE8 Support

# 3.1.0

### Features

-   Add support for `<style>` elements.

# 3.0.2

### Bugfixes

-   Avoids rendering "undefined" if it's passed in as a value of an attribute, but instead renders just the attribute name.
-   When htmlAttributes gets cleared, or is blank, the helmet attribute on the html tag, used for tracking, is cleaned up.
-   Upgrading devDependency of React to 15.

# 3.0.1

### Bugfixes

-   The htmlAttributes feature will no longer remove existing attributes on the HTML tag

# 3.0.0

### Features

-   innerHTML for scripts. Originally added to support the use of JSON-LD (https://developers.google.com/schemas/formats/json-ld?hl=en), but this can be used for any inline scripts you would like in your document head.
-   New htmlAttributes prop which allows users to add attributes to their html tag.
-   New defaultTitle prop which allows users to have a fallback title in the scenario where a Helmet wants to define a titleTemplate for it's nested routes, but not for itself (for example, at the root component level). See README for use cases.

### Bugfixes

-   Removed all polyfills from Helmet. Due to reported conflicts, to remove bloat, and to encourage users to polyfill at the application level. Please double-check that you weren't relying solely on Helmet for polyfilling certain features.

# 2.3.1

### Bugfixes

-   Fallback values for rewind on the server threw a `tags.map` error in Node. Changing the tag default values to `[]` fixes it.

# 2.3.0

### Bugfixes

-   FOUC fix - existing tags that persist between route changes, will not be removed and re-added to the DOM. They will remain unchanged. This will avoid, in particular, stylesheets being removed and re-added causing an unstyled flash when the new Helmet is rendered.
-   onChangeClientState enhanced to also return the html tags that were added and removed.
-   provide fallback object for rewind() result - If no Helmets are rendered, rewind() will still return head.base, head.title, etc.
-   Tag attributes ordering does not matter. It no longer looks at the first valid attribute to identify the tag. All attributes of the tag will be searched for names that can be found in HelmetConstants.js. When rel="canonical" is included, it will take priority over href.
-   Bump dependencies

# 2.2.0

### Features

-   New prop `onChangeClientState` to set a callback function that is called in the event the DOM is changed by Helmet. When set on a Helmet, it will apply to all subsequent Helmet instances downstream (similar to titleTemplate).

### Bugfixes

-   Fix for double encoding when returning state to the server as React components.
-   dist -> lib
-   Added CLA url to CONTRIBUTING.
-   Added .babelrc to .npmignore (fix for now, as the settings were not compatible with Babel 6)
-   Bump dependencies (except Babel 6 as a dev dependency - coming soon)

# 2.1.1

### Bugfixes

-   Remove npm he dependency
-   HTML entitiy encode only special characters instead of all characters that have HTML entity equivalents

# 2.1.0

### Features

-   All head attributes (title / base / meta / link / script) returned with `.toComponent()` and `.toString()` methods to use in any scenario when calling rewind on the server.
-   Helmet using React 14 for unit testing.

### Bugfixes

-   Bump dependencies

# 2.0.0

### Features

-   Base tag support.
-   Script tag support.
-   All head attributes (title / base / meta / link / script) returned as React components on the server with toString() support
-   Removed ability to nest children in Helmet.
-   Decorated component from react-side-effect, now wrapped by Helmet in order to enforce deep equal check on shouldComponentUpdate. This will limit unnecessary DOM changes and rendering.

### Bugfixes

-   Bump dependencies

# 1.1.5

### Bugfixes

-   Adding webpack under devDependencies, as it's no longer automatically installed as a peer dependency
-   Bump dependencies

# 1.1.4

### Bugfixes

-   Bumping to react-side-effect 1.0.2
-   Updating peer dependences for react 0.14.0-rc1
-   Bump dependencies

# 1.1.3

### Bugfixes

-   Externalize react-side-effect
-   shouldComponentUpdate compares props with deep equal
-   handleClientStateChange compares DOM changes with deep equal to prevent unnecessary DOM changes
-   Warning users to not nest children in their Helmet components. We found that when Helmet contains children, those children are part of the props that are compared in shouldComponentUpdate. And this causes unnecessary renders as the props are always different, even with the same Helmet title/meta/link props.
-   Adding react-helmet-example to README
-   Bumping to react-side-effect 1.0.1
-   Bump dependencies.

# 1.1.2

### Bugfixes

-   Use named exports in HelmetConstants
-   Allow all React 0.14 betas in peer dependencies
-   Bump dependencies.
-   Fixed invariant check in CreateSideEffect

# 1.1.1

### Bugfixes

-   Externalizing of React helpers - exenv, invariant, shallowequal
-   Using ES6 collections to manage tags
-   Bumping peer dependency for use in React 0.14.0-beta.
-   Title encoded when being rendered on the server
-   Import a smaller subset of core-js modules instead of the whole shim.

# 1.1.0

### Features

-   titleTemplate attribute to help format `document.title`

### Bugfixes

-   Bump dependencies.
-   Title will never be overwritten with blank title. Lifts constraint where every component with Helmet needed to define a title.
-   Re-organization of unit tests.

# 1.0.1

### Bugfixes

-   Bump dependencies
-   rewind() saves title/meta/link values before disposing
-   Typo in README - use Helmet.rewind()
-   "he" package added to dependencies
-   Added Travis CI integration
-   npm requirement removed - removed reference in README (System Requirements) and in package.json (engines)

# 1.0.0

### Features

-   Initial release
