---
title: SQL Sum Function
localeTitle: دالة Sum Sum
---
## دالة Sum Sum

هذه واحدة من الوظائف التجميعية (كما هو الحال في العد ، والمتوسط ​​، والحد الأقصى ، والدقائق ، وما إلى ذلك). يتم استخدامها في جملة GROUP BY حيث تقوم بتجميع البيانات المقدمة بواسطة الجزء SELECT FROM WHERE من العبارة.

### مثال على الاستخدام

"مجموع (Total\_ $)" في عبارة SELECT المجمعة في جملة GROUP BY. "العدد (\*)" يوفر عدد المساهمات.

هذه البيانات مأخوذة من بيانات مساهمات الحملة التي نستخدمها في بعض هذه الأدلة.

يجيب بيان SQL هذا على السؤال التالي: "أي المرشحين حصلوا على أكبر مبلغ إجمالي للمساهمات في عام 2016 ولكن فقط أولئك الذين حصلوا على أكثر من 20 مليون دولار أمريكي لجميع المساهمات مجتمعة؟"

إن ترتيب مجموعة البيانات هذه في ترتيب تنازلي (DESC) يضع المرشحين الذين لديهم أكبر مساهمات إجمالية في أعلى القائمة.

 `SELECT Candidate, Election_year, sum(Total_$), count(*) 
 FROM combined_party_data 
 WHERE Election_year = 2016 
 GROUP BY Candidate, Election_year -- this tells the DBMS to summarize by these two columns 
 HAVING sum(Total_$) > 20000000  -- limits the rows presented from the summary of money ($20 Million USD) 
 ORDER BY sum(Total_$) DESC; -- orders the presented rows with the largest ones first. 
` 

 `+--------------------------------------------------+---------------+-------------------+----------+ 
 | Candidate                                        | Election_year | sum(Total_$)      | count(*) | 
 +--------------------------------------------------+---------------+-------------------+----------+ 
 | CLINTON, HILLARY RODHAM & KAINE, TIMOTHY M (TIM) |          2016 | 568135094.4400003 |      126 | 
 | TRUMP, DONALD J & PENCE, MICHAEL R (MIKE)        |          2016 | 366853142.7899999 |      114 | 
 | SANDERS, BERNARD (BERNIE)                        |          2016 |      258562022.17 |      122 | 
 | CRUZ, RAFAEL EDWARD (TED)                        |          2016 | 93430700.29000005 |      104 | 
 | CARSON, BENJAMIN S (BEN)                         |          2016 | 62202411.12999996 |       93 | 
 | RUBIO, MARCO ANTONIO                             |          2016 |        44384313.9 |      106 | 
 | BUSH, JOHN ELLIS (JEB)                           |          2016 |       34606731.78 |       97 | 
 +--------------------------------------------------+---------------+-------------------+----------+ 
 7 rows in set (0.01 sec) 
` 

كما هو الحال مع كل هذه الأشياء SQL هناك أكثر من ذلك بكثير من ما هو موجود في هذا الدليل التمهيدي.

آمل أن يمنحك هذا على الأقل ما يكفي للبدء.

يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك.