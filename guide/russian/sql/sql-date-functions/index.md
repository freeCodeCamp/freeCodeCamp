---
title: SQL Date Functions
localeTitle: Функции даты SQL
---
## Функции даты SQL

### Введение

В MySQL определено 61 функция даты. Не волнуйтесь, мы не рассмотрим их все здесь. Это руководство даст вам введение в некоторые из общих, и достаточно воздействия для вас, чтобы удобно исследовать самостоятельно.

Мы рассмотрим:

*   Получение текущей даты
*   Дата Математика
*   Даты в той или иной ситуации

### Получение текущей даты

Получение даты из системы может быть очень удобным для обработки данных с использованием SQL.

```sql
-- current date 
 select now(), sysdate(), current_date(), current_time(), -- date and time from the system on execution 
 dayofyear(now()) as NumDaysSoFarThisYr, 
 EXTRACT(YEAR FROM now()) as theYearPart, 
 EXTRACT(YEAR_MONTH FROM now()) as theYrMonPart, 
 date_format(now(), '%W %M %Y') as oneOfManyFormats; 
 ; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions04.JPG)

В SQL-запросе мы видим следующее:

*   Первые два столбца в результате - два способа получить одну и ту же информацию: дату в системе во время выполнения SQL.
*   Следующие два столбца разрезают только даты и время в системной дате.
*   Следующий номер представляет собой «дневной номер» системной даты в этом году. Вы заметите, что это на один день больше, чем математика, показанная в следующем примере.
*   Следующие два выписки только год, а затем и год и месяц
*   Наконец, но не менее важно, есть один пример одного из многих способов форматирования этих дат.

### Дата Математика

```sql
select now(), current_date(), 
 datediff(now(),'2017-01-01') as daysThisYear, 
 subdate(current_date(), interval 150 day) as '150DaysAgo', 
 adddate(now(), interval 7 day) as dateInA_Week -- date in a week 
 ; 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions02.jpg)

Здесь мы видим:

*   Первые два столбца - это только системная дата и время для ссылки.
*   Второй столбец - это разность дат (датированный) между первым января 2017 года и системной датой.
*   Последние два столбца являются примерами вычитания и добавления дат.

### В той ситуации, в которой или где

Вот два примера использования математики даты в предложении where:

```sql
select * from student; - to show the current data being used for the example 
 select * from student where recordCreated < '2017-01-01'; 
 select * from student where recordCreated < subdate(current_date(), interval 225 day); 
```

![Изображение-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions03.jpg)

Что касается части HAVING: Имейте в виду, что большая часть логики предложения WHERE будет также работать в предложении HAVING группы GROUP BY. Разница между ними заключается в том, что предложение WHERE выполняется против полных данных, а HAVING выполняется против данных, агрегированных по условию GROUP BY.

_Как и во всех этих вещах, им гораздо БОЛЬШЕ, чем тому, что находится в этом вводном руководстве. Надеюсь, это, по крайней мере, даст вам достаточно, чтобы начать. Пожалуйста, ознакомьтесь с руководством для своего менеджера баз данных и получайте удовольствие от различных вариантов._