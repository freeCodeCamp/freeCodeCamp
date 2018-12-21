---
title: How to Create a Dropdown Menu with CSS and JavaScript
localeTitle: كيفية إنشاء قائمة منسدلة باستخدام CSS و JavaScript
---
## كيفية إنشاء قائمة منسدلة باستخدام CSS و JavaScript

ستتعلم في هذا البرنامج التعليمي كيفية إنشاء قائمة منسدلة بسيطة باستخدام الفانيلا Javascript و HTML و CSS. سنسير عبر شفرة HTML و CSS وجافا سكريبت ، ولكن نولي المزيد من الاهتمام للبرمجة ، نظرًا لأن هذا البرنامج التعليمي تابع لبرنامج JS. سنستخدم فقط JS و CSS بدون أي إطارات أو معالجات مسبقة. الاستثناء الوحيد (نوع) سيتم استيراد ملف [Font Awesome](https://fontawesome.com/) CSS لأننا سنستخدم أحد رموزه.

يستهدف هذا المطورين الذين لديهم فهم متوسط ​​لـ HTML و CSS و JS. حاولت أن أجعله نظيفًا قدر الإمكان ، لكنني لن أركز كثيرًا على التفاصيل هنا. آمل أن تستمتع جميع.

## لقطات

هذه هي الطريقة التي تبدو بها نتيجة الشفرة:

الشاشة الأولي:

![](https://i.imgur.com/jrnu6mE.png)

فتح القائمة المنسدلة:

![](https://i.imgur.com/gszPtRa.png)

المنسدلة مع اختيار الخيار:

![](https://i.imgur.com/TKXxZGF.png)

#### HTML:

في هذا القسم ، سنناقش تنفيذ شفرة HTML للصفحة التجريبية. للبدء ، دعنا نرى الرمز `<head>`

```html
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
    <title>Dropdown Example</title> 
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/'-awesome/4.7.0/css/font-awesome.min.css"> 
    <link rel="stylesheet" href="styles.css"> 
 </head> 
``` 

هذا هو الأساس الأساسي لنموذج HTML الرئيسي ، باستثناء علامات `link` تحمّل صحيفتي أنماط CSS التي سنستخدمها في هذا البرنامج التعليمي: الأنماط `styles.css` ، وملف `styles.css` ، حيث `styles.css` أنماط هذه الصفحة.

ثم ، ما تبقى من ملف HTML ، الجسم:

```html
<body> 
    <div class='dropdown'> 
        <div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div> 
 
        <div class='menu pointerCursor hide'> 
            <div class='option' id='option1'>Option 1</div> 
            <div class='option' id='option2'>Option 2</div> 
            <div class='option' id='option3'>Option 3</div> 
            <div class='option' id='option4'>Option 4</div> 
        </div> 
 
    </div> 
    <span id='result'>The result is: </span> 
    <script> 
      ... 
    </script> 
 </body> 
 </html> 
``` 

يمكن تقسيم هذا القسم إلى 3 أجزاء رئيسية:

*   و `.dropdown` شعبة، حيث سيتم تحديد هيكل العنصر المنسدلة ل.
*   العنصر `#result` ، الذي سيحتوي على الخيار المحدد بواسطة المستخدم ، من عنصر القائمة المنسدلة.
*   النص المكتوب في علامة `<script>` . يتم إخفاء تطبيقه هنا ، لأنه سيتم شرح تفاصيله في القسم الأخير من هذا البرنامج التعليمي.

عنصر القائمة المنسدلة عبارة عن عنصر `div` يحتوي على `title` وعناصر `menu` . يحدد السابق فقط النص الذي سيتم عرضه على العنصر قبل تحديد أي خيار وسيحدد الأخير الخيارات التي سيتم اختيارها بواسطة العنصر.

عنصر `result` موجود فقط ليعرض لك ما هو الخيار المحدد حاليًا.

#### أنماط:

أدناه يمكنك التحقق من رمز CSS الكامل للخروج. كما ترون فإنه يجعل استخدام `transition` CSS3 والبنية `transform` .

يرجى الانتباه إلى تعريفات `.dropdown` . يتم استخدام هذه لتحديد تخطيط مكون الحاوية القائمة المنسدلة بالإضافة إلى عناصرها الداخلية ، مثل `.title` و `.option` الخاص به.

```html
 
 body{ 
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
 } 
 
 .hide { 
    max-height: 0 !important; 
 } 
 
 .dropdown{ 
    border: 0.1em solid black; 
    width: 10em; 
    margin-bottom: 1em; 
 } 
 
 .dropdown .title{ 
    margin: .3em .3em .3em .3em; 
    width: 100%; 
 } 
 
 .dropdown .title .fa-angle-right{ 
    float: right; 
    margin-right: .7em; 
    transition: transform .3s; 
 } 
 
 .dropdown .menu{ 
    transition: max-height .5s ease-out; 
    max-height: 20em; 
    overflow: hidden; 
 } 
 
 .dropdown .menu .option{ 
    margin: .3em .3em .3em .3em; 
    margin-top: 0.3em; 
 } 
 
 .dropdown .menu .option:hover{ 
    background: rgba(0,0,0,0.2); 
 } 
 
 .pointerCursor:hover{ 
    cursor: pointer; 
 } 
 
 .rotate-90{ 
    transform: rotate(90deg); 
 } 
``` 

#### جافا سكريبت:

الآن سنرى كيف يتم تنفيذ جزء جافا سكريبت. سنبدأ أولاً بتعريفات الدالة ثم التعليمات البرمجية التي تستدعي هذه الوظائف لجعل إجراءات المنسدلة يحدث.

في الأساس ، هناك 3 إجراءات تتم وفقًا لتفاعل المستخدم ، نظرًا لأنه يتم إضافة المستمعين إلى عناصر DOM:

1.  النقر على عنصر القائمة المنسدلة
2.  اختيار واحد من خيارات القائمة المنسدلة
3.  تغيير الخيار المحدد حاليًا

أود أن أوضح أننا نستخدم وظائف الأسهم ( `() => {}` ) والكلمة الأساسية `const` ، وهي ميزات ES6. ربما تكون جيدًا إذا كنت تستخدم إصدارًا حديثًا من المتصفح ، ولكن ضع ذلك في اعتبارك.

#### 1\. النقر على عنصر القائمة المنسدلة

```js

function toggleClass(elem,className){ 
    if (elem.className.indexOf(className) !== -1){ 
        elem.className = elem.className.replace(className,''); 
    } 
    else{ 
        elem.className = elem.className.replace(/\s+/g,' ') +   ' ' + className; 
    } 
 
    return elem; 
 } 
 
 function toggleDisplay(elem){ 
    const curDisplayStyle = elem.style.display; 
 
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){ 
        elem.style.display = 'block'; 
    } 
    else{ 
        elem.style.display = 'none'; 
    } 
 } 
 
 
 function toggleMenuDisplay(e){ 
    const dropdown = e.currentTarget.parentNode; 
    const menu = dropdown.querySelector('.menu'); 
    const icon = dropdown.querySelector('.fa-angle-right'); 
 
    toggleClass(menu,'hide'); 
    toggleClass(icon,'rotate-90'); 
 } 
``` 

عند النقر فوق عنصر القائمة المنسدلة ، يتم فتحه (إذا كان مغلقًا) أو إغلاق (في حالة فتحه). يحدث ذلك عن طريق ربط `toggleMenuDisplay` الإصغاء على عنصر القائمة المنسدلة. هذه الوظيفة تبديل عرض عنصر `menu` به عن طريق استخدام `toggleDisplay` و `toggleClass` .

#### 2\. اختيار واحد من خيارات القائمة المنسدلة

```js

function handleOptionSelected(e){ 
    toggleClass(e.target.parentNode, 'hide'); 
 
    const id = e.target.id; 
    const newValue = e.target.textContent + ' '; 
    const titleElem = document.querySelector('.dropdown .title'); 
    const icon = document.querySelector('.dropdown .title .fa'); 
 
 
    titleElem.textContent = newValue; 
    titleElem.appendChild(icon); 
 
    //trigger custom event 
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change')); 
    //setTimeout is used so transition is properly shown 
    setTimeout(() => toggleClass(icon,'rotate-90',0)); 
 } 
``` 

#### 3\. تغيير الخيار المحدد حاليا

```js
function handleTitleChange(e){ 
    const result = document.getElementById('result'); 
 
    result.innerHTML = 'The result is: ' + e.target.textContent; 
 } 
``` 

يرتبط `handleTitleChange` الدالة `handleTitleChange` بحدث `change` المخصص على عنصر `.title` ، لتغيير محتوى عنصر `#result` كلما تغير عنصر العنوان. يتم إجراء هذا الحدث على القسم السابق.

#### كود الرئيسي

```js
//get elements 
 const dropdownTitle = document.querySelector('.dropdown .title'); 
 const dropdownOptions = document.querySelectorAll('.dropdown .option'); 
 
 //bind listeners to these elements 
 dropdownTitle.addEventListener('click', toggleMenuDisplay); 
 dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected)); 
 document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange); 
``` 

في القسم الرئيسي ، هناك بعض الكودات البسيطة للحصول على عنوان القائمة المنسدلة وعناصر الخيارات لربطها بالأحداث التي تمت مناقشتها في القسم الأخير.

## عرض

يمكن العثور على الرمز الكامل لهذا التطبيق والتجريبي [هنا](https://codepen.io/GCrispino/pen/EEXmYd) .

## معلومات اكثر

*   [مقدمة ES6](https://guide.freecodecamp.org/javascript/es6)
*   [وظائف السهم](https://guide.freecodecamp.org/javascript/es6/arrow-functions/)
*   [واسمحوا Const](https://guide.freecodecamp.org/javascript/es6/let-and-const/)
