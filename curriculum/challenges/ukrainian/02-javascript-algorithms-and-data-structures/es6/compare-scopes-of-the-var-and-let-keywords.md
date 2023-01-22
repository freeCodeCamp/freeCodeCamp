---
id: 587d7b87367417b2b2512b40
title: Порівняйте можливості ключових слів var та let
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

Якщо ви ще не знаєте про `let`, див. <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords" target="_blank" rel="noopener noreferrer nofollow">це завдання про різницю між <code>let</code> та <code>var</code></a>.

Коли ви задаєте змінну з ключовим словом `var`, вона стане глобальною або локальною, якщо буде оголошена у рамках функції.

Ключове слово `let` функціонує схожим чином, але з додатковими можливостями. Коли ви задаєте змінну з ключовим словом `let` у блоці, команді чи виразі, її можливості обмежуються цим блоком, виразом чи виразом.

Наприклад:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

У такому разі консоль показуватиме значення `[0, 1, 2]` та `3`.

Якщо ключове слово — `var`, значення `i` оголошується глобальним. Отже, коли виконується `i++`, глобальна змінна теж оновлюється. Цей код виглядає наступним чином:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

У такому разі консоль показуватиме значення `[0, 1, 2]` та `3`.

Така поведінка спричиняє проблеми при створенні функції та її збереженні для подальшого використання в циклі `for`, що використовує змінну `i`. Це пояснюється тим, що збережена функція завжди посилатиметься на значення оновленої глобальної змінної `i`.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

У такому разі консоль показуватиме значення `3`.

Як бачите, `printNumTwo()` показує 3, а не 2. Це пояснюється тим, що значення для `i` оновилося, а `printNumTwo()` повертає глобальне значення `i`, а не те значення, яке `i` мало при створенні функції для циклу. Ключове слово `let` діє інакше:

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

У такому разі консоль показуватиме значення `2`, і помилку: `i is not defined`.

`i` не визначено (not defined), оскільки змінну не було оголошено в глобальному масштабі. Вона стає оголошеною лише у команді циклу `for`. `printNumTwo()` повернув правильне значення, оскільки було створено три різних змінних `i` з унікальними значеннями (0, 1, та 2) завдяки ключовому слову `let` в рамках команди циклу.

# --instructions--

Виправте код так, щоб `i`, оголошена в команді `if`, була окремою змінною, на відміну від `i`, оголошеної у першому рядку функції. Не використовуйте у вашому коді ключове слово `var`.

Ця вправа створена для того, щоб показати відмінність між тим, як ключові слова `var` і `let` задають можливості оголошеної змінної. При програмуванні схожої функції на ту, що використовувалася у цій вправі, нерідко слід використовувати різні назви для змінних, щоб уникнути плутанини.

# --hints--

`var` має бути відсутнім у коді.

```js
assert(!code.match(/var/g));
```

Змінна `i`, оголошена в операторі `if`, має дорівнювати рядку `block scope`.

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` має повернути рядок `function scope`

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }

  console.log('Function scope i is: ', i);
  return i;
}
```
