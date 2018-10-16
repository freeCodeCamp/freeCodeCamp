---
title: Navigation Bar
localeTitle: شريط التنقل
---
## شريط التنقل

يوفر لك إطار Bootstrap أشرطة تنقل ميزة المكالمة. باختصار شريط تنقل (يُشار إليه أيضًا باسم navbars) هو رأس في أعلى الصفحة لعرض معلومات التنقل.

#### كيف تستعمل

لاستخدام أشرطة تنقل Bootstrap ، يمكنك إضافة عنصر `<nav>` إلى الجزء العلوي داخل عنصر `<body>` في صفحة الويب الخاصة بك. هناك أنماط متعددة يمكنك إضافتها لتخصيص عرض navbars الخاص بك.

#### مثال الكود

هذه هي الشفرة اللازمة لإنشاء شريط تنقل أساسي.

 `
<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
` 

#### أنماط Navbar

يوفر Bootstrap مجموعة من الفئات في إطار Bootstrap لتكوين navbars الخاص بك. هذه الفئات هي كما يلي:

*   `navbar navbar-default` هذا هو النمط الافتراضي لشارات Navbars الخاصة بك.
*   `navbar navbar-inverse` يشبه هذا النمط الافتراضي باستثناء الألوان المقلوبة.

#### إضافة القوائم المنسدلة إلى شريط التنقل

يمكنك تضمين قائمة منسدلة داخل شريط التنقل. تتطلب هذه الميزة تضمين ملف javascript في Bootstrap حتى يعمل.

 `
<li class="dropdown"> 
  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Drop down 
    <span class="caret"></span> 
  </a> 
 <ul class="dropdown-menu"> 
    <li><a href="#">Item 1</a></li> 
    <li><a href="#">Item 2</a></li> 
    <li><a href="#">Item 3</a></li> 
  </ul> 
 </li> 
` 

#### إضافة أزرار إلى شريط التنقل

يمكنك إضافة أزرار على شريط التنقل. تعمل فئات Bootstrap Button الموجودة ولكن ستحتاج إلى تضمين `navbar-btn` class إلى نهاية قائمة الفئة.

 `
<button class="btn navbar-btn">Button</button> 
` 

#### إضافة نماذج إلى navbar

يمكنك أيضًا إضافة نماذج إلى شريط التنقل. قد يكون هذا الاستخدام للمهام مثل حقل البحث ، حقل تسجيل الدخول السريع ، إلخ.

 `
<form class="navbar-form navbar-right"> 
  <div class="form-group"> 
      <input type="text" class="form-control" placeholder="Search"> 
  </div> 
  <button type="submit" class="btn btn-default">Search</button> 
 </form> 
` 

#### محاذاة العناصر إلى اليمين على شريط التنقل

في بعض الحالات ، قد ترغب في محاذاة عناصر في شريط التنقل إلى اليمين (على سبيل المثال زر تسجيل الدخول أو التسجيل.). للقيام بذلك ، ستحتاج إلى استخدام فئة `navbar-right` .

 `
<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
    <ul class="nav navbar-nav navbar-right"> 
      <li><a href="#">Action Link #1</a></li> 
      <li><a href="#">Action Link #2</a></li> 
    </ul> 
  </div> 
 </nav> 
` 

#### عرض شريط التنقل مستقل عن التمرير

في بعض الحالات ، قد ترغب في الاحتفاظ بشريط التنقل في الجزء العلوي أو السفلي من الشاشة بغض النظر عن التمرير. ستحتاج إلى إضافة فئة `navbar-fixed-top` أو `navbar-fixed-bottom` إلى عنصر `<nav>` .

 `
<nav class="navbar navbar-default navbar-fixed-top"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
` 

#### تصغير شريط التنقل

على شاشة صغيرة (مثل الهاتف أو الجهاز اللوحي) سيشغل شريط التنقل مساحة كبيرة جدًا. لحسن الحظ ، يوجد خيار تجميع شريط التنقل. يمكنك تحقيق ذلك باستخدام المثال التالي.

 `
<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
` 

#### أمثلة Navbar

`navbar navbar-default`

[اسم الموقع](#navbar-default)

*   [الصفحة الرئيسية](#navbar-default)
*   [صفحة 1](#navbar-default)
*   [الصفحة 2](#navbar-default)
*   [الصفحة 3](#navbar-default)
زر

*   [رابط الإجراء # 1](#navbar-default)
*   [رابط الإجراء # 2](#navbar-default)

`navbar navbar-inverse`

[اسم الموقع](#navbar-inverse)

*   [الصفحة الرئيسية](#navbar-inverse)
*   [صفحة 1](#navbar-inverse)
*   [الصفحة 2](#navbar-inverse)
*   [الصفحة 3](#navbar-inverse)
زر

*   [رابط الإجراء # 1](#navbar-inverse)
*   [رابط الإجراء # 2](#navbar-inverse)

#### معلومات اكثر:

[وثائق navbar BootStrap](https://getbootstrap.com/docs/4.0/components/navbar/)