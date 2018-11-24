---
title: SQL Left Join
localeTitle: SQL Left Join
---
## SQL Left Join

### Ejemplo de uso

Para esta guía discutiremos el SQL LEFT JOIN.

### Unirse a la izquierda

El uso de la palabra clave IZQUIERDA antes de UNIR hace que el sistema comience con la tabla de estudiantes (IZQUIERDA), pero devolverá NULL desde la tabla de DERECHA si no hay filas para el estudiante de la tabla de IZQUIERDA.

Tenga en cuenta que StudentID 9 aparece aquí, pero los datos de la tabla de contactos solo se muestran como NULL.

```sql
SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 LEFT JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
```

\`\` \`texto + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | StudentID | Nombre completo | programa de estudio | estudiante-teléfono-celular | código postal de estudiante de Estados Unidos | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 | Monique Davis | Literatura | 555-555-5551 | 97111 | | 2 | Teri Gutierrez | Programación | 555-555-5552 | 97112 | | 3 | Spencer Pautier | Programación | 555-555-5553 | 97113 | | 4 | Louis Ramsey | Programación | 555-555-5554 | 97114 | | 5 | Alvin Greene | Programación | 555-555-5555 | 97115 | | 6 | Sophie Freeman | Programación | 555-555-5556 | 97116 | | 7 | Edgar Frank "Ted" Codd | Ciencias de la Computación | 555-555-5557 | 97117 | | 8 | Donald D. Chamberlin | Ciencias de la Computación | 555-555-5558 | 97118 | | 9 | Raymond F. Boyce | Ciencias de la Computación | NULL | NULL | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + 9 filas en conjunto (0,00 seg)
```
### Complete table listings for reference 
 student or LEFT table SQL 
```

sql SELECT a.studentID, a.FullName, sat\_score, a.programOfStudy, schoolEmailAdr DESDE EL ESTUDIO COMO UN;
```
student or LEFT table data 
```

texto + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + | StudentID | Nombre completo | sat\_score | programa de estudio | schoolEmailAdr | + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + | 1 | Monique Davis | 400 | Literatura | Monique@someSchool.edu | | 2 | Teri Gutierrez | 800 | Programación | Teri@someSchool.edu | | 3 | Spencer Pautier | 1000 | Programación | Spencer@someSchool.edu | | 4 | Louis Ramsey | 1200 | Programación | Louis@someSchool.edu | | 5 | Alvin Greene | 1200 | Programación | Alvin@someSchool.edu | | 6 | Sophie Freeman | 1200 | Programación | Sophie@someSchool.edu | | 7 | Edgar Frank "Ted" Codd | 2400 | Ciencias de la Computación | Edgar@someSchool.edu | | 8 | Donald D. Chamberlin | 2400 | Ciencias de la Computación | Donald@someSchool.edu | | 9 | Raymond F. Boyce | 2400 | Ciencias de la Computación | Raymond@someSchool.edu | + ----------- + ------------------------ + ----------- + ------------------ + ------------------------ + 9 filas en conjunto (0,00 seg)

contacto de los estudiantes o mesa correcta SQL

```sql
select * from `student-contact-info` as b; 
```

Datos de contacto del estudiante o de la tabla DERECHA `text +-----------+----------------------------------+--------------------+--------------------+ | studentID | studentEmailAddr | student-phone-cell | student-US-zipcode | +-----------+----------------------------------+--------------------+--------------------+ | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | +-----------+----------------------------------+--------------------+--------------------+ 8 rows in set (0.00 sec)`

Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria.

Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.