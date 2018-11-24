---
title: SQL Between Operator
localeTitle: SQL между оператором
---
## SQL между оператором

Оператор BETWEEN полезен из-за SQL Query Optimizer. Хотя BETWEEN функционально то же самое, что: x <= element <= y, SQL Query Optimizer быстрее распознает эту команду и оптимизирует код для ее запуска.

Этот оператор используется в предложении WHERE или в предложении GROUP BY HAVING.

Выбираются строки, значения которых больше минимального значения и меньше максимального значения.

Важно помнить, что значения, введенные в команду, **исключаются** из результата. Мы получаем только то, что между ними.

Вот синтаксис для использования функции в разделе WHERE:

```sql
select field1, testField 
 from table1 
 where testField between min and max 
```

Вот пример использования таблицы учеников и предложения WHERE:

```sql
-- no WHERE clause 
 select studentID, FullName, studentID 
 from student; 
 
 -- WHERE clause with between 
 select studentID, FullName, studentID 
 from student 
 where studentID between 2 and 7; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/between01.JPG?raw=true)

Вот пример, использующий таблицу фондов кампаний и предложение о наличии. Это вернет строки, где сумма пожертвований для кандидата составляет от 3 до 18 миллионов долларов США в зависимости от предложения HAVING в разделе GROUP BY. Подробнее об агрегировании в этом руководстве.

```sql
select Candidate, Office_Sought, Election_Year, format(sum(Total_$),2) 
 from combined_party_data 
 where Election_Year = 2016 
 group by Candidate, Office_Sought, Election_Year 
 having sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/between02.JPG?raw=true)