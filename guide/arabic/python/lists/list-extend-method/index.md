---
title: List Extend Method
localeTitle: قائمة تمديد الأسلوب
---
## قائمة تمديد الأسلوب

هناك العديد من الطرق للقوائم ، يمكنك استكشاف كل منهم عن طريق كتابة `help(list)` في وحدة التحكم الخاصة بك python. واحد منهم هو وظيفة التمديد ، كما يقول الاسم يمد القائمة عن طريق إضافة جميع عناصر القائمة (التي تم تمريرها كوسيطة) إلى النهاية.

#### مثال للاستخدام

 `cities = ["San Francisco", "Los Angeles", "New York"] 
 cities_in_texas = ["San Antonio", "Austin", "Dallas"] 
 cities.extend(cities_in_texas) 
 print(cities) 
` 

#### انتاج |

 `["San Francisco", "Los Angeles", "New York", "San Antonio", "Austin", "Dallas"] 
` 

#### معلومات اكثر:

يمكن العثور على الوثائق الرسمية `extend()` [هنا](https://docs.python.org/3.6/tutorial/datastructures.html)