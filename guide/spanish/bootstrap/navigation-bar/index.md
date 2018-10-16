---
title: Navigation Bar
localeTitle: Barra de navegación
---
## Barra de navegación

El marco de Bootstrap le proporciona una función de barras de navegación de llamada. En resumen, una barra de navegación (también denominada barras de navegación) es un encabezado en la parte superior de la página para mostrar información de navegación.

#### Cómo utilizar

Para usar las Barras de navegación de Bootstrap, agregue un elemento `<nav>` en la parte superior dentro del elemento `<body>` de su página web. Hay varios estilos que puede agregar para personalizar la visualización de sus barras de navegación.

#### Ejemplo de código

Este es el código necesario para hacer una barra de navegación básica.

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Estilos de la barra de navegación

Bootstrap proporciona un conjunto de clases en el marco de Bootstrap para diseñar tus barras de navegación. Estas clases son las siguientes:

*   `navbar navbar-default` Este es el estilo predeterminado para tus barras de navegación.
*   `navbar navbar-inverse` Esto es similar al estilo predeterminado, excepto que los colores están invertidos.

#### Agregar menús desplegables a la barra de navegación

Puede incluir un menú desplegable dentro de una barra de navegación. Esta característica requiere que incluyas el archivo javascript de Bootstrap para que funcione.

```html

<li class="dropdown"> 
  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Drop down 
    <span class="caret"></span> 
  </a> 
 <ul class="dropdown-menu"> 
    <li><a href="#">Item 1</a></li> 
    <li><a href="#">Item 2</a></li> 
    <li><a href="#">Item 3</a></li> 
  </ul> 
 </li> 
```

#### Añadiendo botones a la barra de navegación

Puedes añadir botones en la barra de navegación. Las clases existentes de Bootstrap Button funcionan, sin embargo, deberá incluir la clase `navbar-btn` al final de la lista de clases.

```html

<button class="btn navbar-btn">Button</button> 
```

#### Agregar formularios a la barra de navegación

También puede agregar formularios a la barra de navegación. Esto podría ser usado para tareas como un campo de búsqueda, un campo de inicio de sesión rápido, etc.

```html

<form class="navbar-form navbar-right"> 
  <div class="form-group"> 
      <input type="text" class="form-control" placeholder="Search"> 
  </div> 
  <button type="submit" class="btn btn-default">Search</button> 
 </form> 
```

#### Alineando elementos a la derecha en la barra de navegación.

En algunos casos, es posible que desee alinear elementos en una barra de navegación a la derecha (por ejemplo, un botón de inicio de sesión o registro). Para hacer esto necesitarás usar la `navbar-right` la `navbar-right` .

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
    <ul class="nav navbar-nav navbar-right"> 
      <li><a href="#">Action Link #1</a></li> 
      <li><a href="#">Action Link #2</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Visualización de la barra de navegación independiente del desplazamiento

En algunos casos, es posible que desee mantener la barra de navegación en la parte superior o inferior de la pantalla, independientemente del desplazamiento. Deberá agregar la `navbar-fixed-top` o `navbar-fixed-bottom` al elemento `<nav>` .

```html

<nav class="navbar navbar-default navbar-fixed-top"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Colapsando la barra de navegación

En una pantalla pequeña (como un teléfono o una tableta) la barra de navegación ocupará demasiado espacio. Afortunadamente existe la opción de collase la barra de navegación. Puedes lograr esto usando el siguiente ejemplo.

```html

<nav class="navbar navbar-default"> 
  <div class="container-fluid"> 
    <div class="navbar-header"> 
      <a class="navbar-brand" href="#">Site Name</a> 
    </div> 
    <ul class="nav navbar-nav"> 
      <li class="active"><a href="#">Home</a></li> 
      <li><a href="#">Page 1</a></li> 
      <li><a href="#">Page 2</a></li> 
      <li><a href="#">Page 3</a></li> 
    </ul> 
  </div> 
 </nav> 
```

#### Ejemplos de Navbar

`navbar navbar-default`

[Nombre del sitio](#navbar-default)

*   [Casa](#navbar-default)
*   [Página 1](#navbar-default)
*   [Página 2](#navbar-default)
*   [Página 3](#navbar-default)
Botón

*   [Enlace de acción # 1](#navbar-default)
*   [Enlace de acción # 2](#navbar-default)

`navbar navbar-inverse`

[Nombre del sitio](#navbar-inverse)

*   [Casa](#navbar-inverse)
*   [Página 1](#navbar-inverse)
*   [Página 2](#navbar-inverse)
*   [Página 3](#navbar-inverse)
Botón

*   [Enlace de acción # 1](#navbar-inverse)
*   [Enlace de acción # 2](#navbar-inverse)

#### Más información:

[Documentación de la barra de navegación de BootStrap](https://getbootstrap.com/docs/4.0/components/navbar/)