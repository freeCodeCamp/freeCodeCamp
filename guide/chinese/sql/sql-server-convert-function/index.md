---
title: SQL Server Convert Function
localeTitle: SQL Server转换函数
---
## SQL Server转换函数

从一种数据类型转换为另一种数据类型。

### 句法

`CONVERT (_New Data Type, Expression, Style_)`

*   **新数据类型：**也要转换的新数据类型。例如：nvarchar，integer，decimal，date
*   **表达式：**要转换的数据。
*   **风格：**格式。例如：样式110是美国日期格式mm-dd-yyyy

### 示例：将十进制数转换为整数

`SELECT CONVERT(INT, 23.456) as IntegerNumber`

![将十进制数转换为整数](https://user-images.githubusercontent.com/12566249/31314884-6c94db4a-ac57-11e7-842f-710fad511131.png)

注意：结果被截断。

### 示例：将字符串转换为日期

`SELECT CONVERT(DATE, '20161030') as Date`

![将字符串转换为日期类型](https://user-images.githubusercontent.com/12566249/31314912-c25bbb52-ac57-11e7-880d-6d81041b1728.png)

### 示例：将十进制转换为字符串

`SELECT CONVERT(nvarchar, 20.123) as StringData`

![将小数转换为字符串](https://user-images.githubusercontent.com/12566249/31314923-fb04e410-ac57-11e7-9646-94061e1f0ec2.png)

### 示例：将整数转换为十进制数

`SELECT CONVERT(DECIMAL (15,3), 13) as DecimalNumber`

![将整数转换为十进制数](https://user-images.githubusercontent.com/12566249/31314932-1c8668ca-ac58-11e7-8cee-4d57fc523704.png)

### 示例：在美国日期样式中将字符串转换为日期格式

`SELECT CONVERT(DATE, '20171030' , 110) To_USA_DateFormat`

![将字符串转换为美国日期样式的日期格式](https://user-images.githubusercontent.com/12566249/31314937-35155d06-ac58-11e7-9d5d-823b66c41d0d.png)

### 更多信息：

*   有关转换功能的信息： [Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql)