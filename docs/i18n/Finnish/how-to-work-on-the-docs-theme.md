# Miten työskennellä docs teema

> [!HUOM] Nopea muistutus siitä, että sinun ei tarvitse asettaa mitään sisällön työstämiseen dokumentaatiosivustolle.
> 
> Voit muokata tai lisätä tiedostoja `docs` -hakemistoon [jotka ovat saatavilla tästä](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Kun muutoksesi on yhdistetty, se asetetaan saataville automaattisesti dokumentaatiosivustolla.

## Dokumenttien verkkosivuston rakenne

Sivusto luodaan käyttäen [`docsify`](https://docsify.js.org), ja se tarjoillaan GitHub sivuilla.

Tyypillisesti sinun ei tarvitse muuttaa mitään konfiguraatiota tai rakentaa sivuston paikallisesti. Jos olet kiinnostunut, tässä on miten se toimii:

- Kotisivun lähde tälle sivustolle on saatavilla [`docs/index.html`](index.html).
- Palvelemme tätä tiedostoa SPA:na käyttäen `docsify` ja GitHub sivuja.
- The `docsify` skripti generoi `markdown` tiedoston sisällön `docs` hakemistoon pyynnöstä.
- Kotisivu on luotu [`_coverpage.md`](_coverpage.md).
- sivupalkin navigointi on luotu [`_sidebar.md`](_sidebar.md).

## Asiakirjojen tarjoaminen paikallisesti

Monista freeCodeCamp:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Asenna `docsify`:

```sh
npm install -g docsify
```

ja palvella `/docs` hakemistoa

```sh
docsify palvele dokumentteja
```

Vaihtoehtoisesti, jos olet asentanut freeCodeCamp paikallisesti (katso paikallinen asennusohje), me niputamme CLI kanssa kehitystyökaluja, jotta voit ajaa `npm ajaa docs:serve` juuresta repo.
