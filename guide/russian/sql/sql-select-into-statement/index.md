---
title: SQL Select into Statement
localeTitle: SQL Select в Statement
---
## SQL Select в Statement

Оператор `SELECT INTO` представляет собой запрос, который позволяет вам создать _новую_ таблицу и заполнить ее результирующим набором `SELECT statement` . Чтобы добавить данные в существующую таблицу, см. [Инструкцию INSERT INTO](guides/src/pages/sql/sql-insert-into-select-statement/index.md) .

`SELECT INTO` может использоваться, когда вы комбинируете данные из нескольких таблиц или представлений в новую таблицу. 1 Исходная таблица не затрагивается.

Общий синтаксис:

```sql
SELECT column-names 
  INTO new-table-name 
  FROM table-name 
 WHERE EXISTS 
      (SELECT column-name 
         FROM table-name 
        WHERE condition) 
```

В этом примере показан набор таблицы, которая была «скопирована» из таблицы «Поставщик» в новую, называемую SupplierUSA, которая содержит набор, относящийся к стране столбца значения «США».

`sql SELECT * INTO SupplierUSA FROM Supplier WHERE Country = 'USA';` **Результаты** : 4 строки затронуты 2

| ID | CompanyName | Контактное лицо | Город | Страна | Телефон | | ---- | ----------------------------- |: ------------- -: | ------------- | --------: |: --------------: | | 2 | Новый Орлеан Cajun Delights | Шелли Берк | Новый Орлеан | США | (100) 555-4822 | | 3 | Усадьба Бабушки Келли | Регина Мерфи | Анн-Арбор | США | (313) 555-5735 | | 16 | Пивоваренный завод Bigfoot | Шерил Сейлор | Изгиб | США | NULL | | 19 | Консервный завод в Новой Англии | Робб Мерчант | Бостон | США | (617) 555-3267 |

Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов.

## источники

1.  (Microsoft - вставка строк с помощью SELECT INTO) \[https://technet.microsoft.com/en-us/library/ms190750 (v = sql.105) .aspx\]
2.  (dofactory - SQL SELECT INTO Statement) \[http://www.dofactory.com/sql/select-into\]