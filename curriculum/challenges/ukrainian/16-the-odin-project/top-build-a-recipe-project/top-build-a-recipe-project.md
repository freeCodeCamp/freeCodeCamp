---
id: 6391d1a4f7ac71efd0621380
title: Побудуйте сторінку з рецептами
challengeType: 14
dashedName: top-build-a-recipe-project
---

# --description--

Вебсайт міститиме головну проіндексовану сторінку, яка матиме посилання на декілька рецептів. Коли ви закінчите, вебсайт не виглядатиме дуже красиво.

**Історія користувача:**

1. Ваша сторінка з рецептами повинна містити тег `DOCTYPE`.
1. Ваша сторінка з рецептами повинна містити елемент `html` з дочірніми елементами `head` та `body`.
1. Ви повинні мати елемент `title` в межах елемента `head` з текстом `The Odin Recipes`.
1. Ви повинні бачити елемент `h1`, який має текст `Creamy Chocolate Fudge`.
1. Ви повинні бачити зображення з url `*placeholder-fcc-cdn*` з відповідним текстом `alt`.
1. Під зображенням повинен бути елемент `h2` з текстом `Description`.
1. Під `Description` повинно бути декілька абзаців, які описують рецепт.
1. Ви повинні мати елемент `h2` з текстом `Ingredients`.
1. Під заголовком `Ingredients` повинен бути невпорядкований список інгредієнтів, необхідних для рецепта.
1. Ви повинні додати ще один заголовок під назвою `Steps` після інгредієнтів.
1. Ви повинні бачити невпорядкований список з парою кроків, необхідних для приготування.
1. Під кроками повинен бути елемент `h2` з текстом `More Recipes`.
1. Ви повинні бачити декілька посилань на інші рецепти всередині невпорядкованого списку, який має кілька елементів списку з елементами посилання.
1. Ці елементи посилання повинні мати атрибут `href` зі значенням `#`.

# --hints--

Ви повинні мати тег `DOCTYPE`.

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

Ви повинні мати елемент `html` з елементами `head` та `body`.

```js
const html = document.querySelectorAll('html')[0];
const head = document.querySelectorAll('html > head')[0];
const body = document.querySelectorAll('html > body')[0];

assert(html && head && body);
```

Ви повинні мати елемент `title` з елементом `head`, який містить текст `The Odin Recipes`.

```js
assert(document.querySelectorAll('HEAD > TITLE')[0].innerText == 'The Odin Recipes');
```

Ви повинні мати елемент `h1` в межах елемента `body`, який містить текст `Creamy Chocolate Fudge`.

```js
assert(document.querySelectorAll('BODY > H1')[0].innerText == 'Creamy Chocolate Fudge');
```

Ви повинні мати зображення з url `*placeholder-fcc-cdn*` з атрибутом `alt`, який має відповідний текст.

```js
const img = document.querySelectorAll('IMG')[0];

assert(img && img.alt !='' && img.src === 'https://i.imgur.com/p0J5baJ.jpg')
```

Ви повинні мати елемент `h2` з текстом `Description`.

```js
const h2 = document.querySelectorAll('H2')[0];

assert(h2.innerText == 'Description');
```

Ви повинні мати принаймні два елементи `p` з описом рецепту.

```js
const paragraphs = document.querySelectorAll('P');

assert(paragraphs.length > 1);
```

Ви повинні мати елемент `h2` з текстом `Ingredients`.

```js
const h2 = document.querySelectorAll('H2')[1];

assert(h2.innerText == 'Ingredients');
```

Ви повинні мати невпорядкований список `<ul>` з декількома інгредієнтами у вигляді елементів списку `<li>`.

```js
const unorderedList = document.querySelectorAll('UL')[0];
const listItems = document.querySelectorAll('UL > LI');

assert(unorderedList && listItems && listItems.length > 1);
```

Ви повинні мати елемент `h2` з текстом `Steps`.

```js
const h2 = document.querySelectorAll('H2')[2];

assert(h2.innerText == 'Steps');
```

Ви повинні мати `<ol>` з кроками приготування у вигляді елементів списку `<li>`.

```js
const orderedList = document.querySelectorAll('OL')[0];
const listItems = document.querySelectorAll('OL > LI');

assert(orderedList && listItems && listItems.length > 1);
```

Ви повинні мати елемент `h2` з текстом `More Recipes`.

```js
const h2 = document.querySelectorAll('H2')[3];

assert(h2.innerText == 'More Recipes');
```

Ви повинні мати елемент невпорядкованого списку `<ul>` з елементами списку `<li>`, які містять теги `<a>`, що ведуть до інших рецептів.

```js
const unorderedList = document.querySelectorAll('UL')[1];
const listItems = unorderedList.querySelectorAll('LI');

const allAreListItems = unorderedList.children.length == listItems.length;

const containsAnchors =  [...listItems].every(function(listItem) {
  return listItem.querySelector("a") !== null;
});

assert(unorderedList && allAreListItems && containsAnchors && listItems.length > 1);
```

Теги посилання, що ведуть до рецептів, повинні мати атрибут `href` зі значенням `#`.

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
