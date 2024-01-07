---
id: bad87fee1348bd9aede08817
title: Nidificare un elemento di ancoraggio all'interno di un paragrafo
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

Puoi annidare i link all'interno di altri elementi di testo.

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

Andiamo a scomporre l'esempio. Il testo normale viene inserito nell'elemento `p`:

```html
<p> Here's a ... for you to follow. </p>
```

Poi viene l'elemento *anchor*`<a>` (che richiede un tag di chiusura `</a>`):

```html
<a> ... </a>
```

`target` è un attributo tag di ancoraggio che specifica dove aprire il collegamento. Il valore `_blank` specifica di aprire il collegamento in una nuova scheda. L' `href` è un attributo tag di ancoraggio che contiene l'indirizzo URL del collegamento:

```html
<a href="https://www.freecodecamp.org" target="_blank"> ... </a>
```

Il testo, `link to www.freecodecamp.org` all'interno dell'elemento `a` si chiama <dfn>testo di ancoraggio</dfn>, e mostrerà il link sul quale cliccare:

```html
<a href=" ... " target="...">link to freecodecamp.org</a>
```

L'output finale dell'esempio sarà simile a questo:

Here's a <a href="https://www.freecodecamp.org" target="_blank">link to www.freecodecamp.org</a> for you to follow.

# --instructions--

Annida l'elemento `a` esistente all'interno di un nuovo elemento `p`. Non creare un nuovo elemento di ancoraggio. Il nuovo paragrafo dovrebbe contenere testo che dice `View more cat photos`, dove `cat photos` è un collegamento, e il resto è testo semplice.

# --hints--

Dovresti avere un solo elemento `a`.

```js
assert(
  $('a').length  === 1 
);
```

L'elemento `a` dovrebbe essere collegato a "`https://www.freecatphotoapp.com`".

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

Il tuo elemento `a` dovrebbe avere il testo di ancoraggio: `cat photos`

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

Dovresti creare un elemento `p`. Ci dovrebbe essere almeno 3 tag `p` nel tuo codice HTML

```js
assert($('p') && $('p').length > 2);
```

Il tuo elemento `a` dovrebbe essere annidato nel nuovo elemento `p`.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

Il tuo elemento `p` dovrebbe avere il testo `View more` (con uno spazio dopo di esso).

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

Il tuo elemento `a` <em>non</em> dovrebbe contenere il testo `View more`.

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

Ognuno dei tuoi elementi `p` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Ognuno dei tuoi elementi `a` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
