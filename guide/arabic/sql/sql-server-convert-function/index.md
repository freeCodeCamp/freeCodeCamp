---
title: SQL Server Convert Function
localeTitle: تحويل خادم SQL وظيفة
---
## تحويل خادم SQL وظيفة

يحول من نوع بيانات واحد إلى نوع بيانات آخر.

### بناء الجملة

`CONVERT (_New Data Type, Expression, Style_)`

*   **نوع** البيانات الجديد **: نوع بيانات** جديد ليتم تحويله أيضًا. على سبيل المثال: nvarchar، integer، decimal، date
*   **التعبير:** البيانات المراد تحويلها.
*   **نمط:** تنسيق. على سبيل المثال: النمط 110 هو تنسيق USA Date mm-dd-yyyy

### على سبيل المثال: تحويل رقم عشري إلى عدد صحيح

`SELECT CONVERT(INT, 23.456) as IntegerNumber`

![تحويل رقم عشري إلى عدد صحيح](https://user-images.githubusercontent.com/12566249/31314884-6c94db4a-ac57-11e7-842f-710fad511131.png)

ملاحظة: يتم اقتطاع النتيجة.

### مثال: تحويل سلسلة إلى تاريخ

`SELECT CONVERT(DATE, '20161030') as Date`

![تحويل سلسلة إلى نوع التاريخ](https://user-images.githubusercontent.com/12566249/31314912-c25bbb52-ac57-11e7-880d-6d81041b1728.png)

### على سبيل المثال: تحويل عشري إلى سلسلة

`SELECT CONVERT(nvarchar, 20.123) as StringData`

![تحويل عشري إلى سلسلة](https://user-images.githubusercontent.com/12566249/31314923-fb04e410-ac57-11e7-9646-94061e1f0ec2.png)

### على سبيل المثال: تحويل عدد صحيح إلى رقم عشري

`SELECT CONVERT(DECIMAL (15,3), 13) as DecimalNumber`

![تحويل عدد صحيح الى رقم عشري](https://user-images.githubusercontent.com/12566249/31314932-1c8668ca-ac58-11e7-8cee-4d57fc523704.png)

### مثال: تحويل سلسلة إلى تنسيق التاريخ في نمط تاريخ الولايات المتحدة الأمريكية

`SELECT CONVERT(DATE, '20171030' , 110) To_USA_DateFormat`

![تحويل سلسلة إلى تنسيق التاريخ في نمط تاريخ الولايات المتحدة الأمريكية](https://user-images.githubusercontent.com/12566249/31314937-35155d06-ac58-11e7-9d5d-823b66c41d0d.png)

### معلومات اكثر:

*   معلومات حول وظيفة التحويل: [Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql)