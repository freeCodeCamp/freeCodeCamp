<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/standard/standard/master/sticker.svg" alt="Standard － JavaScript 樣式教學" width="200"></a>
  <br>
  JavaScript Standard Style
  <br>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/standard/standard"><img src="https://img.shields.io/travis/standard/standard/master.svg" alt="Travis"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/dm/standard.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/standard"><img src="https://img.shields.io/npm/v/standard.svg" alt="npm version"></a>
</p>

<h4 align="center">統一 JavaScript，只需一種樣式</h4>

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

什麼都不用想。不用管理 `.eslintrc` 、 `.jshintrc` 或 `.jscsrc` 等檔案。就是這麼容易。

這個模組透過兩種方法，省下你（和其他人！）的時間：

- **不用設定檔：** 在專案中最簡單的方法去強迫統一樣式，就是不用設定檔。
- **在提交 PR 前就可以發現樣式錯誤：** 幫專案維護者和貢獻者省下寶貴的 Code Review 時間，減少來回審核的次數。

安裝：

```
npm install standard --save-dev
```

## 語法規則

- **兩個空白** － 當作縮排
- **字串用單引號** － 除非要避免跳脫字元
- **沒有不必要的變數** － 這可以解決 *超多* 的 Bug ！
- **不要加分號** － [這真的][1] [很 OK，][2] [真的！][3]
- **絕對不要用 `(` 、 `[` 或 `` ` `` 當開頭**
  - 這是不用分號 **唯一** 可能遇到的問題 － *那就自動幫你檢查吧！*
  - [更多解釋][4]
- **關鍵字後加空白** `if (condition) { ... }`
- **函數名稱後加空白** `function name (arg) { ... }`
- 統一用 `===` 取代 `==` － 但是 `obj == null` 可以用來檢查 `null || undefined`。
- 一定要例外處理 node.js 中的 `err` 參數
- 一定要對瀏覽器中的全域變數加上 `window` 前綴 － 除了 `document` 和 `navigator` 可以不用
  - 避免使用那些命名得很爛的全域變數，像是 `open` 、 `length` 、 `event` 和 `name`。
- **還有 [更多更多的好處][5]** － *今天就來試試 `standard` 吧！*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

看看一些[用 JavaScript Standard Style 寫的範例](https://github.com/expressjs/body-parser/blob/master/index.js)來了解更多，或查看其他[數以千計使用 `standard` 的專案。](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)

## 目錄

- 快速入門
  - [安裝](#安裝)
  - [用法](#用法)
  - [如果你還是不懂的話可以](#如果你還是不懂的話可以)
- FAQ
  - [為什麼我要用 JavaScript Standard Style？](#為什麼我要用-javascript-standard-style)
  - [誰在用 JavaScript Standard Style？](#誰在用-javascript-standard-style)
  - [有文字編輯器的外掛嗎？](#有文字編輯器的外掛嗎)
  - [有 README 專用的 standard 徽章嗎？](#有-readme-專用的-standard-徽章嗎)
  - [我不同意某條規定，你們可以改一下嗎？](#我不同意某條規定你們可以改一下嗎)
  - [但這不是真實網路中的標準！](#但這不是真實網路中的標準)
  - [有自動修正的工具嗎？](#有自動修正的工具嗎)
  - [如何忽略某些檔案？](#如何忽略某些檔案)
  - [如何隱藏某些警告？](#如何隱藏某些警告)
  - [我使用的套件庫污染了全域變數，該如何避免出現 "variable is not defined" 錯誤？](#我使用的套件庫污染了全域變數該如何避免出現-variable-is-not-defined-錯誤)
  - [如何使用實驗性質的 JavaScript (ES Next) 新語法？](#如何使用實驗性質的-javascript-es-next-新語法)
  - [我可以使用 JavaScript 的變體，像是 Flow 嗎？](#我可以使用-javascript-的變體像是-flow-嗎)
  - [Mocha、Jasmine、QUnit 等等套件呢？](#mochajasminequnit-等等套件呢)
  - [Web Workers 呢？](#web-workers-呢)
  - [可以檢查 Markdown 或 HTML 檔裡面的程式嗎？](#可以檢查-markdown-或-html-檔裡面的程式嗎)
  - [有 Git `pre-commit` 的外掛嗎？](#有-git-pre-commit-的外掛嗎)
  - [如何將輸出加上顏色？](#如何將輸出加上顏色)
  - [有 Node.js 的 API 嗎？](#有-nodejs-的-api-嗎)
  - [如何貢獻 `standard`？](#如何貢獻-standard)
- [授權](#授權)

## 安裝

使用 JavaScript Standard Style 最簡單的方法就是安裝在全域下，變成一個 Node 指令列程式。在 Terminal 中執行以下指令來安裝：

```bash
$ npm install standard --global
```

或者，你也可以在單一專案下局部的安裝 `standard`：

```bash
$ npm install standard --save-dev
```
*注意: 為了執行前面的指令，請確保你已經安裝了  [Node.js](http://nodejs.org) 和 [npm](https://npmjs.com)。*

## 用法

在你安裝 `standard` 之後，你就可以使用 `standard` 這支程式了。最簡單的用法就是在當前目錄下檢查所有 JavaScript 檔案的樣式：

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

你也可以選擇性的檢查部分目錄們（請確保路徑前後有引號，避免出錯）。

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**注意：** `standard` 預設會檢查所有符合名稱為 `**/*.js` 和 `**/*.jsx` 的檔案。

## 如果你還是不懂的話可以

1. 把以下加入 `package.json`

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

2. 這樣當你執行 `npm test` 的時候，就會自動檢查樣式了

  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. 從此跟樣式不符的 PR 說掰掰！

## 為什麼我要用 JavaScript Standard Style？

JavaScript Standard Style 的美來自於它的簡單，沒有人想要在每個專案、模組中維護好幾個數百行的樣式設定檔吧？別做傻事啊！

這個模組透過兩種方法，省下你的時間：

- **不用設定檔：** 在專案中最簡單的方法去強迫統一樣式，就是不用設定檔。
- **在提交 PR 前就可以發現樣式錯誤：** 幫專案維護者和貢獻者省下寶貴的 Code Review 時間，減少來回審核的次數。

採用 `standard style` 代表把程式碼的簡潔和群體規範，看得比個人風格重要。這可能不是對於所有專案和開發環境都合情合理。然而，開源軟體可能是一個對於新手充滿敵意的環境，訂定簡單、一致的貢獻準則，才可以專案更健康，有更多新人投入。

## 誰在用 JavaScript Standard Style？

超多人的啦！

[<img width=150 src=../docs/logos/npm.png>](https://www.npmjs.com) | [<img width=150 src=../docs/logos/github.png>](https://github.com) | [<img width=150 src=../docs/logos/opbeat.png>](https://opbeat.com) | [<img width=150 src=../docs/logos/nearform.png>](http://www.nearform.com) | [<img width=150 src=../docs/logos/brave.png>](https://www.brave.com) |
|---|---|---|---|---|

| [<img width=150 src=../docs/logos/zeit.png>](https://zeit.co) | [<img width=150 src=../docs/logos/zendesk.png>](https://www.zendesk.com) | [<img width=150 src=../docs/logos/mongodb.jpg>](https://www.mongodb.com) | [<img width=150 src=../docs/logos/typeform.jpg>](https://www.typeform.com) | [<img width=150 src=../docs/logos/gov-uk.png>](https://gds.blog.gov.uk) |
|---|---|---|---|---|

[<img width=150 src=../docs/logos/express.png>](http://expressjs.com) | [<img width=150 src=../docs/logos/webtorrent.png>](https://webtorrent.io) | [<img width=150 src=../docs/logos/ipfs.png>](https://ipfs.io) | [<img width=150 src=../docs/logos/dat.png>](https://datproject.org) | [<img width=150 src=../docs/logos/bitcoinjs.png>](https://bitcoinjs.org) |
|---|---|---|---|---|

[<img width=150 src=../docs/logos/atom.png>](https://atom.io) | [<img width=150 src=../docs/logos/electron.png>](http://electron.atom.io) | [<img width=150 src=../docs/logos/voltra.png>](https://voltra.co) | [<img width=150 src=../docs/logos/treasuredata.png>](https://www.treasuredata.com) | [<img width=150 src=../docs/logos/clevertech.png>](https://clevertech.biz) |
|---|---|---|---|---|

[<img width=150 src=../docs/logos/studynotes.jpg>](https://www.apstudynotes.org) | [<img width=150 src=../docs/logos/optiopay.png>](https://www.optiopay.com) | [<img width=150 src=../docs/logos/jaguar-landrover.png>](https://www.jlrtechincubator.com/jlrti/) | [<img width=150 src=../docs/logos/bustle.jpg>](https://www.bustle.com) | [<img width=150 src=../docs/logos/zentrick.png>](https://www.zentrick.com) |
|---|---|---|---|---|

[<img width=150 src=../docs/logos/nodesource.png>](https://nodesource.com) | [<img width=150 src=../docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=150 src=../docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=150 src=../docs/logos/taser.png>](https://www.taser.com) |
|---|---|---|---|---|

除了公司之外，非常多的社群也在套件中採用了 `standard` [因為太多了](https://raw.githubusercontent.com/standard/standard-packages/master/all.json) 無法在此一一列舉。

`standard` 也是 GitHub 的
[Clean Code Linter](https://github.com/showcases/clean-code-linters) 中，最多人給星的專案。

## 有文字編輯器的外掛嗎？

首先，安裝 `standard`。接下來，就可以依據你使用的編輯器安裝對應的外掛了：

### Sublime Text

使用 **[Package Control][sublime-1]** 安裝 **[SublimeLinter][sublime-2]** 和
**[SublimeLinter-contrib-standard][sublime-3]**。

如果想要在儲存時自動修改樣式，可以安裝 **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

安裝 **[linter-js-standard][atom-1]**.

如果想要在儲存時自動修改樣式，可以安裝  **[standard-formatter][atom-2]**。或是安裝 **[standardjs-snippets][atom-3]** 可以使用自動補完。

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

### Visual Studio Code

安裝 **[vscode-standardjs][vscode-1]**. (包含自動修改樣式的支援。)

需要 JS 自動補完，可以安裝： **[vscode-standardjs-snippets][vscode-2]**。 需要 React 自動補完，可以安裝： **[vscode-react-standard][vscode-3]**。

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

### Vim

安裝 **[Syntastic][vim-1]**，然後把以下加到 `.vimrc` 中:

```vim
let g:syntastic_javascript_checkers = ['standard']
```

如果想要在儲存時自動修改樣式，加入以下到 `.vimrc` 中：

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

### Emacs

安裝 **[Flycheck][emacs-1]** 然後查看 **[使用手冊][emacs-2]** 學習如何在專案中使用。

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

搜尋 **["Standard Code Style"][brackets-1]** 然後按 "Install".

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStorm [近期發佈了原生支援](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)，可以直接在 IDE 中使用 `standard`。

如果你還是傾向要手動設定 `standard`，[可以參考這個教學][webstorm-1]。這可以套用至所有 JetBrains 的產品，包括 PhpStorm、IntelliJ、RubyMine 等等。

[webstorm-1]: docs/webstorm.md

## 有 README 專用的 standard 徽章嗎？

可以！如果你在專案中使用了 `standard`，你可以在 README 中加入以下的徽章，讓大家知道你的程式碼使用了 standard 的標準。


[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)

```md
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)
```

## 我不同意某條規定，你們可以改一下嗎？

不行。`standard` 的重點就是在於避免那些對於程式碼的風格[永遠不會有答案的爭議上][bikeshedding]，像是從古至今就在爭論的 tab vs 空白等等。這些問題是永遠不會被解決的，但永無止盡的爭論卻會讓大家分心不做正事。最後你還是得決定去「選擇其中一個」，這就是 `standard` 的哲學 —— 一大堆合理的「選擇其中一個」。幸運的是，很多採用 standard 的使用者已經發現使用後獲得的成果已經比捍衛自己的偏見好多了。

如果你真的非常想要去客製化設定幾百行的規則，應該直接去用 `eslint` 和 [eslint-config-standard](https://github.com/standard/eslint-config-standard)，可以把你想要的規則列在最前面。

專業建議：就直接用 `standard` 然後開始吧。把時間花在那些你真正該解決的問題上吧！:P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## 但這不是真實網路中的標準！

這當然不是！這個風格訂定並不是隸屬於什麼正式網路團體的，所以這個專案才叫做 `standard/standard` 而不是
`ECMA/standard`.

"standard" 這個字的意義比 "web standard" 的意義來得多 :-)。舉例來說：

- 這個模組讓你的程式碼有很高的 *standard of quality* 。
- 這個模組確保新的貢獻者遵循基本的 *style standards*。

## 有自動修正的工具嗎？

有的！你可以用 `standard --fix` 去自動化修正某些問題。

`standard --fix` 為了方便直接內建在 `standard` 裡面。大部分的問題都是可以解決的，但一些問題（像是忘記處理錯誤）則必須要手動修正。

為了省下你寶貴的時間，`standard` 如果偵測到發生的問題是可以被自動修正的話，
會輸出 "`Run standard --fix to
automatically fix some problems`" 。

## 如何忽略某些檔案？

一些路徑 （`node_modules/`、`coverage/`、`vendor/`、`*.min.js`、`bundle.js` 和  `.` 開頭的檔案和資料夾，像是 `.git/`）會自動被忽略。

專案根目錄下 `.gitignore` 中列出來的路徑也會被自動忽略。

有時候你還是需要去忽略一些資料夾或一些最小化後的檔案，可以在 `package.json` 中加個 `standard.ignore` 屬性：

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

## 如何隱藏某些警告？

在少數情況下，你需要去打破一些規則，然後隱藏 `standard` 產生的警告。

JavaScript Standard Style 底層是使用 [ESLint](http://eslint.org/)，所以你可以直接使用 ESLint 的語法隱藏。

為了拿到詳細的輸出（讓你知道特定規則的名稱好去忽略），可以執行：

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

在特定行數忽略 **所有規則**：

```js
file = 'I know what I am doing' // eslint-disable-line
```

或是 **只** 忽略 `"no-use-before-define"` 這條規則：

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

或是 **一次在很多行** 忽略 `"no-use-before-define"`：

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

## 我使用的套件庫污染了全域變數，該如何避免出現 "variable is not defined" 錯誤？

有些套件（像是 `mocha`）把他們的函式（像是 `describe`、`it`）放到了全域下（不好的方式）。因為這些函式沒有在你的程式碼裡面被宣告或 `require`，`standard` 會警告你使用了未宣告的變數（這個規則通常很實用，可以抓到打錯字），但我們希望去忽略這些全域變數。

為了讓 `standard`（和其他讀程式碼的人）知道某些變數是可以直接被使用的，把這幾行加入檔案開頭：

```js
/* global myVar1, myVar2 */
```

如果你有幾百個檔案，應該很不想去每個檔案裡加註解。這時可以執行：

```bash
$ standard --global myVar1 --global myVar2
```

或在 `package.json` 中加上：

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

*注意： `global` 和 `globals` 是可以互通的。*

## 如何使用實驗性質的 JavaScript (ES Next) 新語法？

`standard` 支援最新的 ECMAScript 語法 ES8 (ES2017)，包含所有在新語法提議過程中，已經進入 "階段四" 的提議。

為了支援實驗性質的語法，`standard` 支援客製化 JavaScript 語法解析器。在使用客製化語法解析器前，請考慮清楚是否值得去增加這些複雜度。

要使用客製化語法解析器，可以從 npm 安裝（比如說：`npm install babel-eslint`），然後執行：

```bash
$ standard --parser babel-eslint
```

或在 `package.json` 中加入：

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

如果你是把 `standard` 裝在全域下（就是 `npm install standard --global`），那麼請確保 `babel-eslint` 也是用 `npm install babel-eslint --global` 裝在全域下。

## 我可以使用 JavaScript 的變體，像是 Flow 嗎？

在使用客製化的 JS 變體前，請考慮增加這些複雜度（和跟上所需要的人力）是否值得。

`standard` 支援 ESLint 外掛。在使用 `standard` 先使用其中一種把你的程式碼先轉換成正規的 JavaScript 語法。可以從 npm 安裝客製化的語法解析器（比如說：`npm install eslint-plugin-flowtype`）然後執行：

```bash
$ standard --plugin flowtype
```

或在 `package.json` 中加入：

```json
{
  "standard": {
    "plugins": [ "flowtype" ]
  }
}
```

如果 `standard` 是在全域安裝（也就是 `npm install standard --global`），那麼請確保 `eslint-plugin-flowtype` 也是用 `npm install eslint-plugin-flowtype -g` 裝在全域下。

*注意： `plugin` 和 `plugins` 是可以互通的。*

## Mocha、Jasmine、QUnit 等等套件呢？

為了支援 mocha，在檔案開頭加入：

```js
/* eslint-env mocha */
```

或執行：

```bash
$ standard --env mocha
```

其中 `mocha` 也可以是 `jasmine`、`qunit`、`phantomjs` 等等其他的選擇，可以去 ESLint 看更多 [可以指定的環境](http://eslint.org/docs/user-guide/configuring.html#specifying-environments) 。要檢查哪些全域變數在這些環境是可以用的，可以查看 [globals](https://github.com/sindresorhus/globals/blob/master/globals.json)。

*注意： `env` 和 `envs` 是可以互通的。*

## Web Workers 呢？

在檔案開頭加入：

```js
/* eslint-env serviceworker */
```

就可以讓 `standard` （還有其他讀程式碼的人）知道 `self` 在 web worker 裡是一個全域變數。

## 可以檢查 Markdown 或 HTML 檔裡面的程式嗎？

要檢查 Markdown 裡的程式，可以用 [`standard-markdown`](https://www.npmjs.com/package/standard-markdown)。

也可以使用 ESLint 的套件，檢查 Markdown, HTML 和其他種類的文件中的程式：

用 ESLint 套件 `eslint-plugin-markdown` 來檢查 Markdown 中的程式，先安裝：

```bash
$ npm install eslint-plugin-markdown
```

就可以檢查 Markdown 中的 JavaScript 程式碼：

```bash
$ standard --plugin markdown '**/*.md'
```

用 ESLint 套件 `eslint-plugin-html` 來檢查 HTML 中的程式，先安裝：

```bash
$ npm install eslint-plugin-html
```

就可以檢查 `<script>` 標籤中的出現的 JavaScript 程式碼：

```bash
$ standard --plugin html '**/*.html'
```

## 有 Git `pre-commit` 的外掛嗎？

當然有啊！

```sh
#!/bin/sh
# Ensure all javascript files staged for commit pass standard code style
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```

## 如何將輸出加上顏色？

原本內建的輸出是沒有顏色的，不過如果你喜歡閃亮亮的東西，可以安裝 [snazzy](https://www.npmjs.com/package/snazzy)：

```bash
$ npm install snazzy
```

然後執行：

```bash
$ standard --verbose | snazzy
```

也可以使用 [standard-tap](https://www.npmjs.com/package/standard-tap)、[standard-json](https://www.npmjs.com/package/standard-json)、[standard-reporter](https://www.npmjs.com/package/standard-reporter) 和 [standard-summary](https://www.npmjs.com/package/standard-summary)。

## 有 Node.js 的 API 嗎？

有！

### `standard.lintText(text, [opts], callback)`

把輸入的 `text` 檢查 JavaScript Standard Style，可加入 `opts` 選項。

```js
var opts = {
  fix: false,   // 自動修正問題
  globals: [],  // 會用到的全域變數
  plugins: [],  // eslint 外掛
  envs: [],     // eslint 環境
  parser: ''    // javascript 語法解析器 （比如說 babel-eslint）
}
```

`callback` 會被執行，並給予 `Error` 和 `results` 參數：

```js
var results = {
  results: [
    {
      filePath: '',
      messages: [
        { ruleId: '', message: '', line: 0, column: 0 }
      ],
      errorCount: 0,
      warningCount: 0
    }
  ],
  errorCount: 0,
  warningCount: 0
}
```

### `standard.lintFiles(files, [opts], callback)`

把輸入的 `files` 檢查 JavaScript Standard Style，可加入 `opts` 選項。

```js
var opts = {
  ignore: [],   // 需要忽略的檔案（有跟原本相同的預設值）
  cwd: '',      // 當前目錄（預設：process.cwd()）
  fix: false,   // 自動修正問題
  globals: [],  // 會用到的全域變數
  plugins: [],  // eslint 外掛
  envs: [],     // eslint 環境
  parser: ''    // javascript 語法解析器 （比如說 babel-eslint）
}
```

`callback` 會被執行，並給予 `Error` 和 `results` 參數（和上面相同）。

## 如何貢獻 `standard`？

我們非常歡迎貢獻！可以看看[議題](https://github.com/standard/standard/issues) 或 [PRs](https://github.com/standard/standard/pulls)，如果沒看到想要的東西，也可以自己建立。

加入 freenode 的 `#standard` 群組來跟其他貢獻者聊天吧！

以下是一些 `standard` 生態圈中重要的套件：

- **[standard](https://github.com/standard/standard)** - 本專案
  - **[standard-engine](https://github.com/flet/standard-engine)** - 命令列引擎
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - standard 的 eslint 規則
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - standard (JSX) 的 eslint 規則
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - standard 客製化 eslint 規則（非 eslint 核心）
  - **[eslint](https://github.com/eslint/eslint)** - 驅動 standard 的核心
- **[snazzy](https://github.com/standard/snazzy)** - standard 的終端機美麗輸出
- **[standard-www](https://github.com/standard/standard-www)** - https://standardjs.com 網站程式
- **[semistandard](https://github.com/Flet/semistandard)** - standard，含分號版本（如果你真的真的必須要加分號）

也有非常多的 **[編輯器外掛](#text-editor-plugins)**、
**[有使用 `standard` 的 npm 套件清單](https://github.com/standard/standard-packages)**和 **[`standard` 生態系的清單](https://github.com/standard/awesome-standard)**。

## 授權

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
