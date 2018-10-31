---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
videoUrl: ''
localeTitle: Комментарий
---

## Description
<section id="description"> Комментарии - это строки кода, которые JavaScript намеренно игнорирует. Комментарии - отличный способ оставить заметки для себя и для других людей, которым позже нужно будет выяснить, что делает этот код. Существует два способа написания комментариев в JavaScript: Использование <code>//</code> говорит JavaScript, чтобы игнорировать оставшуюся часть текста в текущей строке: <blockquote> // Это встроенный комментарий. </blockquote> Вы можете сделать многострочный комментарий, начинающийся с <code>/*</code> и заканчивающийся на <code>*/</code> : <blockquote> /* Это <br> многострочный комментарий * / </blockquote> <strong>Лучшая практика</strong> <br> Когда вы пишете код, вы должны регулярно добавлять комментарии, чтобы уточнить функцию частей вашего кода. Хороший комментарий может помочь сообщить о намерениях вашего кода - как для других, так <em>и</em> для вашего будущего. </section>

## Instructions
<section id="instructions"> Попробуйте создать один из комментариев каждого типа. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Создайте комментарий стиля <code>//</code> , содержащий не менее пяти букв.'
    testString: 'assert(code.match(/(\/\/)...../g), "Create a <code>//</code> style comment that contains at least five letters.");'
  - text: 'Создайте комментарий <code>/* */</code> style, содержащий не менее пяти букв.'
    testString: 'assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm), "Create a <code>/* */</code> style comment that contains at least five letters.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
