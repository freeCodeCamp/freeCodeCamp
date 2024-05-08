---
id: 6391d1a4f7ac71efd0621380
title: Erstelle ein Rezeptseiten-Projekt
challengeType: 14
dashedName: top-build-a-recipe-project
---

# --description--

Die Website wird aus einer Hauptindexseite bestehen, die über Links zu einigen Rezepten verfügt. Die Website wird nicht besonders hübsch aussehen zum Zeitpunkt der Fertigstellung.

**User Stories:**

1. Deine Rezeptseite sollte über einen `DOCTYPE`-Tag verfügen.
1. Deine Rezeptseite sollte über ein `html`-Element mit einem `head`- und `body`-Element als untergeordnete Elemente verfügen.
1. Du solltest über ein `title`-Element innerhalb des `head`-Elements mit dem Text `The Odin Recipes` verfügen.
1. Du solltest ein `h1`-Element sehen können, das den Text `Creamy Chocolate Fudge` enthält.
1. Du solltest ein zugehöriges Bild mit einem `alt`-Attribut sehen können.
1. Unter dem Bild sollte es ein `h2`-Element mit dem Text `Description` geben.
1. Du solltest ein paar Absätze unter `Description` sehen können, die das Rezept beschreiben.
1. Es sollte ein `h2`-Element mit dem Text `Ingredients` vorhanden sein.
1. Unter der `Ingredients`-Überschrift sollte sich eine ungeordnete Liste mit den Zutaten befinden, die für das Rezept notwendig sind.
1. Füge unterhalb der Zutatenliste eine weitere Überschrift namens `Steps` hinzu.
1. Du solltest eine geordnete Liste mit einigen Schritten sehen können, die für die Zubereitung des Rezepts erforderlich sind.
1. Unterhalb der Schritte sollte ein `h2`-Element mit dem Text `More Recipes` stehen.
1. Du solltest einige Links zu anderen Rezepten in einer ungeordneten Liste sehen können, die einige Listeneinträge mit Ankerelementen enthält.
1. These anchor elements should have an `href` attribute with the value set to `#`.

# --hints--

Du solltest über einen `DOCTYPE`-Tag verfügen.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

You should have an `html` element with `head` and `body` element.

```js
const html = document.querySelectorAll('html')[0];
const head = document.querySelectorAll('html > head')[0];
const body = document.querySelectorAll('html > body')[0];

assert(html && head && body);
```

Du solltest ein `title`-Element innerhalb des `head`-Elements haben, das den Text `The Odin Recipes` enthält.

```js
assert(document.querySelectorAll('HEAD > TITLE')[0].innerText == 'The Odin Recipes');
```

Du solltest ein `h1`-Element innerhalb deines `body`-Elements haben, das den Text `Creamy Chocolate Fudge` enthält.

```js
assert(document.querySelectorAll('BODY > H1')[0].innerText == 'Creamy Chocolate Fudge');
```

Du solltest ein Bild mit einem `alt`-Attribut haben.

```js
const img = document.querySelectorAll('IMG')[0];

assert(img && img.alt !='' && img.src != '')
```

Du solltest ein `h2`-Element mit dem Text `Description` haben.

```js
const h2 = document.querySelectorAll('H2')[0];

assert(h2.innerText == 'Description');
```

Du solltest mindestens zwei `p`-Elemente haben, die das Rezept beschreiben.

```js
const paragraphs = document.querySelectorAll('P');

assert(paragraphs.length > 1);
```

Du solltest ein `h2`-Element mit dem Text `Ingredients` haben.

```js
const h2 = document.querySelectorAll('H2')[1];

assert(h2.innerText == 'Ingredients');
```

Du solltest eine ungeordnete Liste `<ul>` mit einigen Zutaten als Listeneinträge `<li>` haben.

```js
const unorderedList = document.querySelectorAll('UL')[0];
const listItems = document.querySelectorAll('UL > LI');

assert(unorderedList && listItems && listItems.length > 1);
```

Du solltest ein `h2`-Element mit dem Text `Steps` haben.

```js
const h2 = document.querySelectorAll('H2')[2];

assert(h2.innerText == 'Steps');
```

You should have an `<ol>` with the steps as the list items `<li>`.

```js
const orderedList = document.querySelectorAll('OL')[0];
const listItems = document.querySelectorAll('OL > LI');

assert(orderedList && listItems && listItems.length > 1);
```

Du solltest ein `h2`-Element mit dem Text `More Recipes` haben.

```js
const h2 = document.querySelectorAll('H2')[3];

assert(h2.innerText == 'More Recipes');
```

Du solltest ein ungeordnetes Listenelement `<ul>` mit Listeneinträgen `<li>` haben, die `<a>`-Tags enthalten, die zu anderen Rezepten führen.

```js
const unorderedList = document.querySelectorAll('UL')[1];
const listItems = unorderedList.querySelectorAll('LI');

const allAreListItems = unorderedList.children.length == listItems.length;

const containsAnchors =  [...listItems].every(function(listItem) {
  return listItem.querySelector("a") !== null;
});

assert(unorderedList && allAreListItems && containsAnchors && listItems.length > 1);
```

Your anchor tags linking to the recipes should have an `href` attribute with the value set to `#`.

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

# --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The Odin Recipes</title>
  </head>
  <body>
    <h1>Creamy Chocolate Fudge</h1>
    <img src="https://cdn.freecodecamp.org/curriculum/odin-project/build-a-recipe-page/build-a-recipe-page-01.jpg" alt="A delicious chocolate fudge dessert">
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

```css

```
