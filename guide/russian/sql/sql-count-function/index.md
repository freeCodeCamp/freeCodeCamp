---
title: SQL COUNT Aggregate Function
localeTitle: Функция агрегирования SQL COUNT
---
## Функция агрегирования SQL COUNT

Оператор COUNT обычно используется в сочетании с предложением GROUP BY. Это одна из «совокупных» функций SQL, которые включают AVG (средний) и SUM.

Эта функция будет подсчитывать количество строк и возвращать их в качестве столбца в наборе результатов.

Ниже приведены примеры использования COUNT для:

*   Подсчет всех строк в таблице (без необходимости группы)
*   Подсчет итогов подмножеств данных (требуется раздел Group By в заявлении)

Для справки, вот текущие данные для всех строк в нашей примерной базе данных студентов.

```sql
select studentID, FullName, programOfStudy, sat_score from student; -- all records with fields of interest 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/count01.JPG?raw=true)

Этот оператор SQL содержит количество всех строк. Обратите внимание, что вы можете дать полученному столбцу COUNT имя с именем «AS».

```sql
select count(*) AS studentCount from student; -- count of all records 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/count02.JPG?raw=true)

Здесь мы получаем количество студентов в каждой области обучения.

```sql
 select studentID, FullName, count(*) AS studentCount from the student table with a group by programOfStudy; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/count03.JPG?raw=true)

Здесь мы получаем количество студентов с одинаковыми оценками SAT.

```sql
 select studentID, FullName, count(*) AS studentCount from the student table with a group by sat_score; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/count04.JPG?raw=true)

Вот пример использования таблицы средств кампании. Это общая сумма долларов в каждой транзакции и количество взносов для каждой политической партии в течение президентской кампании в 2016 году в США.

```sql
select Specific_Party, Election_Year, format(sum(Total_$),2) AS contribution$Total, count(*) AS numberOfContributions 
 from combined_party_data 
 group by Specific_Party,Election_Year 
 having Election_Year = 2016; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/count05.JPG?raw=true)

Как и во всех этих вещах, это гораздо больше, поэтому, пожалуйста, см. Руководство для своего менеджера баз данных и получайте удовольствие, пробовав различные тесты самостоятельно.