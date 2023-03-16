---
id: 6391d1a4f7ac71efd0621380
title: Crea il progetto della pagina di una ricetta
challengeType: 14
dashedName: top-build-a-recipe-project
---

# --description--

Il sito web sarà composto da una pagina index principale che avrà dei link ad alcune ricette. Il sito web non sembrerà molto carino nel momento in cui avrai finito.

**User story:**

1. La pagina di ricette dovrebbe contenere un tag `DOCTYPE`.
1. La pagina di ricette dovrebbe includere un elemento `html` con degli elementi `head` e `body` come figli.
1. Dovresti avere un elemento `title` all'interno dell'elemento `head` con il testo `The Odin Recipes`.
1. Dovresti vedere un elemento `h1` con il testo `Creamy Chocolate Fudge`.
1. Dovresti vedere un'immagine con l'url `*placeholder-fcc-cdn*` con un testo `alt` adatto.
1. Dovrebbe esserci un elemento `h2` con il testo `Description` sotto l'immagine.
1. Dovresti vedere un paio di paragrafi che descrivono la ricetta sotto `Description`.
1. Dovrebbe esserci un elemento `h2` con il testo `Ingredients`
1. Sotto l'intestazione `Ingredients` dovrebbe esserci una lista non ordinata con gli ingredienti necessari per la ricetta.
1. Sotto l'elenco degli ingredienti aggiungi un'altra intestazione chiamata `Steps`.
1. Dovresti vedere una lista ordinata con un paio di passaggi necessari per completare la ricetta.
1. Sotto gli step dovrebbe esserci un elemento `h2` con il testo `More Recipes`
1. Dovresti vedere un paio di link ad altre ricette all'interno di una lista non ordinata che ha un paio di elementi di lista con elementi di ancoraggio al suo interno.
1. Questi elementi di ancoraggio dovrebbero avere un attributo `href` con il valore `#`

# --hints--

Dovresti avere un tag `DOCTYPE`.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

Dovresti avere un elemento `html` con un elemento `head` e un elemento `body`.

```js
const html = document.querySelectorAll('html')[0];
const head = document.querySelectorAll('html > head')[0];
const body = document.querySelectorAll('html > body')[0];

assert(html && head && body);
```

Dovresti avere un elemento `title` all'interno dell'elemento `head` che contiene il testo `The Odin Recipes`.

```js
assert(document.querySelectorAll('HEAD > TITLE')[0].innerText == 'The Odin Recipes');
```

Dovresti avere un elemento `h1` all'interno dell'elemento `body` che contiene il testo `Creamy Chocolate Fudge`.

```js
assert(document.querySelectorAll('BODY > H1')[0].innerText == 'Creamy Chocolate Fudge');
```

Dovresti avere un'immagine con l'url `*placeholder-fcc-cdn*` con un attributo `alt` con un testo adatto.

```js
const img = document.querySelectorAll('IMG')[0];

assert(img && img.alt !='' && img.src === 'https://i.imgur.com/p0J5baJ.jpg')
```

Dovresti avere un elemento `h2` con il testo `Description`.

```js
const h2 = document.querySelectorAll('H2')[0];

assert(h2.innerText == 'Description');
```

Dovresti avere almeno due elementi `p` che descrivono la ricetta.

```js
const paragraphs = document.querySelectorAll('P');

assert(paragraphs.length > 1);
```

Dovresti avere un elemento `h2` con il testo `Ingredients`.

```js
const h2 = document.querySelectorAll('H2')[1];

assert(h2.innerText == 'Ingredients');
```

Dovresti avere una lista non ordinata `<ul>` con alcuni ingredienti come elementi della lista `<li>`.

```js
const unorderedList = document.querySelectorAll('UL')[0];
const listItems = document.querySelectorAll('UL > LI');

assert(unorderedList && listItems && listItems.length > 1);
```

Dovresti avere un elemento `h2` con il testo `Steps`.

```js
const h2 = document.querySelectorAll('H2')[2];

assert(h2.innerText == 'Steps');
```

Dovresti avere un `<ol>` con i passaggi come elementi della lista `<li>`.

```js
const orderedList = document.querySelectorAll('OL')[0];
const listItems = document.querySelectorAll('OL > LI');

assert(orderedList && listItems && listItems.length > 1);
```

Dovresti avere un elemento `h2` con il testo `More Recipes`.

```js
const h2 = document.querySelectorAll('H2')[3];

assert(h2.innerText == 'More Recipes');
```

Dovresti avere un elemento lista non ordinata `<ul>` con gli elementi di lista `<li>` che contengono dei tag `<a>` che rimandano ad altre ricette.

```js
const unorderedList = document.querySelectorAll('UL')[1];
const listItems = unorderedList.querySelectorAll('LI');

const allAreListItems = unorderedList.children.length == listItems.length;

const containsAnchors =  [...listItems].every(function(listItem) {
  return listItem.querySelector("a") !== null;
});

assert(unorderedList && allAreListItems && containsAnchors && listItems.length > 1);
```

I tag di ancoraggio che linkano ad altre ricette dovrebbero avere un attributo `href` con il valore `#`

```js
const anchorTags = document.querySelectorAll("a");

const allAnchorsHaveHrefHash = [...anchorTags].every(function(anchorTag) {
  return anchorTag.hasAttribute("href") && anchorTag.getAttribute("href") === "#";
});

assert(allAnchorsHaveHrefHash && anchorTags.length > 0); 
```

# --seed--

## --seed-contents--

```html

```

```css

```

## --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The Odin Recipes</title>
  </head>
  <body>
    <h1>Creamy Chocolate Fudge</h1>
    <img src="https://i.imgur.com/p0J5baJ.jpg" alt="A delicious chocolate fudge dessert">
    <h2>Description</h2>
    <p>This recipe is for a rich and creamy chocolate fudge that is sure to satisfy your sweet tooth. It's perfect for a special occasion or as a tasty treat for any time of the year.</p>
    <p>This recipe is easy to follow and only requires a few simple ingredients. With just a few steps, you'll be able to create a delicious dessert that everyone will love.</p>
    <h2>Ingredients</h2>
    <ul>
      <li>1 cup sugar</li>
      <li>1/2 cup unsalted butter</li>
      <li>1/4 cup milk</li>
      <li>1/4 cup cocoa powder</li>
      <li>1/4 cup chocolate chips</li>
      <li>1/4 tsp salt</li>
      <li>1 tsp vanilla extract</li>
    </ul>
    <h2>Steps</h2>
    <ol>
      <li>In a medium saucepan, melt the butter over medium heat.</li>
      <li>Add the sugar, milk, cocoa powder, and salt to the saucepan and stir until well combined.</li>
      <li>Bring the mixture to a boil, stirring constantly, and then reduce the heat to low and simmer for 5 minutes.</li>
      <li>Remove the saucepan from the heat and stir in the chocolate chips and vanilla extract until the chocolate is melted and the mixture is smooth.</li>
      <li>Pour the fudge into a greased 8-inch square pan and let it cool completely before cutting into squares.</li>
    </ol>
    <h2>More Recipes</h2>
    <ul>
      <li><a href="#">Peanut Butter Cookies</a></li>
      <li><a href="#">Lemon Bars</a></li>
      <li><a href="#">Chocolate Chip Pancakes</a></li>
    </ul>
  </body>
</html>
```
