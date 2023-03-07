---
id: 56533eb9ac21ba0edf2244bf
title: النطاق المحدود والوظائف
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

المتغيرات التي أعلنت داخل وظيفة (function)، وكذلك الوسائط (parameters) للوظيفة لديها مجال <dfn>محدود (local)</dfn>. وهذا يعني أنها لا تكون ظاهرة (أو معروفة) إلا في نطاق الوظيفة.

هذه وظيفة `myTest` مع متغير محدود يسمى `loc`.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

تفعيل وظيفة `myTest()` سيعرض مقطع `foo` في الكونسول. سيؤدي سطر `console.log(loc)` (خارج وظيفة `myTest`) إلى ظهور خطأ، حيث إن `loc` لم يتم تعريفها خارج الوظيفة.

# --instructions--

يحتوي المحرر على سطرين `console.log` لمساعدتك على رؤية ما يحدث. تحقق على الكونسول خلال كتابة الكود لترى كيف يتغير. اعلن متغير محدود اسمه `myVar` داخل `myLocalScope` وشغِّل الاختبارات.

**ملاحظة:** الكونسول سيظل بعرض `ReferenceError: myVar is not defined`، ولكن هذا لن يتسبب في فشل الاختبارات.

# --hints--

لا ينبغي أن يحتوي الكود على متغير شامل يدعى `myVar`.

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

يجب عليك إضافة متغير محدود يدعى `myVar`.

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
