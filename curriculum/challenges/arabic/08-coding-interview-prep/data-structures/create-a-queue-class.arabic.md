---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> مثل الأكوام ، الطوابير عبارة عن مجموعة من العناصر. ولكن على عكس المداخن ، تتبع الطوابير مبدأ FIFO (أولاً في أول). يتم دفع العناصر المضافة إلى قائمة انتظار إلى الذيل ، أو نهاية ، قائمة الانتظار ، ويسمح فقط بإزالة العنصر الموجود في الجزء الأمامي من قائمة الانتظار. يمكننا استخدام مصفوفة لتمثيل طابور ، ولكن مثل المداخن ، نريد أن نحدد كمية التحكم التي لدينا على قوائم الانتظار لدينا. تتمثل الطريقتان الرئيسيتان لطبقة صف الانتظار في الطوق وطريقة dequeue. تدفع طريقة enqueue عنصرًا إلى ذيل قائمة الانتظار ، ويزيل أسلوب dequeue ويعيد العنصر في مقدمة الصف. طرق أخرى مفيدة هي الجبهة ، والحجم ، وأساليب فارغة. التعليمات قم بكتابة طريقة تعامدية توجه عنصرًا إلى ذيل قائمة الانتظار ، وهي طريقة dequeue تقوم بإزالة وإرجاع العنصر الأمامي ، وهي طريقة أمامية تسمح لنا برؤية العنصر الأمامي ، وطريقة الحجم التي تعرض الطول ، والطريقة isEmpty لمعرفة ما إذا كانت قائمة الانتظار فارغة. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function(){var test = new Queue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Queue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Queue();  return (typeof test.front === "function")}()), "Your <code>Queue</code> class should have a <code>front</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Queue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new Queue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: يجب أن تقوم طريقة <code>dequeue</code> بإزالة وإعادة العنصر الأمامي لقائمة الانتظار
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.dequeue() === "Smith")}()), "The <code>dequeue</code> method should remove and return the front element of the queue");'
  - text: ''
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); test.enqueue("John"); return (test.front() === "Smith")}()), "The <code>front</code> method should return value of the front element of the queue");'
  - text: ''
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.size() === 1)}()), "The <code>size</code> method should return the length of the queue");'
  - text: ''
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return !(test.isEmpty())}()), "The <code>isEmpty</code> method should return <code>false</code> if there are elements in the queue");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Queue () {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line

    // Only change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
