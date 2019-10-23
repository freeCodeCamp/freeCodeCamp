---
id: 587d7b84367417b2b2512b36
title: Catch Unclosed Parentheses, Brackets, Braces and Quotes
challengeType: 1
forumTopicId: 301190
localeTitle: Поймать скошенные скобки, скобки, скобки и цитаты
---

## Description
<section id='description'>
Другая синтаксическая ошибка, о которой нужно знать, состоит в том, что все открывающиеся круглые скобки, скобки, фигурные скобки и кавычки имеют закрывающуюся пару. Забывание части имеет тенденцию происходить, когда вы редактируете существующий код и вставляете элементы с одним из типов пар. Кроме того, будьте осторожны, когда блокировки вложенных блоков блокируются другими, например добавление функции обратного вызова в качестве аргумента в метод. Один из способов избежать этой ошибки - сразу после ввода символа открытия, немедленно включить заключительное совпадение, затем переместить курсор между ними и продолжить кодирование. К счастью, большинство современных редакторов кода генерируют вторую половину пары автоматически.
</section>

## Instructions
<section id='instructions'>
Исправьте две ошибки пары в коде.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the missing piece of the array.
    testString: assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
  - text: 'Your code should fix the missing piece of the <code>.reduce()</code> method. The console output should show that "Sum of array values is: 6".'
    testString: assert(arraySum === 6);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

</section>
