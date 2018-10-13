---
title: SQL Select into Statement
localeTitle: اختيار SQL في بيان
---
## اختيار SQL في بيان

`SELECT INTO` عبارة عن استعلام يسمح لك بإنشاء جدول _جديد_ ثم تعبئته مع مجموعة نتائج `SELECT statement` . لإضافة بيانات إلى جدول موجود ، راجع بيان [INSERT INTO](guides/src/pages/sql/sql-insert-into-select-statement/index.md) بدلاً من ذلك.

يمكن استخدام `SELECT INTO` عندما تقوم بدمج البيانات من عدة جداول أو طرق عرض في جدول جديد. 1 لا يتأثر الجدول الأصلي.

الصيغة العامة هي:

 `SELECT column-names 
  INTO new-table-name 
  FROM table-name 
 WHERE EXISTS 
      (SELECT column-name 
         FROM table-name 
        WHERE condition) 
` 

يوضح هذا المثال مجموعة من الجداول التي تم "نسخها" من جدول "المورد" إلى جدول جديد يسمى المورّد USUS الذي يحمل المجموعة ذات الصلة بعمود البلد "USA".

`sql SELECT * INTO SupplierUSA FROM Supplier WHERE Country = 'USA';` **النتائج** : 4 صفوف تتأثر 2

| معرف | اسم الشركة ContactName | المدينة البلد الهاتف | | ---- | ----------------------------- |: ------------- -: | ------------- |: --------: |: --------------: | | 2 | نيو اورليانز كاجون المسرات | شيلي بيرك نيو اورليانز الولايات المتحدة الأمريكية (100) 555-4822 | | 3 | الجدة كيلي هومستيد | ريجينا مورفي آن أربور | الولايات المتحدة الأمريكية (313) 555-5735 | | 16 | Bigfoot مصانع الجعة | شيريل سايلور | بيند | الولايات المتحدة الأمريكية فارغة | 19 | نيو انغلاند للمأكولات البحرية Cannery | روب روبت | بوسطن الولايات المتحدة الأمريكية (617) 555-3267 |

يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك.

## مصادر

1.  (Microsoft - إدراج الصفوف باستخدام SELECT INTO) \[https://technet.microsoft.com/en-us/library/ms190750 (v = sql.105) .aspx\]
2.  (dofactory - SQL SELECT INTO Statement) \[http://www.dofactory.com/sql/select-into\]