---
title: CSS Buttons
localeTitle: أزرار CSS
---
## أزرار CSS

*   يمكنك نمط أي زر قابل للنقر (HTML `<button>` element)

`<button>Click Me</button>`

*   يبدو الزر الافتراضي كما يلي:

![Default Button Style](https://image.ibb.co/kCweAm/button.png "نمط الزر الافتراضي")

## تصميم زر

يمكنك تغيير عدة خصائص لزر لتغيير مظهره.

لإضافة الظلال إلى الزر ، استخدم خاصية `box-shadow` .

لإضافة شفافية إلى زر لتأثير معطل ، استخدم `opacity` الخاصية.

لإزالة الهوامش وإنشاء مجموعة زر إضافة `float:left/right` خاصية `float:left/right` .

لإنشاء مجموعة أزرار ولكن باستخدام الحدود ، استخدم خاصية `float` وأضف `border property` .

لإنشاء مجموعة أزرار عمودية استخدم display: `block property` .

### لون الزر

لتغيير لون خلفية زر ، استخدم خاصية لون الخلفية:

`button {background-color: #6ba0f4;}`

![Button Background-Color](https://image.ibb.co/f5Xpt6/button_bg_blue.png "زر خلفية اللون")

لإضافة حد ملون إلى زر ، استخدم خاصية الحدود:

 `button { 
  background-color: #FFF; 
  color: #FFF; 
  border: 2px solid #6ba0f4; 
 } 
` 

![Button Border](https://image.ibb.co/kUqymR/button_border_blue.png "حدود الزر")

### حجم النص الزر

لتغيير حجم خط النص لأحد الأزرار ، استخدم خاصية حجم الخط:

`button {font-size: 20px;}`

![Button Text Size](https://image.ibb.co/gM9r6R/button_fontsize.png "حجم النص الزر")

### زر الحشو

لتغيير حشوة زر ، استخدم خاصية الحشو:

`button {padding: 15px 30px;}`

![Button Padding](https://image.ibb.co/fKer6R/button_padding.png "زر الحشو")

### عرض الزر

لتغيير عرض زر ، بغض النظر عن محتوى النص ، استخدم خاصية العرض:

`button {width: 250px;}`

![Button Width](https://image.ibb.co/cDgSfm/button_width.png "عرض الزر")

### أزرار مدورة

لإنشاء أزرار مستديرة ، استخدم خاصية border-radius:

`button {border-radius: 50%;}`

![Rounded Buttons](https://image.ibb.co/cfH00m/button_bradius.png "أزرار مدورة")

### أزرار Hoverable

لتغيير نمط زر عند تحريك الماوس فوقه ، استخدم: select hover:

 `button:hover { 
  background-color: #0E2C5B; 
  color: #FFF; 
 } 
` 

![Hoverable Buttons](https://image.ibb.co/hxQnfm/button_hover.png "أزرار Hoverable")

لتحديد سرعة تأثير التحويم ، استخدم `transition-duration` الخاصية.

### أزرار معاق

لتعطيل زر ، استخدم خاصية المؤشر:

 `button { 
  cursor: not-allowed; 
 } 
` 

#### معلومات اكثر:

*   https://www.w3schools.com/css/css3\_buttons.asp
*   https://www.w3schools.com/howto/howto _css_ animate\_buttons.asp