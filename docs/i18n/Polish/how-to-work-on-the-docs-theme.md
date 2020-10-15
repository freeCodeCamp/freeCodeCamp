# Jak pracować nad tematem docs

> [!NOTE] Szybkie przypomnienie, że nie musisz niczego skonfigurować do pracy nad zawartością strony dokumentacji.
> 
> Aby pracować nad wytycznymi dotyczącymi wkładu, możesz edytować lub dodawać pliki w katalogu `docs` [dostępnym tutaj](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). Kiedy Twoje zmiany zostaną scalone, zostaną one udostępnione automatycznie na stronie dokumentacji.

## Struktura strony internetowej dokumentów

Witryna jest generowana za pomocą [`docsify`](https://docsify.js.org)i obsługiwana za pomocą stron GitHub.

Zazwyczaj nie musisz zmieniać żadnej konfiguracji ani budować witryny lokalnie. Jeśli jesteś zainteresowany, oto jak to działa:

- Źródło strony głównej dla tej witryny jest dostępne w [`docs/index.html`](index.html).
- Obsługujemy ten plik jako SPA używając `docsify` i GitHub Stron.
- Skrypt `docsify` generuje zawartość plików `markdown` w katalogu `docs` na żądanie.
- Strona główna jest generowana z [`_coverpage.md`](_coverpage.md).
- nawigacja na pasku bocznym jest generowana z [`_sidebar.md`](_sidebar.md).

## Obsługa witryny dokumentacji lokalnie

Klonuj darmowy kod:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Zainstaluj `docsify`:

```sh
npm install -g docsify
```

i podaj katalog `/docs`

```sh
docsify służy dokumentom
```

Alternatywnie, jeśli zainstalowałeś freeCodeCamp lokalnie (zobacz lokalny przewodnik konfiguracyjny), łączymy CLI z narzędziami programistycznymi, dzięki czemu możesz uruchomić `npm run docs:serve` z katalogu głównego repozytorium.
