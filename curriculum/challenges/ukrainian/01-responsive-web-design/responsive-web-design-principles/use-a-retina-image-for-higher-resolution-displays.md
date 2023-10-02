---
id: 587d78b1367417b2b2512b0a
title: Використання зображень Retina для дисплеїв із високою роздільною здатністю
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

Зі збільшенням кількості підключених до Інтернету пристроїв їхні розміри і характеристики змінюються, а дисплеї, які вони використовують, можуть відрізнятися як ззовні і так і в середині. Щільність пікселів - це аспект, який може різнитися на одному пристрої від інших, і цей параметр називається Pixel Per Inch (PPI) або Dots Per Inch (DPI). Найбільш відомим дисплеєм такого типу є "Retina Display" на останніх ноутбуках Apple MacBook Pro, а останнім часом і на комп'ютерах iMac. Через різницю в щільності пікселів між екранами «Retina» і «Non-Retina» деякі зображення, які не були створені з високою роздільною здатністю, можуть виглядати «мозаїчно» при відтворенні і на дисплеї з високою роздільною здатністю.

Найпростіший спосіб, щоб ваші зображення належним чином відображалися на дисплеях з високою роздільною здатністю, таких як "Retina display" MacBook Pro, - це визначити значення `width` та `height` як половину вихідного файлу. Ось приклад зображення, що використовує тільки половину початкової висоти і ширини:

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

Встановіть `width` та `height` тегу `img` в половину їх початкових значень. В цьому випадку як вихідна `height`, так і `width` дорівнюватимуть `200px`.

# --hints--

Ваш тег `img` повинен містити `width` в 100 пікселів.

```js
assert(document.querySelector('img').width === 100);
```

Ваш тег `img` повинен містити `height` в 100 пікселів.

```js
assert(document.querySelector('img').height === 100);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```
