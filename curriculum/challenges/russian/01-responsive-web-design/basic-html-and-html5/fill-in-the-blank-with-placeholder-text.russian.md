---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0
videoUrl: ''
localeTitle: Заполните пустое поле с текстом заполнителя
---

## Description
<section id="description"> Веб-разработчики традиционно используют <code>lorem ipsum text</code> качестве текста-заполнителя. Текст «lorem ipsum» случайным образом очищается от знаменитого отрывка Цицерона Древнего Рима. Текст Lorem ipsum использовался в качестве текста заполнителя с помощью наборов текста с 16 века, и эта традиция продолжается в Интернете. Ну, 5 веков достаточно долго. Поскольку мы создаем CatPhotoApp, давайте использовать что-то под названием <code>kitty ipsum text</code> . </section>

## Instructions
<section id="instructions"> Замените текст внутри вашего элемента <code>p</code> на первые несколько слов этого текста <code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code> kitty: <code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент <code>p</code> должен содержать первые несколько слов предоставленного <code>kitty ipsum text</code> .
    testString: 'assert.isTrue((/Kitty(\s)+ipsum/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided <code>kitty ipsum text</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
