---
title: SQL CREATE INDEX Statement
localeTitle: Sentencia SQL CREATE INDEX
---
## Sentencia SQL CREATE INDEX

Esta declaración se utiliza para crear un "índice" en una columna en una tabla existente.

Puntos clave en los índices:

*   Se utilizan para mejorar la eficiencia de las búsquedas de datos, presentando los datos en un orden específico, al unir tablas (consulte las Guías "ÚNETE") y más.
*   Un índice es un objeto de "sistema", lo que significa que lo utiliza el administrador de la base de datos.
*   Parte de este uso es que el administrador de la base de datos actualice el índice cuando los datos utilizados por el índice cambien en la tabla relacionada. Tenga esto en cuenta porque a medida que aumenta el número de índices en una base de datos, el rendimiento general del sistema puede verse afectado.
*   Si descubre que sus SQL se están ejecutando lentamente en una tabla o tablas determinadas, lo primero que debe considerar para corregir el problema es crear un índice.

Aquí hay un ejemplo de la sintaxis de la declaración de índice de creación. Tenga en cuenta que la sintaxis permite que un índice esté sobre más de una columna.

```sql
CREATE INDEX index_name 
 ON table_name (column1, column2, ...); 
```

Creación de un nuevo índice en el campo de la tabla del alumno, programOfStudy. Para referencia, aquí está la definición actual de la tabla de estudiantes.

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/create-index-statement01.JPG?raw=true)

Aquí hay una declaración para crear el índice y una captura de pantalla de la definición de tabla actualizada:

```sql
create index pStudyIndex 
 on student (programOfStudy); 
```

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/create-index-statement02.JPG?raw=true)

En MySQL, usa el comando ALTER TABLE para cambiar y eliminar índices. MySQL Workbench también proporciona herramientas de GUI para administrar índices.

Al igual que con todas estas cosas, hay mucho más, así que consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo.