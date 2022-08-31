---
id: 587d78a4367417b2b2512ad5
title: Регулювання відтінку кольору
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDJvT7'
forumTopicId: 301038
dashedName: adjust-the-tone-of-a-color
---

# --description--

Опція колірної моделі `hsl()` в CSS також спрощує налаштування тональності кольору. Якщо змішати білий зі світлим відтінком, можна отримати світлий тон, а якщо з чорним - темний. Окрім цього, тон можна змінити за допомогою одночасного освітлення та затемнення відтінку. Нагадуємо, що в колірній моделі `hsl()` букви 's' і 'l' відповідають за насиченість і яскравість відповідно. Відсоткове значення насиченості змінює кількість сірого в кольорі, а відсоток яскравості визначає, скільки білого та чорного міститься в кольорі. Це стає в нагоді, коли Вам необхідно отримати декілька варіацій кольору, який вам подобається.

# --instructions--

Усі елементи мають `background-color`, який за замовченням є `transparent`. Наш елемент `nav` зараз, вочевидь, має фон кольору `cyan`, через те, що властивості `background-color` елементу за ним надано значення `cyan`. Додайте `background-color` до елемента `nav` так, щоб він використовував той самий колір `cyan`, але з насиченістю `80%` і яскравістю `25%`, щоб змінити його тон і відтінок.

# --hints--

Елемент `nav` повинен містити `background-color` блакитного кольору, налаштованого за допомогою властивості `hsl()`.

```js
// Computed style of hsl(180, 80%, 25%) results in rgb(13,115,115)
assert.equal(
  new __helpers.CSSHelp(document).getStyle('nav').getPropVal('background-color', true), 
  'rgb(13,115,115)'
)
```

# --seed--

## --seed-contents--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

# --solutions--

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {
    background-color: hsl(180, 80%, 25%);
  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
