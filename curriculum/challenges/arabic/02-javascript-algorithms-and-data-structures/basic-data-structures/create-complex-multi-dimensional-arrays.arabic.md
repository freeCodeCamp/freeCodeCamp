---
id: 587d7b7b367417b2b2512b16
title: Create complex multi-dimensional arrays
challengeType: 1
videoUrl: ''
localeTitle: إنشاء صفائف معقدة متعددة الأبعاد
---

## Description
<section id="description"> رائع! لقد تعلمت للتو عن طن عن المصفوفات! كانت هذه نظرة عامة على مستوى عالٍ إلى حدٍ ما ، وهناك الكثير الذي يجب معرفته حول العمل مع المصفوفات ، والتي سترى الكثير منها في الأقسام التالية. ولكن قبل الانتقال إلى النظر إلى <dfn>الكائنات</dfn> ، دعنا نلقي نظرة أخرى ، ونرى كيف يمكن أن تصبح المصفوفات أكثر تعقيدًا من ما رأيناه في التحديات السابقة. واحدة من أقوى الميزات عند التفكير في المصفوفات كهيكل البيانات ، هي أن المصفوفات يمكن أن تحتوي ، أو حتى تتكون بالكامل من صفائف أخرى. لقد رأينا صفائف تحتوي على مصفوفات في تحديات سابقة ، ولكنها بسيطة نوعًا ما. ومع ذلك ، يمكن أن تحتوي المصفوفات على عمق لا نهائي من المصفوفات التي يمكن أن تحتوي على صفائف أخرى ، كل منها بمستوياتها الاعتباطية الخاصة بها ، وهكذا. وبهذه الطريقة ، يمكن أن تصبح المصفوفة بسرعة كبيرة جدًا بنية بيانات معقدة ، تُعرف باسم مصفوفة <dfn>متعددة الأبعاد</dfn> أو متداخلة. خذ بعين الاعتبار المثال التالي: <blockquote style=";text-align:right;direction:rtl"> اترك nestedArray = [// top، or first level - the external most array] <br> [&#39;عميق&#39;] ، // مصفوفة داخل صفيف ، مستويين من العمق <br> [ <br> [&#39;أعمق&#39;] ، [&#39;أعمق&#39;] // / 2 صفيف متداخلة 3 مستويات عميقة <br> ]، <br> [ <br> [ <br> [&#39;أعمق&#39;] ، [أعمق]] / / 2 صفيف متداخلة 4 مستويات عميقة <br> ]، <br> [ <br> [ <br> [&#39;deepest-est؟&#39;] // مجموعة متداخلة 5 مستويات عميقة <br> ] <br> ] <br> ] <br> ]. </blockquote> على الرغم من أن هذا المثال قد يبدو معقدًا ، إلا أن هذا المستوى من التعقيد لم يسمع به ، أو حتى غير معتاد ، عند التعامل مع كميات كبيرة من البيانات. ومع ذلك ، لا يزال بإمكاننا الوصول بسهولة إلى أعمق مستويات صفيف هذا المركب مع تدوين قوس: <blockquote style=";text-align:right;direction:rtl"> console.log (nestedArray [2] [1] [0] [0] [0])؛ <br> // logs: deepest-est؟ </blockquote> والآن بعد أن علمنا بمكان هذه البيانات ، يمكننا إعادة تعيينها إذا كنا بحاجة إلى: <blockquote style=";text-align:right;direction:rtl"> nestedArray [2] [1] [0] [0] [0] = &#39;deep still&#39;؛ <br><br> console.log (nestedArray [2] [1] [0] [0] [0])؛ <br> // الآن سجلات: أعمق لا يزال </blockquote></section>

## Instructions
<section id="instructions"> لقد حددنا متغيرًا ، <code>myNestedArray</code> ، متساوياً مع صفيف. تعديل <code>myNestedArray</code> ، وذلك باستخدام أي مجموعة من <dfn>السلاسل</dfn> <dfn>والأرقام</dfn> <dfn>والقيم المنطقية</dfn> لعناصر البيانات، بحيث انها بالضبط خمسة مستويات من العمق (تذكر، ومجموعة الخارجي، أكثر من غيره هو مستوى 1). في مكان ما في المستوى الثالث ، تتضمن السلسلة <code>&#39;deep&#39;</code> ، في المستوى الرابع ، وتشمل السلسلة <code>&#39;deeper&#39;</code> ، وعلى المستوى الخامس ، تتضمن السلسلة <code>&#39;deepest&#39;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي <code>myNestedArray</code> على أرقام فقط ، وحدات منطقية ، وسلاسل مثل عناصر البيانات
    testString: 'assert.strictEqual((function(arr) { let flattened = (function flatten(arr) { const flat = [].concat(...arr); return flat.some (Array.isArray) ? flatten(flat) : flat; })(arr); for (let i = 0; i < flattened.length; i++) { if ( typeof flattened[i] !== "number" && typeof flattened[i] !== "string" && typeof flattened[i] !== "boolean") { return false } } return true })(myNestedArray), true, "<code>myNestedArray</code> should contain only numbers, booleans, and strings as data elements");'
  - text: يجب أن يكون <code>myNestedArray</code> 5 مستويات عمق
    testString: 'assert.strictEqual((function(arr) {let depth = 0;function arrayDepth(array, i, d) { if (Array.isArray(array[i])) {  arrayDepth(array[i], 0, d + 1);} else {  depth = (d > depth) ? d : depth;}if (i < array.length) {  arrayDepth(array, i + 1, d);}  }arrayDepth(arr, 0, 0);return depth;})(myNestedArray), 4, "<code>myNestedArray</code> should have exactly 5 levels of depth");'
  - text: يجب أن يحتوي <code>myNestedArray</code> على تكرار واحد لسلسلة <code>&quot;deep&quot;</code> على صفيف متداخلة من 3 مستويات
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deep").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deep")[0] === 2, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deep"</code> on an array nested 3 levels deep");'
  - text: يجب أن يحتوي <code>myNestedArray</code> على تكرار واحد فقط للسلسلة <code>&quot;deeper&quot;</code> على صفيف متداخلة 4 مستويات متداخلة
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deeper").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deeper")[0] === 3, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deeper"</code> on an array nested 4 levels deep");'
  - text: يجب أن يحتوي <code>myNestedArray</code> على تكرار واحد لسلسلة <code>&quot;deepest&quot;</code> على مجموعة متداخلة من 5 مستويات متداخلة
    testString: 'assert((function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deepest").length === 1 && (function howDeep(array, target, depth = 0) {return array.reduce((combined, current) => {if (Array.isArray(current)) {  return combined.concat(howDeep(current, target, depth + 1));} else if (current === target) {  return combined.concat(depth);} else {  return combined;}}, []);})(myNestedArray, "deepest")[0] === 4, "<code>myNestedArray</code> should contain exactly one occurrence of the string <code>"deepest"</code> on an array nested 5 levels deep");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // change code above this line
];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
