---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

Functional programming هي عادة جيدة. إنها تجعل الكود الخاص بك سهل الإدارة، وتحفظك من الأخطاء الخادعة. ولكن قبل أن نصل إلى هناك ، دعنا نلقي نظرة على نهج حتمي للبرمجة لتسليط الضوء على المشكلات التي قد تواجهك.

في اللغة الإنجليزية (والعديد من اللغات الأخرى) ، يتم استخدام صيغة الأمر لإعطاء الأوامر. وبالمثل ، فإن أسلوب الأمر في البرمجة هو الذي يعطي الكمبيوتر مجموعة من العبارات لأداء مهمة ما.

غالبًا ما تغير البيانات حالة البرنامج ، مثل تحديث المتغيرات الشاملة (global variables). المثال الكلاسيكي هو كتابة حلقة `for` تعطي توجيهات دقيقة للتكرار على فهارس ال array.

في المقابل، تكون البرمجة الوظيفية (functional programming) من أشكال البرمجة المعلنة (declarative programming). أنت تخبر الكمبيوتر بما تريد فعله عن طريق استدعاء method أو function.

يقدم جافا سكريبت العديد من ال methods المحددة مسبقاً التي تتعامل مع المهام الشائعة حتى لا تحتاج إلى كتابة كيفية قيام الكمبيوتر بتنفيذها. على سبيل المثال، بدلا من استخدام حلقة `for` المذكورة أعلاه، يمكنك استدعاء `map` التي تتعامل مع تفاصيل التكرار علي array. يساعد هذا في تجنب الأخطاء الدلالية ، مثل "Off By One Errors" التي تمت تغطيتها في قسم ال Debugging.

ضع في اعتبارك هذا السيناريو: أنت تتصفح الويب في متصفحك، وتريد تتبع علامات التبويب التي فتحتها. دعنا نحاول نمذجة هذا باستخدام بعض الكود البسيط ال object-oriented.

Window object مكون من علامات التبويب، وعادة ما يكون لديك أكثر من نافذة مفتوحة. عناوين كل موقع مفتوح في كل Window object محفوظة في array. بعد العمل في المتصفح (فتح علامات تبويب جديدة، دمج النوافذ، وإغلاق علامات التبويب)، تريد طباعة علامات التبويب التي لا تزال مفتوحة. يتم إزالة علامات التبويب المغلقة من ال array ويتم إضافة علامات التبويب الجديدة (للبساطة) إلى نهايتها.

يعرض محرر الكود تنفيذ هذه العملية بدوال لـ `tabOpen()` و `tabClose()` و `join()`. المصفوفة `tabs` هي جزء من الـ Window object التي تخزن اسم الصفحات المفتوحة.

# --instructions--

افحص الكود في المحرر. إنه يستخدم طريقة لها تأثيرات جانبية في البرنامج، تسبب سلوكا خاطئا. القائمة النهائية لعلامات التبويب المفتوحة المخزنة في `finalTabs.tabs` ، يجب أن تكون `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` ولكن القائمة التي ينتجها الكود مختلفة قليلاً.

قم بتغيير `Window.prototype.tabClose` بحيث يزيل التبويب الصحيح.

# --hints--

`finalTabs.tabs` يجب ان تكون `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

```js
assert.deepEqual(finalTabs.tabs, [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab'
]);
```

# --seed--

## --seed-contents--

```js
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

# --solutions--

```js
const Window = function(tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index);
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
```
