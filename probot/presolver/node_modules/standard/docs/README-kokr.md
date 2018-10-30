<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/standard/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
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

## 교정 & 자동 코드 수정을 도와주는 JavaScript 스타일 가이드

이 모듈은 다음과 같은 세 가지 방법으로 시간을 절약할 수 있습니다.

- **환경설정이 필요없습니다.** 프로젝트에서 일관된 스타일을 적용하는 가장 쉬운 방법입니다. 그냥 넣기만 하면 됩니다.
- **자동으로 코드 포멧을 맞춰줍니다.** `standard --fix`를 실행하면 지저분하거나 일관성없는 코드와 작별인사 할 수 있습니다.
- **스타일 이슈 및 프로그래머의 오류를 조기에 파악할 수 있습니다.** 리뷰어와 기여자 사이의 관계를 제거함으로써 귀중한 코드 리뷰 시간을 절약할 수 있습니다.

만드는 것의 대해 결정할 필요가 없습니다. `.eslintrc`, `.jshintrc`, `.jscsrc` 파일들을 관리할 필요가 없이 바로 가능합니다.


설치하는 방법입니다.

```
npm install standard --save-dev
```

## 규칙

- **2칸 공백을 사용합니다.** – 들여쓰기
- **문자열에 작은 따옴표를 사용합니다.** – 누락된 곳은 제외합니다.
- **사용되지 않는 변수가 없어야 합니다.** – 이 것은 대량의 버그를 초래하는 원인입니다.
- **세미콜론이 없어야 합니다.** – [It's][1] [fine.][2] [Really!][3]
- **`(`, `[`, or `` ` ``과 같이 라인을 시작하지 말아야 합니다.**
  - 세미콜론 생략시 반드시 문제가 생길 수 있습니다. – *자동으로 체크할 수 있도록 준비되어 있습니다.*
  - [More details][4]
- **키워드 뒤에 공백을 사용합니다.** `if (condition) { ... }`
- **함수명 뒤에 공백을 사용합니다.** `function name (arg) { ... }`
- 항상 `==` 대신 `===`을 사용합니다. - 단, `null || undefined`는 `obj == null`로 확인할 수 있습니다.
- node.js에서 err 파라미터는 항상 처리해야 합니다.
- 항상 브라우저 전역에 `window` 접두사를 붙입니다. - `document`와 `navigator`는 괜찮습니다.
  - `open`, `length`, `event`, `name` 등 불분명하게 브라우저 전역을 우연히 사용하는 것을 방지합니다.
- **[더 많은 장점][5]이 있습니다.** - *`standard`를 시도해보세요!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

더 나은 아이디어를 얻으려면 JavaScript Standard 스타일로 작성된 [샘플 파일](https://github.com/expressjs/body-parser/blob/master/index.js)을 살펴보십시오. 또는 `standard`을 사용하는 [수천 개의 프로젝트](https://raw.githubusercontent.com/standard/standard-packages/master/all.json) 중 하나를 확인하십시오!

## 목차

- 빠른 시작
  - [설치](#설치)
  - [사용법](#사용법)
  - [이해가 잘되면 다음을 수행합니다](#이해가-잘되면-다음을-수행합니다)
- 질의응답
  - [왜 JavaScript Standard Style을 사용해야 할까요?](#왜-JavaScript-Standard-Style을-사용해야-할까요)
  - [누가 JavaScript Standard Style을 사용하나요?](#누가-JavaScript-Standard-Style을-사용하나요)
  - [텍스트 편집 플러그인이 있나요?](#텍스트-편집-플러그인이-있나요)
  - [readme에 넣을 수 있는 뱃지로고가 있나요?](#readme에-넣을-수-있는-뱃지로고가-있나요)
  - [나와는 룰이 맞지 않습니다. 변경 가능합니까?](#나와는-룰이-맞지-않습니다.-변경-가능합니까)
  - [그러나 이 것은 실제 웹표준이 아닙니다!](#그러나-이-것은-실제-웹표준이-아닙니다)
  - [자동으로 포멧을 맞춰주는 것이 있나요?](#자동으로-포멧을-맞춰주는-것이-있나요)
  - [어떻게하면 파일들을 무시할 수 있나요?](#어떻게하면-파일들을-무시할-수-있나요)
  - [어떻게하면 경고를 숨길 수 있나요?](#어떻게하면-경고를-숨길-수-있나요)
  - [전역 namespace를 오염시키는 라이브러리를 사용합니다. "vaiable is not defined" 오류를 방지하려면 어떻게 해야 하나요?](#전역-namespace를-오염시키는-라이브러리를-사용합니다-vaiable-is-not-defined-오류를-방지하려면-어떻게-해야-하나요)
  - [실험용 JavaScript (ES Next) 기능은 어떻게 사용하나요?](#실험용-javascript-es-next-기능은-어떻게-사용하나요)
  - [Flow와 같은 JavaScrpt 언어 변형을 사용할 수 있나요?](#flow와-같은-javascrpt-언어-변형을-사용할-수-있나요)
  - [Mocha, Jasmine, QUnit 등은 어떻습니까?](#mocha-jasmine-qunit-등은-어떻습니까)
  - [Web Workes는 어떻습니까?](#web-workes는-어떻습니까)
  - [Markdown 또는 HTML 파일 내부의 코드를 확인할 수 있나요?](#markdown-또는-html-파일-내부의-코드를-확인할-수-있나요)
  - [Git `pre-commit` hook이 있나요?](#git-pre-commit-hook이-있나요)
  - [출력을 모두 화려하고 예쁘게 만드려면 어떻게 해야 하나요?](#출력을-모두-화려하고-예쁘게-만드려면-어떻게-해야-하나요)
  - [Node.js API가 있나요?](#nodejs-api가-있나요)
  - [`standard` 기여는 어떻게 하나요?](#standard-기여는-어떻게-하나요)
- [라이선스](#라이선스)

## 설치

JavaScript Standard Style을 사용하는 가장 쉬운 방법은 Node 명령 프로그램을 통해 전역으로 설치하는 것입니다. 터미널에서 다음 명령을 실행하세요.

```bash
$ npm install standard --global
```

또는 `standard`를 로컬에 설치하여 단일 프로젝트에서 사용할 수 있습니다.

```bash
$ npm install standard --save-dev
```

*메모: 위 명령을 실행하려면 [Node.js](http://nodejs.org)와 [npm](https://npmjs.com)이 설치되어 있어야 합니다.*

## 사용법

`standard`를 설치 한 후에 `standard` 프로그램을 사용할 수 있습니다. 가장 간단한 사용 사례는 현재 작업 디렉토리에있는 모든 JavaScript 파일의 스타일을 확인하는 것입니다.

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

You can optionally pass in a directory (or directories) using the glob pattern. Be
sure to quote paths containing glob patterns so that they are expanded by
`standard` instead of your shell:
glob 패턴을 사용하여 디렉토리(또는 디렉토리들)를 선택적으로 전달할 수 있습니다. glob 패턴을 포함하는 경로를 인용 부호로 묶어 쉘 대신에 `standard`에 의해 확장되도록 할 수 있습니다.

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**메모** 기본적으로`standard`는 `**/*.js`, `**/*.jsx` 패턴과 일치하는 모든 파일을 찾을 것입니다.

## 이해가 잘되면 다음을 수행합니다

1. `package.json`에 다음코드를 추가합니다.

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

2. `npm test`를 실행할 때 자동으로 스타일을 검사합니다.

  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. style 의견의 대해 절대로 풀 리퀘스트를 요청하지 마세요.

## 왜 JavaScript Standard Style을 사용해야 할까요?

JavaScript Standard Style의 장점은 간단하다는 것입니다. 어느누구도 작업하는 모든 모듈/프로젝트에 대해 수백 줄 style의 구성 파일을 유지하려고하지 않습니다. 더 이상 바보같은 짓은 그만하세요.

이 모듈은 세가지의 방법으로 당신(또는 주변사람들)의 시간을 절약할 수 있습니다.

- **환경설정이 필요없습니다.** 프로젝트에서 일관된 스타일을 적용하는 가장 쉬운 방법입니다. 그냥 넣기만 하면 됩니다.
- **자동으로 코드 포멧을 맞춰줍니다.** `standard --fix`를 실행하면 지저분하거나 일관성없는 코드와 작별인사 할 수 있습니다.
- **스타일 이슈 및 프로그래머의 오류를 조기에 파악할 수 있습니다.** 리뷰어와 기여자 사이의 관계를 제거함으로써 귀중한 코드 리뷰 시간을 절약할 수 있습니다.

`standard` 스타일을 채택한다는 것은 개인적 스타일보다 코드 명확성과 커뮤니티 협업의 중요성을 우선으로 하는 것을 의미합니다. 이것은 프로젝트와 개발문화에 100% 타당하지 않을 수도 있지만, 오픈소스는 초보자들에게 적대적인 장소가 될 수 있습니다. 명확하고 자동화된 기여를 기대할수록 프로젝트가 더욱 건강해 집니다.

## 누가 JavaScript Standard Style을 사용하나요?

주변에 많은 사람들!

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

회사 이외에 많은 커뮤니티 회원은 여기에 나열하기에는 [너무 많은](https://raw.githubusercontent.com/standard/standard-packages/master/all.json) 패키지들이 `standard`를 사용합니다.

또한 GitHub의 [Clean Code Linter](https://github.com/showcases/clean-code-linters) 쇼케이스에서도 볼 수 있습니다.

## 텍스트 편집 플러그인이 있나요?

먼저, `standard`를 설치합니다. 그런 다음, 편집기에 적절한 플러그인을 설치하세요.

### Sublime Text

**[Package Control][sublime-1]** 을 사용하여, **[SublimeLinter][sublime-2]** 와 **[SublimeLinter-contrib-standard][sublime-3]** 를 설치합니다.

저장시 자동포멧을 적용하려면 **[StandardFormat][sublime-4]** 을 설치하세요.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

**[linter-js-standard][atom-1]** 를 설치합니다.

저장시 자동포멧을 적용하려면 **[standard-formatter][atom-2]** 를 설치합니다. 스니펫의 경우 **[standardjs-snippets][atom-3]** 을 설치합니다.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

### Visual Studio Code

**[vscode-standardjs][vscode-1]** 를 설치합니다. (자동포멧을 지원합니다.)

JS 스니펫의 경우 **[vscode-standardjs-snippets][vscode-2]** 을 설치합니다. React 스니펫의 경우 **[vscode-react-standard][vscode-3]** 를 설치합니다.

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

### Vim

**[ale][vim-1]** 를 설치합니다.

For automatic formatting on save, add these lines to `.vimrc`:

저장시 자동포멧을 적용하려면 해당 코드를 `.vimrc`에 추가하세요.

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

고려해야 할 대체 플러그인으로는 [neomake][vim-2] 및 [syntastic][vim-3]이 있으며, 둘 다 표준에 대한 지원이 내장되어 있습니다. (추가적으로 구성이 필요할 수도 있습니다)

[vim-1]: https://github.com/w0rp/ale
[vim-2]: https://github.com/neomake/neomake
[vim-3]: https://github.com/vim-syntastic/syntastic

### Emacs

**[Flycheck][emacs-1]** 를 설치하고 **[manual][emacs-2]** 을 확인하여 프로젝트에서 활성화하는 방법을 확인하십시오.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

extension registry에서 **["Standard Code Style"][brackets-1]** 을 검색하여 "Install"을 클릭하세요.

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStrom은 `standard`가 직접적으로 IDE에서 사용가능다고 [기본적인 지원에 관한 최근 발표](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/) 했습니다.

만약 수동으로 `standard`를 구성하려면 [안내서]([webstorm-1])를 따르십시오. 이것은 PhpStorm, IntelliJ, RubyMine 등 모든 JetBrains 제품에 적용됩니다.

[webstorm-1]: docs/webstorm.md

## readme에 넣을 수 있는 뱃지로고가 있나요?

네! 프로젝트에서 `standard`를 사용한다면, readme에 이 뱃지들 중 하나를 포함시켜 코드가 standard 스타일을 사용하고 있음을 사람들에게 알릴 수 있습니다.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```

## 나와는 룰이 맞지 않습니다. 변경 가능합니까?

안됩니다. `standard`의 전체적인 요점은 코드 스타일에 대한 [bikeshedding][bikeshedding]을 피함으로써 시간을 절약하는 것입니다. 탭과 공백 등에 관해서는 온라인으로 많은 논쟁이 있기때문에 해결되지 않을 것입니다. 이러한 논쟁은 어떠한 것도 얻지 못하게합니다. 결국 `뭔가를 골라야 한다`입니다. 그것은 `standard`의 철학입니다. 이는 `단지 뭔가를 선택하세요`라는 의견입니다. 바라건대, 사용자들이 자신들의 의견을 방어하는 것에 대해 가치를 보게 되기를 바랍니다.

수백 개의 ESLint 규칙을 개별적으로 구성하려는 경우 `eslint`를 직접 [eslint-config-standard](https://github.com/standard/eslint-config-standard)와 함께 사용하여 변경 사항을 맨 위에 배치 할 수 있습니다.

팁 : 표준을 사용하고 계속 진행하십시오. 당신의 시간을 소비하고 있는 실질적인 문제를 해결하세요! :P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## 그러나 이 것은 실제 웹표준이 아닙니다!

물론 표준이 아닙니다! 여기에 제시된 스타일은 공식 웹 표준 그룹과 관련이 없으므로 `ECMA/standard`이 아닌 `standard/standard`라고하는 이유입니다.

"standard"이라는 단어는 "web standard"이상의 의미를 가지고 있습니다 :-)

예를 들어,
- 이 모듈은 우리의 코드를 높은 수준의 품질로 유지하는 데 도움이됩니다.
- 이 모듈은 새로운 기여자가 몇 가지 기본 스타일 표준을 준수하도록합니다.

## 자동으로 포멧을 맞춰주는 것이 있나요?

예! `standard --fix`를 사용하면 자동으로 대부분의 문제를 자동으로 해결할 수 있습니다.

`standard --fix`는 최대의 편의를 위해 `standard`에 내장되어 있습니다. 대부분의 문제점은 고칠 수 있지만 일부 오류(오류 처리를 잊어 버리는 것)는 수동으로 해결해야합니다.

시간을 절약하기 위해 `standard`는 자동으로 수정할 수있는 문제를 발견하면 "`Run standard --fix to automatically fix some problems`" 메시지를 출력합니다.

## 어떻게하면 파일들을 무시할 수 있나요?

특정 경로 (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`, `bundle.js`, `.git/`와 같이 `.`으로 시작하는 파일/폴더)는 자동으로 무시됩니다.

프로젝트의 루트 `.gitignore` 파일에 있는 경로도 자동으로 무시됩니다.

때로는 추가 폴더 또는 특정 축소 파일을 무시해야합니다. 이를 수행하려면 `package.json`에 `standard.ignore` 속성을 추가하십시오.

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

## 어떻게하면 경고를 숨길 수 있나요?

드문 경우이지만 규칙을 위반하고 `standard`에 의해 생성 된 경고를 숨길 필요가 있습니다.

JavaScript 표준 스타일은 [ESLint](http://eslint.org/)를 사용하며 ESLint를 직접 사용한 경우 일반적으로 경고를 숨길 수 있습니다.

자세한 출력을 얻으려면 (무시할 특정 규칙 이름을 찾을 수 있도록) 다음을 실행하십시오.

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

특정 줄에서 **모든 규칙** 을 비활성화할 수 있습니다.

```js
file = 'I know what I am doing' // eslint-disable-line
```

혹은, 특정 줄에서 **`"no-use-before-define"` 규칙만** 비활성화 할 수 있습니다.

```js
file = 'I know what I am doing' // eslint-disable-line no-use-before-define
```

`"no-use-before-define"` 규칙을 여러 줄에 적용할 수 있습니다.

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

## 전역 namespace를 오염시키는 라이브러리를 사용합니다. "vaiable is not defined" 오류를 방지하려면 어떻게 해야 하나요?

일부 패키지 (예 : `mocha`)는 전역 개체 (가난한 형태!)에 기능 (예 : `describe`, `it`)을 지정합니다. 이 함수는 정의되지 않았거나 코드의 어느 곳에서든지 요구 될 수 있기 때문에 `standard`에서는 정의되지 않은 변수를 사용하고 있다고 경고합니다 (일반적으로 이 규칙은 오타를 잡는 데 유용합니다). 그러나 우리는 이 전역 변수들에 대해 이를 비활성화 하고자합니다.

`standard` (코드를 읽는 사람뿐만 아니라)에서 특정 변수가 코드에서 전역이라는 것을 알 수 있도록 파일의 맨 위에 추가하십시오.

```js
/* global myVar1, myVar2 */
```

수백 개의 파일이 있다면 모든 파일에 주석을 추가하지 않는 것이 좋습니다. 이 경우 다음을 실행하십시오.

```bash
$ standard --global myVar1 --global myVar2
```

혹은 `package.json`에 다음코드를 추가하세요.

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

*노트: `global`과 `globals`는 같습니다.

## 실험용 JavaScript (ES Next) 기능은 어떻게 사용하나요?

`standard`는 제안 프로세스의 "단계 4"에있는 언어 기능 제안을 포함하여 최신 ECMAScript 기능인 ES8 (ES2017)을 지원합니다.

실험용 언어 기능을 지원하기 위해 `standard`는 맞춤 JavaScript 파서를 지정하는 것을 지원합니다. 커스텀 파서를 사용하기 전에 추가 된 복잡성이 그럴 가치가 있는지 고려하십시오.

```bash
$ standard --parser babel-eslint
```

혹은, `package.json`에 아래코드를 추가하세요.

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

`standard'가 전역으로 설치되면 (즉,`npm install standard --global`), `babel-eslint`를 `npm install babel-eslint --global`과 함께 설치하십시오.

## Flow와 같은 JavaScrpt 언어 변형을 사용할 수 있나요?

커스텀 JS 언어 변형을 사용하기 전에 추가된 복잡성 (그리고 새로운 기여자를 최신으로 만드는데 필요한 노력)이 그만한 가치가 있는지 고려하십시오.

`standard`는 ESLint 플러그인을 지원합니다. `standard` 중 하나를 보기 전에 코드를 유효한 JavaScript로 변환하려면 이 중 하나를 사용하십시오. 맞춤 구문 분석기를 사용하려면 npm에서 설치하고 다음을 실행하십시오.

```bash
$ standard --plugin 플러그인_이름
```

아니면, `package.json`에 아래 코드를 추가하세요.

```json
{
  "standard": {
    "plugins": [ "플러그인_이름" ]
  }
}
```

Flow를 사용하려면 `babel-eslint`를 파서로 사용해야합니다. 따라서 `npm install eslint-plugin-flowtype babel-eslint`를 수행한 후에, 다음을 실행하십시오.

```bash
$ standard --plugin flowtype --parser babel-eslint
```

아니면, `package.json`에 아래 코드를 추가하세요.

```json
{
  "standard": {
    "plugins": [ "flowtype" ],
    "parser": "babel-eslint"
  }
}
```

`standard`가 전역으로 설치된 경우 (즉, `npm install standard --global`) `npm install-eslint-plugin-flowtype --global`을 사용하여 `eslint-plugin-flowtype`을 전역으로 설치해야합니다.

**참고 : 플러그인 및 플러그인은 동일합니다.**

## Mocha, Jasmine, QUnit 등은 어떻습니까?

테스트 파일에서 mocha를 지원하려면 테스트 파일의 시작 부분에 다음을 추가하십시오.

```js
/* eslint-env mocha */
```

혹은 다음을 실행하세요.

```bash
$ standard --env mocha
```

`mocha`는 `jasmine`, `qunit`, `phantomjs` 중 하나가 될 수 있습니다. 전체 목록을 보려면 ESLint의 [specifying environments(스펙문서)](http://eslint.org/docs/user-guide/configuring.html#specifying-environments)를 확인하십시오. 이러한 환경에서 사용할 수있는 전역의 목록을 보려면 [globals](https://github.com/sindresorhus/globals/blob/master/globals.json) npm 모듈을 확인하십시오.

**참고 : `env` 및 `envs`는 동일합니다.**

## Web Workes는 어떻습니까?

적용하려는 파일 상단에 아래 주석코드를 추가하세요.

```js
/* eslint-env serviceworker */
```

이것은 `standard` (자신의 코드를 읽는 사람뿐만 아니라)이 web worker 코드에서 `자신`이 전역(global)이라는 것을 알 수 있게 해줍니다.

## Markdown 또는 HTML 파일 내부의 코드를 확인할 수 있나요?

Markdown 파일 내의 코드를 확인하려면 [`standard-markdown`](https://www.npmjs.com/package/standard-markdown)을 사용하십시오.

또는 Markdown, HTML 및 기타 여러 유형의 언어 파일에서 코드를 확인할 수있는 ESLint 플러그인이 있습니다.

Markdown 파일 내의 코드를 확인하려면 ESLint 플러그인을 사용하십시오.

```bash
$ npm install eslint-plugin-markdown
```

그런 다음, 코드 블록 안에있는 JS를 확인하려면 다음을 실행하십시오.

```bash
$ standard --plugin markdown '**/*.md'
```

HTML 파일 내부의 코드를 확인하려면 ESLint 플러그인을 사용하십시오.

```bash
$ npm install eslint-plugin-html
```

그런 다음, `<script>`태그 안에있는 JS를 확인하려면 다음을 실행하십시오.

```bash
$ standard --plugin html '**/*.html'
```

## Git `pre-commit` hook이 있나요?

재미있는 질문이네요!

```sh
#!/bin/sh
# 커밋을 위해 준비된 모든 자바 스크립트 파일이 표준 코드 스타일을 통과하는지 확인합니다.
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```

## 출력을 모두 화려하고 *예쁘게* 만드려면 어떻게 해야 하나요?

내장 된 출력물은 간단하고 간단하지만 반짝이는 물건을 원한다면 [snazzy](https://www.npmjs.com/package/snazzy) 설치하십시오.

```bash
$ npm install snazzy
```

그리고 아래 명령어를 실행합니다.

```bash
$ standard --verbose | snazzy
```

[standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter),
[standard-summary](https://www.npmjs.com/package/standard-summary)도 있습니다..

## Node.js API가 있나요?

네!

### `standard.lintText(text, [opts], callback)`

린트에 제공할 소스 `text`를 준비합니다. `opts` 객체를 추가할 수 있습니다.

```js
{
  cwd: '',      // 현재 작업 디렉토리 (기본: process.cwd())
  filename: '', // 린트 텍스트를 포함하는 파일의 경로 (선택, 일부 eslint 플러그인이 필요함)
  fix: false,   // 자동 문제 해결
  globals: [],  // 선언할 커스텀 글로벌 변수
  plugins: [],  // 커스텀 eslint 플러그인
  envs: [],     // 커스텀 eslint 환경
  parser: ''    // 커스텀 js 파서  (예: babel-eslint)
}
```

`package.json`가 현재 작업 디렉토리에서 발견되면 추가옵션을 로드 할 수 있습니다.

`콜백(callback)`은 `Error`와 `results`객체와 함께 호출 될 것입니다.

`results`객체는 다음과 같은 속성을 포함합니다.

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
      output: '' // 고정 소스 코드 ({fix : true} 옵션과 함께 제공)
    }
  ],
  errorCount: 0,
  warningCount: 0
}
```

### `results = standard.lintTextSync(text, [opts])`

`standard.lintText()`의 동기화 버전. 오류가 발생하면 예외가 발생합니다. 그렇지 않으면 `results`객체가 반환됩니다.

### `standard.lintFiles(files, [opts], callback)`

제공된 'files' 덩어리를 린트에 적용할 수 있습니다. `opts` 객체를 추가할 수 있습니다.

```js
var opts = {
  ignore: [],   // 파일뭉치를 무시합니다. (기본적인 무시파일들이 포함되어 있습니다)
  cwd: '',      // 현재 작업 디렉토리 (기본: process.cwd())
  fix: false,   // 자동 문제 해결
  globals: [],  // 선언할 글로벌 변수
  plugins: [],  // eslint 플러그인
  envs: [],     // eslint 환경
  parser: ''    // js 파서 (예: babel-eslint)
}
```

`callback`은 `Error`와 `results`객체로 호출됩니다. (위와 같습니다)

## `standard` 기여는 어떻게 하나요?

기여를 환영합니다! [issues](https://github.com/standard/standard/issues) 나 [PRs](https://github.com/standard/standard/pulls)를 확인하고 거기에 보이지 않는 것을 원한다면 직접 만들어주세요.

채팅을 원하시나요? freenode의 `#standard` 채널에서 IRC의 참여자와 함께하세요.

다음은 `standard` 생태계의 중요한 패키지입니다.

- **[standard](https://github.com/standard/standard)** - 현재 저장소
  - **[standard-engine](https://github.com/flet/standard-engine)** - 임의의 eslint 규칙에 대한 cli 엔진
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - `standard`을 위한 eslint 규칙
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - `standard`을 위한 eslint 규칙 (JSX)
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - `standard`을 위한 커스텀 eslint 규칙 (eslint 코어의 일부가 아닙니다.)
  - **[eslint](https://github.com/eslint/eslint)** - 강력한 standard linter
- **[snazzy](https://github.com/standard/snazzy)** - standard를 예쁘게 터미널에 출력해줍니다.
- **[standard-www](https://github.com/standard/standard-www)** - https://standardjs.com에 대한 코드
- **[semistandard](https://github.com/Flet/semistandard)** - 세미콜론이 포함된 standard (필요한 경우)

또한 많은 **[에디터 플러그인](#text-editor-plugins)**, **[`standard`를 사용하는 npm 패키지 목록](https://github.com/standard/standard-packages)**, **[`standard` 에코 시스템의 멋진 패키지 목록](https://github.com/standard/awesome-standard)** 이 있습니다.

## 라이선스

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
