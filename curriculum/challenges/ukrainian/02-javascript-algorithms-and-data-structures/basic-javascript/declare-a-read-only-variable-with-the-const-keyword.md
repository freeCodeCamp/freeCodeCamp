---
id: 587d7b87367417b2b2512b41
title: Оголосіть змінну, доступну лише для читання, з ключовим словом Const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

Ключове слово `let` є не єдиним новим способом оголосити змінну. В ES6 можливо також оголосити змінні, використовуючи ключове слово `const`.

У `const` є ті ж круті функції, що й в `let` з приємним бонусом — тепер змінні, оголошені за допомогою `const`, доступні лише для читання. Вони мають константне значення. Тобто, як тільки змінна стає призначеною `const`, її вже неможливо призначити знову:

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

Консоль показуватиме помилку через перепризначення значення `FAV_PET`.

Змінні, які не передбачають перепризначення, слід називати, використовуючи ключове слово `const`. Це може знадобитися, якщо ви випадково спробуєте перепризначити змінну, яка повинна бути константною.

Як правило, назву пишуть великими літерами, а слова виокремлюють знаком підкреслення.

**Зверніть увагу:** Зазвичай, розробники пишуть назву ідентифікаторів незмінних значень великими літерами, а назви змінних значень (об'єктів та масивів) — маленькими літерами або через camelCase. Ви дізнаєтесь більше про предмети, масиви, незмінні та незмінні цінності в наступних завданнях. Також у наступних завданнях ви побачите приклади використання нижнього та верхнього регістру, а також ідентифікаторів змінної camelCase.

# --instructions--

Змініть код так, щоб усі змінні були оголошені за допомогою `let` або `const`. Використовуйте `let` для змінних значень, а `const` для незмінних значень. Крім того, змініть назву змінної, оголошеної з `const`, відповідно до поширених методів роботи: назви констант мають писатися великими літерами.

# --hints--

`var` має бути відсутнім у коді.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

Ви повинні змінити `fCC` на верхні регістри.

```js
(getUserInput) => {
  assert(getUserInput('index').match(/(FCC)/));
  assert(!getUserInput('index').match(/fCC/));
}
```

`FCC` має бути константною змінною, оголошеною з `const`.

```js
assert.equal(FCC, 'freeCodeCamp');
assert.match(code, /const\s+FCC/);
```

`fact` має оголошуватися з `let`.

```js
(getUserInput) => assert(getUserInput('index').match(/(let fact)/g));
```

`console.log` необхідно змінити, щоб вивести на екран змінні `FCC` та `fact`.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
