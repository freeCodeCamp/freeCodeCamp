# Come lavorare sul tema dei documenti

> [!NOTE] Un rapido promemoria per ricordarti che non è necessario configurare nulla per lavorare sul contenuto del sito di documentazione.
> 
> Per lavorare sulle linee guida per i contributori, puoi modificare o aggiungere file nella cartella `docs` [disponibile qui](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Quando le modifiche verranno unite, saranno rese disponibili automaticamente sul sito di documentazione.

## Struttura del sito di documentazione

Il sito viene generato utilizzando [`docsify`](https://docsify.js.org) e servito utilizzando le pagine di GitHub.

In genere non è necessario modificare alcuna configurazione o costruire il sito localmente. Nel caso in cui tu sia interessato, ecco come funziona:

- Il sorgente della homepage per questo sito è disponibile in [`docs/index.html`](index.html).
- Serviamo questo file come SPA (Single Page Application) usando `docsify` e GitHub Pages.
- Lo script `docsify` genera il contenuto del `file markdown` nella directory `docs` su richiesta.
- La homepage è generata dal file [`_coverpage.md`](_coverpage.md).
- la navigazione della barra laterale è generata da [`_sidebar.md`](_sidebar.md).

## Servire localmente il sito di documentazione

Clona freeCodeCamp:

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Installa `docsify`:

```console
npm install -g docsify
```

e servi la directory `/docs`

```console
docsify serve docs
```

In alternativa, se hai installato freeCodeCamp localmente (vedi la guida di installazione locale), impacchettiamo il CLI con gli strumenti di sviluppo in modo da poter eseguire uno qualsiasi dei comandi sottostanti dalla root del repo quando necessario:

### Servire e avviare solo il sito di documentazione

```console
npm run docs:serve
```

### Servire il sito di documentazione accanto a freeCodeCamp localmente:

```console
npm run develop
```

> Il sito di documentazione dovrebbe essere disponibile su <http://localhost:3200>
