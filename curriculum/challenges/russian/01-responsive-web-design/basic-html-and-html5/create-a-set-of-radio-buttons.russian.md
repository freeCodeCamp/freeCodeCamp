---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cNWKvuR
forumTopicId: 16822
localeTitle: Создайте радиокнопки
---

## Description
<section id='description'>
Вы можете использовать <code>radio buttons</code> для вопросов, в которых вы хотите, чтобы пользователь дал вам один ответ из нескольких вариантов. Кнопки радио - это тип <code>input</code> . Каждая из ваших радиокнопок может быть вложена в свой собственный элемент <code>label</code> . Обернув элемент <code>input</code> в элемент <code>label</code> вы автоматически свяжете радиокнопку с окружающим ее элементом label. Все связанные радиокнопки должны иметь одинаковый атрибут <code>name</code> для создания группы переключателей. Создавая группу радиокнопок, при выборе любой одной радиокнопки автоматически отменяется выбор других радиокнопок в пределах одной группы, разрешая пользователю только один ответ. Вот пример переключателя: <blockquote> &lt;label&gt; <br> &lt;input type = &quot;radio&quot; name = &quot;indoor-outdoor&quot;&gt; Indoor <br> &lt;/label&gt; </blockquote> Рекомендуется использовать атрибут <code>for</code> тега <code>label</code> со значением, которое соответствует значению атрибута <code>id</code> <code>input</code> элемента. Это позволяет вспомогательным технологиям создавать взаимосвязанные отношения между label и элементом <code>input</code> . Например: <blockquote> &lt;label for = &quot;indoor&quot;&gt; <br> &lt;input id = &quot;indoor&quot; type = &quot;radio&quot; name = &quot;indoor-outdoor&quot;&gt; Indoor <br> &lt;/label&gt; </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте пару радиокнопок в вашу форму, каждая из которых вложена в свой собственный элемент label. Нужно иметь возможность <code>indoor</code> а у другого - возможность <code>outdoor</code> . Оба должны совместно использовать атрибут <code>name</code> <code>indoor-outdoor</code> чтобы создать группу радиокнопок.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your page should have two radio button elements.
    testString: assert($('input[type="radio"]').length > 1);
  - text: Give your radio buttons the <code>name</code> attribute of <code>indoor-outdoor</code>.
    testString: assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
  - text: Each of your two radio button elements should be nested in its own <code>label</code> element.
    testString: assert($('label > input[type="radio"]:only-child').length > 1);
  - text: Make sure each of your <code>label</code> elements has a closing tag.
    testString: assert((code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length));
  - text: One of your radio buttons should have the label <code>indoor</code>.
    testString: assert($("label").text().match(/indoor/gi));
  - text: One of your radio buttons should have the label <code>outdoor</code>.
    testString: assert($("label").text().match(/outdoor/gi));
  - text: Each of your radio button elements should be added within the <code>form</code> tag.
    testString: assert($("label").parent().get(0).tagName.match('FORM'));

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
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

</section>
