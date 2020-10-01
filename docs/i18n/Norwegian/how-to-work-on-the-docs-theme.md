# Hvordan jobbe med tema i docs

> En rask påminnelse om at du ikke trenger å sette opp noe for å arbeide på innholdet for dokumentasjonsnettstedet.
> 
> For å arbeide med de bidragende retningslinjene, kan du redigere eller legge til filer i `docs` mappen [tilgjengelig her](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Når dine endringer slås sammen, vil det bli gjort tilgjengelig automatisk på dokumentasjonssiden.

## Struktur på dokumentenes nettsted

Nettstedet genereres ved hjelp av [`docsify`](https://docsify.js.org), og servert ved hjelp av GitHub sider.

Vanligvis vil du ikke trenge å endre noen konfigurasjon eller bygge nettstedet lokalt. Hvis du er interessert, er det hvordan det fungerer:

- Hjemmesidens kilde for dette nettstedet er tilgjengelig i [`docs/index.html`](index.html).
- Vi tjener denne filen som en SPA ved å bruke `forsydde` og GitHub sider.
- `docsify` skriptet genererer innholdet i `markdown` filer i `docs` mappen på etterspørsel.
- Hjemmesiden er generert fra [`_coverpage.md`](_coverpage.md).
- sidepanelet er generert fra [`_sidebar.md`](_sidebar.md).

## Serving av dokumentasjonslokalitet lokalt

Klon freeCodeCamp:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Installer `docsify`:

```sh
npm install -g docsify
```

og tjener `/docs` mappen

```sh
docsify serve docs
```

Alternativt, hvis du har installert freeCodeCamp lokalt (se lokal oppsettveiledning), vi samler CLI med utviklingsverktøyene slik at du kan kjøre `npm run docs:serve` fra roten av repo.
