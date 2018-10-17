---
title: SQL Drop View Statement
localeTitle: SQL Drop View Statement
---
## SQL Drop View Statement

### Introducción

Esta guía cubre la declaración SQL para eliminar (eliminar) uno o más objetos de vista.

Una vista es un objeto que presenta datos de una o más tablas.

Nota: antes de eliminar o cambiar datos u objetos, recuerde tener una copia de seguridad nueva.

Cubriremos:

*   Usando SQL para soltar una tabla
*   Usando el banco de trabajo para soltar una vista

Estaremos usando MySQL para la demostración. Consulte el manual de esta función en otros administradores de bases de datos.

Eliminaremos la vista llamada `students_dropMe_v` , que se creó solo para este propósito.

### Sintaxis basica

```sql
DROP VIEW [IF EXISTS] 
    view_name [, view_name] ... 
```

### Drop View SQL

La parte si existe "atrapará" errores, en caso de que la vista no exista.

```sql
drop view if exists students_dropMe_v; 
```

La vista después de la creación:

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/drop-view01.JPG)

Encima del comando ejecutado y vistas mostradas:

![imagen-2](https://github.com/SteveChevalier/guide-images/blob/master/drop-view02.JPG)

### Usando el Workbench

De la mesa de trabajo: 1) Clic derecho en la vista para soltar. 2) Seleccione la vista desplegable del menú 3) Seleccione cualquiera de las dos opciones: a) ejecute SQL para revisar la instrucción SQL que se ejecutará o b) suelte el nuevo

![imagen-3](https://github.com/SteveChevalier/guide-images/blob/master/drop-view03.JPG)

\* Al igual que con todas estas cosas de SQL, hay MUCHO MÁS que lo que está en esta guía introductoria. Espero que al menos esto te dé suficiente para empezar.

Consulte el manual de su administrador de base de datos y diviértase probando diferentes opciones usted mismo. \*

### Extra

Aquí está el SQL que utilicé para crear la tabla que acabamos de descartar:

```sql
create view `students_dropMe_v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 

```