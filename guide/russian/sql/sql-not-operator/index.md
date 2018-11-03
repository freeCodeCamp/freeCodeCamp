---
title: SQL not Operator
localeTitle: SQL не оператор
---
## SQL не оператор

Вы можете использовать оператор `NOT` в `WHERE` `SELECT` . Вы используете его, когда хотите выбрать условие, которое не является истинным.

Вот пример, который выбирает всех людей, которые не являются мужчинами:

```sql
SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE NOT Gender = "M" 

```