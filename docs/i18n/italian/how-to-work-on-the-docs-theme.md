# How to Work on Documentation

## Work on the Content of the Docs

Per lavorare sulle linee guida per i contributori, puoi modificare o aggiungere file nella cartella `docs` [disponibile qui](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Quando i tuoi cambiamenti sono accettati, saranno resi disponibili automaticamente nel sito della documentazione.

Quando aggiungi un nuovo file alla cartella `docs`, dovresti valutare se il file dovrebbe essere aggiunto anche alla barra laterale di navigazione. Generalmente creiamo un link nel file [`_sidebar.md`](_sidebar.md) per guide nuove e indipendenti. In alternativa, è possibile seguire le istruzioni qui sotto sulla creazione di un link interno per le guide di supporto.

### How to Create an Internal Link

Se vuoi creare un link che punta a una sezione diversa delle linee guida per contribuire, segui questo formato:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Se la sezione target è nella stessa pagina puoi omettere il nome del file
[Link text](#target-section-heading-id)
```

Assicurati di includere l'estensione del file (`.md`). Non specificare l'URL completo o aggiungere `/` prima del nome del file.

È necessario fare così per rendere questi link funzionanti anche nella versione tradotta del documento. Altrimenti, punterebbero alla versione inglese della pagina a discapito della lingua.

#### Tradurre documentazione con link interni

Quando lavori per tradurre la documentazione su Crowdin, assicurati di sostituire la parte `#target-section-heading-id` con l'id del documento tradotto. [Impara di più su come tradurre la documentazione qui](how-to-translate-files.md#tradurre-la-documentazione).

## Work on the Docs Theme

> [!NOTE] Non devi impostare nulla per lavorare sul contenuto della documentazione.
> 
> Per lavorare sulle linee guida per la contribuzione, vedi [la sezione su come lavorare sul contenuto della documentazione](#work-on-the-docs-content).

### Structure of the Docs Website

Il sito viene generato utilizzando [`docsify`](https://docsify.js.org) e servito utilizzando le pagine di GitHub.

In genere non è necessario modificare alcuna configurazione o costruire il sito localmente. Nel caso in cui tu sia interessato, ecco come funziona:

- La sorgente della homepage per questo sito è disponibile in [`docs/index.html`](index.html).
- Serviamo questo file come SPA (Single Page Application) usando `docsify` e GitHub Pages.
- Lo script `docsify` genera il contenuto del `file markdown` nella directory `docs` su richiesta.
- La homepage è generata dal file [`_coverpage.md`](_coverpage.md).
- La barra laterale di navigazione è generata da [`_sidebar.md`](_sidebar.md).

### Serving the Documentation Site Locally

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run the command below as needed from the root of the repo:

#### Serve and Launch the Documentation Site

```console
pnpm run docs:serve
```

> Il sito di documentazione dovrebbe essere disponibile su <http://localhost:3400>
