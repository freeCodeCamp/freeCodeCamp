---
title: Tabs and Pills
localeTitle: علامات التبويب وحبوب منع الحمل
---
## علامات التبويب وحبوب منع الحمل

علامات التبويب وحبوب منع الحمل هي أشكال الملاحة. بمعنى أنها تساعد المستخدم النهائي على التنقل عبر الموقع بطريقة سهلة الاستخدام.

### علامات التبويب

للحصول على علامات تبويب تمهيدية ، تحتاج أولاً إلى عنصر يحتوي على فئة `.nav` . ثم يمكنك ببساطة إضافة فئة إضافية باسم `.nav-tabs` .

 `
<ul class="nav nav-tabs"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
` 

## ![علامات تمهيد Bootstrap](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs.PNG)

### حبوب الدواء

يتم تحقيق Bootstrap Pills بنفس طريقة Bootstrap Tabs ماعدا بدلا من `.nav-tabs` ، استخدم `.nav-pills` .

 `
<ul class="nav nav-pills"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
` 

## ![حبوب Bootstrap](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills.PNG)

### الحبوب مكدسة

حبوب منع الحمل هي أيضا تكويم عموديا باستخدام. `.nav stacked` بالتزامن مع `.nav-pills` .

 `
<ul class="nav nav-pills nav-stacked"> 
  ... 
 </ul> 
` 

## ![حبوب Bootstrap مكدسة](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Stacked.PNG)

### علامات التمهيد / حبوب منع الحمل مبررة

يمكن أن يكون لكل من Bootstrap Tabs و Pills عرض متساوٍ للوالدين على شاشات أكبر من 768px باستخدام class .nav `.nav-justified` . على الشاشات الصغيرة ، يتم تكديس روابط التنقل.

 `
<ul class="nav nav-tabs nav-justified"> 
  ... 
 </ul> 
 <ul class="nav nav-pills nav-justified"> 
  ... 
 </ul> 
` 

## ![علامات التمهيد / حبوب منع الحمل مبررة](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20And%20Pills%20Justified.PNG)

### روابط معطل

بالنسبة لأي مكون من عناصر التنقل (علامات التبويب أو الحبوب) ، يمكنك إضافة `.disabled` للحصول على ارتباطات رمادية وبدون تأثيرات تحوم

 `
<ul class="nav nav-pills"> 
  ... 
  <li role="presentation" class="disabled"><a href="#">Disabled link</a></li> 
  ... 
 </ul> 
` 

## ![روابط معطل](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20and%20Pills%20Disabled%20Link.PNG)

### علامات التبويب مع القوائم المنسدلة

أضف القوائم المنسدلة إلى علامات تبويب التنقل.

 `
<ul class="nav nav-tabs"> 
  ... 
  <li role="presentation" class="dropdown"> 
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> 
      Dropdown <span class="caret"></span> 
    </a> 
    <ul class="dropdown-menu"> 
      ... 
    </ul> 
  </li> 
  ... 
 </ul> 
` 

## ![علامات التبويب مع القوائم المنسدلة](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20Dropdown.PNG)

#### علامات التبويب مع القوائم المنسدلة

إضافة القوائم المنسدلة إلى حبوب الملاحة الخاصة بك.

 `
<ul class="nav nav-pills"> 
  ... 
  <li role="presentation" class="dropdown"> 
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> 
      Dropdown <span class="caret"></span> 
    </a> 
    <ul class="dropdown-menu"> 
      ... 
    </ul> 
  </li> 
  ... 
 </ul> 
` 

![حبوب منع الحمل مع القوائم المنسدلة](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Dropdown.PNG)