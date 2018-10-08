---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
localeTitle: Entender los peligros de usar el código imperativo
challengeType: 1
---

## Description
<section id='description'> 
La programación funcional es un buen hábito. Mantiene tu código fácil de administrar y te salva de errores furtivos. Pero antes de que lleguemos allí, veamos un enfoque imperativo de la programación para resaltar dónde puede tener problemas. 
En inglés (y en muchos otros idiomas), el tiempo imperativo se usa para dar comandos. De manera similar, un estilo imperativo en la programación es uno que le da a la computadora un conjunto de declaraciones para realizar una tarea. 
A menudo, las declaraciones cambian el estado del programa, como la actualización de variables globales. Un ejemplo clásico es escribir un bucle <code>for</code> que da instrucciones exactas para iterar sobre los índices de una matriz. 
En contraste, la programación funcional es una forma de programación declarativa. Usted le dice a la computadora lo que quiere hacer llamando a un método o función. 
JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes, por lo que no necesita escribir cómo la computadora debe realizarlos. Por ejemplo, en lugar de utilizar el bucle <code>for</code> mencionado anteriormente, puede llamar al método de <code>map</code> que maneja los detalles de la iteración en una matriz. Esto ayuda a evitar errores semánticos, como los &quot;Errores Off By One&quot; que se cubrieron en la sección de Depuración. 
Considere el escenario: está navegando por la web en su navegador y desea rastrear las pestañas que ha abierto. Intentemos modelar esto usando un código simple orientado a objetos. 
Un objeto de ventana se compone de pestañas, y normalmente tiene más de una ventana abierta. Los títulos de cada sitio abierto en cada objeto de Ventana se mantienen en una matriz. Después de trabajar en el navegador (abrir nuevas pestañas, fusionar ventanas y cerrar pestañas), desea imprimir las pestañas que aún están abiertas. Las pestañas cerradas se eliminan de la matriz y las nuevas pestañas (para simplificar) se agregan al final de la misma. 
El editor de código muestra una implementación de esta funcionalidad con funciones para <code>tabOpen()</code> , <code>tabClose()</code> y <code>join()</code> . Las <code>tabs</code> matriz forman parte del objeto Window que almacena el nombre de las páginas abiertas. 
<h4> Instrucciones <h4> 
Ejecutar el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, lo que provoca un resultado incorrecto. La lista final de pestañas abiertas debe ser <code>[&#39;FB&#39;, &#39;Gitter&#39;, &#39;Reddit&#39;, &#39;Twitter&#39;, &#39;Medium&#39;, &#39;new tab&#39;, &#39;Netflix&#39;, &#39;YouTube&#39;, &#39;Vine&#39;, &#39;GMail&#39;, &#39;Work mail&#39;, &#39;Docs&#39;, &#39;freeCodeCamp&#39;, &#39;new tab&#39;]</code> pero la salida será ligeramente diferente. 
Revise el código y vea si puede resolver el problema, luego avance al próximo desafío para obtener más información. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Avanza para entender el error.
    testString: 'assert(true, "Move ahead to understand the error.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());

alert(finalTabs.tabs);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
