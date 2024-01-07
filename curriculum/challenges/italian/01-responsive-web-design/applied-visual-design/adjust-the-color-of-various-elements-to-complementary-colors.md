---
id: 587d78a4367417b2b2512ad3
title: Cambiare i colori dei vari elementi in colori complementari
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

La sfida Colori Complementari ha mostrato che colori opposti sul cerchio cromatico possono apparire più vibranti quando posizionati fianco a fianco. Tuttavia, il forte contrasto visivo può essere sgradevole se è troppo utilizzato su un sito web, e a volte può rendere il testo più difficile da leggere se è posizionato su uno sfondo di colore complementare. In pratica, uno dei colori è solitamente dominante e il suo complementare viene utilizzato per portare l'attenzione visiva su determinati contenuti della pagina.

# --instructions--

Questa pagina userà una tonalità color foglia di tè (`#09A7A1`) come colore dominante e il suo complementare arancione (`#FF790E`) per evidenziare visivamente i pulsanti di iscrizione. Cambia il `background-color` sia dell'`header` che del `footer` da nero a foglia di tè. Dopodiché cambia anche il `color` del testo `h2` a foglia di tè. Infine, cambia il `background-color` del `button` con il colore arancione.

# --hints--

L'elemento `header` dovrebbe avere un `background-color` di #09A7A1.

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

L'elemento `footer` dovrebbe avere un `background-color` di #09A7A1.

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

L'elemento `h2` dovrebbe avere un `color` di #09A7A1.

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

L'elemento `button` dovrebbe avere un `background-color` di #FF790E.

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
