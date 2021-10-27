---
id: 587d7b8e367417b2b2512b5d
title: Comprende los peligros de usar el código imperativo
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

La programación funcional es un buen hábito. Mantiene tu código fácil de manejar y evita que tengas errores incómodos. Pero antes de llegar allí, veamos un enfoque imperativo de la programación para destacar dónde pueden tener problemas.

En inglés (y muchos otros idiomas), la tensión imperativa se utiliza para dar órdenes. De forma similar, un estilo imperativo en la programación es aquel que le da a la computadora un conjunto de sentencias para llevar a cabo una tarea.

A menudo las sentencias cambian el estado del programa, como actualizar variables globales. Un ejemplo clásico es escribir un bucle `for` que dé instrucciones exactas para iterar sobre los índices de un arreglo.

Por el contrario, la programación funcional es una forma de programación declarativa. Le dice al ordenador lo que quieres hacer llamando a un método o función.

JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes para que no necesites escribir cómo debe ejecutarlas el equipo. Por ejemplo, en lugar de usar el bucle `for` mencionado anteriormente se podría llamar al método `map` que maneja los detalles de iteración sobre un array. Esto ayuda a evitar errores semánticos, como los "Off By One Errors" que fueron cubiertos en la sección Debugging.

Considere el escenario: está navegando por la web en su navegador y quiere rastrear las pestañas que ha abierto. Intentemos modelar esto con un código simple orientado a objetos.

Un objeto ventana está formado por pestañas y normalmente tienes más de una abierta. Los títulos de cada sitio abierto en cada objeto ventana se mantienen en un arreglo. Después de trabajar en el navegador (abriendo nuevas pestañas, combinando ventanas y cerrando pestañas), deseas imprimir las pestañas que todavía están abiertas. Las pestañas cerradas se eliminan de la matriz y las nuevas pestañas (por simplicidad) se añaden al final de la misma.

El editor de código muestra una implementación de esta funcionalidad con funciones para `tabOpen()`, `tabClose()`y `join()`. El array `tabs` es parte del objeto ventana que almacena el nombre de las páginas abiertas.

# --instructions--

Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, causando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenadas en `finalTabs.tabs` deberia ser `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` pero la lista producida por el código es un poco diferente.

Cambia `Window.prototype.tabClose` para que elimine la pestaña correcta.

# --hints--

`finalTabs.tabs` deberia ser `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

```js
assert.deepEqual(finalTabs.tabs, [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab'
]);
```

# --seed--

## --seed-contents--

```js
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

# --solutions--

```js
const Window = function(tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index);
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
```
