---
title: Grid System
localeTitle: Sistema de red
---
## Sistema de red

En pocas palabras, el sistema de cuadrícula Bootstrap lo ayuda a crear diseños receptivos, se compone de un sistema de filas y columnas que lo ayuda a estructurar su contenido.

Las filas son grupos horizontales de columnas, con un máximo de 12 columnas por fila. Dentro de cada fila, el contenido se coloca dentro de las columnas y puede abarcar desde 1 a 12 columnas.

Bootstrap tiene cinco tipos diferentes de niveles de cuadrícula: Extra pequeño, Pequeño, Mediano, Grande y Extra grande, hay un punto de interrupción definido para cada uno de estos niveles de cuadrícula.

Bootstrap utiliza píxeles para definir los puntos de interrupción del nivel de la cuadrícula, los diferentes anchos de la ventana gráfica que actúan como puntos de interrupción para los niveles de la cuadrícula son:

#### Cómo funciona

###### Envase

El contenedor es el elemento más externo que _contendrá_ su cuadrícula, use el `container` para un contenedor de ancho fijo en el centro de la pantalla (margen adicional en pantallas más grandes) o `container-fluid` de `container-fluid` para todo el ancho.
```
<div class="container"></div> 
```

###### Fila

Use la `row` para agrupar sus columnas, esto mantendrá todo alineado correctamente y lo ayudará a estructurar su cuadrícula.
```
<div class="row"></div> 
```

###### Columnas

Las clases de columna indican el número de columnas que le gustaría usar de las 12 posibles por fila. Por ejemplo, `col-sm-6` significaría que su columna usaría la mitad del ancho de la `row` en una pantalla pequeña, y `col-lg-4` usaría una tercera parte en una pantalla grande.

Aquí es cómo definiría un prefijo de clase para usar un ancho de columna en los distintos tamaños de pantalla:

*   **Extra pequeño** `col-1`
*   **Pequeño** `col-sm-1`
*   **Medio** `col-md-1`
*   `col-lg-1` **grande**
*   **Extra grande** `col-xl-1`
```
<div class="col-sm-1"></div> 
```

#### Ejemplo

Una cuadrícula de ancho completo que tiene cuatro columnas, cada una de las cuales ocupa una fila completa en las pantallas xs, media fila en las pantallas sm y md, y un cuarto del ancho de la fila en las pantallas que son grandes y superiores.
```
<div class="container-fluid"> 
  <div class="row"> 
    <div class="col-12 col-sm-6 col-lg-4">First Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Second Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Third Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Forth Column</div> 
  </div> 
 </div> 
```

_Tenga en cuenta que `col-md` y `col-xl` no están definidos, donde un tamaño no está definido, por defecto bajará al siguiente tamaño más pequeño que se haya especificado._

Bootstrap proporciona un sistema de cuadrícula de 12 columnas ya hecho para usar en diseños. Considere el siguiente código.

```html

   <div class="container"> 
    <div class="row"> 
        <div class="col-md-6">Content</div> 
        <div class="col-md-6">Content</div> 
    <div> 
   </div> 
```

dónde:
```
- col = column 
 - md = screen size 
 - 6 = column width 
```

Como sistema de cuadrícula de 12 columnas, todos los anchos de columna de cuadrícula definidos por el usuario deben agregar hasta 12.

Los valores de tamaño de pantalla se pueden asignar de la siguiente manera:

*   xs - <768px Teléfonos
    
*   sm - <992px tabletas
    
*   md - <1200px Portátiles
    
*   lg -> 1200px Desktops
    
    Bootstrap es móvil primero y sensible.
    
    Primero, lo móvil significa que el diseño de la cuadrícula responderá automáticamente a pantallas más pequeñas. El HTML luego define el diseño de la cuadrícula para pantallas más grandes.
    

El siguiente código e imagen muestra lo que es posible utilizando diferentes anchos de columna.

```html

    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-6">Content</div> 
            <div class="example col-md-6">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
        </div> 
    </div> 
```

![Rejilla de 12 col.](https://github.com/bflatt72/bflatt72.github.io/blob/master/img/bootstrapgrid1.png)

#### Más información:

[Bootstrap Docs - Sistema de rejilla](https://getbootstrap.com/docs/4.0/layout/grid/)

_Esta guía se basa en Bootstrap v4 (funcionará con v3, excepto que las pantallas extra pequeñas se definen como `xs` y no hay tamaño `xl` )_

*   Extra grande: **Ancho de la ventana gráfica> = 1200px**
*   Grande: **ancho de la ventana gráfica = = 992 px**
*   Medio: **ancho de la ventana gráfica = = 768 px**
*   Pequeño: **ancho de la ventana gráfica = = 576 px**
*   Extra pequeño: **Anchuras de la ventana gráfica por debajo de 576px**

#### Más información:

https://getbootstrap.com/docs/4.0/layout/grid/