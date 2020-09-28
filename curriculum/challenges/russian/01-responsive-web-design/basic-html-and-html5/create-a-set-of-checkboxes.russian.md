---
id: bad87fee1348bd9aedf08835
title: Create a Set of Checkboxes
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cqrkJsp
forumTopicId: 16821
localeTitle: Создайте чекбоксы
---

## Description
<section id='description'>
В формах обычно используют <code>checkboxes</code>'ы для вопросов, которые могут иметь более одного ответа. Чекбокс - это тип <code>input</code> Каждый из ваших чекбоксов может быть вложен в свой собственный элемент <code>label</code> . Обернув элемент <code>input</code> элементом <code>label</code> вы автоматически свяжете этот чекбокс с элементом <code>label</code>, который окружает его. Все связанные с ним флажки должны иметь одинаковый атрибут <code>name</code> . Считается лучшей практикой явно определить отношения между <code>input</code> с типом чекбокс и соответствующим <code>label</code>, установив атрибут <code>for</code> на <code>label</code> элемента в соответствии с <code>id</code> атрибута соответствующего <code>input</code> элемента. Вот пример чекбокса: <code>&lt;label for=&quot;loving&quot;&gt;&lt;input id=&quot;loving&quot; type=&quot;checkbox&quot; name=&quot;personality&quot;&gt; Loving&lt;/label&gt;</code>
</section>

## Instructions
<section id='instructions'>
Добавьте в свою форму набор из трех чекбоксов. Каждый чекбокс должен быть вложен в свой собственный элемент <code>label</code> . Всем трем чекбоксам присвойте атрибут <code>name</code> со значением <code>personality</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your page should have three checkbox elements.
    testString: assert($('input[type="checkbox"]').length > 2);
  - text: Each of your three checkbox elements should be nested in its own <code>label</code> element.
    testString: assert($('label > input[type="checkbox"]:only-child').length > 2);
  - text: Make sure each of your <code>label</code> elements has a closing tag.
    testString: assert(code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length);
  - text: Give your checkboxes the <code>name</code> attribute of <code>personality</code>.
    testString: assert($('label > input[type="checkbox"]').filter('[name="personality"]').length > 2);
  - text: Each of your checkboxes should be added within the <code>form</code> tag.
    testString: assert($('label').parent().get(0).tagName.match('FORM'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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
  
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
