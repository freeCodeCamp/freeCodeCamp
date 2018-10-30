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

<h4 align="center">Un solo Stile JavaScript per domarli tutti</h4>

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

## Guida allo stile JavaScript, con linter e autocorrettore del codice

Questo modulo fa risparmiare tempo a te (e altri!) in tre modi:

- **Nessuna configurazione** La maniera più veloce per rafforzare un stile consistente
  nel tuo progetto. Basta solo installarlo.
- **Codice automatica formattato** Esegui solamente `standard --fix` e puoi dire addio
  a tutto quel codice inconsistente e disordinato.
- **Trova errori di stile ed errori di programmazione** Risparmia tempo durante i controlli
  del codice senza fare avanti e indietro tra i vari collaboratori

Non ci sono decisioni da prendere. Nessun `.eslintrc`, `jshintrc`, o `.jscsrc` file da mantenere.
Funziona e basta.

Installa con:

```
npm install standard --save-dev
```

## Le regole

- **2 spazi** per indentare
- **Singolo apostrofo per le stringhe** - eccetto per evitare l'escaping
- **Nessuna variabile non utilizzata** - questo cattura *molti* errori!
- **Nessun punto e virgola** [È][1] [OK.][2] [Davvero!][3]
- **Mai iniziare una linea di codice con `(`, `[`, or `` ` ``**
  - Questa è l'unica scappatoia per omettere i punto e virgola *automaticamente controllato per te!*
  - [Maggiori dettagli][4]
- **Spazio dopo le parole chiave** `if (condition) { ... }`
- **Spazio dopo il nome di una funzione** `function name (arg) { ... }`
- Usare sempre `===` invece di `==` ma `obj == null` è consentito per controllare `null || undefined`.
- Sempre gestire l'errore node.js `err` dato come parametro da una funzione
- Usare sempre il prefisso per le variabili globali del browser con `window` - eccezione per `document` e `navigator`
  - Previene l'uso di nomi riservati per le variabili globali del browser, come ad esempio `open`, `length`,
    `event`, e `name`.
- **E [ancora di più][5]** *prova `standard`, oggi!*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
[4]: RULES.md#semicolons
[5]: RULES.md#javascript-standard-style

Per avere le idee più chiari, da un'occhiata al
[file d'esempio](https://github.com/expressjs/body-parser/blob/master/index.js) scritto
usando JavaScript Standard Style. O guarda i
[millemila progetti](https://raw.githubusercontent.com/standard/standard-packages/master/all.json)
che usano `standard`!

## Tabella dei contenuti

- Settaggio veloce
  - [Installazione](#installazione)
  - [Utilizzo](#utilizzo)
  - [Cosa vorresti fare se sei intelligente](#cosa-vorresti-fare-sei-intelligente)
- FAQ
  - [Perchè dovrei usare JavaScript Standard Style?](#perche-dovrei-usare-javascript-standard-style)
  - [Chi usa JavaScript Standard Style?](#chi-usa-javascript-standard-style)
  - [Ci sono dei plugin per gli editor di testo?](#ci-sono-dei-plugin-per-gli-editor-di-testo)
  - [Esiste un banner?](#esiste-un-banner)
  - [Non sono d'accordo con la regola X, posso cambiarla?](#non-sono-daccordo-con-la-regola-x-posso-cambiarla)
  - [Ma questo non è un vero web standard!](#bma-questo-non-e-un-vero-web-standard)
  - [Esiste un formattatore automatico?](#esiste-un-formattatore-automatico)
  - [Come posso ignorare dei file?](#come-posso-ignorare-dei-file)
  - [Come posso nascondere un determinato warning?](#come-posso-nascondere-un-determinato-warning)
  - [Utilizzo una libreria che inquina il namespace globale. Come posso prevenire errori del tipo "variable is not defined"?](#tilizzo-una-libreria-che-inquina-il-namespace-globale-come-posso-prevenire-errori-del-tipo-variable-is-not-defined)
  - [Come posso usare funzionalità sperimentali di JavaScript (ES Next)?](#ome-posso-usare-funzionalita-sperimentali-di-javascript-es-next)
  - [Posso usare varianti di JavaScript come Flow?](#posso-usare-varianti-di-javascript-come-flow)
  - [Riguardo Mocha, Jasmine, QUnit, ecc.?](#riguardo-mocha-jasmine-qunit-ecc)
  - [Riguardo Web Workers?](#riguardo-web-workers)
  - [Posso controllare codice dentro file di tipo Markdown o HTML?](#osso-controllare-codice-dentro-file-di-tipo-markdown-o-html)
  - [C'è un hook Git per `pre-commit`?](#ce-un-hook-git-per-pre-commit)
  - [Come posso mostrare l'output del mio codice colorato e *carino*?](#ome-posso-mostrare-loutput-del-mio-codice-colorato-e-carino)
  - [C'è un API per Node.js?](#ce-un-api-per-nodejs)
  - [Come posso contribuire a `standard`?](#come-posso-contribuire-per-standard)
- [Licenza](#licenza)

## Installazione

La maniera più semplice per usare JavaScript Standard Style è quella di installarlo globalmente usando la linea di comando di Node. Esegui il seguente comando da terminale:

```bash
$ npm install standard --global
```

O, se vuoi installare `standard` localmente, da utilizzare in un singolo progetto:

```bash
$ npm install standard --save-dev
```

*Nota: per eseguire i precedenti comandi, [Node.js](http://nodejs.org) and [npm](https://npmjs.com) deve essere già installato
sulla propria macchina.*

## Utilizzo

Dopo aver installato `standard`, dovresti essere in grado di utilizzarlo come programma. Lo scenario d'uso più comune sarebbe quello di
controllare lo stile di tutti i tuoi file JavaScript attualmente presenti nel tuo progetto:

```bash
$ standard
Error: Use JavaScript Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

Puoi opzionalmente passare una cartella (o cartelle) usando il pattern globale. Assicurati di mettere
tra virgolette i percorsi contenenti il pattern globale, così verranno espansi da `standard` invece che dalla tua shell:

```bash
$ standard "src/util/**/*.js" "test/**/*.js"
```

**Nota**: di default `standard` controllerà tutti i file che corrispondono al seguente pattern:
`**/*.js`, `**/*.jsx`.

## Cosa vorresti fare se sei intelligente

1. Aggiungerlo al tuo `package.json`

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

2. Lo stile del tuo codice verrà controllato automaticamente quando esegui `npm test`
  ```bash
  $ npm test
  Error: Use JavaScript Standard Style
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```
3. Mai più suggerimenti riguardo lo stile del tuo codice durante le pull request!

## Perchè dovrei usare JavaScript Standard Style?

La bellezza di JavaScript Standard Style è la sua semplicità. Nessuno vuole mantenere migliaia di linee di codice di configurazione per lo stile del codice per ogni progetto/module sul quale si lavora. Basta impazzire!

Questo modulo fa risparmiare tempo a te (e altri!) in tre modi:

- **Nessuna configurazione** La maniera più veloce per rafforzare un stile consistente
  nel tuo progetto. Basta solo installarlo.
- **Codice automatica formattato** Esegui solamente `standard --fix` e puoi dire addio
  a tutto quel codice inconsistente e disordinato.
- **Trova errori di stile ed errori di programmazione** Risparmia tempo durante i controlli
  del codice senza fare avanti e indietro tra i vari collaboratori

  Adottare lo stile `standard` signica dare più importanza alla chiarezza del codice e convenzioni della comunità rispetto che allo stile personale. Questo non potrebbe avere senso per il 100% dei progetti e modi di sviluppo, ma l'open source può essere un posto ostile per i nuovi arrivati. Decidere le aspettative dei collaboratori in modo chiaro e automatizzato rendere un progetto più sano.

## Chi usa JavaScript Standard Style?

Un sacco di gente!


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

[<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodesource.png>](https://nodesource.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/greenkeeper.png>](https://greenkeeper.io) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/karma.png>](https://karma-runner.github.io) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/taser.png>](https://www.taser.com) | [<img width=150 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/neo4j.png>](https://www.neo4j.com) |
|---|---|---|---|---|


Oltre alle aziende, anche molti membri della comunità usano `standard` su pacchetti che sono [troppo numerosi](https://raw.githubusercontent.com/standard/standard-packages/master/all.json) da mostrare qui.

`standard` è inoltre il miglior linter favorito dal caso d'uso dalla GitHub [Clean Code Linter](https://github.com/showcases/clean-code-linters).

## Ci sono dei plugin per gli editor di testo?

Primo, installa `standard`. Dopo di che installa il plugin più appropriato per il tuo editor:

### Sublime Text

Usano **[Package Control][sublime-1]**, installa **[SublimeLinter][sublime-2]** e
**[SublimeLinter-contrib-standard][sublime-3]**.

Per la formattazione automatica durante il salvataggio, installa **[StandardFormat][sublime-4]**.

[sublime-1]: https://packagecontrol.io/
[sublime-2]: http://www.sublimelinter.com/en/latest/
[sublime-3]: https://packagecontrol.io/packages/SublimeLinter-contrib-standard
[sublime-4]: https://packagecontrol.io/packages/StandardFormat

### Atom

Installa **[linter-js-standard][atom-1]**.

In alternativa, puoi installare **[linter-js-standard-engine][atom-4]**. Invece di installare la sua versione di `standard`, userà automaticamente la version installata all'interno del tuo progetto. Funzionerà automaticamente anche con altri linters che si basano su **[standard-engine][atom-5]**.

Per la formattazione automatica, installa **[standard-formatter][atom-2]**. Per aiuti (snippets),
installa **[standardjs-snippets][atom-3]**.

[atom-1]: https://atom.io/packages/linter-js-standard
[atom-2]: https://atom.io/packages/standard-formatter
[atom-3]: https://atom.io/packages/standardjs-snippets
[atom-4]: https://atom.io/packages/linter-js-standard-engine
[atom-5]: https://github.com/Flet/standard-engine

### Visual Studio Code

Installa **[vscode-standardjs][vscode-1]**. (Include supporto per la formattazione automatica.)

Per JS snippets, installa: **[vscode-standardjs-snippets][vscode-2]**. Per ReactJS snippets, installa **[vscode-react-standard][vscode-3]**.

[vscode-1]: https://marketplace.visualstudio.com/items/chenxsan.vscode-standardjs
[vscode-2]: https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets
[vscode-3]: https://marketplace.visualstudio.com/items/TimonVS.ReactSnippetsStandard

### Vim

Installa **[ale][vim-1]**.

Per la formattazione automatica al salvataggio, aggiungi quelle linee a `.vimrc`:

```vim
autocmd bufwritepost *.js silent !standard --fix %
set autoread
```

Pacchetti alternativi che possono essere inclusi sono [neomake][vim-2] e [syntastic][vim-3], entrambi hanno all'interno il supporto per `standard` (configurazione potrebbe essere necessaria).

[vim-1]: https://github.com/w0rp/ale
[vim-2]: https://github.com/neomake/neomake
[vim-3]: https://github.com/vim-syntastic/syntastic

### Emacs

Installa **[Flycheck][emacs-1]** e controlla **[manual][emacs-2]** per imparare come abilitarlo all'interno del tuo progetto.

[emacs-1]: http://www.flycheck.org
[emacs-2]: http://www.flycheck.org/en/latest/user/installation.html

### Brackets

Cerca l'estenzione di registro per **["Standard Code Style"][brackets-1]** and clicca "Install".

[brackets-1]: https://github.com/ishamf/brackets-standard/

### WebStorm (PhpStorm, IntelliJ, RubyMine, JetBrains, etc.)

WebStorm [ha annunciato recentemente supporto nativo](https://blog.jetbrains.com/webstorm/2017/01/webstorm-2017-1-eap-171-2272/)
per `standard` direttamente nell'IDE.

Se preferisci configurare `standard` manualmente, [segui questa guida][webstorm-1]. Questa guida va bene per tutti i prodotti JetBrains, come ad esempio PhpStorm, IntelliJ, RubyMine, ecc.

If you still prefer to configure `standard` manually, [follow this guide][webstorm-1]. This applies to all JetBrains products, including PhpStorm, IntelliJ, RubyMine, etc.

[webstorm-1]: docs/webstorm.md

## Esiste un banner?

Sì! Se usi `standard` nel tuo progetto, puoi includere uno di questi banner nel tuo readme file per far sapere alle persone the il tuo codice usa JavaScript Standard Style.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

```md
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
```

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

```md
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
```
## Non sono d'accordo con la regola X, posso cambiarla?

No. Il punto essenziale di `standard` è di aiutarti a salvare tempo evitando [bikeshedding][bikeshedding] (discussioni su piccole cose mentre la cosa più importante non è terminata) sullo stile del codice. Ci sono un sacco di grandi discussioni riguardo tabs vs. spazi, ecc. che non saranno mai risolte. Queste discussioni semplicemente fanno perdere tempo. Alla fine, quello che ti rimane da fare è solamente 'scegli qualcosa', è questa la filosofia di `standard` - un sensato insieme di opinioni di 'scegli qualcosa'. Con un po' di fiducia, gli utenti vedranno il valore in ciò invece di difendere il proprie opinioni personali.

Se davvero vuoi configurare centinaia di regole ESLint individualmente, puoi sempre usare `eslint` direttamente con [eslint-config-standard](https://github.com/standard/eslint-config-standard) in modo da usare le tue regole.

Suggerimento: usa semplicemente `standard` e vai avanti. Ci sono problemi più reali dove puoi spendere il tuo prezioso tempo! :P

[bikeshedding]: https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting

## Ma questo non è un vero web standard!

Ovvio che no! Lo stile presentato qui non è affiliato con nessuno degli gruppi standard web, ecco perchè questo repository si chiama `standard/standard` e non `ECMA/standard`.

La parola "standard" signica più di un "web standard" :-) Per esempio:

- Questo module aiuta a tenere il codice vicino ad uno *standard di qualità*
- Questo module assicura che nuovi contribtori seguano gli *stili standard*

## Esiste un formattatore automatico?

Sì! Puoi usare `standard --fix` per correggere la maggior parte degli errori automaticamente.

`standard --fix` è direttamente offerto da `standard` per offrire il massimo della convenienza. La maggior parte degli errori possono essere corretti, ma alcuni errori (come ad esempio dimenticarsi di gestire gli errori) devono essere corretti a mano.

Per risparmiare tempo, l'ouput di `standard` è un messaggio del tipo "`Run standard --fix to automatically fix some problems`" quando rileva problemi che possono essere risolti automaticamente.

## Come posso ignorare dei file?

Alcuni percorsi (`node_modules/`, `coverage/`, `vendor/`, `*.min.js`, `bundle.js`,
e file/cartelle the iniziano con `.` come `.git/`) sono automaticamente ignorati.

Anche i percorsi specificati all'interno del file `.gitignore` sono automaticamente ignorati.

Alle volte hai bisogno di ignorare file minificati o cartelle in più.  Per farlo, aggiungi la proprietà `standard.ignore` all'interno di `package.json`:

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

## Come posso nascondere un determinato avviso?

In rari casi, avarai la necessità di rompere le regole e nascondere l'avviso generato da `standard`.

JavaScript Standard Style usa [ESLint](http://eslint.org/) al di sotto del suo engine e puoi nascondere gli avvisi come se lo facessi direttamente per ESLint.

Per avere un output più verboso (e così avere accesso al nome della regola), esegui:

```bash
$ standard --verbose
Error: Use JavaScript Standard Style
  routes/error.js:20:36: 'file' was used before it was defined. (no-use-before-define)
```

Disabilita **tutte le regole** in una specifica riga:

```js
file = 'So cosa sto facendo' // eslint-disable-line
```

O, disabilita **solo** la regola `"no-use-before-define"`:

```js
file = 'So cosa sto facendo'  // eslint-disable-line no-use-before-define
```

O, disabilita la regola `"no-use-before-define"` per **più righe**:

```js
/* eslint-disable no-use-before-define */
console.log('offending code goes here...')
console.log('offending code goes here...')
console.log('offending code goes here...')
/* eslint-enable no-use-before-define */
```

## Utilizzo una libreria che inquina il namespace globale. Come posso prevenire errori del tipo "variable is not defined"?

Alcune librerie (es. `mocha`) mettono le loro funzionalità (es. `describe`, `it`) nell'oggetto globale. Considerato il fatto che queste funzioni definite o non sono importate usando il `require` all'interno del tuo codice, `standard` vi avviserà che stai per utilizzare una variabile che non è non stata definita. (di solito questa regola è utile per trovare errori di scrittura!). Ma vogliamo disabilitarlo per questi oggetti globali.

Per permettere a `standard` (anche per quando qualcun altro leggerà il tuo codice) di far sapere che certe variabili  sono globali all'interno del tuo codice, aggiungi questo all'inizio del tuo file:

```js
/* global myVar1, myVar2 */
```

Se hai centiaia di file, sarebbe più conveniente evitare di aggiungere commenti su ogni file. In questo caso, esegui:

```bash
$ standard --global myVar1 --global myVar2
```

Oppure aggiungi questo al tuo `package.json`:

```json
{
  "standard": {
    "globals": [ "myVar1", "myVar2" ]
  }
}
```
*Nota: `global` e `globals` sono equivalenti.*

## Come posso usare funzionalità sperimentali di JavaScript (ES Next)?

`standard` supporta le ultime funzionalità di ECMAScript, ES8 (ES2017), includendo anche funzionalità proposte (proposals) che si trovano allo "Stage 4" del processo decisionale.

Per supportare funzionalità sperimentali, `standard` permette di configurare uno perser JavaScript su misura (custom). Prima di aggiungere un diverso parser, considera se la complessità che si andrà ad aggiungere ne valga la pena.

Per usare un parser su misura (custom), installalo da npm (esempio: `npm install --save-dev babel-eslint`) ed esegui:

```bash
$ standard --parser babel-eslint
```

Oppure aggiungi questo al tuo `package.json`:

```json
{
  "standard": {
    "parser": "babel-eslint"
  }
}
```

Se `standard` è installato globalmente (i.e. `npm install standard --global`), allora assicurati che anche `babel-eslint` sia installato globalmente, con
`npm install babel-eslint --global`.

## Posso usare varianti di JavaScript come Flow?

Prima di usare una variante di JavaScript, considera se l'aggiunta di complessità (ed energie richieste per permettere i nuovi sviluppatori di essere pronti) ne valga la pena.

`standard` supporta plugins ESLint. Utilizza uno di questi plugins per trasformare il codice in valido JavaScript prima che `standard` lo veda. Per usare un parser ad-hoc, installalo tramite npm ed esegui:

```bash
$ standard --plugin PLUGIN_NAME
```

Oppure aggiungi questo al tuo `package.json`:

```json
{
  "standard": {
    "plugins": [ "PLUGIN_NAME" ]
  }
}
```

Per usare Flow, hai bisogno di usare `babel-eslint` come parser, Quindi, esegui `npm install eslint-plugin-flowtype babel-eslint` e dopo di che esegui:

```bash
$ standard --plugin flowtype --parser babel-eslint
```

Oppure aggiungi questo al tuo `package.json`:

```json
{
  "standard": {
    "plugins": [ "flowtype" ],
    "parser": "babel-eslint"
  }
}
```

Se `standard` è installato globalmente (es. `npm install standard --global`), allora assicurati che anche `eslint-plugin-flowtype` sia installato globalmente, con
`npm install eslint-plugin-flowtype --global`.

*Nota: `plugin` e `plugins` sono equivalenti.*

## Riguardo Mocha, Jasmine, QUnit, ecc.?

Per supportare mocha nei tuoi file di test, aggiungi questo all'inizio dei tuoi file:

```js
/* eslint-env mocha */
```

O esegui:

```bash
$ standard --env mocha
```

Dove `mocha` può essere anche `jasmine`, `qunit`, `phantomjs`, e così via. Per vedere l'intera lista, controlla la documentazione di ESlint su come
[specificare degli ambienti](http://eslint.org/docs/user-guide/configuring.html#specifying-environments). Per una lista completa degli oggetti globali a disposizione degli ambienti, controlla la sezione
[globals](https://github.com/sindresorhus/globals/blob/master/globals.json) del modulo npm.

*Nota: `env` e `envs` sono equivalenti.*

## Riguardo Web Workers?

Aggiungi questo all'inizio del tuo file:

```js
/* eslint-env serviceworker */
```
Per permettere a `standard` (anche per quando qualcun altro leggerà il tuo codice) di far sapere
che `self` è un oggetto globale all'interno del codice del tuo web worker.

## Posso controllare codice dentro file di tipo Markdown o HTML?

Per controllare codice all'interno di file di tipo Markdown, usa [`standard-markdown`](https://www.npmjs.com/package/standard-markdown).

In alternativa, ci sono diversi plugin di ESLint per controllare il codice all'interno di Markdown, HTML e altri tipi di file:

Per controllare il codice dentro un file Markdown, usa il plugin ESLint:

```bash
$ npm install eslint-plugin-markdown
```

Dopodiche, per controllare codice JavaScript che compare dentro un blocco di codice, esegui:

```bash
$ standard --plugin markdown '**/*.md'
```

Per controllare codice dentro file HTML, usa il plugin ESLint:

```bash
$ npm install eslint-plugin-html
```

Dopodiche, per controllare codice JavaScript che compare dentro i tag `<script>`, esegui:

```bash
$ standard --plugin html '**/*.html'
```

## C'è un hook Git per `pre-commit`?

Divertente!

```sh
#!/bin/sh
#Assicurati che tutti i file javascript pronti per il commit passano lo standard code style
git diff --name-only --cached --relative | grep '\.jsx\?$' | xargs standard
if [ $? -ne 0 ]; then exit 1; fi
```


## Come posso mostrare l'output del mio codice colorato e *carino*?

L'output all'interno della libreria è alquanto basilare, ma se ti piacciono le cose sfarzose, allora installa [snazzy](https://www.npmjs.com/package/snazzy):

```bash
$ npm install snazzy
```

Ed esegui:

```bash
$ standard --verbose | snazzy
```

Ci sono anche [standard-tap](https://www.npmjs.com/package/standard-tap),
[standard-json](https://www.npmjs.com/package/standard-json),
[standard-reporter](https://www.npmjs.com/package/standard-reporter), e
[standard-summary](https://www.npmjs.com/package/standard-summary).

## C'è un API per Node.js?

Sì!

### `standard.lintText(text, [opts], callback)`

Esegue il lint sul parametro passato come input `text`. Il parametro `opts` è un oggetto con le seguenti opzioni:

```js
{
  cwd: '',      // l'attuale cartella del tuo progetto (default: process.cwd())
  filename: '', // percorso del file al quale verrà eseguito il lint (opzionale, visto che alcuni plugin ne hanno bisogno)
  fix: false,   // corregge gli errori automaticamente
  globals: [],  // particolari variabili globali da dichiarare
  plugins: [],  // particolari plugin eslint
  envs: [],     // particolari eslint environments
  parser: ''    // particolari parser JavaScript (es. babel-eslint)
}
```

Ulteriori opzioni possono essere caricate usando `package.json` se si trova all'interno della cartella del tuo progetto.

Il parametro `callback` sarà chiamato con un `Error` ed un oggetto `results`.

L'oggetto `results` conterrà se seguenti proprietà:

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
      output: '' // codice sorgente fissato (accessibile solo con opzione {fix: true})
    }
  ],
  errorCount: 0,
  warningCount: 0
}
```

### `results = standard.lintTextSync(text, [opts])`

Versione sincrona di `standard.lintText()`. Se si verifica un errore, viene lanciata un'eccezione. Altrimenti viene ritornato l'oggetto `results`.

### `standard.lintFiles(files, [opts], callback)`

Esegue il lint sui `files` glob. È possibile passare un oggetto `opts`:

```js
var opts = {
  ignore: [],   // file globs da ignorare (ha alcuni defaults)
  cwd: '',      // l'attuale cartella del tuo progetto (default: process.cwd())
  fix: false,   // corregge gli errori automaticamente
  globals: [],  // particolari variabili globali da dichiarare
  plugins: [],  // particolari plugin eslint
  envs: [],     // particolari eslint environments
  parser: ''    // particolari parser JavaScript (es. babel-eslint)
}
```

Il parametro `callback` sarà chiamato con un `Error` ed un oggetto `results`. (lo stesso di prima).


## Come posso contribuire a `standard`?

I collaboratori sono i benvenuti! Controlla le [issue](https://github.com/standard/standard/issues) o le [PR](https://github.com/standard/standard/pulls) e crea la tua di PR se vuoi qualcosa che non vedi.

Vuoi chattare? Unisciti ai collaboratori su IRC nel canale `#standard` su freenode.

Eccoti importanti module che sono importanti nell'ecosistema di `standard`:

- **[standard](https://github.com/standard/standard)** - questo repository
  - **[standard-engine](https://github.com/flet/standard-engine)** - motore cli per regole eslint arbitrarie
  - **[eslint-config-standard](https://github.com/standard/eslint-config-standard)** - regole eslint per standard
  - **[eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)** - regole eslint per standard (JSX)
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - regole eslint personalizzate per standard (non fanno parte del cuore di eslint)
  - **[eslint](https://github.com/eslint/eslint)** - il linter che da energie a standard
- **[snazzy](https://github.com/standard/snazzy)** - generate output carino nel terminale per standard
- **[standard-www](https://github.com/standard/standard-www)** - codice per https://standardjs.com
- **[semistandard](https://github.com/Flet/semistandard)** - standard, ma con i punti e virgola (se proprio sei obbligato)

Ci sono anche molti **[plugin per l'editor di testo](#ci-sono-dei-plugin-per-gli-editor-di-testo)**, una lista di **[npm packages che usano `standard`](https://github.com/standard/standard-packages)**,
una incredibile lista di
**[packages nell'ecosistema di `standard`](https://github.com/standard/awesome-standard)**.

## Licenza

[MIT](LICENSE). Copyright (c) [Feross Aboukhadijeh](http://feross.org).
