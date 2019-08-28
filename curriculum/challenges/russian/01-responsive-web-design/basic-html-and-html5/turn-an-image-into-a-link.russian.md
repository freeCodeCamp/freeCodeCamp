---
id: bad87fee1348bd9aedf08820
title: Turn an Image into a Link
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cRdBnUr
forumTopicId: 18327
localeTitle: Превратите изображение в ссылку
---

## Description
<section id='description'>
Вы можете превращать элементы в ссылки, вложив их внутрь элемента <code>a</code>. Вложение вашего изображения внутрь <code>a</code> элемента. Вот пример: <code>&lt;a href=&quot;#&quot;&gt;&lt;img src=&quot;https://bit.ly/fcc-running-cats&quot; alt=&quot;Three kittens running towards the camera.&quot;&gt;&lt;/a&gt;</code> Не забудьте использовать <code>#</code> в качестве свойства <code>href</code> вашего элемента <code>a</code> для того, чтобы превратить его в мертвую ссылку.
</section>

## Instructions
<section id='instructions'>
Поместите существующий элемент изображения в элемент якорь. Когда вы это сделаете, наведите курсор мыши на изображение. Ваш указатель курсора должен стать указателем на ссылку. Фотография котят теперь является ссылкой.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Nest the existing <code>img</code> element within an <code>a</code> element.
    testString: assert($("a").children("img").length > 0);
  - text: Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.
    testString: assert(new RegExp("#").test($("a").children("img").parent().attr("href")));
  - text: Make sure each of your <code>a</code> elements has a closing tag.
    testString: assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

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
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</section>
