---
title: SQL Joins
localeTitle: Uniones SQL
---
## Uniones SQL

### Ejemplo de uso

Para esta guía, analizaremos la sección ÚNETE de la declaración SQL.

### Sintaxis SQL con enfoque en Join

```sql
SELECT col1, col2, col3, etc.... 
 FROM  tableNameOne AS a 
 JOIN tableNameTwo AS b ON a.primeKey = b.primeKey 
 etc... 
```

La declaración de JOIN podría ser solo JOIN o INNER JOIN, que son lo mismo, o IZQUIERDA UNIR (descrita a continuación).

### Diferentes tipos de uniones

*   (UNIR INTERNAMENTE
*   Devolver registros que tienen valores coincidentes en ambas tablas
*   IZQUIERDA COMBINACIÓN EXTERNA
*   Devuelve todos los registros de la tabla izquierda y los registros coincidentes de la tabla derecha
*   DERECHO (EXTERIOR) UNIRSE
*   Devuelva todos los registros de la tabla derecha y los registros coincidentes de la tabla izquierda
*   UNIR COMPLETO (EXTERIOR)
*   Devuelve todos los registros cuando hay una coincidencia en la tabla izquierda o derecha

### Unirse

La tabla de estudiantes estará en la cláusula FROM, por lo que será una tabla de inicio o IZQUIERDA.

Uniremos esto a la tabla de contacto del estudiante o a la mesa DERECHA.

Verás que aparecen todos los alumnos que también están en la tabla de contactos.

Como se muestra en las tablas a continuación, studentID 9 está en la tabla de estudiantes pero NO en la tabla de contactos, por lo que no aparecerá en una combinación.

Declaración SQL

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

Datos "unidos": \`\` \`texto + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | StudentID | Nombre completo | programa de estudio | estudiante-teléfono-celular | código postal de estudiante de Estados Unidos | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 | Monique Davis | Literatura | 555-555-5551 | 97111 | | 2 | Teri Gutierrez | Programación | 555-555-5552 | 97112 | | 3 | Spencer Pautier | Programación | 555-555-5553 | 97113 | | 4 | Louis Ramsey | Programación | 555-555-5554 | 97114 | | 5 | Alvin Greene | Programación | 555-555-5555 | 97115 | | 6 | Sophie Freeman | Programación | 555-555-5556 | 97116 | | 7 | Edgar Frank "Ted" Codd | Ciencias de la Computación | 555-555-5557 | 97117 | | 8 | Donald D. Chamberlin | Ciencias de la Computación | 555-555-5558 | 97118 | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- +
```
### Left Join 
 Using the keyword LEFT before JOIN causes the system to start with the student (LEFT) table but will return NULL from the RIGHT table if there are no rows for the LEFT table student. 
 
 Note that studentID 9 appears here but the data from the contact table is just shown as NULL. 
```

sql SELECT a.studentID, a.FullName, a.programOfStudy, segundo. `student-phone-cell` , b. `student-US-zipcode` De estudiante como un AJUSTE IZQUIERDO `student-contact-info` AS b ON a.studentID = b.studentID;
```
``` text 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 | studentID | FullName               | programOfStudy   | student-phone-cell | student-US-zipcode | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 |         1 | Monique Davis          | Literature       | 555-555-5551       |              97111 | 
 |         2 | Teri Gutierrez         | Programming      | 555-555-5552       |              97112 | 
 |         3 | Spencer Pautier        | Programming      | 555-555-5553       |              97113 | 
 |         4 | Louis Ramsey           | Programming      | 555-555-5554       |              97114 | 
 |         5 | Alvin Greene           | Programming      | 555-555-5555       |              97115 | 
 |         6 | Sophie Freeman         | Programming      | 555-555-5556       |              97116 | 
 |         7 | Edgar Frank "Ted" Codd | Computer Science | 555-555-5557       |              97117 | 
 |         8 | Donald D. Chamberlin   | Computer Science | 555-555-5558       |              97118 | 
 |         9 | Raymond F. Boyce       | Computer Science | NULL               |               NULL | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 9 rows in set (0.00 sec) 
```

### Lista completa de tablas para referencia

Listados de mesas de estudiantes

```sql
SELECT a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr 
 FROM student AS a; 
```

estudiante o mesa IZQUIERDA

```text
+-----------+------------------------+-----------+------------------+------------------------+ 
 | studentID | FullName               | sat_score | programOfStudy   | schoolEmailAdr         | 
 +-----------+------------------------+-----------+------------------+------------------------+ 
 |         1 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu | 
 |         2 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    | 
 |         3 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu | 
 |         4 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   | 
 |         5 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   | 
 |         6 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   | 
 |         8 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  | 
 |         9 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu | 
 +-----------+------------------------+-----------+------------------+------------------------+ 
 9 rows in set (0.00 sec) 
```

sql SELECCIONAR \* desde `student-contact-info` del `student-contact-info` AS b;
```
student contact or RIGHT table 
```

texto + ----------- + ---------------------------------- + - ------------------ + -------------------- + | StudentID | estudianteEmailAddr | estudiante-teléfono-celular | código postal de estudiante de Estados Unidos | + ----------- + ---------------------------------- + - ------------------ + -------------------- + | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | + ----------- + ---------------------------------- + - ------------------ + -------------------- + 8 filas en conjunto (0,00 seg) \`\` \`

Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.