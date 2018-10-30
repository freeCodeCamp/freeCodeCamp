<h1 align="center">
  <a href="https://standardjs.com"><img src="https://cdn.rawgit.com/standard/standard/master/sticker.svg" alt="Standard - JavaScript Style Guide" width="200"></a>
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

<h4 align="center">Um Guia de Estilo JavaScript para a todos governar</h4>

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

Sem ter que tomar decisões; Sem gerenciar `.eslintrc`, `.jshintrc`, ou `.jscsrc` . Funciona logo de cara.

Esse módulo salva o seu tempo (e de outras pessoas!) de duas formas:

- **Zero configuração.** A forma mais fácil de forçar consistência de estilo no seu projeto. É só tacar lá e pronto.
- **Captura erros de estilo antes de serem enviados em PR's.** Salva um tempo precioso de code review eliminando vai-e-vem entre mantenedor  e contribuínte.

Instale:

```
npm install standard
```

### As Regras

- **2 espaços** – para identação
- **Aspas simples para strings** – exceto para evitar escapamentos
- **Sem variáveis não-utilizadas** – resolve *uma porrada* de bugs!
- **Sem vírgulas-e-vírgula** – [Dá][1] [boa.][2] [Sério!][3]
- **Nunca comece uma linha com  `(`, `[`, ou `` ` ``**
  - Esse é o único **problema** em omitir ponto-e-vírgula – *checado automaticamente pra você!*
  - [Mais detalhes][4]
- **Espaço após keywords** `if (condição) { ... }`
- **Espaço antes dos nomes das funções** `function nome (arg) { ... }`
- Sempre use `===` ao invés de  `==` – mas `obj == null` é permitido para checar se `null || undefined`.
- Sempre lide com o parâmetro `err` do node.
- Sempre prefixe globais de browser com  `window` – exceto `document` e `navigator`, essas tudo bem.
  - Previne o uso acidental de globais de browser mal-nomeadas como  `open`, `length`,
    `event`, e `name`.
- **E [mais benefícios][5]** – *dê uma chance para  `standard` hoje!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

Para ter uma idéia melhor, dê uma olhada
[num arquivo amostra](https://github.com/webtorrent/bittorrent-dht/blob/master/client.js) escrito no JavaScript Standard Style, ou dê uma olhada em alguns dos
[repositórios](https://github.com/standard/standard-packages/blob/master/all.json) que usam
`standard`.

## Índice

- [Instalação](#instala%C3%A7%C3%A3o)
- [Uso](#uso)
  - [O que você pode fazer se for espertinho](#o-que-voc%C3%AA-pode-fazer-se-for-espertinho)
  - [Insígnia](#ins%C3%ADgnia)
  - [Plugins de Editores de Texto](#plugins-de-editores-de-texto)
- [FAQ](#faq)
  - [Por que eu deveria usar o JavaScript Standard Style?](#por-que-eu-deveria-usar-o-javascript-standard-style)
  - [Discordo da regra X, você pode mudá-la?](#discordo-da-regra-x-voc%C3%AA-pode-mud%C3%A1-la)
  - [Mas isso não é um padrão legítimo!](#mas-isso-n%C3%A3o-%C3%A9-um-padr%C3%A3o-leg%C3%ADtimo)
  - [Existe um formatador automático?](#existe-um-formatador-autom%C3%A1tico)
  - [Como ignoro arquivos?](#como-ignoro-arquivos)
  - [Como escondo um determinado aviso?](#como-escondo-um-determinado-aviso)
  - [Eu uso uma biblioteca que polui o namespace global. Como eu previno erros de "variable is not defined"?](#eu-uso-uma-biblioteca-que-polui-o-namespace-global-como-eu-previno-erros-de-variable-is-not-definedfunctions)
  - [Posso usar um custom parser de JS novinho em folha que saiu ontem para suporte ao ES Next?](#posso-usar-um-custom-parser-de-js-novinho-em-folha-que-saiu-ontem-para-suporte-ao-es-next)
  - [Posso usar uma linguagem variante de JavaScript, tipo Flow?](#posso-usar-uma-linguagem-variante-de-javascript-tipo-flow)
  - [Você pode tornar regra X configurável?](#voc%C3%AA-pode-tornar-regra-x-configur%C3%A1vel)
  - [E os Web Workers?](#e-os-web-workers)
  - [E a respeito de Mocha, Jasmine, QUnit, etc?](#e-a-respeito-de-mocha-jasmine-qunit-etc)
  - [Existe um hook `pre-commit` para Git?](#existe-um-hook-pre-commit-para-git)
  - [Como eu deixo o output todo coloridinho e *bonitinho*?](#como-eu-deixo-o-output-todo-coloridinho-e-bonitinho)
  - [Quero contribuir com o `standard`. Quais packages eu devo conhecer?](#quero-contribuir-com-o-standard-quais-packages-eu-devo-conhecer)
- [Node.js API](#nodejs-api)
  - [`standard.lintText(text, [opts], callback)`](#standardlinttexttext-opts-callback)
  - [`standard.lintFiles(files, [opts], callback)`](#standardlintfilesfiles-opts-callback)
- [Licensa](#licensa)

## Instalação

A forma mais fácil de usar o JavaScript Standard Style para checar seu código é instalá-lo globalmente como se fosse um programa de linha de comando do Node. Para isso, simplesmente execute o seguinte comando no seu terminal (a flag `-g` instala o `standard` globalmente no seu sistema, omita-a se quiser instalar no seu diretório de trabalho atual.)


```bash
npm install standard --global
```

Ou você pode rodar este comando para instalar `standard`  localmente, para usar no seu módulo:

```bash
npm install standard --save-dev
```

[Node.js](http://nodejs.org) e [npm](https://npmjs.com) são requisitos para rodar este programa.

## Uso

Depois de você ter instalado  `standard`, você será capaz de usá-lo. O caso de uso mais simples seria checar o estilo de todos os arquivos JavaScript no diretório de trabalho atual:

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

Você pode passar opcionalmente um diretório (ou diretórios) usando o padrões glob. Assegure-se de colocar aspas nos caminhos contendo padrões glob para que eles sejam expandidos pelo `standard` ao invés da sua shell.


```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**Note:** por padrão `standard` vai procurar por todos os arquivos que casarem com os padrões::
`**/*.js`, `**/*.jsx`.

### O que você pode fazer se for espertinho

1. Adicione isso ao `package.json`

  ```json
  {
    "name": "meu-package-legalzao",
    "devDependencies": {
      "standard": "*"
    },
    "scripts": {
      "test": "standard && node my-tests.js"
    }
  }
  ```

2. Cheque os estilos manualmente quando rodar `npm test`

  ```
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Nunca dê feedback de estilo num pull request de novo!



### Insígnia

Está usando em um dos seus projetos? Inclua uma dessas insígnias no seu readme para que as pessoas saibam que seu código está em standard style.


[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```markdown
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/)

```markdown
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://standardjs.com/)
```

### Plugins de Editores de Texto

Primeiro, instale `standard`. Então, instale  o plugin apropriado para o seu editor.

#### [Sublime Text](https://www.sublimetext.com/)

Usando **[Package Control][sublime-1]**, instale **[SublimeLinter][sublime-2]** e
**[SublimeLinter-contrib-standard][sublime-3]**.

Para formatação automática ao salvar, instale **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

#### [Atom](https://atom.io)

Instale **[linter-js-standard][atom-1]**.

Para formatação automática, instale **[standard-formatter][atom-2]**. Para snippets,
installe **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets

#### [Vim](http://www.vim.org/)

Instale **[Syntastic][vim-1]** e adicione essa linha ao seu `.vimrc`:

```vim
let g:syntastic_javascript_checkers = ['standard']
```

Para formatação automática ao salvar, instale [standard-format](https://github.com/maxogden/standard-format)

```bash
npm install -g standard-format
```

e adicione essas duas linhas ao seu `.vimrc`:

```vim
autocmd bufwritepost *.js silent !standard-format -w %
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

#### [Emacs](https://www.gnu.org/software/emacs/)

Instale **[Flycheck][emacs-1]** e cheque o  **[manual][emacs-2]** para aprender a habilitar nos seus projetos.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

#### [Brackets](http://brackets.io/)

Selecione o registro da extensão do **["Standard Code Style"][brackets-1]**.

[brackets-1]: https://github.com/ishamf/brackets-standard/

#### [Visual Studio Code](https://code.visualstudio.com/)

Instale **[vscode-standardjs][vscode-1]**. (Inclui suporte para formatação automática.)

Para snippets de React, instale  **[vscode-react-standard][vscode-2]**.

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

#### [WebStorm/PhpStorm][webstorm-1]

Ambos PhpStorm e WebStorm podem ser  [configurados para Standard Style][webstorm-2].

[webstorm-1]: https://www.jetbrains.com/webstorm/
[webstorm-2]: https://github.com/standard/standard/blob/master/docs/webstorm.md

## FAQ

### Por que eu deveria usar o JavaScript Standard Style?

A beleza do JavaScript Standard Style reside no fato de ser simples. Ninguém quer manter vários arquivos de centenas de linhas de configuração de estilo para cada módulo/projeto em que trabalham. Chega dessa patifaria!

Esse módulo te faz economizar tempo de 2 formas:

- **Zero configuração.** A forma mais fácil de forçar consistência de estilo no seu projeto. É só tacar lá e pronto.
- **Captura erros de estilo antes de serem enviados em PR's.** Salva um tempo precioso de code review eliminando vai-e-vem entre mantenedor  e contribuínte.

Adotar o  estilo `standard` significa elevar a importância da clareza de código e convenções de comunidade a um patamar acima do estilo pessoal. Pode não fazer sentido para TODOS os projetos e culturas de desenvolvimento, porém, o opens ource pode ser um lugar hostil para novatos. Deixar as expectativas do contribuínte claras e automatizadas deixa o projeto mais saudável.

### Discordo da regra X, você pode mudá-la?

Não. O ponto principal do `standard` é evitar [bikeshedding][bikeshedding] sobre estilos. Há vários debates online sobre tabs vs. espaços, etc., que nunca vão terminar. Esses debates apenas tiram as pessoas do foco, que deveria ser terminar seus projetos. No fim das contas você só tem que 'escolher um', e essa é a filosofia do `standard` - um monte de opiniões 'escolha um' juntadas com todo o cuidado. Espero que os usuários percebam o valor nisso ao invés de defender suas próprias opiniões.

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

### Mas isso não é um padrão legítimo!

Claro que não! O estilo aqui disposto não é afiliado com nenhum grupo de padrões web oficiais, e é por isso que esse repo se chama `standard/standard` e não `ECMA/standard`.

A palavra  "standard" tem muito mais significado do que só "web standard" :-) Por exemplo:

- Esse módulo ajuda a manter seu código num alto *padrão de qualidade*.
- Esse módulo assegura que novos contribuíntes sigam alguns  *padrões de estilo* básicos.

### Existe um formatador automático?

Sim! Você pode usar  `standard --fix` para consertar a maioria dos problemas automaticamente.

`standard --fix` vem junto do `standard` (since v8.0.0) para conveniência máxima. Há muitos problemas corrigíveis, mas alguns erros, tipo não tratar erros nos callbacks do node, devem ser corrigidos manualmente.

Para economizar seu tempo, `standard` solta uma mensagem ("Run `standard --fix` to automatically fix some
problems.") quando detecta problemas que podem ser corrigidos manualmente.

Alternativamente, se seu código é feito apenas de ES5, você pode tentar usar
[`standard-format`][standard-format] (um pacote separado), mas provavlemente não vai ser mantido pois  `standard --fix` funciona muito bem, e isso faz com que não precisemos manter duas ferramentas com regras de configuração separadas.

[standard-format]: https://github.com/maxogden/standard-format

### Como ignoro arquivos?

Os caminhos `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, pastas/arquivos escondidos (começando com `.`), e todos os arquivos nos padrões no
`.gitignore` da raiz do projeto são automaticamente ignorados.

Às vezes você precisa ignorar algumas pastas adicionais ou arquivos minificados específicos. Para fazer isso, adicione uma propriedade `standard.ignore` no `package.json`:

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

### Como escondo um determinado aviso?

Em casos raros, você vai precisar quebrar uma regra e esconder um warning gerado pelo `standard`.


JavaScript Standard Style usa o [`eslint`](http://eslint.org/) por baixo dos panos, sendo assim, você pode esconder algum aviso da mesma forma que você faria se utilizasse `eslint` diretamente.

Para receber output verboso (para que você descubra que regra em particular precisa ignorar), execute:

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

Desabilite **todas as regras** oem uma linha específica:

```js
file = 'Eu sei bem o que tô fazendo' // eslint-disable-line
```

Ou, desabilite  **apenas** na regra `"no-use-before-define"`:

```js
file = 'Eu sei bem o que tô fazendo' // eslint-disable-line no-use-before-define
```

Ou, desabilite a regra  `"no-use-before-define"` em  **várias linhas**:

```js
/* eslint-disable no-use-before-define */
console.log('código fora do padrão...')
console.log('código fora do padrão...')
console.log('código fora do padrão...')
/* eslint-enable no-use-before-define */
```

### Eu uso uma biblioteca que polui o namespace global. Como eu previno erros de "variable is not defined"?

Alguns packages (tipo o `mocha`) colocam suas funções (tipo `describe`, `it`) no objeto global (que ruim!). Devido ao fato dessas funções não serem definidas ou chamadas via  `require` em lugar algum do seu código, `standard` vai te avisar que você tá usando uma variável que não está definida (geralmente essa regra é bastante útil para pegar typos!). Mas queremos desabilitar essa função para variáveis globais.

Para fazer com que o  `standard` (e outros humanos que lerão seu código) saibam que algumas variáveis são globais no seu código, adicione isso ao topo do seu arquivo:

```
/* global myVar1, myVar2 */
```

Se você possui centenas de arquivps, adicionar comentários em cada um pode ficar um saco; Nesses casos, você pode adicionar isso ao `package.json`:

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```

### Posso usar um custom parser de JS novinho em folha que saiu ontem para suporte ao ES Next?

Antes de usar um custom parser, considere se a complexidade a mais no seu código faz com que o processo valha a pena.

`standard` suporta custom JS parsers. Para usar um custom parser, instale via npm
(por exemplo: `npm install babel-eslint`) e adicione isso ao seu `package.json`:

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

Se você está usando  `standard` de forma global (instalou com `-g`), você vai precisar instalar  `babel-eslint` globalmente como `npm install babel-eslint -g`.

### Posso usar uma linguagem variante de JavaScript, tipo Flow?

Antes de usar uma variante de JS customizada, considere se a complexidade a mais no seu processo de construção (e os esforços necessários para conseguir contribuíntes numa velocidade boa) valem a pena.

`standard` suporta plugins de ESLint. Use um desses para transformar seu código em JavaScript válido antes que  `standard` o veja. Para usar um custom parser, instale via npm (exemplo: `npm install eslint-plugin-flowtype`) e adicione isso ao seu `package.json`:

```json
{
  "standard": {
    "parser": "babel-eslint",
    "plugins": [
      "flowtype"
    ]
  }
}
```

Se você está usando `standard` globalmente (instalou com `-g`), você também terá que instalar  `eslint-plugin-flowtype` globalmente com
`npm install eslint-plugin-flowtype -g`.

### Você pode tornar regra X configurável?

Não. O objetivo do  `standard` é economizar seu tempo escolhendo regras razoáveis para que você gaste seu tempo resolvendo problemas de verdade. Se você realmente quer configurar centenas de regras ESLint individualmente, você sempre pode usar `eslint` diretamente.

Se você apenas quer trocar algumas regras, considere usar
[essa configuração compartilhável](https://github.com/standard/eslint-config-standard) e jogue suas mudanças em cima.

Dica: Use `standard` e pronto. Há problemas reais que você poderia usar seu tempo resolvendo! :P

### E os Web Workers?

Adicione isso no topo do seu arquivo:

```js
/* eslint-env serviceworker */
```

Isso permite que `standard` (e outras pessoas que lerão seu código) saibam que `self` é uma global num código de web worker.

### E a respeito de Mocha, Jasmine, QUnit, etc?

Para ter suporte a mocha nos seus arquivos de teste, adicione isso no começo do seus arquivos de teste:

```js
/* eslint-env mocha */
```

Onde  `mocha` pode ser  `jasmine`, `qunit`, `phantomjs`, e por aí vai. Para ver a lista completa, cheque a documentação para
[especificar ambientes](http://eslint.org/docs/user-guide/configuring.html#specifying-environments) do ESLint.
Para uma lista de quais variávies globais estão disponíveis nesses ambientes, cheque o módulo npm [globals](https://github.com/sindresorhus/globals/blob/master/globals.json) .

### Existe um hook `pre-commit` para Git?

Curioso você perguntar!

```sh
#!/bin/sh
# Ensure all javascript files staged for commit pass standard code style
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```

Alternativamente, [overcommit](https://github.com/brigade/overcommit) é um gerenciador de ganchos Git que incluem suporte para rodar `standard` como um gancho pre-commit de Git.
Para habilitar, adicione o seguinte ao seu  `.overcommit.yml`:

```yaml
PreCommit:
  Standard:
    enabled: true
```

### Como eu deixo o output todo coloridinho e *bonitinho*?

O output de fábrica é simples e direto, mas se você gosta de coisinhas brilhantes, instale  [snazzy](https://www.npmjs.com/package/snazzy):

```
npm install snazzy
```

E rode:

```bash
$ standard --verbose | snazzy
```

Há também [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), e
[standard-summary](https://www.npmjs.com/package/standard-summary).

## Node.js API

### `standard.lintText(text, [opts], callback)`

Aplica lint no código fornecido `text` para forçar JavaScript Standard Style. Um objeto `opts` pode ser fornecido:

```js
var opts = {
  fix: false,   // automaticamente corrige problemas
  globals: [],  // declaração de variáveis globais
  plugins: [],  // plugins eslint
  envs: [],     // ambiente eslint
  parser: ''    // js parser (e.g. babel-eslint)
}
```

O `callback` vai ser chamado com os objetos `Error` e `results`:

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

Aplica lint nos globs `files`. Um objeto `opts` pode ser passado

```js
var opts = {
  ignore: [],   // globs de arquivo para ser ignorados (has sane defaults)
  cwd: '',      // diretório atual de trabalho (default: process.cwd())
  fix: false,   // corrige problemas automaticamente
  globals: [],  // variáveis globais para declarar
  plugins: [],  // plugins eslint
  envs: [],     // ambiente eslint
  parser: ''    // js parser (e.g. babel-eslint)
}
```

O `callback` vai ser chamado com os objetos `Error` e `results`:

## Contribuições

Contribuições são bem-vindas! Cheque o [issues](https://github.com/standard/standard/issues) ou os [PRs](https://github.com/standard/standard/pulls), e faça o seu próprio se quiser algo que não encontra aqui.

Junte-se ao `#standard` no freenode.

### Quero contribuir com o `standard`. Quais packages eu devo conhecer?

- **[standard](https://github.com/standard/standard)** - esse repo
  - **[standard-engine](https://github.com/flet/standard-engine)** - Motor cli para regras arbritrárias de ESLint
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - Regras ESLint para  `standard`
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - Regras  ESLint custom  para `standard` (Não fazem parte do core do ESLint)
  - **[eslint](https://github.com/eslint/eslint)** - O linter que move o `standard`
- **[standard-format](https://github.com/maxogden/standard-format)** - Formatador de código automático
- **[snazzy](https://github.com/standard/snazzy)** - Output de terminal bonitinho
- **[standard-www](https://github.com/standard/standard-www)** - código do  https://standardjs.com
- **[semistandard](https://github.com/Flet/semistandard)** - standard, com ponto-e-vírgula (se você precisar)

Há vários **[plugins de editores](#text-editor-plugins)**, uma lista de
**[packages que usam `standard`](https://github.com/standard/standard-packages)**,
e uma awesome list de
**[packages do ecossistema `standard` ](https://github.com/standard/awesome-standard)**.

## License

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
