---
id: 587d78a5367417b2b2512ad8
title: Create Texture by Adding a Subtle Pattern as a Background Image
challengeType: 0
videoUrl: https://scrimba.com/c/cQdwJC8
forumTopicId: 301052
localeTitle: Создание текстуры путем добавления тонкого шаблона в качестве фонового изображения
---

## Description
<section id='description'>
Один из способов добавить текстуру и интерес к фону и подчеркнуть ее - добавить тонкий узор. Ключом является баланс, так как вы не хотите, чтобы фон выделялся слишком много, и убирайте с переднего плана. Свойство <code>background</code> поддерживает функцию <code>url()</code> , чтобы ссылаться на изображение выбранной текстуры или рисунка. Адрес ссылки заключен в кавычки внутри круглых скобок.
</section>

## Instructions
<section id='instructions'>
Использование URL в <code>https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png</code> , установить <code>background</code> всей страницы с <code>body</code> селектором.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>body</code> element should have a <code>background</code> property set to a <code>url()</code> with the given link.
    testString: assert(code.match(/background:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\1\s*\)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {

  }
</style>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```

</section>
