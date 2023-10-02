---
id: 56533eb9ac21ba0edf2244bf
title: Локальна область видимості та функції
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

Змінні, оголошені в межах функції, мають <dfn>локальну</dfn> область видимості (як і параметри функції). Це означає, що вони видимі лише в межах цієї функції.

Ось функція `myTest` з локальною змінною під назвою `loc`.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

Виклик функції `myTest()` показуватиме рядок `foo` на консолі. Рядок `console.log(loc)` (за межами функції `myTest`) видасть помилку, тому що `loc` не визначено поза функцією.

# --instructions--

Редактор має два `console.log`, щоб ви могли бачити, що відбувається. Перевіряйте консоль, коли програмуєте, щоб побачити зміни. Оголосіть локальну змінну `myVar` всередині `myLocalScope` та запустіть тести.

**Примітка:** на консолі досі буде `ReferenceError: myVar is not defined`, але це не спричинить збій тестів.

# --hints--

Код не повинен містити глобальну змінну `myVar`.

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

Ви повинні додати локальну змінну `myVar`.

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
