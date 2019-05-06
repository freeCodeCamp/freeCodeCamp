---
id: bad87fee1348bd9aedf08816
title: Link to External Pages with Anchor Elements
challengeType: 0
videoUrl: ''
localeTitle: Ссылка на внешние страницы с элементами привязки
---

## Description

<section id="description"> Вы можете использовать элементы <code>anchor</code> для ссылки на контент вне вашей веб-страницы. Элементам <code>anchor</code> нужен адрес веб-сайта назначения, называемый атрибутом <code>href</code>. Им также нужен якорный текст. Вот пример: <code>&lt;a href=&quot;https://freecodecamp.org&quot;&gt;this links to freecodecamp.org&lt;/a&gt;</code> Затем ваш браузер отобразит текст <strong>«это ссылки на freecodecamp.org»</strong> в качестве ссылки, которую вы можете щелкнуть. И эта ссылка приведет вас к веб-адресу <strong>https://www.freecodecamp.org</strong> . </section>

## Instructions
Создайте элемент, который ссылается на <code>http://freecatphotoapp.com</code> и имеет «фотографии котят» в качестве его якорного текста.


## Tests
<section id='tests'>

```yml
tests:

  - text: Ваш элемент <code>a</code> должен иметь <code>якорный текст</code> «cat photos».

    testString: 'assert((/cat photos/gi).test($("a").text()), "Your <code>a</code> element should have the <code>anchor text</code> of "cat photos".");'
  - text: 'Вам нужно создать <code>a</code> элемент, являющийся ссылкой на <code>http://freecatphotoapp .com</code>'
    testString: 'assert(/http:\/\/(www\.)?freecatphotoapp\.com/gi.test($("a").attr("href")), "You need an <code>a</code> element that links to <code>http&#58;//freecatphotoapp<wbr>.com</code>");'
  - text: 'Убедитесь, что элемент <code>a</code> имеет закрывающий тег'
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure your <code>a</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
