---
title: Getting Started with Sass
localeTitle: Empezando con Sass
---
### Introducción

Sass significa "Syntactically Awesome Stylesheets" y es un Pre-procesador de CSS. Un preprocesador compila el código escrito en un lenguaje específico hasta el código de "producto" que es legible por máquina (legible por el navegador). Básicamente, Sass compila código a CSS normal que nuestros navegadores pueden interpretar. _¿Por qué escribir código en Sass cuando CSS ya existe?_ La respuesta corta es que Sass viene con características más potentes incorporadas en su sintaxis que permiten a los desarrolladores escribir código de front-end DRY, escalable y más mantenible.

Si estás familiarizado con CSS, aprender Sass te resultará un poco más fácil. De lo contrario, podría ser ideal comenzar a aprender algunos conceptos básicos de CSS en la sección de HTML5 y CSS de Free Code Camp en su curso de Certificación de Desarrollo de Front End, así como echar un vistazo al [Artículo de CSS de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) .

En la Parte 1 de este artículo, explicaré cómo instalar Sass en su computadora y cómo compilar su código escrito en Sass en CSS.

## Instalación

La forma más sencilla de instalar Sass en su máquina es a través de la línea de comandos. Sass es una gema de Ruby y requerirá el siguiente comando:

Para Mac y PC:

`sudo gem install sass`

Para Linux, primero deberá instalar el lenguaje Ruby, luego:

`sudo su -c "gem install sass"`

Ahora debería poder verificar la versión de Sass instalada:

`sass -v`

Y debería devolver algo similar a:

`Sass 3.4.21 (Selective Steve)`

Si es así, felicidades, acabas de instalar Sass! Ahora en el uso de Sass.

## Uso básico y sintaxis

Comencemos con un ejemplo muy simple para ilustrar cómo funciona realmente Sass. Puedes seguir los pasos o simplemente leerlos.

_Una nota al margen de importación: Sass se puede escribir en dos estilos ligeramente diferentes, cada uno de los cuales tiene sus propios beneficios. Un estilo usará la extensión de archivo_ `.sass` _y el otro usará_ `.scss` . _Se darán breves explicaciones sobre las diferencias de los dos estilos más adelante. Para obtener una explicación detallada, consulte el artículo de John W. Long_ [Sass vs. SCSS](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better) .

_En aras de la coherencia, este artículo proporcionará ejemplos de código en formato `.scss` , sin embargo, ambos estilos son igualmente populares._

Bien, vamos a empezar. Crearemos una nueva carpeta para alojar nuestros archivos de ejemplo (puede hacer esto en cualquier parte de su computadora y puede usar la línea de comandos o hacerlo manualmente).

En la carpeta, crearemos un archivo llamado `style.scss` y un archivo HTML para estilo llamado `index.html` :

_El comando de `tree` en la imagen de arriba es de un paquete npm que puede instalar y no es nativo de la línea de comandos. El comando `ls` esencialmente hace lo mismo._

Ahora que tenemos la configuración de la carpeta del proyecto, podemos usar el comando Sass watch para "vigilar" nuestro archivo Sass y compilar nuestro código cuando detecta un cambio en el archivo. Escribimos el comando watch en el archivo que queremos ver:

`sass --watch style.scss`

El siguiente paso es abrir la carpeta del proyecto en el editor de texto que elija. Una vez que tengamos nuestros archivos abiertos y listos para su edición, podemos agregar una página HTML muy básica (para nuestro estilo) que se verá como la siguiente:
```
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <title>Sass!</title> 
  <link rel="stylesheet" href="style.css"> 
 </head> 
 <body> 
  <article> 
    <h1>Hello World</h1> 
    <p class="cat-paragraph-1">Cat ipsum dolor sit amet, stand in front of the computer screen, so chase imaginary bugs has closed eyes but still sees you caticus cuteicus.</p> 
    <p class="cat-paragraph-2">Drink water out of the faucet chew on cable or if it fits, i sits roll on the floor purring your whiskers off.</p> 
  </article> 
 </body> 
 </html> 
```

Después de configurar el HTML, podemos abrir nuestro archivo `style.scss` y comenzar a diseñar en Sass. En el código de ejemplo siguiente, probablemente observará cómo algunos selectores de estilo están anidados dentro del selector de artículos; algo único para Sass. No se preocupe, la sintaxis se explicará en la Parte 2. Por ahora solo queremos comprender cómo funciona Sass en su forma más simple.
```
article { 
  h2 { 
    font-family: Arial; 
    color: blue; 
  } 
  .cat-paragraph-1 { 
    color: red; 
  } 
  .cat-paragraph-2 { 
    color: green; 
  } 
 } 
```

Una vez que el código se haya escrito y guardado en el archivo `style.scss` , la tarea de `style.scss` que `style.scss` en la línea de comandos habrá detectado un cambio en el archivo, compilado nuestro Sass a CSS y `style.css` un nuevo archivo llamado `style.css` . También puede ver un archivo llamado `style.css.map` en su carpeta de proyecto que también ha aparecido mágicamente. Este archivo se llama sourcemap y es de gran utilidad para la depuración de Sass, pero por ahora solo lo dejaremos.

A continuación podemos ver los archivos listados en la carpeta del proyecto.

Y ahora, si abrimos `index.html` en un navegador web, podemos ver nuestra página HTML con el estilo de CSS que se compiló a partir del código Sass de muestra. Del mismo modo, podemos abrir el archivo `style.css` para ver cómo Sass `style.css` el código Sass original. Compacto, ¿no es así?

## ¿A dónde ir desde aquí?

_¡Estupendo! Ahora sé cómo compilar Sass en mi computadora. ¿Es asi?_

Ni por asomo. Este fue un claro ejemplo de cómo funciona Sass, por lo tanto, los beneficios de escribir en Sass sobre vainilla CSS pueden no ser evidentes. Escribimos 12 líneas de "Sass" y obtuvimos 7 líneas de CSS como resultado. No es exactamente una gran diferencia por cualquier norma. En la Parte 2 explicaremos la **magia** detrás de la sintaxis de Sass, como las variables y los mixins, y cómo el uso de tales herramientas puede darnos superpoderes cuando estilemos.

Si aún estás atascado en cómo Sass se está compilando mágicamente en CSS o tal vez te gustaría [jugar](http://www.sassmeister.com/) con el código de ejemplo un poco más, [Sassmeister](http://www.sassmeister.com/) es una gran interfaz en línea que te permite escribir en la sintaxis de Sass y ver instantáneamente tu código compilado en CSS sin Tener que instalar algo o hacer cualquier configuración en su computadora. Es un recurso muy útil para el sandboxing y para probar su código Sass.