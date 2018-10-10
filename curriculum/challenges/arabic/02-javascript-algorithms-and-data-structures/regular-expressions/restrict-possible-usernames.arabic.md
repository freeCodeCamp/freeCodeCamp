---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
videoUrl: ''
localeTitle: تقييد أسماء المستخدمين المحتملين
---

## Description
<section id="description"> يتم استخدام أسماء المستخدمين في كل مكان على الإنترنت. فهي تمنح المستخدمين هوية فريدة على مواقعهم المفضلة. تحتاج إلى التحقق من جميع أسماء المستخدمين في قاعدة بيانات. فيما يلي بعض القواعد البسيطة التي يجب على المستخدمين اتباعها عند إنشاء اسم المستخدم الخاص بهم. 1) يجب أن تكون الأرقام الوحيدة في اسم المستخدم في النهاية. يمكن أن يكون هناك صفر أو أكثر منهم في النهاية. 2) يمكن أن تكون أحرف اسم المستخدم صغيرة وأخرى كبيرة. 3) يجب أن تتكون أسماء المستخدمين من حرفين على الأقل. يمكن لاسم المستخدم المكون من حرفين فقط استخدام أحرف الحروف الأبجدية. </section>

## Instructions
<section id="instructions"> غيّر <code>userCheck</code> لتتوافق مع القيود المدرجة أعلاه. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتطابق <code>JACK</code> العادي مع <code>JACK</code>
    testString: 'assert(userCheck.test("JACK"), "Your regex should match <code>JACK</code>");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>J</code>
    testString: 'assert(!userCheck.test("J"), "Your regex should not match <code>J</code>");'
  - text: يجب أن يتطابق <code>Oceans11</code> العادي مع <code>Oceans11</code>
    testString: 'assert(userCheck.test("Oceans11"), "Your regex should match <code>Oceans11</code>");'
  - text: يجب أن يتطابق <code>RegexGuru</code> العادي مع <code>RegexGuru</code>
    testString: 'assert(userCheck.test("RegexGuru"), "Your regex should match <code>RegexGuru</code>");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>007</code>
    testString: 'assert(!userCheck.test("007"), "Your regex should not match <code>007</code>");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>9</code>
    testString: 'assert(!userCheck.test("9"), "Your regex should not match <code>9</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
