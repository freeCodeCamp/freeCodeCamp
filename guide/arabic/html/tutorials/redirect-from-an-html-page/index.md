---
title: Redirect from an HTML Page
localeTitle: إعادة توجيه من صفحة HTML
---
## إعادة توجيه من صفحة HTML

إذا كنت قد قمت بتغيير عنوان URL لصفحة HTML الخاصة بك وتريد إعادة توجيه الزائرين تلقائيًا إلى الموقع الجديد للصفحة ، فيمكنك استخدام علامة وصفية داخل `<head>` مساحة صفحة HTML القديمة.

`html <head> <meta http-equiv="refresh" content="0; url=http://freecodecamp.org/" /> </head>` في المثال أعلاه ، سيتم إعادة توجيه الزائرين إلى الصفحة من صفحة html القديمة إلى [http://freecodecamp.org/](http://freecodecamp.org/) . تعني سمة `content="0` أن المتصفح سيعيد التوجيه إلى الصفحة الجديدة بعد 0 ثانية. سيؤدي تغيير القيمة إلى `content="2` إلى إعادة التوجيه بعد ثانيتين.

#### معلومات اكثر:

*   [MDN - Redirections in HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)