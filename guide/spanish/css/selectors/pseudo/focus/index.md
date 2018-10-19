---
title: Focus
localeTitle: Atención
---
## Atención

### Definición

El `:focus` representa un elemento que ha recibido un estado de enfoque, activado por un evento desde el teclado. La acción de activación proviene de presionar la tecla **TAB** , que crea visualmente un anillo alrededor de un elemento.

### Sintaxis

`:focus`

### Ejemplo
```
a:focus { 
  color: red; 
 } 
```

### Salida

[JSfiddle Link](https://jsfiddle.net/ejae7vb3/1/)

#### Más información:

[MDN - Red de Desarrolladores de Mozilla | : foco - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

La pseudo-clase CSS: focus se usa para seleccionar el elemento que tiene el foco (como una entrada de formulario).

En general, se activa cuando el usuario hace clic o toca un elemento o lo selecciona con la tecla "tab" del teclado.

Sintaxis:

```css
:focus 
```

## Ejemplo

HTML:

```html

<form> 
  <input type="text" value="The background will turn yellow when you click on it."> 
 </form> 
```

CSS:

```css
input:focus { 
   background-color: yellow; 
 } 
```

#### Más información:

Para más información visite [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

[W3.org | Documentación CSS](https://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)