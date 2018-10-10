---
id: 587d781e367417b2b2512acb
title: Lock an Element to its Parent with Absolute Positioning
challengeType: 0
videoUrl: ''
localeTitle: Блокировка элемента для его родителя с абсолютным позиционированием
---

## Description
<section id="description"> Следующая опция для свойства <code>position</code> CSS является <code>absolute</code> , которая блокирует элемент на месте относительно его родительского контейнера. В отличие от <code>relative</code> положения, это удаляет элемент из нормального потока документа, поэтому окружающие объекты игнорируют его. Свойства смещения CSS (сверху или снизу и слева или справа) используются для настройки положения. Один нюанс с абсолютным позиционированием состоит в том, что он будет заблокирован относительно его ближайшего <em>расположенного</em> предка. Если вы забыли добавить правило позиции к родительскому элементу (это обычно делается с использованием <code>position: relative;</code> ), браузер будет продолжать искать цепочку и, в конечном счете, по умолчанию использовать тег body. </section>

## Instructions
<section id="instructions"> Заблокируйте элемент <code>#searchbar</code> в верхнем правом углу родительского <code>section</code> , объявив его <code>position</code> <code>absolute</code> . Дайте ему <code>top</code> и <code>right</code> смещения по 50 пикселей каждый. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>#searchbar</code> должен иметь <code>absolute</code> <code>position</code> .'
    testString: 'assert($("#searchbar").css("position") == "absolute", "The <code>#searchbar</code> element should have a <code>position</code> set to <code>absolute</code>.");'
  - text: 'Ваш код должен использовать <code>top</code> смещение CSS 50 пикселей в элементе <code>#searchbar</code> .'
    testString: 'assert($("#searchbar").css("top") == "50px", "Your code should use the <code>top</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'
  - text: 'Ваш код должен использовать <code>right</code> смещение CSS 50 пикселей в элементе <code>#searchbar</code> .'
    testString: 'assert($("#searchbar").css("right") == "50px", "Your code should use the <code>right</code> CSS offset of 50 pixels on the <code>#searchbar</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
