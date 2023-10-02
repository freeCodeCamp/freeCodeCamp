---
id: 587d78a4367417b2b2512ad3
title: Anpassen der Farbe verschiedener Elemente an deren Komplementärfarben
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

Die Komplementärfarben-Aufgabe zeigte, dass auf dem Farbkreis gegenüberliegende Farben, nebeneinander platziert, kräftiger wirken können. Jedoch kann der starke visuelle Kontrast anstrengend sein, wenn er auf einer Website übermäßig verwendet wird und Text auf einem komplementärfarbenen Hintergrund kann ev. schwerer lesbar sein. In der Regel ist eine der Farben dominant und die Komplementärfarbe wird verwendet, um die Aufmerksamkeit auf bestimmte Seiteninhalte zu lenken.

# --instructions--

Diese Seite wird ein Blaugrün (`#09A7A1`) als dominante Farbe verwenden und das komplementäre Orange (`#FF790E`), um den "Sign-up"-Button (dt. Registrierungsbutton) visuell hervorzuheben. Ändere die `background-color` der `header` und `footer` von Schwarz auf Blaugrün. Ändere dann ebenfalls die Textfarbe von `h2` mit der `color`-Eigenschaft in Blaugrün. Zum Schluss ändere die `background-color` des `button` in Orange.

# --hints--

Das `header`-Element sollte eine `background-color` von #09A7A1 haben.

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

Das `footer`-Element sollte eine `background-color` von #09A7A1 haben.

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

Das `h2`-Element sollte eine `color` von #09A7A1 haben.

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

Das `button`-Element sollte eine `background-color` von #FF790E haben.

```js
assert($('button').css('background-color') == 'rgb(255, 121, 14)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```

# --solutions--

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: #09A7A1;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: #09A7A1;
  }
  button {
    background-color: #FF790E;
  }
  footer {
    background-color: #09A7A1;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```
