---
title: SQL Syntax
localeTitle: Sintaxis de SQL
---
## Sintaxis de SQL

### Introducción

Esta guía proporciona una descripción básica y de alto nivel de la sintaxis de las sentencias de SQL.

SQL es un estándar internacional (ISO), pero encontrará muchas diferencias entre las implementaciones. Esta guía utiliza MySQL como ejemplo. Si usa uno de los muchos otros administradores de bases de datos relacionales (DBMS), deberá consultar el manual de ese DBMS si es necesario.

### Lo que cubriremos

*   Uso (establece qué base de datos usará la declaración)
*   Seleccionar y cláusulas de
*   Donde Cláusula (y / o, IN, Entre, LIKE)
*   Ordenar por (ASC, DESC)
*   Agrupar por y Tener

### Como usar esto

Esto se utiliza para seleccionar la base de datos que contiene las tablas para sus declaraciones SQL:

```sql
use fcc_sql_guides_database; -- select the guide sample database 
```

### Seleccionar y cláusulas de

La parte Seleccionar se usa normalmente para determinar qué columnas de los datos desea mostrar en los resultados. También hay opciones que puede usar para mostrar datos que no son una columna de tabla.

Este ejemplo muestra dos columnas seleccionadas de la tabla "estudiante" y dos columnas calculadas. La primera de las columnas calculadas es un número sin sentido, y la otra es la fecha del sistema.

```sql
    select studentID, FullName, 3+2 as five, now() as currentDate 
    from student; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax01.JPG)

### Donde Cláusula (y / o, IN, Entre y LIKE)

La cláusula WHERE se utiliza para limitar el número de filas devueltas.

En este caso, los cinco que se utilizarán son una cláusula Where ridícula.

Compare este resultado con la declaración SQL anterior para seguir esta lógica.

Se presentarán filas que:

*   Tener identificaciones de estudiantes entre 1 y 5 (inclusive)
*   o studentID = 8
*   o tener "Maxmimo" en el nombre

El siguiente ejemplo es similar, pero además especifica que si alguno de los estudiantes tiene ciertos resultados del SAT (1000, 1400), no se presentarán:

```sql
    select studentID, FullName, sat_score, recordUpdated 
    from student 
    where ( 
        studentID between 1 and 5 
        or studentID = 8 
        or FullName like '%Maximo%' 
        ) 
        and sat_score NOT in (1000, 1400); 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax02.JPG)

### Ordenar por (ASC, DESC)

Ordenar por nos da una manera de ordenar el conjunto de resultados por uno o más de los elementos en la sección SELECCIONAR. Aquí está la misma lista que la anterior, pero ordenada por el nombre completo de los alumnos. El orden de clasificación predeterminado es ascendente (ASC), pero para ordenar en el orden opuesto (descendente) se usa DESC, como en el siguiente ejemplo:

```sql
    select studentID, FullName, sat_score 
    from student 
    where (studentID between 1 and 5 -- inclusive 
        or studentID = 8 
        or FullName like '%Maximo%') 
        and sat_score NOT in (1000, 1400) 
    order by FullName DESC; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax03.JPG)

### Agrupar por y tener

Agrupar por nos permite combinar filas y datos agregados. La cláusula Having es como la cláusula Where anterior, excepto que actúa sobre los datos agrupados.

Esta información proviene de las contribuciones de la campaña que hemos estado usando en algunas de estas guías.

Esta declaración SQL responde a la pregunta: "¿qué candidatos recibieron la mayor cantidad de contribuciones (no $ cantidad, pero cuentan (\*)) en 2016, pero solo aquellos que tuvieron más de 80 contribuciones?"

Ordenar este conjunto de datos en un orden descendente (DESC) coloca a los candidatos con el mayor número de contribuciones en la parte superior de la lista.

```sql
    select Candidate, Election_year, sum(Total_$), count(*) 
    from combined_party_data 
    where Election_year = 2016 
    group by Candidate, Election_year 
    having count(*) > 80 
    order by count(*) DESC; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/syntax04.JPG)

_Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria. Espero que al menos esto te dé suficiente para empezar. Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo._