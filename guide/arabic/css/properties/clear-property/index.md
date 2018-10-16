---
title: Clear Property
localeTitle: واضح الممتلكات
---
## واضح الممتلكات

يمكنك استخدام الخاصية `clear` لخفض عنصر ، مما يمنع ظهوره بجوار عنصر floated السابق.

يمكن أن تحتوي الخاصية `clear` على القيم التالية:

يتم استخدام هذه الخاصية بعد استخدام الخاصية `float` "مسح" خارج `float` .

 `clear: none; 
 clear: left; 
 clear: right; 
 clear: both; 
 clear: inline-start; 
 clear: inline-end; 
` 

### مثال:

![Clear Property Image](https://image.ibb.co/defebR/clear.png "واضح الممتلكات")

في المثال أعلاه ، فإن `div` الأصفر `float:left` العقار `float:left` ، ويمكن وضعه تحت `div` . ومع ذلك ، بما أن `div` الأصفر له خاصية `clear: both` أيضًا `clear: both` يتحرك لأسفل تحت العناصر الطافية.

#### معلومات اكثر:

*   https://css-tricks.com/almanac/properties/c/clear/
*   https://www.w3schools.com/cssref/pr _class_ clear.asp
*   https://developer.mozilla.org/en-US/docs/Web/CSS/clear