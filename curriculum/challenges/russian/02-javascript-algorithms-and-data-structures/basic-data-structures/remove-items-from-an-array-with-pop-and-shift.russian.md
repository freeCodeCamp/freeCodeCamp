---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
forumTopicId: 301165
localeTitle: Удалите элементы из массива с помощью pop () и shift ()
---

## Description
<section id='description'>
Оба <code>unshift()</code> <code>push()</code> и <code>unshift()</code> имеют соответствующие методы, которые являются почти функциональными противоположностями: <code>pop()</code> и <code>shift()</code> . Как вы уже догадались, вместо добавления <code>pop()</code> <em>удаляет</em> элемент из конца массива, а <code>shift()</code> удаляет элемент с самого начала. Ключевое различие между <code>pop()</code> и <code>shift()</code> и их кузенами <code>push()</code> и <code>unshift()</code> заключается в том, что ни один из методов не принимает параметры, и каждый из них позволяет только массиву изменять один элемент за раз. Давайте взглянем: <blockquote> let greetings = [&#39;whats up?&#39;, &#39;hello&#39;, &#39;see ya!&#39;]; <br><br> greetings.pop (); <br> // теперь равно [&#39;whats up?&#39;, &#39;hello&#39;] <br><br> greetings.shift (); <br> // теперь равно [&#39;hello&#39;] </blockquote> Мы также можем вернуть значение удаляемого элемента любым из следующих способов: <blockquote> let popped = greetings.pop (); <br> // возвращает &#39;hello&#39; <br> // приветствия теперь равны [] </blockquote>
</section>

## Instructions
<section id='instructions'>
Мы определили функцию <code>popShift</code> , которая принимает массив как аргумент и возвращает новый массив. Измените функцию, используя функции <code>pop()</code> и <code>shift()</code> , чтобы удалить первый и последний элементы массива аргументов и присвоить удаленные элементы соответствующим переменным, чтобы возвращаемый массив содержал их значения.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>popShift(["challenge", "is", "not", "complete"])</code> should return <code>["challenge", "complete"]</code>
    testString: assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), ["challenge", "complete"]);
  - text: The <code>popShift</code> function should utilize the <code>pop()</code> method
    testString: assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
  - text: The <code>popShift</code> function should utilize the <code>shift()</code> method
    testString: assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function popShift(arr) {
  let popped; // change this line
  let shifted; // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

```

</div>

</section>

## Solution
<section id='solution'>

```js
function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}
```

</section>
