---
title: SQL Date Functions
localeTitle: Funciones de fecha de SQL
---
## Funciones de fecha de SQL

### Introducción

Hay 61 funciones de fecha definidas en MySQL. No te preocupes, no los revisaremos todos aquí. Esta guía le dará una introducción a algunos de los más comunes, y la exposición suficiente para que pueda explorar cómodamente por su cuenta.

Cubriremos:

*   Obteniendo la fecha actual
*   Fecha matematica
*   Fechas en una cláusula donde o tener

### Obteniendo la fecha actual

Obtener la fecha del sistema puede ser muy útil para procesar datos utilizando SQL.

```sql
-- current date 
 select now(), sysdate(), current_date(), current_time(), -- date and time from the system on execution 
 dayofyear(now()) as NumDaysSoFarThisYr, 
 EXTRACT(YEAR FROM now()) as theYearPart, 
 EXTRACT(YEAR_MONTH FROM now()) as theYrMonPart, 
 date_format(now(), '%W %M %Y') as oneOfManyFormats; 
 ; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions04.JPG)

En la consulta SQL, vemos lo siguiente:

*   Las dos primeras columnas del resultado son dos formas de obtener la misma información: la fecha en el sistema en el momento en que se ejecuta el SQL.
*   Las siguientes dos columnas cortan solo las partes de Fecha y Hora de la fecha del sistema.
*   El siguiente presenta el "número de día" de la fecha del sistema en este año. Notará que esto es un día más que las matemáticas que se muestran en el siguiente ejemplo.
*   Los siguientes dos extractos solo el año y luego el año y el mes
*   Por último, pero no menos importante, hay un solo ejemplo de una de las muchas formas de formatear estas fechas.

### Fecha matematica

```sql
select now(), current_date(), 
 datediff(now(),'2017-01-01') as daysThisYear, 
 subdate(current_date(), interval 150 day) as '150DaysAgo', 
 adddate(now(), interval 7 day) as dateInA_Week -- date in a week 
 ; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions02.jpg)

Aquí vemos:

*   Las dos primeras columnas son solo la fecha y hora del sistema para referencia.
*   La segunda columna es la diferencia de fecha (con fecha) entre el primero de enero de 2017 y la fecha del sistema.
*   Las dos últimas columnas son ejemplos de restar y agregar fechas.

### En una cláusula donde o tener

Aquí hay dos ejemplos del uso de matematicas de fechas en una cláusula where:

```sql
select * from student; - to show the current data being used for the example 
 select * from student where recordCreated < '2017-01-01'; 
 select * from student where recordCreated < subdate(current_date(), interval 225 day); 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions03.jpg)

Con respecto a la parte HAVING: tenga en cuenta que la mayoría de la lógica de la cláusula WHERE también funcionará en la cláusula HAVING de GROUP BY. La diferencia entre los dos es que la cláusula WHERE se ejecuta contra los datos completos y HAVING se ejecuta contra los datos agregados por la cláusula GROUP BY.

_Al igual que con todas estas cosas, hay MUCHO MÁS para ellos que lo que está en esta guía introductoria. Espero que al menos esto te dé suficiente para empezar. Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo._