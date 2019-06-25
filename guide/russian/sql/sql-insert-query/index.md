---
title: SQL Insert Query
localeTitle: Запрос вставки SQL
---
## Запрос вставки SQL

Вставка запросов - это способ вставки данных в таблицу. Допустим, мы создали таблицу, используя

`CREATE TABLE example_table ( name varchar(255), age int)`

**example\_table**

| Name | Age |
| --- | --- |

Теперь, чтобы добавить некоторые данные в эту таблицу, мы будем использовать **INSERT** следующим образом:

`INSERT INTO example_table (column1,column2) VALUES ("Andrew",23)`

**example\_table**

| Name | Age |
| --- | --- |
| Andrew | 23 |

Даже следующий запрос будет работать, но всегда полезно указать, какие данные идут в какой столбец.

`INSERT INTO table_name VALUES ("John", 28)`

**example\_table**

| Name | Age |
| --- | --- |
| Andrew | 23 |
| John | 28 |
