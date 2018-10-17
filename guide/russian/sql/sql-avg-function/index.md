---
title: SQL Avg Function
localeTitle: Функция SQL Avg
---
## Функция SQL Average (AVG)

«Среднее» - это функция агрегации (по группам). Он используется для вычисления среднего числа столбцов из набора строк, возвращаемых оператором SQL.

Вот синтаксис для использования функции:

```sql
select groupingField, avg(num_field) 
 from table1 
 group by groupingField 
```

Вот пример использования таблицы учеников:

```sql
select studentID, FullName, avg(sat_score) 
 from student 
 group by studentID, FullName; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/avg_function01.JPG?raw=true)