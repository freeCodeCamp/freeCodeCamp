---
id: 5cdafbe72913098997531682
title: Handle a Rejected Promise with catch
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

`catch` هي method مستخدمة عند رفض الـ promise. يتم تنفيذها مباشرة بعد أن يتم استدعاء method الـ `reject` الخاصة بالـ promise. إليك بناء الجملة:

```js
myPromise.catch(error => {

});
```

`error` هو الـ argument الممرر إلى method الـ `reject`.

# --instructions--

أضف method الـ `catch` إلى الـ promise الخاص بك. استخدم `error` كوسيط لوظيفة تعيد تفعيلها وسجل `error` في وحدة التحكم (console).

# --hints--

يجب عليك استدعاء method الـ `catch` على الـ promise.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

يجب أن تكون لطريقة (method) المسمى `catch` الوظيفة تعيد تفعيلها (callback function) مع `error` كوسيطها (parameter).

```js
assert(errorIsParameter);
```

يجب عليك اخراج `error` إلى وحدة التحكم.

```js
assert(
  errorIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.catch\(.*?error.*?console.log\(error\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const errorIsParameter = /\.catch\((function\(error\){|error|\(error\)=>)/.test(__helpers.removeWhiteSpace(code));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```
