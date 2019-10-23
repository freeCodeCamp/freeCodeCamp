---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
challengeType: 1
videoUrl: ''
localeTitle: تعديل صفيف مخزنة في كائن
---

## Description
<section id="description"> لقد شاهدت الآن جميع العمليات الأساسية لكائنات جافا سكريبت. يمكنك إضافة أو تعديل أو إزالة أزواج قيمة المفتاح ، والتحقق من وجود المفاتيح ، وتكرارها على كافة المفاتيح الموجودة في كائن ما. أثناء متابعة تعلم لغة JavaScript ، سترى تطبيقات أكثر تنوعًا للكائنات. بالإضافة إلى ذلك ، فإن دروس &quot;هياكل البيانات المتقدمة&quot; الاختيارية في وقت لاحق في المنهج تغطي أيضًا كائنات ES6 <dfn>Map</dfn> و <dfn>Set</dfn> ، وكلاهما مشابهان للكائنات العادية ولكن مع توفير بعض الميزات الإضافية. الآن بعد أن تعلمت أساسيات المصفوفات والأشياء ، فأنت مستعد تمامًا للبدء في معالجة مشكلات أكثر تعقيدًا باستخدام JavaScript! </section>

## Instructions
<section id="instructions"> ألق نظرة على الكائن الذي قدمناه في محرر الشفرات. يحتوي كائن <code>user</code> على ثلاثة مفاتيح. يحتوي مفتاح <code>data</code> على خمسة مفاتيح ، يحتوي أحدها على مجموعة من <code>friends</code> . من هذا ، يمكنك أن ترى كيف الأجسام المرنة هي هياكل البيانات. لقد بدأنا في كتابة وظيفة <code>addFriend</code> . قم بإنهاء الكتابة بحيث تأخذ كائن <code>user</code> وتضيف اسم وسيطة <code>friend</code> إلى الصفيف المخزن في <code>user.data.friends</code> وتقوم بإرجاع هذا الصفيف. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يحتوي كائن <code>user</code> على <code>name</code> <code>age</code> ومفاتيح <code>data</code>
    testString: 'assert("name" in user && "age" in user && "data" in user, "The <code>user</code> object has <code>name</code>, <code>age</code>, and <code>data</code> keys");'
  - text: تقبل وظيفة <code>addFriend</code> كائن <code>user</code> وسلسلة <code>friend</code> كوسيطة وتضيف الصديق إلى مصفوفة <code>friends</code> في كائن <code>user</code>
    testString: 'assert((function() { let L1 = user.data.friends.length; addFriend(user, "Sean"); let L2 = user.data.friends.length; return (L2 === L1 + 1); })(), "The <code>addFriend</code> function accepts a <code>user</code> object and a <code>friend</code> string as arguments and adds the friend to the array of <code>friends</code> in the <code>user</code> object");'
  - text: '<code>addFriend(user, &quot;Pete&quot;)</code> <code>[&quot;Sam&quot;, &quot;Kira&quot;, &quot;Tomo&quot;, &quot;Pete&quot;]</code>'
    testString: 'assert.deepEqual((function() { delete user.data.friends; user.data.friends = ["Sam", "Kira", "Tomo"]; return addFriend(user, "Pete") })(), ["Sam", "Kira", "Tomo", "Pete"], "<code>addFriend(user, "Pete")</code> should return <code>["Sam", "Kira", "Tomo", "Pete"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line

  // change code above this line
}

console.log(addFriend(user, 'Pete'));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
