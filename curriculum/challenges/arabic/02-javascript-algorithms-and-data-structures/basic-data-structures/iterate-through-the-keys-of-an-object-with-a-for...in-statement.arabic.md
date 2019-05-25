---
id: 587d7b7d367417b2b2512b1d
title: 'Iterate Through the Keys of an Object with a for...in Statement'
challengeType: 1
videoUrl: ''
localeTitle: يتكرر عبر مفاتيح كائن مع لـ ... في بيان
---

## Description
<section id="description"> في بعض الأحيان قد تحتاج إلى التكرار من خلال جميع المفاتيح داخل كائن. يتطلب هذا بناء جملة محددًا في JavaScript يسمى <dfn>for ... في</dfn> العبارة. بالنسبة <code>users</code> ، قد يبدو هذا: <blockquote style=";text-align:right;direction:rtl"> لـ (السماح للمستخدم بالمستخدمين) { <br> console.log (المستخدم)؛ <br> }؛ <br><br> // سجلات: <br> آلان <br> جيف <br> ساره <br> ريان </blockquote> في هذا البيان ، قمنا بتعريف <code>user</code> متغير ، وكما ترى ، تمت إعادة تعيين هذا المتغير أثناء كل عملية تكرار لكل مفتاح من مفاتيح الكائن كالتعبير المتكرر من خلال الكائن ، مما أدى إلى طباعة اسم كل مستخدم إلى وحدة التحكم. <strong>ملحوظة:</strong> <br> لا تحتفظ الكائنات بأمر على المفاتيح المخزنة مثل المصفوفات؛ وبالتالي ، يكون موضع المفاتيح في كائن ما ، أو الترتيب النسبي الذي يظهر فيه ، غير ذي صلة عند الإشارة إلى هذا المفتاح أو الوصول إليه. </section>

## Instructions
<section id="instructions"> لقد قمنا بتعريف وظيفة ، <code>countOnline</code> ؛ استخدم عبارة <dfn>for ... في</dfn> العبارة داخل هذه الوظيفة للتكرار بين المستخدمين في كائن <code>users</code> وإرجاع عدد المستخدمين الذين تم تعيين الخاصية الخاصة بهم <code>online</code> إلى <code>true</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يحتوي كائن <code>users</code> على المستخدمين <code>Jeff</code> <code>Ryan</code> مع تعيين <code>online</code> على <code>true</code> والمستخدمين <code>Alan</code> <code>Sarah</code> مع تعيين <code>online</code> إلى <code>false</code>
    testString: 'assert(users.Alan.online === false && users.Jeff.online === true &&  users.Sarah.online === false &&  users.Ryan.online === true, "The <code>users</code> object contains users <code>Jeff</code> and <code>Ryan</code> with <code>online</code> set to <code>true</code> and users <code>Alan</code> and <code>Sarah</code> with <code>online</code> set to <code>false</code>");'
  - text: ترجع الدالة <code>countOnline</code> عدد المستخدمين الذين تم تعيين الخاصية <code>online</code> إلى <code>true</code>
    testString: 'assert((function() { users.Harry = {online: true}; users.Sam = {online: true}; users.Carl = {online: true}; return countOnline(users) })() === 5, "The function <code>countOnline</code> returns the number of users with the <code>online</code> property set to <code>true</code>");'

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

function countOnline(obj) {
  // change code below this line

  // change code above this line
}

console.log(countOnline(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
