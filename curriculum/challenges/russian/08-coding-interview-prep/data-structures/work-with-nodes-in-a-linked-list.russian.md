---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
challengeType: 1
forumTopicId: 301721
localeTitle: Работа с узлами в связанном списке
---

## Description
<section id='description'>
Другой общей структурой данных, с которой вы столкнетесь в информатике, является <dfn>связанный список</dfn> . Связанный список представляет собой линейный набор элементов данных, называемый «узлами», каждый из которых указывает на следующий. Каждый <dfn>узел</dfn> в связанном списке содержит две ключевые части информации: сам <code>element</code> и ссылку на следующий <code>node</code> . Представьте, что вы находитесь в линии конги. У вас есть руки на следующем человеке в очереди, и человек, стоящий за вами, держит вас в руках. Вы можете видеть человека прямо перед собой, но они блокируют взгляд других людей в очереди. Узел точно так же, как человек в линии конги: они знают, кто они, и они могут видеть только следующего человека в очереди, но они не знают других людей впереди или позади них.
</section>

## Instructions
<section id='instructions'>
В нашем редакторе кода мы создали два узла, <code>Kitten</code> и <code>Puppy</code> , и мы связали узел <code>Kitten</code> вручную с узлом <code>Puppy</code> . Создайте узел <code>Cat</code> и <code>Dog</code> и вручную добавьте их в строку.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Puppy</code> node should have a reference to a <code>Cat</code> node.
    testString: assert(Puppy.next.element === "Cat");
  - text: Your <code>Cat</code> node should have a reference to a <code>Dog</code> node.
    testString: assert(Cat.next.element === "Dog");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// only add code below this line

// test your code
console.log(Kitten.next);

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
