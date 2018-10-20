---
title: SQL Alter Table Statement
localeTitle: SQL Alter Table Statement
---
## Guia SQL - ALTER TABLE

## Introducción

Esta guía le presentará e intentará explicar algunos de los conceptos básicos de las funciones de la tabla de modificación de SQL dentro de una base de datos relacional. **Consejo de seguridad IMPORTANTE: ¡SIEMPRE haga una copia de seguridad de sus datos antes de hacer cambios!**

Usaremos MySQL para todos los ejemplos a lo largo de esta guía de freeCodeCamp SQL. Las razones para seleccionar MySQL son: 1) se usa con mucha frecuencia en los sitios web de la base de datos back-end, 2) es gratis y es divertido y fácil de usar.

## Cubierto en esta guía

Usaremos las tablas creadas en la guía "CREAR TABLA". Siéntase libre de revisar esa guía si no está familiarizado con la creación de una tabla.

*   Alterar la tabla creada la alterará de varias maneras diferentes.
*   Cambiaremos su nombre y modificaremos columnas.
*   Agregar columnas (mientras agregamos columnas, también revisaremos algunos de los tipos de columnas más importantes y su uso).
*   Eliminar columnas (lo que significa eliminar la columna).
*   Creando una tabla importando un archivo CSV y modificando esa tabla.
*   Creando y modificando tablas con las herramientas de MySQL workbench.

La mayor parte de esto se realizará utilizando sentencias de SQL en la herramienta de scripting MySQL workbench, pero también revisaremos cómo modificar una tabla utilizando la interfaz de workbench en lugar de hacerlo con sentencias de SQL.

## La tabla antes de las alteraciones:

![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table01a.JPG?raw=true)

Agregue las columnas de fecha y dirección de correo electrónico (una columna de fecha y carácter): ![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table01.JPG?raw=true)

Agregue una columna numérica (tenga en cuenta que se agregó en una ubicación específica en la tabla): ![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table02.JPG?raw=true)

Renombrar algunas columnas: ![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table03.JPG?raw=true)

Eliminar una columna: ![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table04.JPG?raw=true)

También puede utilizar la herramienta alterar mesa de trabajo. Simplemente haga clic derecho en la tabla que desea cambiar y cambie como desee. ![imagen-1](https://github.com/SteveChevalier/guide-images/blob/master/alter_table05.JPG?raw=true)

Se puede hacer mucho más, consulte el manual de su software de administración de bases de datos para obtener más información.