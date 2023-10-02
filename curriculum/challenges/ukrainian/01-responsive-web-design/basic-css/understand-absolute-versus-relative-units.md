---
id: bad82fee1322bd9aedf08721
title: Розуміння різниці між абсолютними і відносними одиницями
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

В кількох останніх завданнях ви встановлювали зовнішній чи внутрішній відступи елемента в пікселях(`px`). Пікселі - це одиниця довжини, яка вказує браузерові розмір чи місце елемента. На додачу до `px`, CSS має набір різних варіантів одиниць довжини, які можна використовувати.

Є два основних типи одиниць довжини - абсолютні та відносні. Абсолютні одиниці пов'язані з фізичними одиницями довжини. Наприклад, `in` і `mm` означають дюйми і міліметри, відповідно. Абсолютні одиниці довжини приблизно відповідають реальним вимірам на екрані, але є деякі відмінності залежно від роздільної здатності екрана.

Відносні одиниці, такі як `em` чи `rem` відносяться до іншого значення довжини. Наприклад, `em` базується на розмірі шрифту елемента. Якщо ви використовуєте її для встановлення самої властивості `font-size`, вона буде відносною стосовно батьківської `font-size`.

**Примітка:** Існує кілька варіантів відносних одиниць, пов'язаних з розміром області огляду. Вони представлені в розділі "Принципи адаптивного веб-дизайну".

# --instructions--

Додайте властивість `padding` до елемента з класом `red-box` і встановіть її в `1.5em`.

# --hints--

Клас `red-box` повинен мати властивість `padding`.

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

Клас `red-box` повинен задати елементам `padding` в 1.5em.

```js
assert(code.match(/\.red-box\s*?{[\s\S]*padding\s*:\s*?1\.5em/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```
