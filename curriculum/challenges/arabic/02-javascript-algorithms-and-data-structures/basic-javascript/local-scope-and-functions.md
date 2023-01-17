---
id: 56533eb9ac21ba0edf2244bf
title: النطاق المحلي والوظائف (Local Scope and Functions)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

المتغيرات التي أعلنة داخل وظيفة (function)، وكذلك الوسائط (parameters) للوظيفة لديها مجال <dfn>محدود (local)</dfn>. وهذا يعني أنها لا تبد مرئية إلا في إطار الوظيفة.

هذه وظيفة `myTest` مع متغير محدود يسمى `loc`.

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

استدعاء الوظيفة `myTest()` ستعرض المقطع `foo` في وحدة التحكم. سيؤدي سطر `console.log(loc)` (خارج وظيفة `myTest`) إلى ظهور خطأ، حيث إن `loc` لم يتم تعريفها خارج الوظيفة.

# --instructions--

يحتوي المحرر على اثنين `console.log` لمساعدتك على رؤية ما يحدث. تحقق من وحدة التحكم خلال كتابة الكود لترى كيف يتغير. اعلن متغير محدود اسمه `myVar` داخل `myLocalScope` وفعّل الاختبارات.

**ملاحظة:** وحدة التحكم ستظل تعرض `ReferenceError: myVar is not defined`، ولكن هذا لن يتسبب في فشل الاختبارات.

# --hints--

لا ينبغي أن يحتوي الكود على متغير شامل يدعي `myVar`.

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

يجب عليك إضافة متغير محدود يدعي `myVar`.

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
