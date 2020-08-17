---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cyrDRUL
forumTopicId: 301098
localeTitle: Ссылка на внутренние разделы страницы с элементами привязки
---

## Description
<section id='description'>
Элементы привязки также могут использоваться для создания внутренних ссылок для перехода к различным разделам веб-страницы. Чтобы создать внутреннюю ссылку, вы назначаете атрибут <code>href</code> ссылки на хэш-символ <code>#</code> плюс значение атрибута <code>id</code> для элемента, к которому вы хотите внутренне связать, обычно дальше вниз по странице. Затем вам нужно добавить тот же атрибут <code>id</code> к элементу, к которому вы привязываетесь. <code>id</code> - это атрибут, который однозначно описывает элемент. Ниже приведен пример внутренней привязной ссылки и ее целевого элемента: <blockquote> &lt;a href=&quot;#contacts-header&quot;&gt; Контакты &lt;/a&gt; <br> ... <br> &lt;h2 id = &quot;contacts-header&quot;&gt; Контакты &lt;/ h2&gt; </blockquote> Когда пользователи нажимают ссылку «Контакты», они будут отправлены в раздел веб-страницы с элементом заголовка « <b>Контакты»</b> .
</section>

## Instructions
<section id='instructions'>
Измените внешнюю ссылку на внутреннюю ссылку, изменив атрибут <code>href</code> на «#footer» и текст «Фотографии кошки» на «Перейти к нижнему». Удалите атрибут <code>target=&quot;_blank&quot;</code> из тега привязки, поскольку это заставляет связанный документ открываться на вкладке нового окна. Затем добавьте атрибут <code>id</code> со значением «footer» в элемент <code>&lt;footer&gt;</code> в нижней части страницы.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be only one anchor tag on your page.
    testString: assert($('a').length == 1);
  - text: There should be only one <code>footer</code> tag on your page.
    testString: assert($('footer').length == 1);
  - text: The <code>a</code> tag should have an <code>href</code> attribute set to "#footer".
    testString: assert($('a').eq(0).attr('href') == "#footer");
  - text: The <code>a</code> tag should not have a <code>target</code> attribute
    testString: assert(typeof $('a').eq(0).attr('target') == typeof undefined || $('a').eq(0).attr('target') == true);
  - text: The <code>a</code> text should be "Jump to Bottom".
    testString: assert($('a').eq(0).text().match(/Jump to Bottom/gi));
  - text: The <code>footer</code> tag should have an <code>id</code> attribute set to "footer".
    testString: assert($('footer').eq(0).attr('id') == "footer");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="#footer">Jump to Bottom</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer id="footer">Copyright Cat Photo App</footer>
```

</section>
