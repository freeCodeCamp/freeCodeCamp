---
title: PHP
localeTitle: PHP
---
![logo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/150px-PHP-logo.svg.png "Logotipo de PHP")

## ¿Qué es PHP?

PHP es un lenguaje de programación del lado del servidor creado en 1995 por Rasmus Lerdorf.

PHP es un lenguaje de script de uso general de código abierto ampliamente utilizado que es especialmente adecuado para el desarrollo web y se puede incrustar en HTML.

## ¿Qué significa el acrónimo PHP?

Originalmente PHP significaba 'Página de inicio personal', ya que Rasmus Lerdorf lo creó para su uso en su propio sitio web. Luego, en 1997, más desarrolladores expandieron el lenguaje y el el acrónimo también cambió a lo que significa hoy en día: 'PHP: preprocesador de hipertexto'. Como la primera 'P' en PHP también significa 'PHP', se le conoce como 'acrónimo recursivo'.

## ¿Para qué se usa PHP?

A partir de octubre de 2017, PHP se utiliza en el [82% de los sitios web cuyo lenguaje del lado del servidor es conocido](https://w3techs.com/technologies/overview/programming_language/all) . Es Normalmente utilizado en sitios web para generar contenido de páginas web de forma dinámica. Los casos de uso incluyen:

*   Sitios web y aplicaciones web (scripts del lado del servidor)
*   Guión de línea de comandos
*   Aplicaciones de escritorio (GUI)

Normalmente, se utiliza en la primera forma para generar dinámicamente el contenido de la página web. Por ejemplo, si tiene un sitio web de blog, puede escribir algunos scripts PHP para recuperar Tu blog publica desde una base de datos y las muestra. Otros usos para los scripts PHP incluyen:

*   Procesando y guardando la entrada del usuario de los datos del formulario
*   Configuración y trabajo con cookies de sitio web.
*   Restricción del acceso a ciertas páginas de su sitio web

## ¿Cómo funciona PHP?

Todo el código PHP se ejecuta solo en un servidor web, no en su computadora local. Por ejemplo, si completa un formulario en un sitio web y lo envía, o hace clic en un enlace a una página web escrita en PHP, no se ejecutará ningún código PHP real en su computadora. En su lugar, los datos del formulario o la solicitud de la página web se envían a un servidor web para que sean procesados ​​por los scripts de PHP. Luego, el servidor web le envía de vuelta el HTML procesado (que es de donde proviene el "preprocesador de hipertexto" en el nombre), y su navegador web muestra los resultados. Por este motivo, no puede ver el código PHP de un sitio web, solo el HTML resultante que han generado los scripts PHP.

Esto se ilustra a continuación:

![Modelo de servidor PHP](https://github.com/xeroxism/myImages/blob/master/FCC_guides/PHP-server-model.png?raw=true)

PHP es un lenguaje interpretado. Esto significa que cuando realiza cambios en su código fuente, puede probarlos inmediatamente, sin necesidad de compilar primero su código fuente en forma binaria. Saltarse el paso de compilación hace que el proceso de desarrollo sea mucho más rápido.

El código PHP se encuentra entre las etiquetas `<?php` y `?>` Y luego se puede incrustar en HTML.

## Instalación

PHP se puede instalar con o sin un servidor web.

### GNU / Linux

En las distribuciones GNU / Linux basadas en Debian, puede instalarlas mediante:

```bash
sudo apt install php 
```

Después de la instalación, puede ejecutar cualquier archivo PHP simplemente haciendo esto en la terminal:
```
php file.php 
```

También puede instalar un servidor localhost para ejecutar sitios web PHP. Para instalar el servidor web Apache:
```
sudo apt install apache2 libapache2-mod-php 
```

## ¿Qué puede hacer PHP?

*   PHP puede generar contenido de página dinámico
*   PHP puede crear, abrir, leer, escribir, eliminar y cerrar archivos en el servidor
*   PHP puede recopilar datos de formulario
*   PHP puede enviar y recibir cookies
*   PHP puede agregar, eliminar, modificar datos en su base de datos
*   PHP puede ser usado para controlar el acceso de usuarios
*   PHP puede cifrar datos

## ¿Por qué PHP?

*   PHP se ejecuta en varias plataformas (Windows, Linux, Unix, Mac OS X, etc.)
*   PHP es compatible con casi todos los servidores utilizados en la actualidad (Apache, IIS, etc.)
*   PHP soporta una amplia gama de bases de datos
*   PHP es gratis. Descárgalo del recurso oficial de PHP: [secure.php.net](https://secure.php.net/)
*   PHP es fácil de aprender y se ejecuta de manera eficiente en el lado del servidor

## PHP Frameworks

Dado que escribir el código completo para un sitio web no es realmente práctico / factible para la mayoría de los proyectos, la mayoría de los desarrolladores tienden a usar framework para el desarrollo web. La ventaja de usar un framework es que

*   No tienes que reinventar la rueda cada vez que creas un proyecto, muchos de los matices ya están cuidados.
*   Por lo general, están bien estructurados de modo que ayudan a separar las preocupaciones.
*   La mayoría de los frameworks tienden a seguir las mejores prácticas del lenguaje.
*   Muchos de ellos siguen el patrón MVC (Model-View-Controller) para que separa la capa de presentación de la lógica

## Marcos populares

*   [Laravel](https://laravel.com/)
*   [Symfony](https://symfony.com/)
*   [Zend](http://www.zend.com/)
*   [CakePHP](https://cakephp.org/)

## Documentación

PHP está [bien documentado](http://php.net/docs.php) . Los [documentos oficiales](http://php.net/manual/en/) incluyen ejemplos en casi todas las guías de referencia de funciones, así como comentarios de los usuarios.

## Otros recursos

*   [Tutorial PHP de Tizag.com](http://www.tizag.com/phpT/) : [tutoriales](http://www.tizag.com/phpT/) aún relevantes para comenzar a [utilizar](http://www.tizag.com/phpT/) PHP
*   [Impresionante PHP](https://github.com/ziadoz/awesome-php) : una lista curada de bibliotecas, recursos y "cosas brillantes" de PHP
*   [Laracasts.com](https://laracasts.com/) : un sitio web de membresía para aprender el desarrollo de aplicaciones web con PHP