---
title: Border Property
localeTitle: الملكية الحدودية
---
## الملكية الحدودية

## حدود CSS

تتيح لك سمة CSS الشخصية المفضلة لدينا تخصيص الحدود بالكامل التي تظهر حول عناصر HTML. باستخدام HTML ، كان من المستحيل وضع حدود حول عنصر ما ، باستثناء الجدول. تتيح لك "حدود CSS" إنشاء أنماط حدود مخصصة ونقية مع القليل جدًا من العمل مقارنةً بالطرق القديمة لـ HTML.

تعيين الخاصية اختزال `border` كافة خصائص الحدود في تصريح واحد. \`\` \`المغلق border: 1px solid # 000؛

 ``The properties that can be set, are (in order): 
 1. `border-style` 
 2. `border-width` 
 3. `border-color` 
 4. `border-radius` 
 
 It does not matter if one of the values above are missing, for example: 
`` 

المغلق border: red red؛

 ``The above code is also valid CSS. 
 
 ### Border Styles 
 
 The `border-style` property sets a wide range of different types of borders. 
 
 The various values are: 
 - `dotted` - Sets a dotted border. 
 - `dashed` - Sets a dashed border. 
 - `solid` - Sets a solid border. 
 - `double` - Sets a double border. 
 - `groove` - Sets a 3D grooved border. 
 - `ridge` - Sets a 3D ridged border. 
 - `inset` - Sets a 3D inset border. 
 - `outset` - Sets a 3D outset border. 
 - `none` - Sets no border. 
 - `hidden` - Sets a hidden border. 
 
 Based on the property you choose, these styles can be mismatched. 
 You can style each side seperately: 
`` 

المغلق نمط الحد الأعلى: صلب ؛ border-left-style: منقط ؛ border-right-style: dashed؛ نمط الحد السفلي: مزدوج ؛

 `Or you can style them all at once: 
` 

المغلق نمط الحدود: الصلبة متقطعة مزدوجة منقط ؛

 `As shown, the border property allows you to select different sections of it. [top, bottom, left, right] 
 
 ### Border Width 
 
 To alter the thickness of your border use the border-width attribute. You may use key terms or exact values to define the border width. Note: You must 
 define a border-style for the border to show up. The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined 
 values: thin, medium, or thick. 
 
 Example: 
` 

المغلق

table { border-width: 7px; border-style: outset; } td { border-width: medium; border-style: outset; } p { border-width: thick; border-style: solid; }

 `### Border Color 
 
 Now for the creative aspect of CSS Borders! With the use of the border-color attribute, you will be able to create customized borders to fit the flow and layout 
 of your website. Border colors can be any color defined by RGB, hexadecimal, or key terms. Below is an example of each of these types. 
 
 Example: 
` 

المغلق

table { border-color: rgb( 100, 100, 255); border-style: dashed; } td { border-color: #FFBD32; border-style: ridge; } p { border-color: blue; border-style: solid; }

 ``### Border-Radius 
 The `border-radius` property allows the corners of a border to be rounded. This is done by providing a size for 
 how much the border is to be rounded. Size can be in px or %. 
`` 

المغلق border-radius: 25px؛

 ``Each corner of `border-radius` can be adjusted. The order is top, bottom, left, right. 
`` 

المغلق border-radius: 15٪ 10px 30٪ 5px؛

 `### Border: All in One 
 
 While it is nice that CSS allows a web developer to be very specific in creating a customized border, sometimes it is just easier and less of a headache to create a uniform border, all in single line of CSS code. 
 
 Example: 
` 

المغلق

p { border: 20px outset blue; } h4 { border: 5px solid; } h5 { border: dotted; }

\`\` \`

### معلومات اكثر:

*   [وثائق MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
*   [CSS3 الحدود الشعاع](https://guide.freecodecamp.org/css/css3-borders-rounded-corners)

### سمات الحدود الأخرى

*   "border-radius" - هذا يمكن أن يحدد نصف قطر الحدود.
*   "تباعد الحدود" - يمكن أن يؤدي ذلك إلى تعيين التباعد بين النص والحدود.
*   'border-image' - يقوم هذا بتعيين صورة كحدود.

دعم المتصفح: IE6 +