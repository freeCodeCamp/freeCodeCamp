---
title: CSS Performance
localeTitle: Rendimiento CSS
---
## Rendimiento CSS

La mayoría de las veces, CSS no es la razón por la que su página web se carga lentamente. En algunos casos, puede reducir el tiempo de carga de sus sitios web si su archivo CSS está lleno de cientos de selectores que no funcionan. Aquí hay algunas pautas básicas sobre cómo escribir CSS rápido y mantenible.

### Rendimiento de diferentes selectores

Mira este ejemplo:

```css
#unique-id { }         // fastest 
 .general-class { }  // also fast 
 li { }              // ok 
 * { }               // slow 
```

Como era de esperar, los selectores de ID son los más rápidos, seguidos de las clases. Los elementos de etiquetas simples como `div` o `li` se procesan bastante lentamente.

### Cómo se selecciona un elemento

Imagina el siguiente CSS:

```css
nav ul li a { 
  color: #fff; 
 } 
```

Esta no es una buena idea Hay mejores formas de seleccionar un elemento de enlace en su navegación. Pero, ¿cómo selecciona realmente la computadora el elemento correcto? En primer lugar se encuentra cada `a` elemento en su página. Luego verifica si está dentro de un elemento `li` , dentro de una `ul` dentro de un `div` . Así que un navegador lee los selectores de derecha a izquierda. Si tiene cientos de enlaces, esto podría tardar un tiempo en procesarse, entonces, ¿qué debe hacer?

### Mejorar el rendimiento de CSS

Como una regla de oro:

*   Evite los selectores descendientes, como `ul li a` etc.
*   No `.footer-nav-link` utilizar muchos nombres de clase descriptivos `.footer-nav-link`
*   En su lugar, intente utilizar el selector de elementos secundarios si desea seleccionar un elemento secundario directo de un elemento `.image-container > img`
*   Evitar el uso de selectores universales `* { }`

### ¿Es esto realmente todo lo necesario?

Esto pudo haber sido un problema hace 20 años cuando las computadoras no eran tan rápidas como lo son hoy. Por favor, no evite por completo los selectores descendientes en el futuro. Pero tenga en cuenta que su objetivo es escribir CSS mantenible, por lo que un poco de pensamiento podría ser apropiado. A veces, el `nav ul li a` no es una buena idea en una página que tiene cientos de enlaces.