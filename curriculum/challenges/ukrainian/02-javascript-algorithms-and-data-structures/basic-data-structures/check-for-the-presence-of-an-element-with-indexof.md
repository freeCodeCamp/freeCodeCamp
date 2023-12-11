---
id: 587d7b7b367417b2b2512b14
title: Перевірка наявності елемента за допомогою indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

Оскільки масиви можуть бути змінені або *мутовані* в будь-який час, немає ніяких гарантій щодо того, де буде знаходитися конкретний фрагмент даних в масиві, або що цей елемент взагалі існуватиме. На щастя, JavaScript надає нам ще один вбудований метод `indexOf()`, який дозволяє швидко і легко перевірити наявність елемента в масиві. `indexOf()` приймає елемент як параметр і при виклику повертає позицію чи індекс цього елемента або `-1`, якщо елемента в масиві немає.

Наприклад:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` повертає `-1`, `indexOf('oranges')` повертає `2`, а `indexOf('pears')` повертає `1` (перший індекс, за якого існує кожен елемент).

# --instructions--

`indexOf()` може бути неймовірно корисним для швидкої перевірки наявності елемента в масиві. Ми визначили функцію `quickCheck`, яка приймає масив і елемент як аргументи. Змініть функцію, використовуючи `indexOf()` так, щоб вона повернула `true`, якщо переданий елемент існує в масиві, та `false`, якщо не існує.

# --hints--

Функція `quickCheck` повинна повернути логічне значення (`true` або `false`), а не рядок (`"true"` або `"false"`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` має повернути `false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` має повернути `true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` має повернути `true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` має повернути `false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

Функція `quickCheck` повинна використовувати метод `indexOf()`

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
