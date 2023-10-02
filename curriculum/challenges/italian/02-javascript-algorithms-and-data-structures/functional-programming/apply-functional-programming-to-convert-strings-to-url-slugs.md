---
id: 587d7dab367417b2b2512b6d
title: Applicare la programmazione funzionale per convertire le stringhe in URL Slug
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

Molte delle ultime sfide hanno riguardato una serie di utili metodi per gli array e le stringhe che seguono principi di programmazione funzionale. Abbiamo anche conosciuto `reduce`, che è un metodo potente utilizzato per ridurre i problemi a forme più semplici. Dalle medie di calcolo all'ordinamento, qualsiasi operazione sugli array può essere ottenuta applicandolo. Ricordiamo che `map` e `filter` sono casi speciali di `reduce`.

Combiniamo quello che abbiamo imparato per risolvere un problema pratico.

Molti siti di gestione dei contenuti (CMS) aggiungono il titolo di un post a parte del suo URL per rendere il bookmarking più semplice. Ad esempio, se scrivi un post su Medium intitolato `Stop Using Reduce`, è probabile che l'URL abbia qualche forma della stringa del titolo al suo interno (`.../stop-using-reduce`). Potresti averlo già notato sul sito freeCodeCamp.

# --instructions--

Compila la funzione `urlSlug` in modo che converta una stringa `title` e restituisca la versione tratteggiata per l'URL. È possibile utilizzare uno qualsiasi dei metodi descritti in questa sezione, senza utilizzare `replace`. Ecco i requisiti:

L'input è una stringa con spazi e parole con le iniziali in maiuscolo

L'output è una stringa con gli spazi tra le parole sostituiti da un trattino (`-`)

L'output dovrebbe composto di sole lettere minuscole

L'output non dovrebbe avere spazi

# --hints--

Il tuo codice non dovrebbe usare il metodo `replace` per questa sfida.

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` dovrebbe restituire la stringa `winter-is-coming`.

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug(" Winter Is  Coming")` dovrebbe restituire la stringa `winter-is-coming`.

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` dovrebbe restituire la stringa `a-mind-needs-books-like-a-sword-needs-a-whetstone`.

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug("Hold The Door")` dovrebbe restituire la stringa `hold-the-door`.

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
```

# --solutions--

```js
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```
