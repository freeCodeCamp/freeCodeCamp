---
title: SQL Create Table Statement
localeTitle: SQL إنشاء بيان جدول
---
## SQL إنشاء بيان جدول

الجدول هو مجموعة من البيانات المخزنة في قاعدة البيانات.

لإنشاء جدول في قاعدة بيانات تستخدم عبارة `CREATE TABLE` . يمكنك إعطاء اسم إلى الجدول وقائمة بالأعمدة مع أنواع البيانات الخاصة بها.

 `CREATE TABLE TABLENAME(Attribute1 Datatype, Attribute2 Datatype,........); 
` 

في ما يلي مثال على إنشاء جدول باسم الشخص:

 `CREATE TABLE Person( 
  Id int not null, 
  Name varchar not null, 
  DateOfBirth date not null, 
  Gender bit not null, 
  PRIMARY KEY( Id ) 
 ); 
` 

في المثال أعلاه ، يكون لكل شخص اسم وتاريخ الميلاد وجنس. يعد عمود المعرّف هو المفتاح الذي يحدد شخصًا واحدًا في الجدول. يمكنك استخدام الكلمة الأساسية `PRIMARY KEY` لتكوين عمود واحد أو أكثر كمفتاح أساسي.

لا يمكن أن يكون العمود `not null` أو `null` مما يشير إلى ما إذا كان إلزامياً أم لا.

#### معلومات اكثر: