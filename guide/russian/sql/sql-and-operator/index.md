---
title: SQL and Operator
localeTitle: SQL и оператор
---
## Оператор SQL AND

И используется в предложении WHERE или в предложении GROUP BY HAVING для ограничения строк, возвращаемых из исполняемого оператора. Используйте И, когда требуется иметь более одного условия.

Мы будем использовать таблицу учеников, чтобы представить примеры.

Вот таблица студентов без предложения WHERE:

```sql
select * from student; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator01.JPG?raw=true)

Теперь предложение WHERE добавляется, чтобы отображать только студентов-программистов:

```sql
select * from student 
 where programOfStudy = 'Programming'; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator02.JPG?raw=true)

Теперь предложение WHERE обновляется с помощью AND, чтобы показать результаты для студентов-программистов, которые также имеют оценку SAT больше 800:

```sql
select * from student 
 where programOfStudy = 'Programming' 
 and sat_score > 800; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator03.JPG?raw=true)

Это более сложный пример из таблицы кампаний. Этот пример имеет предложение GROUP BY с предложением HAVING с использованием AND, чтобы ограничить возвращенные записи в виде конфессий с 2016 года с суммой от 3 миллионов долларов до 18 миллионов долларов.

```sql
select Candidate, Office_Sought, Election_Year, FORMAT(sum(Total_$),2) from combined_party_data 
 where Office_Sought = 'PRESIDENT / VICE PRESIDENT' 
 group by Candidate, Office_Sought, Election_Year 
 having Election_Year = 2016 and sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator06.JPG?raw=true)