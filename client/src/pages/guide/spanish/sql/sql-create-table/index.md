---
title: SQL Create Table
localeTitle: Comando SQL - CREATE TABLE
---
# Comando SQL - CREATE TABLE

## Introducción

Esta guía es una descripción general de los conceptos básicos del comando SQL `CREATE TABLE` .

Usaremos MySQL para todos los ejemplos a lo largo de estas guías de freeCodeCamp SQL. MySQL se usa con frecuencia en los sitios web como base de datos backend, además, es gratis, divertido y fácil de usar.

## Cubierto en esta guía

*   Creación de un esquema, el contenedor para todos nuestros objetos de base de datos.
*   Creación de una tabla para que tengamos algo que alterar.
*   Creación de una tabla importando un archivo CSV y alterando esa tabla
*   Creación de una tabla usando la herramienta MySQL Workbench

REalizaremos la mayor parte de este trabajo con comandos SQL dentro de MySQL Workbench. También veremos cómo crear una tabla utilizando la interfaz de Workbench en lugar de comandos.

## Estructura de alto nivel de una base de datos relacional

1.  Nivel más alto: Base de datos; Instalación del sistema de base de datos. En este caso, es MySQL. Llamado "Router MySQL de instancia local" en las capturas de pantalla presentadas.
2.  Posteriormente se encuentra el esquema; un contenedor para los objetos necesarios para administrar datos en un sistema de base de datos relacional.
3.  Objetos que creamos (tablas, índices, procedimientos almacenados, funciones) para gestionar el sistema y sus datos.

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/create_table01.JPG?raw=true)

## Creando un esquema MySQL

El esquema es un contenedor para los objetos necesarios para administrar los datos de un tema o proceso determinado. Mostramos ejemplos a medida que avanzamos en esta guía.

Crearemos el esquema para nuestro aprendizaje y prueba usando el comando SQL;
```
create database fCC_alterTableGuide; 
```

Esta instancia estructura de esquema antes de ejecutar este comando

![imagen-2](https://github.com/SteveChevalier/guide-images/blob/master/create_table02.JPG?raw=true)

La estructura del esquema de esta instancia después de ejecutar la instrucción SQL

![imagen-3](https://github.com/SteveChevalier/guide-images/blob/master/create_table03.JPG?raw=true)

## Crear una tabla, agregar datos de prueba con "INSERT", cambiar el nombre de la tabla (ALTER)

Vamos a crear una tabla de estudiantes.

Los pasos serán:

1.  Asegúrate de que no tengamos la tabla aún
2.  Creación de la tabla
3.  Inserción de los datos de prueba.
    

*   Tipos de datos: el nombre del estudiante es un campo de caracteres limitado a 90 caracteres
*   El ID del estudiante es un número (entero) (rango de -2147483648 a 2147483647). Esta será la clave principal de la tabla y se incrementará automáticamente cuando se agregue un registro.
*   También habrá dos campos de "time-stamp" para realizar pruebas.

Comando `CREATE` y visualización del resultado de su ejecución;

![imagen-4](https://github.com/SteveChevalier/guide-images/blob/master/create_table04.JPG?raw=true)

Usando el comando `SELECT` veremos que la tabla está ahí pero por ahora no se han agregado registros.

![imagen-5](https://github.com/SteveChevalier/guide-images/blob/master/create_table05.JPG?raw=true)

Ahora, para insertar algunos datos y ver cómo se ve nuestra nueva tabla con los registros en ella (y comprender cómo crear y actualizar las "time-stamp");

![imagen-6](https://github.com/SteveChevalier/guide-images/blob/master/create_table06.JPG?raw=true)

La primera "time-stamp" es la fecha y hora de creación y la segunda es la fecha y hora de actualización. Cambiar un registro debería actualizar ts2 pero no ts1.

![imagen-7](https://github.com/SteveChevalier/guide-images/blob/master/create_table07.JPG?raw=true)

## Crear una tabla con MySql Workbench

Haga clic derecho en la opción "Tablas" debajo del esquema en el que quiere colocar el nuevo archivo. Seleccione "Crear tabla".

![imagen-8](https://github.com/SteveChevalier/guide-images/blob/master/create_table08.JPG?raw=true)

Complete el formulario como desee y haga clic en "Aplicar".

![imagen-9](https://github.com/SteveChevalier/guide-images/blob/master/create_table09.JPG?raw=true)

## CREATE TABLE AS SELECT (CTAS)

Una forma rápida de crear una copia de una tabla, incluidos los datos, es por medio del comando CREATE TABLE AS SELECT.

`CREATE TABLE my_table AS (SELECT * FROM orig_tbl);`

## Creación de una tabla e importación de datos mediante un archivo CSV

Haga clic derecho en la opción "Tablas" debajo del esquema en el que desea colocar el nuevo archivo. Seleccione "Importar datos de tabla".

![imagen-10](https://github.com/SteveChevalier/guide-images/blob/master/create_table10.JPG?raw=true)

Seleccione el archivo CSV a importar y haga clic en "SIGUIENTE". Cree una nueva tabla a partir de los datos, seleccione las opciones deseadas y haga clic en "SIGUIENTE".

![imagen-11](https://github.com/SteveChevalier/guide-images/blob/master/create_table11.JPG?raw=true)

Ajuste los tipos de datos según sea necesario y haga clic en "SIGUIENTE"

![imagen-12](https://github.com/SteveChevalier/guide-images/blob/master/create_table12.JPG?raw=true)

Haga clic en "SIGUIENTE" (en esta pantalla y en la siguiente que se muestra) para importar los datos a la tabla. Se mostrará el resultado de la importación, revise y haga clic en "FINALIZAR"

![imagen-13](https://github.com/SteveChevalier/guide-images/blob/master/create_table13.JPG?raw=true)

![imagen-14](https://github.com/SteveChevalier/guide-images/blob/master/create_table14.JPG?raw=true)

## Otro material

¡Hay muchos más detalles para cubrir este tema, instale MySQL y diviértase!

### Donde conseguir MySQL

Pruebe \[esta descarga para usuarios de Windows \[(https://dev.mysql.com/downloads/windows/)

### Documentación de MySQL

*   [página de manual](https://dev.mysql.com/doc/refman/5.7/en/alter-table.html)
*   [ejemplos del manual](https://dev.mysql.com/doc/refman/5.7/en/alter-table-examples.html)

### Documentación de SQL Server

*   [Documentos de Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql)
