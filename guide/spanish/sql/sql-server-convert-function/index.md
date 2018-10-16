---
title: SQL Server Convert Function
localeTitle: Función de conversión de SQL Server
---
## Función de conversión de SQL Server

Se convierte de un tipo de datos a otro tipo de datos.

### Sintaxis

`CONVERT (_New Data Type, Expression, Style_)`

*   **Nuevo tipo de datos:** Nuevo tipo de datos a convertir también. Por ejemplo: nvarchar, entero, decimal, fecha
*   **Expresión:** Datos a convertir.
*   **Estilo:** Formato. Por ejemplo: el estilo 110 es el formato de fecha de Estados Unidos mm-dd-aaaa

### Ejemplo: convertir un número decimal en un entero

`SELECT CONVERT(INT, 23.456) as IntegerNumber`

![convertir un número decimal en un número entero](https://user-images.githubusercontent.com/12566249/31314884-6c94db4a-ac57-11e7-842f-710fad511131.png)

Nota: El resultado está truncado.

### Ejemplo: convertir una cadena en una fecha

`SELECT CONVERT(DATE, '20161030') as Date`

![convertir una cadena a un tipo de fecha](https://user-images.githubusercontent.com/12566249/31314912-c25bbb52-ac57-11e7-880d-6d81041b1728.png)

### Ejemplo: convertir un decimal en una cadena

`SELECT CONVERT(nvarchar, 20.123) as StringData`

![convertir un decimal en una cadena](https://user-images.githubusercontent.com/12566249/31314923-fb04e410-ac57-11e7-9646-94061e1f0ec2.png)

### Ejemplo: convertir un número entero en un número decimal

`SELECT CONVERT(DECIMAL (15,3), 13) as DecimalNumber`

![convertir un número entero a un número decimal](https://user-images.githubusercontent.com/12566249/31314932-1c8668ca-ac58-11e7-8cee-4d57fc523704.png)

### Ejemplo: convertir una cadena al formato de fecha en el estilo de fecha de Estados Unidos

`SELECT CONVERT(DATE, '20171030' , 110) To_USA_DateFormat`

![convertir una cadena al formato de fecha en el estilo de fecha de Estados Unidos](https://user-images.githubusercontent.com/12566249/31314937-35155d06-ac58-11e7-9d5d-823b66c41d0d.png)

### Más información:

*   Información sobre la función Convert: [Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/functions/cast-and-convert-transact-sql)