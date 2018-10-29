---
title: SQL Server Convert Function
localeTitle: Функция преобразования SQL Server
---
## Функция преобразования SQL Server

Преобразует из одного типа данных в другой тип данных.

### Синтаксис

`CONVERT (_New Data Type, Expression, Style_)`

*   **Новый тип данных:** новый тип данных для преобразования. Например: nvarchar, integer, decimal, date
*   **Выражение:** данные для преобразования.
*   **Стиль:** формат. Например: стиль 110 - формат даты США mm-dd-yyyy

### Пример: преобразование десятичного числа в целое число

`SELECT CONVERT(INT, 23.456) as IntegerNumber`

![конвертировать десятичное число в целое число](https://user-images.githubusercontent.com/12566249/31314884-6c94db4a-ac57-11e7-842f-710fad511131.png)

Примечание. Результат усечен.

### Пример: преобразование строки в дату

`SELECT CONVERT(DATE, '20161030') as Date`

![преобразовать строку в тип даты](https://user-images.githubusercontent.com/12566249/31314912-c25bbb52-ac57-11e7-880d-6d81041b1728.png)

### Пример: преобразование десятичного числа в строку

`SELECT CONVERT(nvarchar, 20.123) as StringData`

![преобразовать десятичную строку в строку](https://user-images.githubusercontent.com/12566249/31314923-fb04e410-ac57-11e7-9646-94061e1f0ec2.png)

### Пример: преобразование целочисленного числа в десятичный номер

`SELECT CONVERT(DECIMAL (15,3), 13) as DecimalNumber`

![преобразовать целое число в десятичное число](https://user-images.githubusercontent.com/12566249/31314932-1c8668ca-ac58-11e7-8cee-4d57fc523704.png)

### Пример: Преобразование формата String to Date в США. Стиль даты.

`SELECT CONVERT(DATE, '20171030' , 110) To_USA_DateFormat`

![преобразовать формат строки в формат даты в стиле usa](https://user-images.githubusercontent.com/12566249/31314937-35155d06-ac58-11e7-9d5d-823b66c41d0d.png)

### Дополнительная информация:

*   Информация о функции преобразования: [Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql)