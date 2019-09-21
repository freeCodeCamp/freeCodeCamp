---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
challengeType: 1
forumTopicId: 18235
localeTitle: Расширить конструкторы для получения аргументов
---

## Description
<section id='description'>
Конструкторы <code>Bird</code> and <code>Dog</code> из последней задачи хорошо работали. Однако обратите внимание, что все <code>Birds</code> , созданные с помощью конструктора <code>Bird</code> , автоматически называются Albert, имеют синий цвет и имеют две ноги. Что делать, если вы хотите, чтобы птицы с разными значениями имели название и цвет? Можно изменить свойства каждой птицы вручную, но это будет много работы: <blockquote> пусть лебедь = новая птица (); <br> swan.name = &quot;Carlos&quot;; <br> swan.color = &quot;white&quot;; </blockquote> Предположим, вы писали программу, чтобы отслеживать сотни или даже тысячи разных птиц во вольерах. Это займет много времени, чтобы создать всех птиц, а затем изменить свойства на разные значения для каждого. Чтобы легче создать разные объекты <code>Bird</code> , вы можете сконструировать конструктор Bird для принятия параметров: <blockquote> функция Птица (имя, цвет) { <br> this.name = name; <br> this.color = color; <br> this.numLegs = 2; <br> } </blockquote> Затем передайте значения в качестве аргументов, чтобы определить каждую уникальную птицу в конструкторе <code>Bird</code> : <code>let cardinal = new Bird(&quot;Bruce&quot;, &quot;red&quot;);</code> Это дает новый экземпляр <code>Bird</code> с именем и цветовыми свойствами, установленными на Bruce и red, соответственно. Свойство <code>numLegs</code> по-прежнему установлено <code>numLegs</code> 2. <code>cardinal</code> обладает следующими свойствами: <blockquote> cardinal.name // =&gt; Брюс <br> cardinal.color // =&gt; красный <br> cardinal.numLegs // =&gt; 2 </blockquote> Конструктор более гибкий. Теперь можно определить свойства для каждой <code>Bird</code> в момент ее создания, что является одним из способов использования JavaScript-конструкторов. Они группируют объекты вместе на основе общих характеристик и поведения и определяют план, который автоматизирует их создание.
</section>

## Instructions
<section id='instructions'>
Создайте еще один конструктор <code>Dog</code> . На этот раз настройте его, чтобы взять <code>name</code> и <code>color</code> , а также свойство <code>numLegs</code> установленное в 4. Затем создайте новую <code>Dog</code> сохраненную в переменной <code>terrier</code> . Передайте две строки в качестве аргументов для свойств <code>name</code> и <code>color</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code> should receive an argument for <code>name</code>.
    testString: assert((new Dog('Clifford')).name === 'Clifford');
  - text: <code>Dog</code> should receive an argument for <code>color</code>.
    testString: assert((new Dog('Clifford', 'yellow')).color === 'yellow');
  - text: <code>Dog</code> should have property <code>numLegs</code> set to 4.
    testString: assert((new Dog('Clifford')).numLegs === 4);
  - text: <code>terrier</code> should be created using the <code>Dog</code> constructor.
    testString: assert(terrier instanceof Dog);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {

}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```

</section>
