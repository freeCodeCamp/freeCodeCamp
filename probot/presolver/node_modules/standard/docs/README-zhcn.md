<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/standard/standard/master/sticker.svg" alt="Standard - JavaScript 代码规范" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/standard/standard"><img src="https://img.shields.io/travis/standard/standard/master.svg" alt="travis"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/eslint-config-standard"><img src="https://img.shields.io/npm/dm/eslint-config-standard.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<h4 align="center">One JavaScript Style to Rule Them All</h4>

<p align="center">
  <a href="README-en.md">English</a> •
  <a href="README-esla.md">Español (Latinoamérica)</a> •
  <a href="README-iteu.md">Italiano (Italian)</a> •
  <a href="README-kokr.md">한국어 (Korean)</a> •
  <a href="README-ptbr.md">Português (Brasil)</a> •
  <a href="README-zhcn.md">简体中文 (Simplified Chinese)</a> •
  <a href="README-zhtw.md">繁體中文 (Taiwanese Mandarin)</a>
</p>

<br>

## JavaScript 代码规范，自带 linter & 代码自动修正

本工具通过以下三种方式为你（及你的团队）节省大量时间：

- **无须配置。** 史上最便捷的统一代码风格的方式，轻松拥有。
- **自动代码格式化。** 只需运行 `standard --fix` 从此和脏乱差的代码说再见。
- **提前发现风格及程序问题。** 减少代码审查过程中反反复复的修改过程，节约时间。

无须犹豫。再也不用维护 `.eslintrc`, `.jshintrc`, or `.jscsrc` 。开箱即用。

安装：

```
npm install standard --save-dev
```

## 细则

- **使用两个空格** – 进行缩进
- **字符串使用单引号** – 需要转义的地方除外
- **不再有冗余的变量** – 这是导致 *大量* bug 的源头!
- **无分号** – [这][1][没什么不好。][2][不骗你！][3]
- **行首不要以 `(`, `[`, or `` ` `` 开头**
  - 这是省略分号时**唯一**会造成问题的地方 – *工具里已加了自动检测！*
  - [详情][4]
- **关键字后加空格** `if (condition) { ... }`
- **函数名后加空格** `function name (arg) { ... }`
- 坚持使用全等 `===` 摒弃 `==` 一但在需要检查 `null || undefined` 时可以使用 `obj == null`。
- 一定要处理 Node.js 中错误回调传递进来的 `err` 参数。
- 使用浏览器全局变量时加上 `window` 前缀 – `document` 和 `navigator` 除外
  - 避免无意中使用到了这些命名看上去很普通的全局变量， `open`, `length`,
    `event` 还有 `name`。
- **[查看更多][5]** – *为何不试试 `standard` 规范呢！*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES-zhcn.md#semicolons
[5]: RULES-zhcn.md#javascript-standard-style

说了那么多，看看[这个遵循了 Standard 规范的示例文件](https://github.com/expressjs/body-parser/blob/master/index.js) 中的代码吧。或者，这里还有[一大波使用了此规范的项目](https://raw.githubusercontent.com/standard/standard-packages/master/all.json) 代码可供参考。

## 目录

-  上手
  - [安装](#install)
  - [使用](#usage)
  - [如果你聪明的话会这样做](#what-you-might-do-if-youre-clever)
- FAQ
  - [为何要使用 JavaScript Standard 规范？](#why-should-i-use-javascript-standard-style)
  - [谁在用 JavaScript Standard 规范？](#who-uses-javascript-standard-style)
  - [有现成的编辑器插件吗？](#are-there-text-editor-plugins)
  - [有专属徽章可以用来放到项目的 README 文件中吗？](#is-there-a-readme-badge)
  - [如果我不同意某条规则，可以改吗？](#i-disagree-with-rule-x-can-you-change-it)
  - [毕竟这不是一份正式的 Web 规范啊！](#but-this-isnt-a-real-web-standard)
  - [有自动格式化工具么？](#is-there-an-automatic-formatter)
  - [如何排除某些文件？](#how-do-i-ignore-files)
  - [如何隐藏某类警告？](#how-do-i-hide-a-certain-warning)
  - [使用的三方插件向全局暴露了变量，如何避免 "variable is not defined" 的错误提示？](#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors)
  - [如何才能使用处于实验阶段的 JavaScript 特性（譬如 ES Next）？](#how-do-i-use-experimental-javascript-es-next-features)
  - [我能使用其他 JavaScript 变种吗，例如 Flow？](#can-i-use-a-javascript-language-variant-like-flow)
  - [如何与 Mocha，Jasmine 和 QUnit 这些测试工具搭配工作?](#what-about-mocha-jasmine-qunit-etc)
  - [Web Workers 有考虑过么？](#what-about-web-workers)
  - [Markdown 或者 HTML 文件中的代码能检查到吗？](#can-i-check-code-inside-of-markdown-or-html-files)
  - [有为 git 添加 `pre-commit` 钩子么？](#is-there-a-git-pre-commit-hook)
  - [怎样使输出好看些，带颜色？](#how-do-i-make-the-output-all-colorful-and-pretty)
  - [有相关的 Node.js API 没？](#is-there-a-nodejs-api)
  - [如何参与到 `standard` 规范中来？](#how-do-i-contribute-to-standard)
- [协议](#license)

## 安装

使用本规范最便捷的方式是全局安装，运行：

```bash
$ npm install standard --global
```

或者非全局的方式，针对某个项目进行安装：

```bash
$ npm install standard --save-dev
```

*注意：运行以上命令的前提是已经安装了 [Node.js](http://nodejs.org) 和 [npm](https://npmjs.com) 。*

## 使用

安装完就可以开心使用了。最简单的使用场景是检查项目内所有的 JavaScript 文件：

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

可以跟上 glob 形式的路径参数，但记得带引号以确保 `standard` 工具正确解析，否则会被命令行解析。

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**注意：** `standard` 默认查找 `**/*.js`, `**/*.jsx` 所匹配到的文件。

## 如果你聪明的话会这样做

1. 添加配置到 `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "standard": "*"
    },
    "scripts": {
      "test": "standard && node my-tests.js"
    }
  }
  ```

2. 这样检查工作就会在运行 `npm test` 自动进行

  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. 从此告别在提 PR 时的代码风格的问题！

## 为何要使用 JavaScript Standard 规范？

本规范特点之一是简洁。谁也不想为每个项目维护一份有成百上千行语句的代码风格配置文件。有此规范就够了。

本工具通过以下三种方式为你（及你的团队）节省大量时间：

- **无须配置。** 史上最便捷的统一代码风格的方式，轻松拥有。
- **自动的代码格式化。** 只需运行 `standard --fix` 从此和脏乱差的代码说再见。
- **提前发现风格及程序问题。** 减少代码审查时的反反复复修改过程，节约时间。

一旦使用 `standard` 规范表明代码的简明性及社区的约定要高于个人的编码风格。这不一定100%适用于所有项目和多元的编程文化，但开源项目代码容易受到新手的影响。把规范讲明，严格执行对于项目的长远维护不无裨益。

## 谁在用 JavaScript Standard 规范？

我们是有群众基础的！

[<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/npm.png>](https://www.npmjs.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/github.png>](https://github.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/opbeat.png>](https://opbeat.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nearform.png>](http://www.nearform.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/brave.png>](https://www.brave.com) |
|---|---|---|---|---|

| [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zeit.png>](https://zeit.co) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/typeform.jpg>](https://www.typeform.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/express.png>](http://expressjs.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/webtorrent.png>](https://webtorrent.io) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/ipfs.png>](https://ipfs.io) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/dat.png>](https://datproject.org) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bitcoinjs.png>](https://bitcoinjs.org) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/atom.png>](https://atom.io) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/electron.png>](http://electron.atom.io) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/voltra.png>](https://voltra.co) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/treasuredata.png>](https://www.treasuredata.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/clevertech.png>](https://clevertech.biz) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/studynotes.jpg>](https://www.apstudynotes.org) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/optiopay.png>](https://www.optiopay.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/jaguar-landrover.png>](https://www.jlrtechincubator.com/jlrti/) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/bustle.jpg>](https://www.bustle.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/zentrick.png>](https://www.zentrick.com) |
|---|---|---|---|---|

[<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/taser.png>](https://www.taser.com) |
|---|---|---|---|

除公司组织外，[很多个人](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)也在项目中使用，这里就不一一罗列了。

并且 `standard` 在 GitHub 的[代码检查类工具](https://github.com/showcases/clean-code-linters) 展示列表中也排名第一。

## 有现成的编辑器插件吗？

首先安装 `standard`。剩下的就是不同编译器安装对应的插件：

### Sublime Text

通过 **[Package Control][sublime-1]**，安装 **[SublimeLinter][sublime-2]** 和
**[SublimeLinter-contrib-standard][sublime-3]**。

如果想要保存时自动格式化，还需安装 **[StandardFormat][sublime-4]**。

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

安装 **[linter-js-standard][atom-1]**。

如果想要保存时自动格式化，还需安装 **[standard-formatter][atom-2]**。安装 **[standardjs-snippets][atom-3]** 可以获得 snippets 特性。

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

### Visual Studio Code

安装 **[vscode-standardjs][vscode-1]**（已经包含了自动格式化）。

安装 **[vscode-standardjs-snippets][vscode-2]** 以获得 JS snippets。安装 **[vscode-react-standard][vscode-3]** 以获得 React snippets。

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

### Vim

安装 **[Syntastic][vim-1]** 并添加如下配置到 `.vimrc`：

```vim
let g:syntastic_javascript_checkers = ['standard']
```

如果想要保存时自动格式化，添加以下配置到 `.vimrc`：

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

### Emacs

安装 **[Flycheck][emacs-1]** 后查看 **[manual][emacs-2]** 以了解如何在项目在启用。

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

插件中搜索 **["Standard Code Style"][brackets-1]** 然后点击 "Install"。

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains 等 jetbrains 全家桶系列)

WebStorm [最近宣布](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)在其 IDE 中
 自带 `standard` 规范。

但是如果你仍然想自己动手配置，[那么请看此教程][webstorm-1]。此教程适用于 JetBrains 全家桶，包括 PhpStorm、IntelliJ、RubyMine 等。

[webstorm-1]: docs/webstorm.md

## 有专属徽章可以用来放到项目的 README 文件中吗？

必需的！如果你的项目使用了 `standard` 规范，可以任选一个下面的徽章放入项目中来进行展示。

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```

## 如果我不同意某条规则，可以改吗？

不行。制定这套 `standard` 规范的目的就是让大家都不必再花时间浪费在[无谓的][bikeshedding]代码风格之争上面了。关于缩进该用制表符还是空格这个问题已经争论了很久了，永远也没有答案。争论这个都可以把需求提前写完了。遵循 `standard` 规范，你就不用再犹豫了，毕竟不管怎样争论总归会选择一种风格的。希望大家也能在个人语义和普适价值上做一个权衡。

如果你非要自己去配置成百上千项的 ESLint 规则，那你可以直接使用
[eslint-config-standard](https://github.com/standard/eslint-config-standard) 来将个人配置包装在上层。

小贴士：选择 `standard` 然后保持吧。把时间留下来解决其他有意义的问题！\(^____^)/

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## 毕竟这不是一份正式的 Web 规范啊！

确实！这份规范不隶属于任何官方组织，所以才叫 `standard/standard` 而不是 `ECMA/standard` 嘛。

而 `standard` (标准) 一词在这里不局限于 “web 标准” :-) 。 举个例子：

- 这个模块帮助我们将代码维持在一个*高的水准（standard of quality）*
- 这个模块确定项目中的新手遵循一些基本的*样式规范（style standards）*

## 有自动格式化工具么？

当然！你可以使用 `standard --fix` 来纠正大部分的代码问题。

`standard --fix` 可以修正大部分约定俗成的问题，但有些错误（譬如忘记了错误处理）只能手动去修复了。

为了使用方便，`standard` 会在检测到有能够自动被修复的问题的时候，给出相应的提示 "`运行 standard --fix 来自动修正一些问题`"。

## 如何排除某些文件？

`node_modules/`、`coverage/`、`vendor/`、`*.min.js`、`bundle.js` 这些目录，还有以 `.` 开头的文件（譬如 `.git/`）或者文件夹自动被排除在外。

`.gitignore` 里配置的文件也会自动排除掉。

有时你还是需要添加一些自定义的排除文件，可以在 `package.json` 里添加 `standard.ignore` 属性来配置：

```json
"standard": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

## 如何隐藏某类警告？

很少的情况下你需要绕开 `standard` 以隐藏某些警告信息。

JavaScript Standard 代码规范底层使用的是 [ESLint](http://eslint.org/)。所以如果你想隐藏某些警告，方法和使用 ESLint 时一样。

打印详细信息（这样你就能找到你想隐藏的警告在配置中对应的名称了）：

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

对某一行禁用**所有规则**：
```js
file = 'I know what I am doing' // eslint-disable-line
```

或者，**只禁**用 `"no-use-before-define"` 这条规则：
```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

或者，对**多行**禁用 `"no-use-before-define"` 这一规则：
```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

## 使用的三方插件向全局暴露了变量，如何避免 "variable is not defined" 的错误提示？

一些三方库（比如 `mocha`）会向全局暴露变量（`describe`、`it`）。这些变量或方法即没有定义，也没有被 `require` 进来，所以 `standard` 会报出变量未定义的警告（这种警告通常情况下是很有用的）。这种情况下我们想对这些全局变量禁用检查。

为了让 `standard` 检测通过（同时也使代码更加易懂），在文件顶部添加如下配置：

```js
/* global myVar1, myVar2 */
```

但如果你需要添加的文件太多，这种方式就显得繁琐了。这种情况下，运行：

```bash
$ standard --global myVar1 --global myVar2
```

或者在 `package.json` 里配置：

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

*注意：`global` 和 `globals` 效果一样*

## 如何才能使用处于实验阶段的 JavaScript 特性（譬如 ES Next）？

`standard` 支持最新的 ECMAScript 特性，ES8（ES2017），包括处于 “Stage 4” 仍在提案阶段的特性。

为了支持实验性的特性，`standard` 支持自定义 JavaScript 解析器。添加自定义解析器前请思考一下必要性。

从 npm 安装并使用自定义的解析器（示例：`npm install babel-eslint`）：

```bash
$ standard --parser babel-eslint
```

或者将其添加到  `package.json` 配置中：

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

如果全局安装（`npm install standard --global`）了 `standard` 的话，那么请确保 `babel-eslint` 也用 `npm install babel-eslint --global` 全局安装。

## 我能使用其他 JavaScript 变种吗，例如 Flow？

同样地，想要使用一个 JS 变种之前，先考虑添加和使用它所带来的复杂度看是否值得这么去做。

`standard` 支持 ESLint 插件。在 `standard` 处理代码前，使用任何一个插件来将代码编译成合法的 JS 即可。 从 npm 安装一个自定义的解析器 (示例：`npm install eslint-plugin-flowtype`) 然后运行：

```bash
$ standard --plugin flowtype
```

或者添加到`package.json`:

```json
{
  "standard": {
    "plugins": [ "flowtype" ]
  }
}
```

如果全局安装（`npm install standard --global`）了 `standard` 的话，那么请确保 `eslint-plugin-flowtype` 也用 `npm install eslint-plugin-flowtype --global` 全局安装。

*注意：`plugin` 和 `plugins` 等价*

## 如何与 Mocha，Jasmine 和 QUnit 这些测试工具搭配工作?

为了能让 mocha 在你的测试文件中工作，将以下配置添加到测试文件头部：

```js
/* eslint-env mocha */
```

或者运行：

```bash
$ standard --env mocha
```

上面 `mocha` 也可以是 `jasmine`, `qunit`, `phantomjs` 等同类工具。这里有个来自 ESLint 的完整列表
[环境配置](http://eslint.org/docs/user-guide/configuring.html#specifying-environments)
文档。环境中所有可用的全局变量可以这个
[globals](https://github.com/sindresorhus/globals/blob/master/globals.json)  npm 包中查到。

*注意: `env` 与 `envs` 用哪个都一样。*

## Web Workers 有考虑过么？

添加以下注释到文件头部：

```js
/* eslint-env serviceworker */
```

这样可以让 `standard` 知道 `self` 是 web worker 中的全局变量（同时也让人更容易看懂）。

## Markdown 或者 HTML 文件中的代码能检查到吗？

可以使用 [`standard-markdown`](https://www.npmjs.com/package/standard-markdown) 来检查 Markdown 里的区位码。

此外，也有 ESLint 插件可以检查 Markdown、HTML 等其他类型文件中的代码：

检查 Markdown 文件中的代码，可以用这个 ESLint 插件：

```bash
$ npm install eslint-plugin-markdown
```

然后运行以下命令来检查文件代码块中的代码：

```bash
$ standard --plugin markdown '**/*.md'
```

HTML 文件可以下面这个插件：

```bash
$ npm install eslint-plugin-html
```

然后运行以下命令来检查包含在 `<script>` 标签中的代码：

```bash
$ standard --plugin html '**/*.html'
```

## 有为 git 添加 `pre-commit` 钩子么？

这个问题问得好！

```sh
#!/bin/sh
# 确保将要提交的所有 JavaScript 代码通过 standard 规范的检查
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```

## 怎样使输出好看些，带颜色？

自带的输出信息简洁原始，如果想要炫酷好看，安装 [snazzy](https://www.npmjs.com/package/snazzy)：

```bash
$ npm install snazzy
```

然后运行：

```bash
$ standard --verbose | snazzy
```

还有 [standard-tap](https://www.npmjs.com/package/standard-tap)、
[standard-json](https://www.npmjs.com/package/standard-json)、
[standard-reporter](https://www.npmjs.com/package/standard-reporter) 和
[standard-summary](https://www.npmjs.com/package/standard-summary) 这些类似的工具。

## 有相关的 Node.js API 没？

有！

### `standard.lintText(text, [opts], callback)`

检查传入的  `text`。需要提供一个 `opts` 配置参数：

```js
{
  cwd: '',      // 当前工作目录（默认为：process.cwd()）
  filename: '', // 需要检查的文件的路径（可选，虽然有些 eslint 插件需要该参数）
  fix: false,   // 是否自动修复问题
  globals: [],  // 声明需要跳过检测的定义全局变量
  plugins: [],  // 自定义的 eslint 插件列表
  envs: [],     // 自定义的 eslint 环境
  parser: ''    // 自定义的 js 解析器（例如 babel-eslint）
}
```

如果 `package.json` 有相应配置也会自动被读取到。

完成后会调用 `callback` 回调并传入  `Error` 和 `results`。

包含结果的  `results` 包含如下属性：

```js
var results = {
  results: [
    {
      filePath: '',
      messages: [
        { ruleId: '', message: '', line: 0, column: 0 }
      ],
      errorCount: 0,
      warningCount: 0,
      output: '' // fixed source code (only present with {fix: true} option)
    }
  ],
  errorCount: 0,
  warningCount: 0
}
```

### `results = standard.lintTextSync(text, [opts])`

`standard.lintText()` 的同步版本。如果运行出错，会抛出异常。否则返回 `results`。

### `standard.lintFiles(files, [opts], callback)`

检查以 glob 形式指定的 `files` 参数所匹配到的所有文件。可以传入一个 `opts` 配置参数：

```js
var opts = {
  ignore: [],   // glob 形式的排除列表 (一般无须配置)
  cwd: '',      // 当前工作目录（默认为：process.cwd()）
  fix: false,   // 是否自动修复问题
  globals: [],  // 声明需要跳过检测的定义全局变量
  plugins: [],  // eslint 插件列表
  envs: [],     // eslint 环境
  parser: ''    // js 解析器（例如 babel-eslint）
}
```

回调同上。

## 如何参与到 `standard` 规范中来？

欢迎参与进来！逛逛 [issues](https://github.com/standard/standard/issues) 或者 [PRs](https://github.com/standard/standard/pulls) 页面，如果发现没有找到想要的问题可以自己提一个。

来 freenode 的 `#standard` 频道与其他人一起聊天讨论！

以下是一些 `standard` 生态里比较重要的包：

- **[standard](https://github.com/standard/standard)** - 本仓库
  - **[standard-engine](https://github.com/flet/standard-engine)** - 一个 eslint 命令行引擎
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** -standard 规范的 eslint 检查器
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - standard (JSX) 的 eslint 规范
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - standard 规范自定义的 eslint 规则（不在 eslint 核心规则里面）
  - **[eslint](https://github.com/eslint/eslint)** - standard 基于它来实现的
- **[snazzy](https://github.com/standard/snazzy)** - 美化输出
- **[standard-www](https://github.com/standard/standard-www)** - https://standardjs.com 站点的源码
- **[semistandard](https://github.com/Flet/semistandard)** - standard 规范带逗号的版本（如果你需要的话）

还有很多 **[编辑器插件](#text-editor-plugins)**、一个
**[使用 `standard` 规范开发的 npm 包](https://github.com/standard/standard-packages)**的列表、还有一分非常棒的**[ `standard` 生态中所使用到的包](https://github.com/standard/awesome-standard)**的列表。

## 协议

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
