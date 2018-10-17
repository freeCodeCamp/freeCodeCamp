---
title: SQL Select Statement
localeTitle: Вывод SQL Select
---
## Вывод SQL Select

## Выделение и из предложений

Обычно SELECT-часть запроса определяет, какие столбцы данных должны отображаться в результатах. Существуют также варианты, которые вы можете применить для отображения данных, которые не являются столбцами таблицы.

В этом примере показаны три столбца, выбранных из таблицы «ученик» и одного расчетного столбца. В базе данных хранится идентификатор studentID, FirstName и LastName. Мы можем объединить столбцы First и Last name, чтобы создать вычисляемый столбец FullName.

```sql
select studentID, FirstName, LastName, FirstName + ' ' + LastName as FullName 
 from student; 
```

```text
+-----------+-------------------+------------+------------------------+ 
 | studentID | FirstName         | LastName   | FullName               | 
 +-----------+-------------------+------------+------------------------+ 
 |         1 | Monique           | Davis      | Monique Davis          | 
 |         2 | Teri              | Gutierrez  | Teri Gutierrez         | 
 |         3 | Spencer           | Pautier    | Spencer Pautier        | 
 |         4 | Louis             | Ramsey     | Louis Ramsey           | 
 |         5 | Alvin             | Greene     | Alvin Greene           | 
 |         6 | Sophie            | Freeman    | Sophie Freeman         | 
 |         7 | Edgar Frank "Ted" | Codd       | Edgar Frank "Ted" Codd | 
 |         8 | Donald D.         | Chamberlin | Donald D. Chamberlin   | 
 |         9 | Raymond F.        | Boyce      | Raymond F. Boyce       | 
 +-----------+-------------------+------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

\* Как и все эти SQL-вещи, им гораздо БОЛЬШЕ, чем тому, что находится в этом вводном руководстве.

Надеюсь, это, по крайней мере, даст вам достаточно, чтобы начать.

Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов.