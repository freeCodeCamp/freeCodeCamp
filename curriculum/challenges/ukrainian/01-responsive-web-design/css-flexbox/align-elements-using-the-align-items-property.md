---
id: 587d78ad367417b2b2512af8
title: Вирівнювання елементів за допомогою властивості align-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
dashedName: align-elements-using-the-align-items-property
---

# --description--

Властивість `align-items` подібна до `justify-content`. Нагадуємо, що властивість `justify-content` вирівнює flex елементи вздовж головної вісі. Головною віссю для рядків вважається горизонтальна лінія, а для стовпців — вертикальна.

Flex контейнери також мають **cross axis**, яка є перпендикулярною головній осі. Для рядків ця поперечна вісь — вертикальна, а для стовпців — горизонтальна.

CSS пропонує властивість `align-items` для вирівнювання flex елементів за поперечною віссю. Для рядка, вона вказує CSS, як переміщати елементи в одному рядку вгору чи вниз контейнера. А у стовпці — як вирівнювати елементи, зліва чи справа контейнера.

Список доступних значень для `align-items`:

<ul><li><code>flex-start</code>: розміщення елементів від початку flex контейнера. У рядках елементи вирівнюються у верхній частині контейнера. А у стовпцях це значення вирівнює елементи з лівого боку контейнера.</li><li><code>flex-end</code>: розміщення елементів ближче до кінця flex контейнера. У рядках це значення вирівнює елементи у нижній частині контейнера. У стовпцях — з правого боку.</li><li><code>center</code>: вирівнювання елементів по центру. У рядках значення вирівнює елементи вертикально (зверху і знизу елементів залишається однакове вільне місце). У стовпцях елементи вирівнюються горизонтально (однакове вільне місце зліва і справа від елементів).</li><li><code>stretch</code>: розтягнення елементів, щоб заповнити flex контейнер. Наприклад, елементи у рядках розтягуються, щоби повністю заповнити flex контейнер. Це значення використовується за замовчуванням, якщо не вказано значення <code>align-items</code>.</li><li><code>baseline</code>: вирівнювання елементів по їх базовій лінії. Базова лінія — це текстове поняття, що позначає лінію, на якій розташовуються всі літери.</li></ul>

# --instructions--

Приклад допоможе показати цю властивість у дії. Додайте властивість CSS `align-items` до елемента `#box-container` та надайте йому значення `center`.

**Бонус**  
Спробуйте інші варіанти властивості `align-items` у редакторі коду, щоб побачити їхні відмінності. Проте зверніть увагу, що лише значення `center` може виконати це завдання.

# --hints--

Елемент `#box-container` повинен мати налаштовану властивість `align-items` до значення `center`.

```js
assert($('#box-container').css('align-items') == 'center');
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
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```
