# Hur man arbetar på docs tema

> [!NOTE] En snabb påminnelse om att du inte behöver ställa in något för att arbeta på innehållet på dokumentationssidan.
> 
> För att arbeta med de bidragande riktlinjerna kan du redigera eller lägga till filer i `docs` -katalogen [tillgänglig här](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). När dina ändringar slås samman kommer de att göras tillgängliga automatiskt på dokumentationsplatsen.

## Struktur av docs webbplats

Webbplatsen genereras med [`docsify`](https://docsify.js.org)och serveras med hjälp av GitHub-sidor.

Vanligtvis behöver du inte ändra någon konfiguration eller bygga webbplatsen lokalt. Om du är intresserad, så här fungerar det:

- Hemsidans källa för denna webbplats finns i [`docs/index.html`](index.html).
- Vi tjänar denna fil som en SPA med `dokumentera` och GitHub sidor.
- `docsify` script genererar innehållet i `markdown` filer i `docs` katalog på begäran.
- Hemsidan genereras från [`_coverpage.md`](_coverpage.md).
- sidofältet navigering genereras från [`_sidebar.md`](_sidebar.md).

## Servering av dokumentationssidan lokalt

Klona freeCodeCamp:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Installera `docsify`:

```sh
npm install -g docsify
```

och tjäna katalogen `/docs`

```sh
docsify serve docs
```

Alternativt om du har installerat freeCodeCamp lokalt (se den lokala installationsguiden), vi buntar CLI med utvecklingsverktygen så att du kan köra `npm kör dokument:serve` från roten av repo.
