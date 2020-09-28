---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
videoUrl: https://scrimba.com/c/c7ynnTp
forumTopicId: 16783
localeTitle: Комментарии в коде
---

## Description
<section id='description'>
Комментарии представляют собой строки кода, которые JavaScript игнорирует. Использование комментариев является отличным способом оставить заметки себе или другим, кому придется разбираться в работе кода. 
  Комментарии в JavaScript бывают двух видов : 
  Два идущих подряд слэша <code>//</code> являются указанием игнорировать весь идущий за ними текст на этой строке: 
  <blockquote> // Это комментарий в строке. </blockquote> 
  Также можно сделать многострочный комментарий: он должен начинаться с <code>/*</code> и заканчиваться на <code>*/</code> : 
  <blockquote> /* Это <br> многострочный комментарий * / </blockquote> 
  <strong>Лучшая практика</strong> <br> В процессе написания кода имеет смысл регулярно добавлять комментарии, в которых будет описываться функциональность различных частей кода. Хороший комментарий может помочь разобраться в сути вашего кода - как другим людям, так <em>и</em> вам в будущем.
</section>

## Instructions
<section id='instructions'>
Попробуйте создать один из комментариев каждого вида.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create a <code>//</code> style comment that contains at least five letters.
    testString: assert(code.match(/(\/\/)...../g));
  - text: Create a <code>/* */</code> style comment that contains at least five letters.
    testString: assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm));

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
// Fake Comment
/* Another Comment */
```

</section>
