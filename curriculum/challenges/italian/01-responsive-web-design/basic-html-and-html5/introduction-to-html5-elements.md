---
id: bad87fee1348bd9aecf08801
title: Introduzione agli elementi HTML5
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

HTML5 introduce tag HTML più descrittivi. Questi tag comprendono tra l'altro `main`, `header`, `footer`, `nav`, `article`, e `section`.

Questi tag danno una struttura descrittiva al tuo HTML, rendono il tuo HTML più facile da leggere, e aiutano con l'ottimizzazione per i motori di ricerca (SEO, Search Engine Optimization) e l'accessibilità. Il tag HTML5 `main` aiuta i motori di ricerca e altri sviluppatori a trovare il contenuto principale della tua pagina.

Ecco come esempio di utilizzo un elemento `main` con due elementi figlio annidati al suo interno:

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Nota:** Molti dei nuovi tag HTML5 e i loro vantaggi sono coperti nella sezione Accessibilità Applicata.

# --instructions--

Crea un secondo elemento `p` con il seguente testo ipsum kitty: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

Crea quindi un elemento `main` e annida solo i due elementi `p` all'interno dell'elemento `main`.

# --hints--

Dovresti avere 2 elementi `p` con il testo Kitty Ipsum.

```js
assert($('p').length > 1);
```

Ognuno dei tuoi elementi `p` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Il tuo elemento `p` dovrebbe contenere le prime parole del testo aggiuntivo `kitty ipsum` fornito.

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

Il tuo codice dovrebbe avere un tag `main`.

```js
assert($('main').length === 1);
```

L'elemento `main` dovrebbe avere due elementi paragrafo come figli.

```js
assert($('main').children('p').length === 2);
```

Il tag `main` di apertura dovrebbe venire prima del primo tag di paragrafo.

```js
assert(code.match(/<main>\s*?<p>/g));
```

Il tag `main` di chiusura dovrebbe venire dopo il secondo tag di chiusura di paragrafo.

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
