# Come lavorare sulla documentazione

## Lavorare sul contenuto della documentazione

Per lavorare sulle linee guida per i contributori, puoi modificare o aggiungere file nella cartella `docs` [disponibile qui](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Quando i tuoi cambiamenti sono accettati, saranno resi disponibili automaticamente nel sito della documentazione.

### Come creare un link interno

Se vuoi creare un link che punta a una sezione diversa della documentazione per contribuire, segui questo formato:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Se la sezione target è nella stessa pagina puoi omettere il nome del file
[Link text](#target-section-heading-id)
```

Assicurati di includere l'estensione del file (`.md`). Non specificare l'URL completo o aggiungere `/` prima del nome del file.

È necessario fare così per rendere questi link funzionanti anche nella versione tradotta del documento. Altrimenti, punterebbero alla versione inglese della pagina a discapito della lingua.

#### Tradurre documentazione con link interni

Quando lavori a tradurre la documentazione su Crowdin, assicurati di sostituire la parte `#target-section-heading-id` con l'id del documento tradotto. [Impara di più sul tradurre la documentazione qui](how-to-translate-files.md#tradurre-la-documentazione).

## Lavorare sul tema della documentazione

> [!NOTE] Non devi impostare nulla per lavorare sul contenuto della documentazione.
> 
> Per lavorare sulle linee guida per la contribuzione, vedi [la sezione su come lavorare sul contenuto della documentazione](#work-on-the-docs-content).

### Struttura del sito di documentazione

Il sito viene generato utilizzando [`docsify`](https://docsify.js.org) e servito utilizzando le pagine di GitHub.

In genere non è necessario modificare alcuna configurazione o costruire il sito localmente. Nel caso in cui tu sia interessato, ecco come funziona:

- La sorgente della homepage per questo sito è disponibile in [`docs/index.html`](index.html).
- Serviamo questo file come SPA (Single Page Application) usando `docsify` e GitHub Pages.
- Lo script `docsify` genera il contenuto del `file markdown` nella directory `docs` su richiesta.
- La homepage è generata dal file [`_coverpage.md`](_coverpage.md).
- la navigazione della barra laterale è generata da [`_sidebar.md`](_sidebar.md).

### Servire localmente il sito di documentazione

Clona freeCodeCamp:

```console
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
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

#### Servire e avviare solo il sito di documentazione

```console
npm run docs:serve
```

#### Servire il sito di documentazione accanto a freeCodeCamp localmente:

```console
npm run develop
```

> Il sito di documentazione dovrebbe essere disponibile su <http://localhost:3400>
