---
title: Img Tag
localeTitle: img العلامة
---
## img العلامة

يمكن تضمين عنصر صورة HTML بسيط في مستند HTML كما يلي:

 `
<img src="path/to/image/file" alt="this is a cool picture"> 
` 

`alt` توفر علامات النص البديل للصورة. استخدام واحد لعلامة `alt` مخصص للأشخاص ضعاف البصر الذين يستخدمون قارئ الشاشة ؛ يمكن قراءة علامة `alt` الخاصة بالصورة لفهم معنى الصورة.

لاحظ أن المسار إلى ملف الصورة يمكن أن يكون نسبيًا أو مطلقًا. أيضا، تذكر أن `img` العنصر ذاتية الإغلاق، وهذا يعني أنه لا يغلق مع `<img />` العلامة وبدلا من ذلك يغلق مع مجرد واحد `>` .

مثال:

 `
<img src="https://example.com/image.png" alt="my picture"> 
` 

(هذا على افتراض أن ملف html موجود على https://example.com/index.html ، لذا فهو موجود في نفس المجلد مثل ملف الصورة)

بالضبط مثل:

 `
<img src="image.png" alt="my picture"> 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) [W3Schools](https://www.w3schools.com/TAGs/tag_img.asp)