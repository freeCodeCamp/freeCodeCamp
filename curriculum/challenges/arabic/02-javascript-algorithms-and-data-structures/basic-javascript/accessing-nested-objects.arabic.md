---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1
videoUrl: ''
localeTitle: الوصول إلى الكائنات المتداخلة
---

## Description
<section id="description"> يمكن الوصول إلى الخصائص الفرعية للكائنات عن طريق ربط صيغة النقطة أو القوس. هنا كائن متداخل: <blockquote style=";text-align:right;direction:rtl"> var ourStorage = { <br> &quot;مكتب&quot;: { <br> &quot;الدرج&quot;: &quot;دباسة&quot; <br> }، <br> &quot;خزانة&quot;: { <br> &quot;الدرج العلوي&quot;: { <br> &quot;folder1&quot;: &quot;ملف&quot; ، <br> &quot;folder2&quot;: &quot;secrets&quot; <br> }، <br> &quot;درج سفلي&quot;: &quot;الصودا&quot; <br> } <br> }؛ <br> ourStorage.cabinet [&quot;top drawer&quot;]. // &quot;أسرار&quot; <br> ourStorage.desk.drawer. // &quot;دباسة&quot; </blockquote></section>

## Instructions
<section id="instructions"> قم بالوصول إلى كائن <code>myStorage</code> وقم بتعيين محتويات خاصية <code>glove box</code> إلى متغير <code>gloveBoxContents</code> . استخدام تدرج قوس للمواقع مع مساحة في أسمائهم. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يساوي <code>gloveBoxContents</code> &quot;الخرائط&quot;
    testString: 'assert(gloveBoxContents === "maps", "<code>gloveBoxContents</code> should equal "maps"");'
  - text: استخدم تدوين النقطة <code>myStorage</code> للوصول إلى <code>myStorage</code>
    testString: 'assert(/=\s*myStorage\.car\.inside\[\s*("|")glove box\1\s*\]/g.test(code), "Use dot and bracket notation to access <code>myStorage</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined; // Change this line

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
