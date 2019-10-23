---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
forumTopicId: 301321
localeTitle: Сделать код более многоразовым с помощью этого ключевого слова
---

## Description
<section id='description'>
Последняя задача привела <code>method</code> к объекту <code>duck</code> . Он использовал <code>duck.name</code> для доступа к значению свойства <code>name</code> в операторе return: <code>sayName: function() {return &quot;The name of this duck is &quot; + duck.name + &quot;.&quot;;}</code> Хотя это действительный способ доступа к объекту, здесь есть ошибка. Если имя переменной изменяется, необходимо также обновить любой код, ссылающийся на исходное имя. В определении коротких объектов это не проблема, но если у объекта много ссылок на его свойства, вероятность появления ошибки больше. Чтобы избежать этих проблем, <code>this</code> ключевое слово: <blockquote> let duck = { <br> имя: «Афлак», <br> numLegs: 2, <br> sayName: function () {return &quot;Название этой утки:&quot; + this.name + &quot;.&quot;;} <br> }; </blockquote> <code>this</code> глубокая тема, и приведенный выше пример - только один способ ее использования. В текущем контексте <code>this</code> относится к объекту, с которым связан метод: <code>duck</code> . Если имя объекта изменено на <code>mallard</code> , нет необходимости находить все ссылки на <code>duck</code> в коде. Это делает код многоразовым и более простым для чтения.
</section>

## Instructions
<section id='instructions'>
Измените метод <code>dog.sayLegs</code> чтобы удалить ссылки на <code>dog</code> . Используйте пример <code>duck</code> для руководства.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code> should return the given string.
    testString: assert(dog.sayLegs() === 'This dog has 4 legs.');
  - text: Your code should use the <code>this</code> keyword to access the <code>numLegs</code> property of <code>dog</code>.
    testString: assert(code.match(/this\.numLegs/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

```

</div>

</section>

## Solution
<section id='solution'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```

</section>
