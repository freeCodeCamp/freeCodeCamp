---
id: 587d78ac367417b2b2512af6
title: Вирівнювання елементів за допомогою властивості justify-content
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

Деколи flex елементи не заповнюють все вільне місце у flex контейнері. Зазвичай, можна вказати CSS, як саме варто вирівняти та розтягнути flex елементи. На щастя, властивість `justify-content` має декілька варіантів для цього. По-перше, перед тим як їх розглядати, варто вивчити важливу термінологію.

<a href="https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/" target="_blank" rel="noopener noreferrer nofollow">Для отримання додаткової інформації про властивості flex-box читайте тут</a>

Пам'ятайте, що якщо ви налаштуєте flex контейнер у вигляді рядка, flex елементи послідовно розташовуватимуться зліва направо. Встановлення flex контейнера у вигляді стовпця розташує flex елементи вертикально зверху вниз. Напрямок, у якому розташовуються flex елементи, має назву **головна вісь**. У рядку це – горизонтальна лінія, що перетинає кожен елемент. А у стовпці головна вісь – це вертикальна лінія, що проходить через всі елементи.

Існує декілька способів розміщення flex елементів уздовж лінії, тобто головної осі. Найпоширеніший – це `justify-content: center;`, що вирівнює всі flex елементи по центру всередині flex контейнера. Інші варіанти:

<ul><li><code>flex-start</code>: розміщення елементів від початку flex контейнера. Елементи у рядку посуваються до лівого боку контейнера. А у стовпці елементи вирівнюються зверху контейнера. Це вирівнювання використовується за замовчуванням, якщо не вказано <code>justify-content</code>.</li><li><code>flex-end</code>: вирівнювання елементів від кінця flex контейнера. У рядку елементи переміщуються до правого боку контейнера. А у стовпці — до нижньої частини контейнера.</li><li><code>space-between</code>: вирівнювання елементів по центру головної осі, залишаючи додатковий простір між елементами. Перший та останній елементи відштовхуються на самий край flex контейнера. Наприклад, у рядку перший елемент стає з лівого боку контейнера, останній — з правого боку, а інші елементи рівномірно розподіляються серед місця, що залишилося між ними.</li><li><code>space-around</code>: подібне значення до <code>space-between</code>, але перший та останній елементи не фіксуються навпроти країв контейнера, а вільне місце розподіляється поміж всіх елементів, залишаючи половину простору з будь-якого краю flex контейнера.</li><li><code>space-evenly</code>: рівномірно розподіляє вільне місце між гнучкими елементами з цілим пробілом з будь-якого краю гнучкого контейнера.</li></ul>

# --instructions--

Приклад допоможе показати цю властивість у дії. Додайте CSS-властивість `justify-content` до елемента `#box-container` та надайте значення `center`.

**Бонус**  
Спробуйте інші варіанти властивості `justify-content` у редакторі коду, щоб побачити їхні відмінності. Проте майте на увазі, що лише значення `center` допоможе пройти це завдання.

# --hints--

Елемент `#box-container` повинен мати властивість `justify-content` зі значенням `center`.

```js
assert($('#box-container').css('justify-content') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
