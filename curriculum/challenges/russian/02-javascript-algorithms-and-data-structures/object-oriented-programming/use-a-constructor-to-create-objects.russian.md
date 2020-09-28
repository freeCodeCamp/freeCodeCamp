---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
forumTopicId: 18233
localeTitle: Использование конструктора для создания объектов
---

## Description
<section id='description'>
Вот конструктор <code>Bird</code> из предыдущего вызова: <blockquote> функция Bird () { <br> this.name = &quot;Альберт&quot;; <br> this.color = &quot;blue&quot;; <br> this.numLegs = 2; <br> // «this» внутри конструктора всегда ссылается на создаваемый объект <br> } <br><br> let blueBird = new Bird (); </blockquote> Обратите внимание, что <code>new</code> оператор используется при вызове конструктора. Это говорит JavaScript для создания нового <code>instance</code> <code>Bird</code> под названием <code>blueBird</code> . Без <code>new</code> оператора <code>this</code> внутри конструктора не будет указывать на вновь созданный объект, давая неожиданные результаты. Теперь <code>blueBird</code> имеет все свойства, определенные внутри конструктора <code>Bird</code> : <blockquote> blueBird.name; // =&gt; Альберт <br> blueBird.color; // =&gt; синий <br> blueBird.numLegs; // =&gt; 2 </blockquote> Как и любой другой объект, его свойства могут быть доступны и изменены: <blockquote> blueBird.name = &#39;Elvira&#39;; <br> blueBird.name; // =&gt; Эльвира </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте конструктор <code>Dog</code> из последнего урока, чтобы создать новый экземпляр <code>Dog</code> , присвоив его переменной <code>hound</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hound</code> should be created using the <code>Dog</code> constructor.
    testString: assert(hound instanceof Dog);
  - text: Your code should use the <code>new</code> operator to create an <code>instance</code> of <code>Dog</code>.
    testString: assert(code.match(/new/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```

</section>
