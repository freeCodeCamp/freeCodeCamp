---
id: 56533eb9ac21ba0edf2244bf
title: Локальна область видимості та функції
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

Змінні, що є зазначені в межах функції, мають діапазон <dfn>local</dfn>, так як і параметри функції. Це означає, що вони є видимими лише в межах цієї функції.

Це функція `myTest` з локальною змінною `loc`.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

Виклик функції `myTest()` відображатиме рядок `foo` в консолі. The `console.log(loc)` line (outside of the `myTest` function) will throw an error, as `loc` is not defined outside of the function.

# --instructions--

Редактор має два `console.log` щоб допомогти вам побачити, що відбувається. Позначте консоль як ваш код, щоб побачити як вона змінюється. Зазначте локальну змінну e `myVar` всередині `myLocalScope` і запустіть тест.

Консоль **Note:** все ще відображатиме `ReferenceError: myVar is not defined`, але це не спричинить збій тестувань.

# --hints--

Код не повинен містити глобальну змінну `myVar`.

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

Вам слід додати локальну змінну `myVar`.

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
