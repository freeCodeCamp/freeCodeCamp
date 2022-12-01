# Come lavorare sulla documentazione

## Lavorare sul contenuto della documentazione

Per lavorare sulle linee guida per i contributori, puoi modificare o aggiungere file nella cartella `docs` [disponibile qui](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). Quando i tuoi cambiamenti sono accettati, saranno resi disponibili automaticamente nel sito della documentazione.

When adding a new file to the `docs` directory, you should evaluate if the file should also be added to the sidebar navigation. We typically create a link in the [`_sidebar.md`](_sidebar.md) file for new and independent guides. Alternatively, You may follow the instructions below on creating an internal link for supporting guides.

### Come creare un link interno

If you want to create a link targeting a different section of the contributing guidelines, follow this format:

```md
[Link text](target-file-name.md#target-section-heading-id)

// Se la sezione target è nella stessa pagina puoi omettere il nome del file
[Link text](#target-section-heading-id)
```

Make sure you include the file extension (`.md`). Don't specify the full URL or append `/` before the file name.

This is necessary to make these links work for the translated version of the document. Otherwise, they will redirect to the English version of the page regardless of the language.

#### Tradurre documentazione con link interni

When you work on translating docs on Crowdin, make sure to replace the `#target-section-heading-id` with the id on the translated document. [Learn more about translating docs here](how-to-translate-files.md#translate-documentation).

## Lavorare sul tema della documentazione

> [!NOTE] Non devi impostare nulla per lavorare sul contenuto della documentazione.
> 
> Per lavorare sulle linee guida per la contribuzione, vedi [la sezione su come lavorare sul contenuto della documentazione](#work-on-the-docs-content).

### Struttura del sito di documentazione

The site is generated using [`docsify`](https://docsify.js.org) and served using GitHub pages.

Typically you would not need to change any configuration or build the site locally. In case you are interested, here is how it works:

- La sorgente della homepage per questo sito è disponibile in [`docs/index.html`](index.html).
- Serviamo questo file come SPA (Single Page Application) usando `docsify` e GitHub Pages.
- Lo script `docsify` genera il contenuto del `file markdown` nella directory `docs` su richiesta.
- La homepage è generata dal file [`_coverpage.md`](_coverpage.md).
- The sidebar navigation is generated from [`_sidebar.md`](_sidebar.md).

### Servire localmente il sito di documentazione

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run any of the below commands as needed from the root of the repo:

#### Servire e avviare solo il sito di documentazione

```console
npm run docs:serve
```

#### Servire il sito di documentazione accanto a freeCodeCamp localmente:

```console
npm run develop
```

> Il sito di documentazione dovrebbe essere disponibile su <http://localhost:3400>
