---
title: Use the align-self Property
localeTitle: استخدم خاصية self-align
---
## استخدم خاصية self-align

اتخاذ الرئيسية بعيدا عن هذا challege يجب أن يكون حقيقة أن `float` ، `clear` ، و `vertical-align` لا تعمل على العناصر المرنة. هذا هو السبب في أن لدينا خاصية Flex `align-self` التي تقبل نفس القيم مثل `align-items` وستكون لها الأسبقية على أي قيم يتم تحديدها في وقت لاحق.

وهذا يعني `align-self: center;` سيعمل أثناء `align-items: center;` لن.