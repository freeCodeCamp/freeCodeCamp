---
title: SQL Inner Join Keyword
localeTitle: SQL Inner Join Keyword
---
## SQL Inner Join Keyword

### Ejemplo de uso

Para esta guía discutiremos las uniones SQL (INNER).

### Únete (igual que Inner Join)

La tabla de estudiantes estará en la cláusula FROM, por lo que será una tabla de inicio o IZQUIERDA.

Uniremos esto a la tabla de contacto del estudiante o a la mesa DERECHA. Verás que todos los estudiantes parecen que TAMBIÉN están en la tabla de contactos. Como se muestra en las tablas a continuación, studentID 9 está en la tabla de estudiantes pero NO en la tabla de contactos, por lo que no aparecerá en una combinación.

Declaración SQL

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 INNER JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

Datos "unidos" \`\` \`texto + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | StudentID | Nombre completo | programa de estudio | estudiante-teléfono-celular | código postal de estudiante de Estados Unidos | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 | Monique Davis | Literatura | 555-555-5551 | 97111 | | 2 | Teri Gutierrez | Programación | 555-555-5552 | 97112 | | 3 | Spencer Pautier | Programación | 555-555-5553 | 97113 | | 4 | Louis Ramsey | Programación | 555-555-5554 | 97114 | | 5 | Alvin Greene | Programación | 555-555-5555 | 97115 | | 6 | Sophie Freeman | Programación | 555-555-5556 | 97116 | | 7 | Edgar Frank "Ted" Codd | Ciencias de la Computación | 555-555-5557 | 97117 | | 8 | Donald D. Chamberlin | Ciencias de la Computación | 555-555-5558 | 97118 | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- +
```
### Complete table listings for reference 
 
 Student table SQL 
```

sql SELECT a.studentID, a.FullName, sat\_score, a.programOfStudy, schoolEmailAdr DESDE EL ESTUDIO COMO UN;
```
student or LEFT table 
```

texto + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + | StudentID | Nombre completo | sat\_score | programa de estudio | schoolEmailAdr | + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + | 1 | Monique Davis | 400 | Literatura | Monique@someSchool.edu | | 2 | Teri Gutierrez | 800 | Programación | Teri@someSchool.edu | | 3 | Spencer Pautier | 1000 | Programación | Spencer@someSchool.edu | | 4 | Louis Ramsey | 1200 | Programación | Louis@someSchool.edu | | 5 | Alvin Greene | 1200 | Programación | Alvin@someSchool.edu | | 6 | Sophie Freeman | 1200 | Programación | Sophie@someSchool.edu | | 7 | Edgar Frank "Ted" Codd | 2400 | Ciencias de la Computación | Edgar@someSchool.edu | | 8 | Donald D. Chamberlin | 2400 | Ciencias de la Computación | Donald@someSchool.edu | | 9 | Raymond F. Boyce | 2400 | Ciencias de la Computación | Raymond@someSchool.edu | + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + 9 filas en conjunto (0,00 seg)

```sql
SELECT * FROM `student-contact-info` AS b; 
```

Mesa de contacto del alumno o mesa DERECHA `text +-----------+----------------------------------+--------------------+--------------------+ | studentID | studentEmailAddr | student-phone-cell | student-US-zipcode | +-----------+----------------------------------+--------------------+--------------------+ | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | +-----------+----------------------------------+--------------------+--------------------+ 8 rows in set (0.00 sec)`

### Conclusión

Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.