# Hoe te werken aan het thema van de documenten

> [!NOT] Een snelle herinnering dat je niets hoeft te installeren om te werken aan de inhoud van de documentatiesite.
> 
> Om te werken aan de bijdragende richtlijnen, kun je bestanden bewerken of toevoegen in de `docs` directory [die hier beschikbaar zijn](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Wanneer je wijzigingen zijn samengevoegd, wordt deze automatisch beschikbaar op de documentatiesite.

## Structuur van de documentenwebsite

De site wordt gegenereerd met behulp van [`docsify`](https://docsify.js.org), en wordt geserveerd met behulp van GitHub pagina's.

Normaal gesproken hoeft u geen configuratie te wijzigen of de site lokaal te bouwen. In het geval dat je geïnteresseerd bent, is hier hoe het werkt:

- De bron van de startpagina voor deze site is beschikbaar in [`documenten/index.html`](index.html).
- We dienen dit bestand als een SPA met behulp van `docsify` en GitHub pagina's.
- Het `docsify` script genereert de inhoud van `markdown` bestanden in `docs` directory op vraag.
- De startpagina is gegenereerd door de [`_coverpage.md`](_coverpage.md).
- de zijbalk navigatie wordt gegenereerd door [`_sidebar.md`](_sidebar.md).

## Documentatie lokaal te bedienen

Kloon gratiscode:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify dient docs
```

Installeer `docsify`:

```sh
npm install -g docsify
```

en bedien de map `/docs`

```sh
docs uitdelen
```

Of als u het freeCodeCamp lokaal hebt geïnstalleerd (zie de lokale installatiehandleiding), we bundelen de CLI met de ontwikkelaarshulpm zodat je `npm run docs:serve` van de root van de repo.
