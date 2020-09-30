# Jak pracovat na tématu dokumentace

> [!POZNÁMKA] Rychlé upozornění, že nemusíte nic nastavovat pro práci na obsahu stránky dokumentace.
> 
> Chcete-li pracovat na pokynech pro přispívání, můžete upravit nebo přidat soubory do adresáře `dokumentace` [k dispozici zde](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Jakmile budou vaše změny sloučeny, budou automaticky zpřístupněny na stránce dokumentace.

## Struktura internetových stránek dokumentace

Stránka je generována pomocí [`docsify`](https://docsify.js.org)a servírována pomocí stránek GitHub.

Obvykle byste nemuseli měnit žádnou konfiguraci nebo stavět web lokálně. V případě, že máte zájem, zde je to, jak funguje:

- Zdroj domovské stránky je k dispozici v [`docs/index.html`](index.html).
- Tento soubor slouží jako SPA pomocí `docsify` a GitHub stránek.
- Skript `docsify` na vyžádání generuje obsah souborů `markdown` v `dokumentech`.
- Domovská stránka je generována z [`_coverpage.md`](_coverpage.md).
- postranní navigace je generována z [`_sidebar.md`](_sidebar.md).

## Místní obsluha stránky dokumentace

Klonovat volný CodeCamp:

```sh
git klonovat https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Nainstalovat `docsify`:

```sh
npm install -g docsify
```

a obsluhovat adresář `/docs`

```sh
docsify servisní dokumenty
```

Případně pokud jste nainstalovali freeCodeCamp lokálně (viz příručka lokálního nastavení), spojujeme CLI s vývojovými nástroji, takže můžete spustit `npm run docs:serve` od kořene repo.
