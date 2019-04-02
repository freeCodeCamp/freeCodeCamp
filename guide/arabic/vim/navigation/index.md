---
title: Navigation
localeTitle: التنقل
---
## فيم للملاحة

### حركة أساسية

هناك العديد من الطرق لتحريك المؤشر في Vim ، ولكن هذه الحركات الأساسية ستسمح بذلك مستخدمين جدد للحصول على الراحة باستخدام الوضع العادي للملاحة الملف.

*   في الوضع العادي ، تتوافق المفاتيح `h` و `j` و `k` و `l` لتحريك المؤشر حرف واحد يسارًا ، لأسفل ، لأعلى ، ولليمين ، على التوالي.
    
*   للتنقل عبر كلمة واحدة في كل مرة ، ستحرك المفاتيح `w` و `b` المؤشر إلى بداية الكلمة التالية ، أو بداية الكلمة السابقة. `e` ﺳﻴﺤﺮك اﻟﻤﻔﺘﺎح إﻟﻰ ﻧﻬﺎﻳﺔ اﻟﻜﻠﻤﺔ اﻟﺤﺎﻟﻴﺔ.
    
*   للانتقال إلى بداية السطر الحالي ، اكتب `0` ، والانتقال إلى النهاية السطر الحالي ، اكتب `$` .
    
*   أخيرًا ، للانتقال إلى السطر الأول في الملف ، اكتب `gg` ، والانتقال إلى السطر الأخير في الملف ، اكتب `G`
    

باختصار:

 `h   moves one character left 
 j   moves one row down 
 k   moves one row up 
 l   moves one character right 
 
 w   moves to the beginning of the next word 
 b   moves to the beginning of the previous word 
 e   moves to the end of the current word 
 
 0   moves to the beginning of the current line 
 $   moves to the end of the current line 
 :n  moves to line n (ex. :23 moves to line 23) can also use nG 
 
 ZZ  moves to the center of the line your on 
 H   moves to the top of the screen 
 M   moves to the middle of the screen 
 L   moves to the bottom of the screen 
 
 gg  moves to the first line in the file 
 G   moves to the last line in the file 
`