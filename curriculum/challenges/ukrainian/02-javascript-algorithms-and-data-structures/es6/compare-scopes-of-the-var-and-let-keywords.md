---
id: 587d7b87367417b2b2512b40
title: Порівняння областей видимості ключових слів var та let
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

Якщо ви ще не знайомі з `let`, див. <a href="/ukrainian/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords" target="_blank" rel="noopener noreferrer nofollow">це завдання про різницю між <code>let</code> та <code>var</code></a>.

Коли ви оголошуєте змінну з ключовим словом `var`, вона оголошена глобально, або локально, якщо оголошена всередині функції.

Ключове слово `let` поводиться схожим чином, але з додатковими можливостями. Коли ви оголошуєте змінну з ключовим словом `let` всередині блоку, інструкції чи виразу, її область видимості обмежується цим блоком, інструкцією чи виразом.

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

Якщо ключовим словом є `var`, то `i` оголошується глобально. Тому коли виконується `i++`, оновлюється глобальна змінна. Цей код схожий до наступного:

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

Як бачите, `printNumTwo()` друкує 3, а не 2. Це пояснюється тим, що значення для `i` оновилося, а `printNumTwo()` повертає глобальну `i`, а не те значення, яке `i` мало при створенні функції у циклі for. Ключове слово `let` діє інакше:

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

У такому разі консоль показуватиме значення `2` та помилку `i is not defined`.

`i` не визначена, оскільки її не було оголошено в глобальній області. Вона оголошена лише в інструкції циклу `for`. `printNumTwo()` повернула правильне значення, оскільки за допомогою ключового слова `let` в межах інструкції циклу було створено три різні змінні `i` з унікальними значеннями (0, 1 та 2).

# --instructions--

Виправте код так, щоб `i`, оголошена в інструкції `if`, була окремою змінною від `i`, оголошеною у першому рядку функції. Не використовуйте у своєму коді ключове слово `var`.

Це завдання створене для того, щоб показати відмінність між тим, як ключові слова `var` і `let` присвоюють область видимості оголошеній змінній. При програмуванні схожої функції краще використовувати різні назви для змінних, щоб уникнути плутанини.

# --hints--

`var` повинне бути відсутнім у коді.

```js
assert(!code.match(/var/g));
```

Змінна `i`, оголошена в інструкції `if`, повинна дорівнювати рядку `block scope`.

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` має повертати рядок `function scope`

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
