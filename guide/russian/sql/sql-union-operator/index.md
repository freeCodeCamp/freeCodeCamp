---
title: SQL Union Operator
localeTitle: Оператор SQL Union
---
## Оператор SQL Union

### Описание

В этом руководстве мы обсудим раздел оператора UNION оператора SQL.

Оператор UNION используется для объединения результатов нескольких операторов выбора в один результирующий набор.

Операторы SQL должны иметь одинаковое количество столбцов в Select Statement.

### Основной пример

Заявление SQL

```sql
SELECT 'aaaaa' 
 UNION 
 SELECT 'bbbbbbbbb'; 
```

Вывод

```text
+-----------+ 
 | aaaaa     | 
 +-----------+ 
 | aaaaa     | 
 | bbbbbbbbb | 
 +-----------+ 
 2 rows in set (0.00 sec) 
```

### Пример использования таблиц учеников

Заявление SQL

```sql
SELECT StudentID, FullName FROM student WHERE studentID BETWEEN 1 AND 5 
 UNION 
 SELECT studentID, studentEmailAddr FROM `student-contact-info` WHERE studentID BETWEEN 7 AND 8; 
```

Вывод

\`\` \`текст + ----------- + -------------------------------- + | StudentID | FullName | + ----------- + -------------------------------- + | 1 | Моник Дэвис | | 2 | Тери Гутьеррес | | 3 | Спенсер Потье | | 4 | Луи Рэмси | | 5 | Элвин Грин | | 7 | Maximo.Smith@freeCodeCamp.org | | 8 | Michael.Roach@freeCodeCamp.ort | + ----------- + -------------------------------- + 7 строк в наборе (0,00 сек)
```
## SQL UNION ALL Operator 
 
 The UNION ALL operator is an extension to UNION operator where it should result you a A+B of rows in the ouptput assuming A and B is your input, in simple terms UNION ALL doesn't deduplicate. 
 
 
 ### Basic Syntax 
 
 SQL Statement 
```

SQL SELECT выражение1, выражение2, ... выражение _n ОТ таблиц \[ГДЕ условия\] СОЮЗ ВСЕ SELECT выражение1, выражение2, ... выражение_ n ОТ таблиц \[ГДЕ условия\]; \`\` \`

Как и для всех этих SQL-вещей, MUCH MORE им больше, чем в этом вводном руководстве.

Надеюсь, это, по крайней мере, даст вам достаточно, чтобы начать.

Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов.