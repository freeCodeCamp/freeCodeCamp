---
title: Flex-grow
localeTitle: Flexión de crecimiento
---
# Flex-Grow

La propiedad flex-grow es una propiedad flexbox que le permite especificar la asignación de espacio libre a contenedores dentro de un contenedor flexible. ¡Proporciona una solución a todo ese espacio no deseado!

Te va a convertir tu contenedor de esta

![](https://cdn-media-1.freecodecamp.org/imgr/lFJaBUfh.png)

# **a esto**

![](https://cdn-media-1.freecodecamp.org/imgr/4X8ITZih.png)

¿Lo que acaba de suceder?

Bueno, agregamos dos cosas a la sintaxis css.

HTML

```html

<p class = "ten">1</p> 
 <p class = "twenty">2</p> 
```

CSS

```css
body { 
  display:flex; 
 } 
 
 p { 
  flex-grow: 1; 
 } 
```

Pasaron dos cosas

1.  El contenedor principal se convirtió en una pantalla flexible por `display:flex`
2.  El "espacio libre" restante se asignó luego entre los contenedores p restantes en una proporción igual, ya que cada uno tiene una propiedad de flex-grow de 1.

¿Qué pasa si tenemos p contenedores con diferentes propiedades de flex-grow?

Veamos un ejemplo.

Primero vamos a crear dos párrafos y habilitar la visualización: flex;

![](https://cdn-media-1.freecodecamp.org/imgr/wPqUgsih.png)

Note algunas cosas

*   El esquema de color es agradable
*   Hay un espacio vacío a la derecha de las dos cajas.

Ese espacio vacío es el "espacio libre" que se asignará a cada uno de los diferentes párrafos más adelante, dependiendo de sus propiedades de flex-grow.

Para ver esto en acción, démosle al primero una clase de "diez" y una propiedad de flex-grow de 1. También le demos al segundo una clase de "veinte" y una propiedad de flex-grow de 2.

![](https://cdn-media-1.freecodecamp.org/imgr/7n0V1G4h.png)

Note algunas cosas

1.  El tamaño del segundo no es el doble del del primero, a pesar de tener una propiedad de flex-grow que es el doble del primero.
2.  Se llena todo el espacio. (Algunos márgenes se agregaron al lado para permitir que se vea más claramente).

A medida que cambiamos el tamaño de la pantalla, también encontramos que el primero se reduce al doble de la velocidad del segundo.

![](https://cdn-media-1.freecodecamp.org/imgr/pa4grM8h.png)

#### Más información: