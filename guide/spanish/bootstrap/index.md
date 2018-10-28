---
title: Bootstrap
localeTitle: Bootstrap
---
## Bootstrap

Bootstrap es un popular *framework* para *front-end* para el desarrollo web. Contiene componentes pre-construidos y elementos de diseño para estilizar el contenido HTML. Los navegadores modernos como Chrome, Firefox, Opera, Safari e Internet Explorer son compatibles con Bootstrap.

Bootstrap incluye un sistema de cuadrícula *responsive* para diferentes diseños. Es un excelente punto de partida para crear un sitio web compatible con dispositivos móviles. También incluye funcionalidad de JavaScript opcional como contenido plegable, carruseles y modales.

#### Historial de versiones

Twitter desarrolló el *framework* de Bootstrap originalmente como una herramienta interna. Lo lanzaron como un proyecto de código abierto en agosto de 2011.

Bootstrap 2 se lanzó en enero de 2012. Una de las características principales fue la introducción del sistema de cuadrícula *responsive* de 12 columnas. Bootstrap 3 apareció en agosto de 2013, cambiando a un diseño plano y un enfoque móvil (*mobile-first*). Bootstrap 4 está disponible en versión beta a partir de agosto de 2017, y ahora incluye Sass y Flexbox.

Bootstrap 4 estuvo en desarrollo durante dos años antes de lanzar algunas versiones beta durante 2017, mientras que la primera versión estable salió en enero de 2018. Algunos cambios notables incluyen:

*   Cambio de Less a Sass;
*   Cambio a Flexbox y se ha mejorado el sistema de cuadrícula;
*   Se han añadido tarjetas (reemplazando los pozos, miniaturas y paneles);
*   ¡Y mucho más!

En el momento de escribir este artículo, la última versión de Bootstrap es [4.1.3](http://blog.getbootstrap.com/2018/07/24/bootstrap-4-1-3/ ). Si quieres mantenerte al día con cualquier noticia o anuncios, síguelos [aquí](http://blog.getbootstrap.com/).

#### Instalación

Hay dos opciones principales para agregar Bootstrap a tu proyecto web. Puedes enlazar a fuentes disponibles públicamente o descargar el *framework* directamente.

##### Enlazar a otra fuente

Puede agregar Bootstrap CSS utilizando un elemento `<link>` dentro del `<head>` de tu página web que hace referencia a una Red de Distribución de Contenidos (CDN):

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">`

Agregar los elementos de JavaScript de Bootstrap es similar a los elementos `<script>` que normalmente se colocan en la parte inferior de tu etiqueta ‘<body>’. Es posible que tengas que incluir algunas dependencias primero. Presta especial atención al orden indicado:

```html
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> 
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> 
```
_Nota: Estos son únicamente ejemplos y pueden cambiar sin previo aviso. Consulta con un CDN acerca de los enlaces actuales para incluirlos en tu proyecto._

##### Descargar/Instalar

Puedes descargar e instalar el código fuente de Bootstrap con Bower, Composer, Meteor o npm. Esto permite un mayor control y la opción de incluir o excluir módulos según sea necesario.

`npm install bootstrap`

`gem 'bootstrap', '~> 4.1.3'`


_Nota: Estos son únicamente ejemplos y pueden cambiar sin previo aviso. Por favor, consulta el _<a href='https://getbootstrap.com/' target='_blank' rel='nofollow'>sitio web de Bootstrap</a>_ para ver los enlaces más recientes._

#### El sistema de cuadrícula de Bootstrap

El sistema de cuadrícula es un primer sistema de flexbox para dispositivos móviles para crear rápidamente diseños de todas las formas y tamaños adecuados para todos los dispositivos. Se basa en un diseño de 12 columnas y tiene varios niveles, uno para cada rango de consulta de medios.

Bootstrap viene con clases de cuadrícula predefinidas para su uso en el marcado. Puedes ver más detalles y ejemplos en https://getbootstrap.com/docs/4.1/layout/grid/

### Características de Bootstrap

*   Bootstrap 3 es compatible con las últimas versiones de Google Chrome, Firefox, Internet Explorer, Opera y Safari (excepto en Windows). Además, es compatible con IE8 y la última versión con ciclo de asistencia extendido de Firefox (ESR).[12]
    
*   Desde 2.0, Bootstrap es compatible con el diseño web *responsive*. Esto significa que el diseño de las páginas web se ajusta dinámicamente, teniendo en cuenta las características del dispositivo utilizado (ordenador de escritorio, *tablet*, teléfono móvil).
    
*   A partir de la versión 3.0, Bootstrap adoptó una filosofía de diseño móvil (*mobile-first*), enfatizando el diseño *responsive* por defecto.
    
*   La versión 4.0 agregó soporte para Sass y Flexbox.
    

#### Más información:

Bootstrap tiene una documentación exhaustiva con muchos <a href='https://getbootstrap.com/docs/4.0/examples/' target='_blank' rel='nofollow'>ejemplos</a> y una <a href='https://getbootstrap.com/docs/4.0/getting-started/introduction/' target='_blank' rel='nofollow'>plantilla HTML para empezar a usarlo</a> (esta plantilla solo incluye los *scripts*; no contiene una configuración del sistema de cuadrícula si eso es lo que estás buscando).

Además, puedes encontrar temas tanto <a href='https://bootswatch.com/' target='_blank' rel='nofollow'>gratuitos</a> como <a href='https://themes.getbootstrap.com/' target='_blank' rel='nofollow'>de pago</a> basados en el *framework* de Bootstrap para proporcionar un aspecto más personalizado y elegante.

#### Recursos de Bootstrap:
- [Blog oficial de Bootstrap](http://blog.getbootstrap.com/)
- [Inspiración del sitio Bootstrap](http://expo.getbootstrap.com/)
- [Escaparate de sitios construidos utilizando Bootstrap.](http://builtwithbootstrap.com/)
- [Linter HTML para proyectos usando Bootstrap](https://github.com/twbs/bootlint)
- [Elementos de diseño y fragmentos de código para Bootstrap](https://bootsnipp.com/)
- [Código, tema y recursos complementarios para Bootstrap](http://expo.getbootstrap.com/resources/)
