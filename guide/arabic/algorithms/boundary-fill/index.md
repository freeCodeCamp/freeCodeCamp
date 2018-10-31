---
title: Boundary Fill
localeTitle: تعبئة الحدود
---
## تعبئة الحدود

التعبئة الحدودية هي الخوارزمية المستخدمة بشكل متكرر في رسومات الكمبيوتر لملء اللون المطلوب داخل مضلع مغلق له نفس الحدود اللون لجميع جوانبها.

يعتبر تنفيذ الخوارزمية الأكثر تقارباً دالة متكررة تستند إلى مكدس.

### العمل:

المشكلة بسيطة جدًا وتتبع عادةً الخطوات التالية:

1.  خذ موضع نقطة البداية ولون الحدود.
2.  قرّر منطقيًا تريد الذهاب في 4 اتجاهات (N، S، W، E) أو 8 اتجاهات (N، S، W، E، NW، NE، SW، SE).
3.  اختر لون تعبئة.
4.  السفر في تلك الاتجاهات.
5.  إذا كانت وحدة البكسل التي تصل إليها ليست لون التعبئة أو لون الحدود ، فاستبدلها بلون التعبئة.
6.  كرر 4 و 5 حتى تكون في كل مكان داخل الحدود.

### قيود معينة:

*   يجب أن يكون اللون الحدودي هو نفسه لجميع حواف المضلع.
*   يجب أن تكون نقطة البداية داخل المضلع.

### رمز مقتطف:

 `void boundary_fill(int pos_x, int pos_y, int boundary_color, int fill_color) 
 { 
   current_color= getpixel(pos_x,pos_y);  //get the color of the current pixel position 
   if( current_color!= boundary_color || currrent_color != fill_color) // if pixel not already filled or part of the boundary then 
   { 
     putpixel(pos_x,pos_y,fill_color);  //change the color for this pixel to the desired fill_color 
     boundary_fill(pos_x + 1, pos_y,boundary_color,fill_color);  // perform same function for the east pixel 
     boundary_fill(pos_x - 1, pos_y,boundary_color,fill_color);  // perform same function for the west pixel 
     boundary_fill(pos_x, pos_y + 1,boundary_color,fill_color);  // perform same function for the north pixel 
     boundary_fill(pos_x, pos_y - 1,boundary_color,fill_color);  // perform same function for the south pixel 
    } 
 } 
` 

من الكود المعطى يمكنك أن ترى أنه لأي بكسل تصله ، عليك أولا التحقق مما إذا كان يمكن تغييره إلى fill\_color ومن ثم تقوم بذلك لجيرانه حتى يتم فحص كل البكسلات الموجودة داخل الحدود.