---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
videoUrl: ''
localeTitle: إنشاء صفيف من كافة مفاتيح الكائنات مع Object.keys ()
---

## Description
<section id="description"> يمكننا أيضًا إنشاء مصفوفة تحتوي على جميع المفاتيح المخزنة في كائن باستخدام طريقة <code>Object.keys()</code> وتمريرها في كائن كوسيطة. سيؤدي هذا إلى إرجاع صفيف يحتوي على سلاسل تمثل كل خاصية في الكائن. مرة أخرى ، لن يكون هناك طلب محدد للإدخالات في الصفيف. </section>

## Instructions
<section id="instructions"> قم <code>getArrayOfUsers</code> كتابة الدالة <code>getArrayOfUsers</code> بحيث تقوم بإرجاع صفيف يحتوي على كافة الخصائص في الكائن يتلقاها كوسيطة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يحتوي كائن <code>users</code> فقط على مفاتيح <code>Alan</code> و <code>Jeff</code> و <code>Sarah</code> و <code>Ryan</code>
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: ترجع الدالة <code>getArrayOfUsers</code> صفيف يحتوي على كافة المفاتيح الموجودة في كائن <code>users</code>
    testString: 'assert((function() { users.Sam = {}; users.Lewis = {}; let R = getArrayOfUsers(users); return (R.indexOf("Alan") !== -1 && R.indexOf("Jeff") !== -1 && R.indexOf("Sarah") !== -1 && R.indexOf("Ryan") !== -1 && R.indexOf("Sam") !== -1 && R.indexOf("Lewis") !== -1); })() === true, "The <code>getArrayOfUsers</code> function returns an array which contains all the keys in the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line

  // change code above this line
}

console.log(getArrayOfUsers(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
