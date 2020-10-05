# Come lavorare sul tema dei documenti

> [!NOTA] Un rapido promemoria che non è necessario configurare nulla per lavorare sul contenuto del sito di documentazione.
> 
> Per lavorare sulle linee guida di contributo, è possibile modificare o aggiungere file nella directory `docs` [disponibile qui](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Quando le modifiche vengono unite, saranno rese disponibili automaticamente sul sito di documentazione.

## Struttura del sito docs

Il sito viene generato utilizzando [`docsify`](https://docsify.js.org)e servito utilizzando le pagine di GitHub.

In genere non è necessario modificare alcuna configurazione o costruire il sito localmente. Nel caso in cui siete interessati, ecco come funziona:

- La fonte della homepage per questo sito è disponibile in [`docs/index.html`](index.html).
- Serviamo questo file come SPA usando `docsify` e GitHub Pages.
- Lo script `docsify` genera il contenuto di `file markdown` nella directory `docs` su richiesta.
- La homepage è generata dal [`_coverpage.md`](_coverpage.md).
- la navigazione della barra laterale è generata da [`_sidebar.md`](_sidebar.md).

## Servizio locale del sito di documentazione

Clona freeCodeCamp:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Installa `docsify`:

```sh
npm install -g docsify
```

e serve la directory `/docs`

```sh
docsify serve docs
```

In alternativa, se hai installato freeCodeCamp localmente (vedi la guida di installazione locale), impacchettiamo la CLI con gli strumenti di sviluppo in modo da poter eseguire `npm run docs:serve` dalla root del repo.
