---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cMdkytL
forumTopicId: 18230
localeTitle: Создание мертвых ссылок с использованием символа хэша
---

## Description
<section id='description'>
Иногда вы хотите добавить элементы на свой веб - сайт , прежде чем вы знаете , где они будут ссылаться. <code>a</code> Это также удобно, когда вы меняете поведение ссылки с помощью <code>JavaScript</code> , о чем мы узнаем позже.
</section>

## Instructions
<section id='instructions'>
Текущее значение атрибута <code>href</code> - это ссылка, которая указывает на «https://freecatphotoapp.com». Замените значение атрибута <code>href</code> символом <code>#</code> , также известным как хэш-символ, чтобы создать мертвую ссылку. Например: <code>href=&quot;#&quot;</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>a</code> element should be a dead link with the value of the <code>href</code> attribute set to "#".
    testString: assert($("a").attr("href") === "#");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
  
  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</section>
