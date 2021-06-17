---
id: 587d78b0367417b2b2512b08
title: Creare una media query
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

Le Media Queries sono una nuova tecnica introdotta in CSS3 che cambia la presentazione dei contenuti in base alle diverse dimensioni della viewport (lo schermo). La viewport è l'area di una pagina web visibile all'utente, ed è diversa a seconda del dispositivo utilizzato per accedere al sito.

Le Media Queries consistono in un tipo di media, e se questo tipo di supporto corrisponde al tipo di dispositivo su cui viene visualizzato il documento, vengono applicati gli stili corrispondenti. All'interno delle tue media query puoi avere tutti i selettori e gli stili che desideri.

Ecco un esempio di una media query che restituisce il contenuto quando la larghezza del dispositivo è inferiore o uguale a `100px`:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

e la seguente media query restituisce il contenuto quando l'altezza del dispositivo è maggiore o uguale a `350px`:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

Ricorda, il CSS all'interno della media query viene applicato solo se il tipo di supporto corrisponde a quello del dispositivo utilizzato.

# --instructions--

Aggiungi una media query, in modo che il tag `p` abbia un `font-size` di `10px` quando l'altezza del dispositivo è minore o uguale a `800px`.

# --hints--

Dovresti dichiarare una `@media` query per dispositivi con `height` (altezza) inferiore o uguale a `800px`.

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

Il tuo elemento `p` dovrebbe avere una `font-size` di `10px` quando l'altezza `height` del dispositivo è inferiore o uguale a `800px`.

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

Il tuo elemento `p` dovrebbe avere una `font-size` iniziale di `20px` quando l'altezza `height` del dispositivo è superiore a `800px`.

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
