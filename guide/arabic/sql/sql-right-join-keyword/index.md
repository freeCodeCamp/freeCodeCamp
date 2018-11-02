---
title: SQL Right Join
localeTitle: مزود حق الانضمام
---
## مزود حق الانضمام

### مثال على الاستخدام

لهذا الدليل سنناقش SQL RIGHT JOIN.

### الحق في الانضمام

تقوم الكلمة الأساسية RIGHT JOIN بإرجاع كافة السجلات من الجدول الصحيح (table2) ، والسجلات المتطابقة من الجدول الأيسر (table1). والنتيجة هي NULL من الجانب الأيسر ، عندما لا يكون هناك أي تطابق.

 `SELECT * 
 FROM table1 
 RIGHT JOIN table2 
 ON table1.column_name = table2.column_name; 
` 

### استكمال قوائم الجدول لتكون مرجعا

الغذاء أو بيانات الجدول الأيسر

 `+---------+--------------+-----------+------------+ 
 | ITEM_ID | ITEM_NAME    | ITEM_UNIT | COMPANY_ID | 
 +---------+--------------+-----------+------------+ 
 | 1       | Chex Mix     | Pcs       | 16         | 
 | 6       | Cheez-It     | Pcs       | 15         | 
 | 2       | BN Biscuit   | Pcs       | 15         | 
 | 3       | Mighty Munch | Pcs       | 17         | 
 | 4       | Pot Rice     | Pcs       | 15         | 
 | 5       | Jaffa Cakes  | Pcs       | 18         | 
 | 7       | Salt n Shake | Pcs       |            | 
 +---------+--------------+-----------+------------+ 
 
 
 
 company or RIGHT table data 
` 

نص + ------------ + --------------- + -------------- + | _معرف_ الشركة _|_ اسم _الشركة_ | COMPANY\_CITY | + ------------ + --------------- + -------------- + | 18 | ترتيب كل | بوسطن | 15 | جاك هيل المحدودة لندن | | 16 | أكاس للأغذية | دلهي | | 17 | عشاق الطعام. | لندن | | 19 | رشفة ن دغة. | نيويورك + ------------ + --------------- + -------------- +

 `To get company name from company table and company ID, item name columns from foods table, the following SQL statement can be used: 
` 

مزود SELECT company.company _id ، company.company_ name ، company.company _city، foods.company_ id، foods.item _name من الشركة الحق في الانضمام إلى الأطعمة على company.company_ id = foods.company\_id؛

 `OUTPUT 
` 

نص COMPANY _ID COMPANY_ NAME COMPANY _CITY COMPANY_ ID ITEM\_NAME

* * *

18 اطلب الكل 18 18 كعك يافا 15 Jack Hill Ltd London 15 Pot Rice 15 Jack Hill Ltd London 15 BN Biscuit 15 Jack Hill Ltd London 15 Cheez-It 16 Akas Foods Delhi 16 Chex Mix 17 Foodies. لندن 17 Munchy Munch NULL NULL NULL NULL Salt n Shake

\`\` \`