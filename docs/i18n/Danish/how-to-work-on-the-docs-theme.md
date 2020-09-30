# Hvordan man arbejder på docs tema

> [!BEMÆRK] En hurtig påmindelse om, at du ikke behøver at opsætte noget for at arbejde på indholdet til dokumentationswebstedet.
> 
> For at arbejde på de bidragende retningslinjer, kan du redigere eller tilføje filer i `docs` mappen [tilgængelig her](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Når dine ændringer er flettet, vil det blive gjort tilgængelige automatisk på dokumentationssiden.

## Struktur af docs hjemmeside

Webstedet er genereret ved hjælp af [`docsify`](https://docsify.js.org)og tjente ved hjælp af GitHub sider.

Typisk behøver du ikke at ændre nogen konfiguration eller bygge webstedet lokalt. Hvis du er interesseret, her er hvordan det virker:

- Hjemmesidens kilde til dette websted er tilgængelig i [`docs/index.html`](index.html).
- Vi tjener denne fil som en SPA ved hjælp af `docsify` og GitHub Sider.
- Scriptet `docsify` genererer indholdet af `markdown` filer i `docs` mappe efter behov.
- Hjemmesiden er genereret fra [`_coverpage.md`](_coverpage.md).
- sidepanelets navigation er genereret fra [`_sidebar.md`](_sidebar.md).

## Servering af dokumentationsstedet lokalt

Klon freeCodeCamp:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Installer `docsify`:

```sh
npm install -g docsify
```

og servere mappen `/docs`

```sh
docsify tjene docs
```

Alternativt, hvis du har installeret freeCodeCamp lokalt (se den lokale opsætningsguide), vi samler CLI med udviklingsværktøjerne, så du kan køre `npm run docs:serve` from the root of the repo.
