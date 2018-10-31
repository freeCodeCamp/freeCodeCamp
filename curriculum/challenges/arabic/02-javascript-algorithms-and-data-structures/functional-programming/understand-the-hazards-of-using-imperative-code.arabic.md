---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
challengeType: 1
videoUrl: ''
localeTitle: فهم مخاطر استخدام الرمز الاحتمالي
---

## Description
<section id="description"> البرمجة الوظيفية هي عادة جيدة. إنه يحافظ على سهولة إدارة التعليمة البرمجية ، ويوفر لك من الأخطاء الخداعية. ولكن قبل أن نصل إلى هناك ، فلننظر إلى مقاربة حتمية للبرمجة لإلقاء الضوء على المواضع التي قد تواجهك فيها. في اللغة الإنجليزية (والعديد من اللغات الأخرى) ، يتم استخدام الفعل الحتمي لإعطاء الأوامر. وبالمثل ، فإن أسلوبًا إلزاميًا في البرمجة هو أسلوب يمنح الكمبيوتر مجموعة من العبارات لتنفيذ مهمة ما. غالبًا ما تؤدي العبارات إلى تغيير حالة البرنامج ، مثل تحديث المتغيرات العامة. المثال الكلاسيكي هو كتابة حلقة <code>for</code> والتي تعطي اتجاهات دقيقة لتكرارها فوق مؤشرات الصفيف. وفي المقابل ، تعد البرمجة الوظيفية شكلاً من أشكال البرمجة التعريفية. تخبر الكمبيوتر بما تريد القيام به عن طريق استدعاء طريقة أو وظيفة. تقدم JavaScript العديد من الطرق المحددة مسبقًا التي تتعامل مع المهام الشائعة ، لذا لا تحتاج إلى كتابة طريقة أداء الكمبيوتر لها. على سبيل المثال، بدلا من استخدام <code>for</code> حلقة المذكورة أعلاه، يمكن استدعاء <code>map</code> الطريقة التي يعالج تفاصيل بالتكرار عبر صفيف. يساعد هذا في تجنب الأخطاء الدلالية ، مثل &quot;Off By One Errors&quot; التي تمت تغطيتها في قسم التصحيح. فكر في السيناريو: أنت تتصفح الويب في متصفحك وتريد تتبع علامات التبويب التي فتحتها. دعونا نحاول هذا النموذج باستخدام بعض التعليمات البرمجية بسيطة وجوه المنحى. يتكون كائن إطار من علامات التبويب ، وعادة ما يكون لديك أكثر من نافذة مفتوحة. يتم الاحتفاظ بعناوين كل موقع مفتوح في كل كائن نافذة في مصفوفة. بعد العمل في المستعرض (فتح علامات تبويب جديدة ، ودمج النوافذ ، وعلامات الإغلاق) ، تريد طباعة علامات التبويب التي لا تزال مفتوحة. تتم إزالة علامات التبويب المغلقة من الصفيف وتضاف علامات التبويب الجديدة (للبساطة) إلى نهايتها. يعرض محرر التعليمة البرمجية تطبيقًا لهذه الوظيفة بوظائف <code>tabOpen()</code> و <code>tabClose()</code> و <code>join()</code> . تعتبر <code>tabs</code> الصفائف جزءًا من كائن الإطار الذي يخزن اسم الصفحات المفتوحة. <h4 style=";text-align:right;direction:rtl"> تعليمات </h4><h4 style=";text-align:right;direction:rtl"> قم بتشغيل الكود في المحرر. إنها تستخدم طريقة لها آثار جانبية في البرنامج ، مما يتسبب في إخراج غير صحيح. يجب أن تكون القائمة النهائية لعلامات التبويب المفتوحة <code>[&#39;FB&#39;, &#39;Gitter&#39;, &#39;Reddit&#39;, &#39;Twitter&#39;, &#39;Medium&#39;, &#39;new tab&#39;, &#39;Netflix&#39;, &#39;YouTube&#39;, &#39;Vine&#39;, &#39;GMail&#39;, &#39;Work mail&#39;, &#39;Docs&#39;, &#39;freeCodeCamp&#39;, &#39;new tab&#39;]</code> ولكن الإخراج سيكون مختلفًا بعض الشيء. اعمل من خلال الشفرة واكتشف ما إذا كان يمكنك معرفة المشكلة ، ثم تقدم إلى التحدي التالي لمعرفة المزيد. </h4></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(true, "Move ahead to understand the error.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());

alert(finalTabs.tabs);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
