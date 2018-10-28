---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
videoUrl: ''
localeTitle: Комментарии в коде
---

## Description
<section id="description"> Комментарии - это строки кода, которые JavaScript намеренно игнорирует. Комментарии - отличный способ оставить заметки для себя и для других людей, которым позже нужно будет понять, что делает этот код. Существует два способа написания комментариев в JavaScript:<br> Использование <code>//</code> говорит JavaScript, игнорировать оставшуюся часть текста в текущей строке: <blockquote> // Это однострочный комментарий. </blockquote> Так же вы можете сделать многострочный комментарий, начинающийся с <code>/*</code> и заканчивающийся на <code>*/</code> : <blockquote> /* Это <br> многострочный комментарий * / </blockquote> <strong>Полезный совет</strong> <br> Когда вы пишете код, вы должны регулярно добавлять комментарии, чтобы подробнее описать поведение частей вашего кода. Хороший комментарий поможет разобраться в работе вашего кода как другим, так и <em>Вам</em> в будущем. </section>

## Instructions
<section id="instructions"> Попробуйте создать по одному комментарию каждого типа. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Создайте однострочный комментарий <code>//</code> , содержащий не менее пяти букв.'
    testString: 'assert(code.match(/(\/\/)...../g), "Create a <code>//</code> style comment that contains at least five letters.");'
  - text: 'Создайте многострочный комментарий <code>/* */</code> , содержащий не менее пяти букв.'
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
// Однострочный комментарий
/*
Многострочный комментарий
*/
```
</section>
