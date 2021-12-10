---
id: 587d7b8a367417b2b2512b4e
title: Створіть рядки за допомогою шаблонних літералів
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

Нова особливість ES6 полягає у <dfn>template literal</dfn>. Вона означає особливий тип рядка, що полегшує процес створення складних рядків.

Шаблонні літерали дозволяють нам створювати багатолінійні рядки та використовувати можливості інтерполяції для створення рядків.

Розгляньмо наступний код:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

Консоль показуватиме рядки `Hello, my name is Zodiac Hasbro!` та `I am 56 years old.`.

Тут відбувається багато процесів. По-перше, у прикладі вживаються зворотні лапки (`` ` ``), а не одинарні чи подвійні (`'` чи `"`), щоб обрамити рядок. По-друге, зверніть увагу, що рядок залишається багатолінійним як у коді, так і в кінцевому вигляді. Завдяки цьому, `\n` вставляється у самі рядки. Наведений вище синтаксис `${variable}` є заповнювачем місця (placeholder). Це означає, що більше не потрібно використовувати конкатенацію з оператором `+`. Для додання змінних до рядків варто видалити змінну в шаблонному рядку та розмістити її у конструкцію `${` і `}`. Інші вирази також можуть додаватися до літералу у рядку схожим чином, наприклад `${a + b}`. Такий новий спосіб створення рядків надає більше можливостей створювати функціональні рядки.

# --instructions--

Використовуйте синтаксис шаблонних літералів зі зворотними лапками для створення масиву елемента списку - рядків (`li`). Текст кожного елемента списку має бути одним з елементів масиву зі значенням `failure` на об'єкті `result` та мати атрибут `class` зі значенням `text-warning`. Функція `makeList` повинна повернути масив елементів списку у рядках.

Завдяки методу, що використовує ітератор (будь-який цикл), ми можемо отримати бажаний результат (наведений нижче).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` має бути масивом, що містить повідомлення `result failure`.

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` має дорівнювати вказаному результату.

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

Варто також використовувати шаблонні рядки та інтерполяцію виразу.

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

Варто використовувати ітератор.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
