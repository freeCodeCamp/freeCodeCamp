---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
videoUrl: ''
localeTitle: تحقق مما إذا كان الكائن يحتوي على خاصية
---

## Description
<section id="description"> الآن يمكننا إضافة وتعديل وإزالة المفاتيح من الكائنات. ولكن ماذا لو أردنا فقط معرفة ما إذا كان الكائن له خاصية معينة؟ تقدم لنا JavaScript طريقتين مختلفتين للقيام بذلك. واحد يستخدم <code>hasOwnProperty()</code> طريقة والآخر يستخدم <code>in</code> الكلمة. إذا كان لدينا <code>users</code> كائنات <code>users</code> خاصية <code>Alan</code> ، فيمكننا التحقق من وجودها بأي من الطرق التالية: <blockquote style=";text-align:right;direction:rtl"> users.hasOwnProperty (علان &#39;)؛ <br> &quot;آلان&quot; في المستخدمين ؛ <br> // كلاهما يعود صحيح </blockquote></section>

## Instructions
<section id="instructions"> لقد أنشأنا كائنًا ، <code>users</code> ، ومع بعض المستخدمين فيه ، ووظيفة هي <code>isEveryoneHere</code> ، والتي <code>isEveryoneHere</code> <code>users</code> ككائن. الانتهاء من كتابة هذه الوظيفة بحيث تقوم بإرجاع <code>true</code> إلا إذا كان <code>users</code> يعترض يحتوي على جميع الأسماء الأربعة، <code>Alan</code> ، <code>Jeff</code> ، <code>Sarah</code> ، و <code>Ryan</code> ، ومفاتيح، و <code>false</code> خلاف ذلك. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يحتوي كائن <code>users</code> فقط على مفاتيح <code>Alan</code> و <code>Jeff</code> و <code>Sarah</code> و <code>Ryan</code>
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: الدالة <code>isEveryoneHere</code> بإرجاع <code>true</code> إذا كان <code>Alan</code> و <code>Jeff</code> و <code>Sarah</code> و <code>Ryan</code> هي خصائص على كائن <code>users</code>
    testString: 'assert(isEveryoneHere(users) === true, "The function <code>isEveryoneHere</code> returns <code>true</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are properties on the <code>users</code> object");'
  - text: الدالة <code>isEveryoneHere</code> بإرجاع <code>false</code> إذا كان <code>Alan</code> و <code>Jeff</code> و <code>Sarah</code> و <code>Ryan</code> ليست خصائص على كائن <code>users</code>
    testString: 'assert((function() { delete users.Alan; delete users.Jeff; delete users.Sarah; delete users.Ryan; return isEveryoneHere(users) })() === false, "The function <code>isEveryoneHere</code> returns <code>false</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are not properties on the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line

  // change code above this line
}

console.log(isEveryoneHere(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
