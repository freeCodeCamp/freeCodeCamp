---
title: SQL COUNT Aggregate Function
localeTitle: Función de agregación SQL - COUNT
---
## Función de agregación SQL - COUNT

El operador `COUNT` se usa generalmente en combinación con una cláusula `GROUP BY`. Es una de las funciones de agregación de SQL, que incluyen `AVG` (promedio) y `SUM` (sumatoria).

Esta función contará el número de filas y devolverá ese recuento como una columna en el conjunto de resultados.

Aquí hay ejemplos para lo cual podría usarse `COUNT`:

*   Contar todas las filas en una tabla (no se requiere de `GROUP BY`)
*   Hacer un recuento de los totales de subconjuntos de datos (requiere una sección `GROUP BY` dentro del comando)

Como referencia, aquí están los datos actuales de todas las filas en nuestra base de datos de estudiantes de ejemplo.

```sql
select studentID, FullName, programOfStudy, sat_score from student; -- all records with fields of interest 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/count01.JPG?raw=true)

Este comando SQL proporciona un recuento de todas las filas. Tenga en cuenta que puede asignar un nombre a la columna `COUNT` resultante mediante el comando `AS`.

```sql
select count(*) AS studentCount from student; -- count of all records 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/count02.JPG?raw=true)

Aquí obtenemos un recuento de alumnos en cada campo de estudio.

```sql
 select programOfStudy, count(*) AS studentCount from the student table with a group by programOfStudy; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/count03.JPG?raw=true)

Aquí obtenemos un conteo de estudiantes con los mismos puntajes del SAT.

```sql
 select sat_score, count(*) AS studentCount from the student table with a group by sat_score; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/count04.JPG?raw=true)

Aquí hay un ejemplo usando la tabla de fondos de campaña. Esta es una suma total de los dólares en cada transacción y el número de contribuciones para cada partido político durante la Campaña Presidencial de los Estados Unidos de 2016.

```sql
select Specific_Party, Election_Year, format(sum(Total_$),2) AS contribution$Total, count(*) AS numberOfContributions 
 from combined_party_data 
 group by Specific_Party,Election_Year 
 having Election_Year = 2016; 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/count05.JPG?raw=true)

Al igual que con otros comandos de SQL, hay mucho más que lo que aquí se presenta, por favor consulte el manual de su administrador de base de datos y diviértase realizando diferentes pruebas usted mismo.
