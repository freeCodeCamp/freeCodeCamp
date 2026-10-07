<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <br>
  <br>

[![npm][npm]][npm-url]

[![node][node]][node-url]
[![builds1][builds1]][builds1-url]
[![builds2][builds2]][builds2-url]
[![dependency-review][dependency-review]][dependency-review-url]
[![coverage][cover]][cover-url]
[![PR's welcome][prs]][prs-url]
[![compatibility-score](https://api.dependabot.com/badges/compatibility_score?dependency-name=webpack&package-manager=npm_and_yarn&previous-version=5.72.1&new-version=5.73.0)](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates#about-compatibility-scores)
[![downloads](https://img.shields.io/npm/dm/webpack.svg)](https://npmcharts.com/compare/webpack?minimal=true)
[![install-size](https://packagephobia.com/badge?p=webpack)](https://packagephobia.com/result?p=webpack)
[![backers](https://opencollective.com/webpack/backers/badge.svg)](https://opencollective.com/webpack#backer)
[![sponsors](https://opencollective.com/webpack/sponsors/badge.svg)](https://opencollective.com/webpack#sponsors)
[![contributors](https://img.shields.io/github/contributors/webpack/webpack.svg)](https://github.com/webpack/webpack/graphs/contributors)
[![discussions](https://img.shields.io/github/discussions/webpack/webpack)](https://github.com/webpack/webpack/discussions)
[![discord](https://img.shields.io/discord/1180618526436888586?label=discord&logo=discord&logoColor=white&style=flat)](https://discord.gg/5sxFZPdx2k)

  <h1>webpack</h1>
  <p>
    Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
  </p>
</div>

## Table of Contents

- [Install](#install)
- [Introduction](#introduction)
- [Concepts](#concepts)
- [Contributing](#contributing)
- [Support](#support)
- [Current project members](#current-project-members)
  - [TSC (Technical Steering Committee)](#tsc-technical-steering-committee)
  - [Core Collaborators](#core-collaborators)
- [Sponsoring](#sponsoring)
  - [Premium Partners](#premium-partners)
  - [Gold Sponsors](#gold-sponsors)
  - [Silver Sponsors](#silver-sponsors)
  - [Bronze Sponsors](#bronze-sponsors)
  - [Backers](#backers)
- [Special Thanks](#special-thanks-to)

<h2>Install</h2>

Install with npm:

```bash
npm install --save-dev webpack
```

Install with yarn:

```bash
yarn add webpack --dev
```

<h2>Introduction</h2>

Webpack is a bundler for modules. The main purpose is to bundle JavaScript
files for usage in a browser, yet it is also capable of transforming, bundling,
or packaging just about any resource or asset.

**TL;DR**

- Bundles [ES Modules](https://www.2ality.com/2014/09/es6-modules-final.html), [CommonJS](http://wiki.commonjs.org/), and [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules (even combined).
- Can create a single bundle or multiple chunks that are asynchronously loaded at runtime (to reduce initial loading time).
- Dependencies are resolved during compilation, reducing the runtime size.
- Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
- Highly modular plugin system to do whatever else your application requires.

#### Learn about webpack through videos!

- [Understanding Webpack - Video 1](https://www.youtube.com/watch?v=xj93pvQIsRo)
- [Understanding Webpack - Video 2](https://www.youtube.com/watch?v=4tQiJaFzuJ8)

### Get Started

Check out webpack's quick [**Get Started**](https://webpack.js.org/guides/getting-started) guide and the [other guides](https://webpack.js.org/guides/).

### Browser Compatibility

Webpack supports all browsers that are [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).
Webpack also needs `Promise` for `import()` and `require.ensure()`. If you want to support older browsers, you will need to [load a polyfill](https://webpack.js.org/guides/shimming/) before using these expressions.

<h2>Concepts</h2>

### [Plugins](https://webpack.js.org/plugins/)

Webpack has a [rich plugin
interface](https://webpack.js.org/plugins/). Most of the features
within webpack itself use this plugin interface. This makes webpack very
**flexible**.

|                   Name                    |       Status       |    Install Size     | Description                                                                             |
| :---------------------------------------: | :----------------: | :-----------------: | :-------------------------------------------------------------------------------------- |
|    [mini-css-extract-plugin][mini-css]    |  ![mini-css-npm]   |  ![mini-css-size]   | Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. |
| [compression-webpack-plugin][compression] | ![compression-npm] | ![compression-size] | Prepares compressed versions of assets to serve them with Content-Encoding              |
|    [html-webpack-plugin][html-plugin]     | ![html-plugin-npm] | ![html-plugin-size] | Simplifies creation of HTML files (`index.html`) to serve your bundles                  |
|         [pug-plugin][pug-plugin]          | ![pug-plugin-npm]  | ![pug-plugin-size]  | Renders Pug files to HTML, extracts JS and CSS from sources specified directly in Pug.  |

[common-npm]: https://img.shields.io/npm/v/webpack.svg
[mini-css]: https://github.com/webpack-contrib/mini-css-extract-plugin
[mini-css-npm]: https://img.shields.io/npm/v/mini-css-extract-plugin.svg
[mini-css-size]: https://packagephobia.com/badge?p=mini-css-extract-plugin
[component]: https://github.com/webpack-contrib/component-webpack-plugin
[component-npm]: https://img.shields.io/npm/v/component-webpack-plugin.svg
[component-size]: https://packagephobia.com/badge?p=component-webpack-plugin
[compression]: https://github.com/webpack-contrib/compression-webpack-plugin
[compression-npm]: https://img.shields.io/npm/v/compression-webpack-plugin.svg
[compression-size]: https://packagephobia.com/badge?p=compression-webpack-plugin
[html-plugin]: https://github.com/jantimon/html-webpack-plugin
[html-plugin-npm]: https://img.shields.io/npm/v/html-webpack-plugin.svg
[html-plugin-size]: https://packagephobia.com/badge?p=html-webpack-plugin
[pug-plugin]: https://github.com/webdiscus/pug-plugin
[pug-plugin-npm]: https://img.shields.io/npm/v/pug-plugin.svg
[pug-plugin-size]: https://packagephobia.com/badge?p=pug-plugin

### [Loaders](https://webpack.js.org/loaders/)

Webpack enables the use of loaders to preprocess files. This allows you to bundle
**any static resource** way beyond JavaScript. You can easily [write your own
loaders](https://webpack.js.org/api/loaders/) using Node.js.

Loaders are activated by using `loadername!` prefixes in `require()` statements,
or are automatically applied via regex from your webpack configuration.

#### Files

|       Name        |   Status   | Install Size | Description                                              |
| :---------------: | :--------: | :----------: | :------------------------------------------------------- |
| [val-loader][val] | ![val-npm] | ![val-size]  | Executes code as module and considers exports as JS code |

[val]: https://github.com/webpack-contrib/val-loader
[val-npm]: https://img.shields.io/npm/v/val-loader.svg
[val-size]: https://packagephobia.com/badge?p=val-loader

#### JSON

|                                                                   Name                                                                    |   Status    | Install Size |           Description            |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :---------: | :----------: | :------------------------------: |
| <a href="https://github.com/awnist/cson-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/coffeescript.svg"></a> | ![cson-npm] | ![cson-size] | Loads and transpiles a CSON file |

[cson-npm]: https://img.shields.io/npm/v/cson-loader.svg
[cson-size]: https://packagephobia.com/badge?p=cson-loader

#### Transpiling

|                                                                                                                             Name                                                                                                                             |    Status     |  Install Size  | Description                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------: | :------------: | :------------------------------------------------------------------------------------------------ |
|                                                  <a href="https://github.com/babel/babel-loader"><img width="48" height="48" title="babel-loader" src="https://worldvectorlogo.com/logos/babel-10.svg"></a>                                                  | ![babel-npm]  | ![babel-size]  | Loads ES2015+ code and transpiles to ES5 using <a href="https://github.com/babel/babel">Babel</a> |
| <a href="https://github.com/TypeStrong/ts-loader"><img width="48" height="48" src="https://raw.githubusercontent.com/microsoft/TypeScript-Website/f407e1ae19e5e990d9901ac8064a32a8cc60edf0/packages/typescriptlang-org/static/branding/ts-logo-128.svg"></a> |  ![type-npm]  |  ![type-size]  | Loads TypeScript like JavaScript                                                                  |
|                                                     <a href="https://github.com/webpack-contrib/coffee-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/coffeescript.svg"></a>                                                     | ![coffee-npm] | ![coffee-size] | Loads CoffeeScript like JavaScript                                                                |

[babel-npm]: https://img.shields.io/npm/v/babel-loader.svg
[babel-size]: https://packagephobia.com/badge?p=babel-loader
[coffee-npm]: https://img.shields.io/npm/v/coffee-loader.svg
[coffee-size]: https://packagephobia.com/badge?p=coffee-loader
[type-npm]: https://img.shields.io/npm/v/ts-loader.svg
[type-size]: https://packagephobia.com/badge?p=ts-loader

#### Templating

|                                                                                   Name                                                                                    |     Status      |   Install Size   | Description                                                                             |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------: | :--------------: | :-------------------------------------------------------------------------------------- |
|               <a href="https://github.com/webpack-contrib/html-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/html5-2.svg"></a>               |   ![html-npm]   |   ![html-size]   | Exports HTML as string, requires references to static resources                         |
|   <a href="https://github.com/pugjs/pug-loader"><img width="48" height="48" src="https://cdn.rawgit.com/pugjs/pug-logo/master/SVG/pug-final-logo-_-colour-128.svg"></a>   |   ![pug-npm]    |   ![pug-size]    | Loads Pug templates and returns a function                                              |
| <a href="https://github.com/webdiscus/pug-loader"><img width="48" height="48" src="https://cdn.rawgit.com/pugjs/pug-logo/master/SVG/pug-final-logo-_-colour-128.svg"></a> |   ![pug3-npm]   |   ![pug3-size]   | Compiles Pug to a function or HTML string, useful for use with Vue, React, Angular      |
|                <a href="https://github.com/peerigon/markdown-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/markdown.svg"></a>                |    ![md-npm]    |    ![md-size]    | Compiles Markdown to HTML                                                               |
|                 <a href="https://github.com/posthtml/posthtml-loader"><img width="48" height="48" src="https://posthtml.github.io/posthtml/logo.svg"></a>                 | ![posthtml-npm] | ![posthtml-size] | Loads and transforms a HTML file using [PostHTML](https://github.com/posthtml/posthtml) |
|             <a href="https://github.com/pcardune/handlebars-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/handlebars-1.svg"></a>             |   ![hbs-npm]    |   ![hbs-size]    | Compiles Handlebars to HTML                                                             |

[html-npm]: https://img.shields.io/npm/v/html-loader.svg
[html-size]: https://packagephobia.com/badge?p=html-loader
[pug-npm]: https://img.shields.io/npm/v/pug-loader.svg
[pug-size]: https://packagephobia.com/badge?p=pug-loader
[pug3-npm]: https://img.shields.io/npm/v/@webdiscus/pug-loader.svg
[pug3-size]: https://packagephobia.com/badge?p=@webdiscus/pug-loader
[jade-npm]: https://img.shields.io/npm/v/jade-loader.svg
[jade-size]: https://packagephobia.com/badge?p=jade-loader
[md-npm]: https://img.shields.io/npm/v/markdown-loader.svg
[md-size]: https://packagephobia.com/badge?p=markdown-loader
[posthtml-npm]: https://img.shields.io/npm/v/posthtml-loader.svg
[posthtml-size]: https://packagephobia.com/badge?p=posthtml-loader
[hbs-npm]: https://img.shields.io/npm/v/handlebars-loader.svg
[hbs-size]: https://packagephobia.com/badge?p=handlebars-loader

#### Styling

|                                                                     Name                                                                      |     Status     |  Install Size   | Description                                                              |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :------------: | :-------------: | :----------------------------------------------------------------------- |
|                                    <a href="https://github.com/webpack-contrib/style-loader">`<style>`</a>                                    |  ![style-npm]  |  ![style-size]  | Add exports of a module as style to DOM                                  |
|  <a href="https://github.com/webpack-contrib/css-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/css-3.svg"></a>   |   ![css-npm]   |   ![css-size]   | Loads CSS file with resolved imports and returns CSS code                |
| <a href="https://github.com/webpack-contrib/less-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/less-63.svg"></a> |  ![less-npm]   |  ![less-size]   | Loads and compiles a LESS file                                           |
| <a href="https://github.com/webpack-contrib/sass-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/sass-1.svg"></a>  |  ![sass-npm]   |  ![sass-size]   | Loads and compiles a Sass/SCSS file                                      |
|     <a href="https://github.com/shama/stylus-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/stylus.svg"></a>      | ![stylus-npm]  | ![stylus-size]  | Loads and compiles a Stylus file                                         |
|   <a href="https://github.com/postcss/postcss-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/postcss.svg"></a>    | ![postcss-npm] | ![postcss-size] | Loads and transforms a CSS/SSS file using [PostCSS](https://postcss.org) |

[style-npm]: https://img.shields.io/npm/v/style-loader.svg
[style-size]: https://packagephobia.com/badge?p=style-loader
[css-npm]: https://img.shields.io/npm/v/css-loader.svg
[css-size]: https://packagephobia.com/badge?p=css-loader
[less-npm]: https://img.shields.io/npm/v/less-loader.svg
[less-size]: https://packagephobia.com/badge?p=less-loader
[sass-npm]: https://img.shields.io/npm/v/sass-loader.svg
[sass-size]: https://packagephobia.com/badge?p=sass-loader
[stylus-npm]: https://img.shields.io/npm/v/stylus-loader.svg
[stylus-size]: https://packagephobia.com/badge?p=stylus-loader
[postcss-npm]: https://img.shields.io/npm/v/postcss-loader.svg
[postcss-size]: https://packagephobia.com/badge?p=postcss-loader

#### Frameworks

|                                                                             Name                                                                             |     Status     |  Install Size   | Description                                                                                            |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------: | :-------------: | :----------------------------------------------------------------------------------------------------- |
|               <a href="https://github.com/vuejs/vue-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/vue-9.svg"></a>               |   ![vue-npm]   |   ![vue-size]   | Loads and compiles Vue Components                                                                      |
|   <a href="https://github.com/webpack-contrib/polymer-webpack-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/polymer.svg"></a>   | ![polymer-npm] | ![polymer-size] | Process HTML & CSS with preprocessor of choice and `require()` Web Components like first-class modules |
| <a href="https://github.com/TheLarkInn/angular2-template-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/angular-icon-1.svg"></a> | ![angular-npm] | ![angular-size] | Loads and compiles Angular 2 Components                                                                |
|              <a href="https://github.com/riot/webpack-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/riot.svg"></a>              |  ![riot-npm]   |  ![riot-size]   | Riot official webpack loader                                                                           |
|          <a href="https://github.com/sveltejs/svelte-loader"><img width="48" height="48" src="https://worldvectorlogo.com/logos/svelte-1.svg"></a>           | ![svelte-npm]  | ![svelte-size]  | Official Svelte loader                                                                                 |

[vue-npm]: https://img.shields.io/npm/v/vue-loader.svg
[vue-size]: https://packagephobia.com/badge?p=vue-loader
[polymer-npm]: https://img.shields.io/npm/v/polymer-webpack-loader.svg
[polymer-size]: https://packagephobia.com/badge?p=polymer-webpack-loader
[angular-npm]: https://img.shields.io/npm/v/angular2-template-loader.svg
[angular-size]: https://packagephobia.com/badge?p=angular2-template-loader
[riot-npm]: https://img.shields.io/npm/v/riot-tag-loader.svg
[riot-size]: https://packagephobia.com/badge?p=riot-tag-loader
[svelte-npm]: https://img.shields.io/npm/v/svelte-loader.svg
[svelte-size]: https://packagephobia.com/badge?p=svelte-loader

### Performance

Webpack uses async I/O and has multiple caching levels. This makes webpack fast
and incredibly **fast** on incremental compilations.

### Module Formats

Webpack supports ES2015+, CommonJS and AMD modules **out of the box**. It performs clever static
analysis on the AST of your code. It even has an evaluation engine to evaluate
simple expressions. This allows you to **support most existing libraries** out of the box.

### [Code Splitting](https://webpack.js.org/guides/code-splitting/)

Webpack allows you to split your codebase into multiple chunks. Chunks are
loaded asynchronously at runtime. This reduces the initial loading time.

### [Optimizations](https://webpack.js.org/guides/production-build/)

Webpack can do many optimizations to **reduce the output size of your
JavaScript** by deduplicating frequently used modules, minifying, and giving
you full control of what is loaded initially and what is loaded at runtime
through code splitting. It can also make your code chunks **cache
friendly** by using hashes.

<h2>Contributing</h2>

**We want contributing to webpack to be fun, enjoyable, and educational for anyone, and everyone.** We have a [vibrant ecosystem](https://medium.com/webpack/contributors-guide/home) that spans beyond this single repo. We welcome you to check out any of the repositories in [our organization](https://github.com/webpack) or [webpack-contrib organization](https://github.com/webpack-contrib) which houses all of our loaders and plugins.

Contributions go far beyond pull requests and commits. Although we love giving you the opportunity to put your stamp on webpack, we also are thrilled to receive a variety of other contributions including:

- [Documentation](https://github.com/webpack/webpack.js.org) updates, enhancements, designs, or bugfixes
- Spelling or grammar fixes
- README.md corrections or redesigns
- Adding unit, or functional tests
- Triaging GitHub issues -- especially determining whether an issue still persists or is reproducible.
- [Searching #webpack on twitter](https://twitter.com/search?q=webpack) and helping someone else who needs help
- Teaching others how to contribute to one of the many webpack's repos!
- [Blogging, speaking about, or creating tutorials](https://github.com/webpack-contrib/awesome-webpack) about one of webpack's many features.
- Helping others in our webpack [gitter channel](https://gitter.im/webpack/webpack).
- [The Contributor's Guide to webpack](https://medium.com/webpack/contributors-guide/home)

To get started have a look at our [documentation on contributing](https://github.com/webpack/webpack/blob/main/CONTRIBUTING.md).

<h3>Creating your own plugins and loaders</h3>

If you create a loader or plugin, we would <3 for you to open source it, and put it on npm. We follow the `x-loader`, `x-webpack-plugin` naming convention.

<h2>Support</h2>

We consider webpack to be a low-level tool used not only individually but also layered beneath other awesome tools. Because of its flexibility, webpack isn't always the _easiest_ entry-level solution, however we do believe it is the most powerful. That said, we're always looking for ways to improve and simplify the tool without compromising functionality. If you have any ideas on ways to accomplish this, we're all ears!

If you're just getting started, take a look at [our new docs and concepts page](https://webpack.js.org/concepts/). This has a high level overview that is great for beginners!!

If you have discovered a 🐜 or have a feature suggestion, feel free to create an issue on GitHub.

<h2>Current project members</h2>

For information about the governance of the Node.js project, see [GOVERNANCE.md](./GOVERNANCE.md).

<h3>TSC (Technical Steering Committee)</h3>

- [alexander-akait](https://github.com/alexander-akait) -
  **Alexander Akait** <<sheo13666q@gmail.com>> (he/him)
- [ematipico](https://github.com/ematipico) -
  **Emanuele Stoppa** <<my.burning@gmail.com>> (he/him)
- [evenstensberg](https://github.com/evenstensberg) -
  **Even Stensberg** <<evenstensberg@gmail.com>> (he/him)
- [ovflowd](https://github.com/ovflowd) -
  **Claudio Wunder** <<cwunder@gnome.org>> (he/they)
- [snitin315](https://github.com/snitin315) -
  **Nitin Kumarr** <<snitin315@gmail.com>> (he/him)

<h3>Core Collaborators</h3>

- [jhnns](https://github.com/jhnns) -
  **Johannes Ewald** <<mail@johannesewald.de>>
- [sokra](https://github.com/sokra) -
  **Tobias Koppers** <<jackworks@protonmail.co>>
- [spacek33z](https://github.com/spacek33z) -
  **Kees Kluskens** <<kees@webduck.nl>>
- [TheLarkInn](https://github.com/TheLarkInn) -
  **Sean T. Larkin** <<selarkin@microsoft.com>>

<h2>Sponsoring</h2>

Most of the core team members, webpack contributors and contributors in the ecosystem do this open source work in their free time. If you use webpack for a serious task, and you'd like us to invest more time on it, please donate. This project increases your income/productivity too. It makes development and applications faster and it reduces the required bandwidth.

This is how we use the donations:

- Allow the core team to work on webpack
- Thank contributors if they invested a large amount of time in contributing
- Support projects in the ecosystem that are of great value for users
- Support projects that are voted most (work in progress)
- Infrastructure cost
- Fees for money handling

<h3>Premium Partners</h3>

<div align="center">

<a href="https://www.ag-grid.com/?utm_source=webpack&utm_medium=banner&utm_campaign=sponsorship" target="_blank"><img align="center" src="https://raw.githubusercontent.com/webpack/media/2b399d58/horiz-banner-ad-ag-grid.png">
</a>

</div>

<h3>Other Backers and Sponsors</h3>

Before we started using OpenCollective, donations were made anonymously. Now that we have made the switch, we would like to acknowledge these sponsors (and the ones who continue to donate using OpenCollective). If we've missed someone, please send us a PR, and we'll add you to this list.

<div align="center">

<a href="https://angular.io/" target="_blank" title="JS framework">Angular</a>
<a href="https://moonmail.io" target="_blank" title="Email Marketing Software">MoonMail</a>
<a href="https://monei.net" target="_blank" title="Best payment gateway rates">MONEI</a>

</div>

<h3>Gold Sponsors</h3>

[Become a gold sponsor](https://opencollective.com/webpack#sponsor) and get your logo on our README on GitHub with a link to your site.

<div align="center">

<a href="https://opencollective.com/webpack/goldsponsor/0/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/1/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/2/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/3/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/4/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/5/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/5/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/6/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/7/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/8/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/9/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/10/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/10/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/11/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/11/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/12/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/12/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/13/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/13/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/14/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/14/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/15/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/15/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/16/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/16/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/17/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/17/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/18/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/18/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/19/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/19/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/20/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/20/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/21/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/21/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/22/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/22/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/23/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/23/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/24/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/24/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/25/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/25/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/26/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/26/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/27/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/27/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/28/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/28/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/goldsponsor/29/website?requireActive=false" target="_blank"><img width="150" src="https://opencollective.com/webpack/goldsponsor/29/avatar.svg?requireActive=false"></a>

</div>

<h3>Silver Sponsors</h3>

[Become a silver sponsor](https://opencollective.com/webpack#sponsor) and get your logo on our README on GitHub with a link to your site.

<div align="center">

<a href="https://opencollective.com/webpack/silversponsor/0/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/1/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/2/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/3/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/4/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/5/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/5/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/6/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/7/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/8/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/9/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/10/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/10/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/11/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/11/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/12/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/12/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/13/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/13/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/14/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/14/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/15/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/15/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/16/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/16/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/17/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/17/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/18/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/18/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/19/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/19/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/20/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/20/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/21/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/21/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/22/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/22/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/23/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/23/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/24/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/24/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/25/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/25/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/26/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/26/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/27/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/27/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/28/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/28/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/silversponsor/29/website?requireActive=false" target="_blank"><img width="120" src="https://opencollective.com/webpack/silversponsor/29/avatar.svg?requireActive=false"></a>

</div>

<h3>Bronze Sponsors</h3>

[Become a bronze sponsor](https://opencollective.com/webpack#sponsor) and get your logo on our README on GitHub with a link to your site.

<div align="center">

<a href="https://opencollective.com/webpack/sponsor/0/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/1/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/2/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/3/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/4/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/5/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/5/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/6/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/7/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/8/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/9/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/10/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/10/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/11/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/11/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/12/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/12/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/13/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/13/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/14/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/14/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/15/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/15/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/16/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/16/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/17/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/17/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/18/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/18/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/19/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/19/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/20/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/20/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/21/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/21/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/22/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/22/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/23/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/23/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/24/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/24/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/25/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/25/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/26/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/26/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/27/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/27/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/28/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/28/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/29/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/29/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/30/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/30/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/31/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/31/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/32/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/32/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/33/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/33/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/34/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/34/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/35/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/35/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/36/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/36/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/37/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/37/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/38/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/38/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/39/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/39/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/40/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/40/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/41/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/41/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/42/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/42/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/43/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/43/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/44/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/44/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/45/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/45/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/46/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/46/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/47/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/47/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/48/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/48/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/49/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/49/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/50/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/50/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/51/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/51/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/52/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/52/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/53/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/53/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/54/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/54/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/55/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/55/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/56/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/56/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/57/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/57/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/58/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/58/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/59/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/59/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/60/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/60/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/61/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/61/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/62/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/62/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/63/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/63/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/64/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/64/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/65/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/65/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/66/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/66/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/67/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/67/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/68/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/68/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/69/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/69/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/70/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/70/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/71/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/71/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/72/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/72/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/73/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/73/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/74/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/74/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/75/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/75/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/76/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/76/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/77/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/77/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/78/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/78/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/79/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/79/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/80/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/80/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/81/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/81/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/82/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/82/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/83/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/83/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/84/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/84/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/85/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/85/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/86/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/86/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/87/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/87/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/88/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/88/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/89/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/89/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/90/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/90/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/91/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/91/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/92/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/92/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/93/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/93/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/94/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/94/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/95/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/95/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/96/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/96/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/97/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/97/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/98/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/98/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/99/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/99/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/sponsor/100/website?requireActive=false" target="_blank"><img width="100" src="https://opencollective.com/webpack/sponsor/100/avatar.svg?requireActive=false"></a>

</div>

<h3>Backers</h3>

[Become a backer](https://opencollective.com/webpack#backer) and get your image on our README on GitHub with a link to your site.

<a href="https://opencollective.com/webpack/backer/0/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/1/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/2/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/3/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/4/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/5/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/5/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/6/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/7/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/8/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/9/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/10/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/10/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/11/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/11/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/12/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/12/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/13/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/13/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/14/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/14/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/15/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/15/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/16/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/16/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/17/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/17/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/18/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/18/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/19/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/19/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/20/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/20/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/21/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/21/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/22/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/22/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/23/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/23/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/24/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/24/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/25/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/25/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/26/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/26/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/27/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/27/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/28/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/28/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/29/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/29/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/30/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/30/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/31/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/31/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/32/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/32/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/33/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/33/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/34/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/34/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/35/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/35/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/36/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/36/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/37/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/37/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/38/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/38/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/39/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/39/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/40/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/40/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/41/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/41/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/42/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/42/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/43/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/43/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/44/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/44/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/45/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/45/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/46/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/46/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/47/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/47/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/48/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/48/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/49/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/49/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/50/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/50/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/51/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/51/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/52/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/52/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/53/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/53/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/54/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/54/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/55/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/55/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/56/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/56/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/57/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/57/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/58/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/58/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/59/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/59/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/60/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/60/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/61/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/61/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/62/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/62/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/63/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/63/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/64/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/64/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/65/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/65/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/66/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/66/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/67/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/67/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/68/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/68/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/69/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/69/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/70/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/70/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/71/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/71/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/72/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/72/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/73/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/73/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/74/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/74/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/75/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/75/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/76/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/76/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/77/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/77/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/78/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/78/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/79/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/79/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/80/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/80/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/81/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/81/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/82/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/82/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/83/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/83/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/84/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/84/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/85/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/85/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/86/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/86/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/87/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/87/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/88/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/88/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/89/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/89/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/90/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/90/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/91/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/91/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/92/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/92/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/93/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/93/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/94/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/94/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/95/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/95/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/96/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/96/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/97/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/97/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/98/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/98/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/99/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/99/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/webpack/backer/100/website?requireActive=false" target="_blank"><img width="30" src="https://opencollective.com/webpack/backer/100/avatar.svg?requireActive=false"></a>

<h2>Special Thanks to</h2>
<p>(In chronological order)</p>

- [@google](https://github.com/google) for [Google Web Toolkit (GWT)](http://www.gwtproject.org/), which aims to compile Java to JavaScript. It features a similar [Code Splitting](http://www.gwtproject.org/doc/latest/DevGuideCodeSplitting.html) as webpack.
- [@medikoo](https://github.com/medikoo) for [modules-webmake](https://github.com/medikoo/modules-webmake), which is a similar project. webpack was born because of the desire for code splitting for modules such as Webmake. Interestingly, the [Code Splitting issue is still open](https://github.com/medikoo/modules-webmake/issues/7) (thanks also to @Phoscur for the discussion).
- [@substack](https://github.com/substack) for [browserify](https://browserify.org/), which is a similar project and source for many ideas.
- [@jrburke](https://github.com/jrburke) for [require.js](https://requirejs.org/), which is a similar project and source for many ideas.
- [@defunctzombie](https://github.com/defunctzombie) for the [browser-field spec](https://github.com/defunctzombie/package-browser-field-spec), which makes modules available for node.js, browserify and webpack.
- [@sokra](https://github.com/sokra) for creating webpack.
- Every early webpack user, which contributed to webpack by writing issues or PRs. You influenced the direction.
- All past and current webpack maintainers and collaborators.
- Everyone who has written a loader for webpack. You are the ecosystem...
- Everyone not mentioned here but that has also influenced webpack.

[npm]: https://img.shields.io/npm/v/webpack.svg
[npm-url]: https://npmjs.com/package/webpack
[node]: https://img.shields.io/node/v/webpack.svg
[node-url]: https://nodejs.org
[prs]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs-url]: https://webpack.js.org/contribute/
[builds1]: https://github.com/webpack/webpack/actions/workflows/test.yml/badge.svg
[builds1-url]: https://github.com/webpack/webpack/actions/workflows/test.yml
[builds2]: https://dev.azure.com/webpack/webpack/_apis/build/status%2Fwebpack.webpack?branchName=main
[builds2-url]: https://dev.azure.com/webpack/webpack/_build/latest?definitionId=3&branchName=main
[dependency-review-url]: https://github.com/webpack/webpack/actions/workflows/dependency-review.yml
[dependency-review]: https://github.com/webpack/webpack/actions/workflows/dependency-review.yml/badge.svg
[cover]: https://codecov.io/gh/webpack/webpack/branch/master/graph/badge.svg?token=mDP3mQJNnn
[cover-url]: https://codecov.io/gh/webpack/webpack
