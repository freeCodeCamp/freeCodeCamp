---
title: Tables
localeTitle: Mesas
---
## \## Mesas

#### Tabla basica

Para lograr el ejemplo de estilo básico, agregue la clase base `.table` a cualquier elemento `<table>` .

**Ejemplo**
```
<table class="table"> 
  ... 
 </table> 
```

![Tabla basica](https://github.com/TroyB12/Pictures/blob/master/Basic%20Table.PNG)

* * *

#### Tabla Rayada

Para lograr el efecto de fila de rayas (zebra-striping) en las tablas, use `.table-striped` además de `.table` en cualquier elemento `<table>` . Las tablas con rayas se diseñan a través del selector de CSS `:nth-child` , que no está disponible en Internet Explorer 8.
```
<table class="table table-striped"> 
  ... 
 </table> 
```

![Mesa de rayas](https://github.com/TroyB12/Pictures/blob/master/Table%20Striped.PNG)

* * *

#### Mesa bordeada

Para lograr la tabla bordeada, use `.table-bordered` además de `.table` en cualquier elemento `<table>` .
```
<table class="table table-bordered"> 
  ... 
 </table> 
```

![Mesa bordeada](https://github.com/TroyB12/Pictures/blob/master/Table%20Bordered.PNG)

* * *

#### Tabla Hover

Para lograr el efecto de hover row en las tablas, use `.table-bordered` además de `.table` en cualquier elemento `<table>` .
```
<table class="table table-hover"> 
  ... 
 </table> 
```

![Tabla de desplazamiento](https://github.com/TroyB12/Pictures/blob/master/Table%20Hover.PNG)

* * *

#### Mesa Condensada

Para lograr la tabla condensada, use `.table-condensed` además de `.table` en cualquier elemento `<table>` .
```
<table class="table table-condensed"> 
  ... 
 </table> 
```

![Mesa condensada](https://github.com/TroyB12/Pictures/blob/master/Table%20Condensed.PNG)

* * *

#### Tabla sensible

Con el fin de lograr la tabla receptiva envolviendo cualquier tabla `.table` en un elemento `.table-responsive` .

...

![Tabla de respuesta](https://github.com/TroyB12/Pictures/blob/master/Table%20Responsive.PNG)

* * *

Los desarrolladores pueden cambiar el estilo de cada fila y / o celda individual utilizando **clases contextuales** .

*   `.active` : aplica el color de `.active` sobre una fila o celda en particular
    
*   `.success` - Indica una acción exitosa o positiva
    
*   `.info` - Indica un cambio o acción informativa neutral
    
*   `.warning` : indica una advertencia que podría necesitar atención
    
*   `.danger` - Indica una acción peligrosa o potencialmente negativa.
    
    ... ... ... ... ...
    
    ... ... ... ... ...
    

![Tabla de clases contextuales](https://github.com/TroyB12/Pictures/blob/master/Table%20Contextual%20Classes.PNG)

* * *