---
title: Debugging JavaScript with Browser Devtools
localeTitle: Depuración de JavaScript con Devtools del navegador
---
Como desarrollador, a menudo querrás depurar el código. Es posible que ya haya usado `console.log` en algunos de los desafíos, que es la forma más sencilla de depurar.

En este artículo, te contaremos algunos de los trucos más interesantes para depurar utilizando las herramientas de depuración nativas de los navegadores.

## Una breve descripción del editor de código de FreeCodeCamp:

Antes de saltar a la depuración, podemos filtrar algunos datos secretos sobre ese _increíble motor de verificación de códigos_ en FCC.

Usamos un [CodeMirror](http://codemirror.net/mode/javascript/index.html) personalizado, como el editor de código. Se utiliza una [función `eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) para evaluar el código JavaScript representado como una cadena desde el editor. Cuando se llama a `eval()` , los navegadores ejecutarán su código de forma nativa. Aprenderemos más por qué este secreto es importante en las secciones posteriores de este artículo.

## Ahora pasamos a los trucos:

## Google Chrome DevTools

Google Chrome es uno de los navegadores más populares con un motor de JavaScript incorporado llamado [V8](https://developers.google.com/v8/) , y ofrece un gran conjunto de herramientas para desarrolladores llamados [Chrome DevTools](https://developer.chrome.com/devtools) . Se recomienda visitar su [guía completa de depuración de JavaScript](https://developer.chrome.com/devtools/docs/javascript-debugging) .

### 1: Fundamentos de DevTools

#### Lanzamiento de Chrome DevTools

Pulsa `F12`

. Alternativamente puede presionar

`Ctrl` + `Shift` + `I`

en Windows y Linux o

`Cmd` + `Shift` + `I`

en Mac, o si le encanta su mouse, vaya a `Menu > More Tools > Developer Tools` .

#### Conocer las `Sources` y las pestañas de la `console` .

Estas dos pestañas son las que quizás sean tus mejores amigas al depurar. La pestaña `Sources` se puede usar para visualizar todos los scripts que se encuentran en la página web que está visitando. Esta pestaña tiene secciones para la ventana de código, árbol de archivos, pila de llamadas y ventanas de visualización, etc.

La pestaña de la `console` es donde va toda la salida del registro. Además, puede utilizar el indicador de la pestaña de la consola para ejecutar el código JavaScript. Es una especie de símbolo del sistema en Windows, o terminal en Linux.

_Consejo: Alterne la consola en cualquier momento en DevTools utilizando la `Esc` ._

### 2: Atajos y características comunes

Si bien puede visitar la [lista completa de accesos directos](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts) , a continuación se enumeran algunos de los más utilizados:

Característica de Windows, Linux Mac  
Buscar una palabra clave, regex es compatible. `Ctrl` + `F``Cmd` + `F`  
Buscar y abrir un archivo `Ctrl` + `P``Cmd` + `P`  
Saltar a la línea `Ctrl` + `G` + `:line_no``Cmd` + `G` + `:line_no`  
Agregue un punto de interrupción `Ctrl` + `B` , o haga clic en la línea no. `Cmd` + `B` , o haga clic en la línea no.  
Pausar / reanudar la ejecución del script `F8` `F8`  
Paso sobre la siguiente función llamada `F10` `F10`  
Paso a la siguiente función llamada `F11` `F11`

### 3: Usando un Mapa de Origen para nuestro Código

Una de las características más interesantes que te encantará es la [depuración de secuencias de comandos dinámicas](https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript) , sobre la marcha, a través de los [mapas de origen](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps) .

Cada script se puede visualizar en la pestaña Fuente de DevTools. La pestaña fuente tiene todos los archivos fuente de JavaScript. Pero el código del editor de códigos se ejecuta a través de `eval()` en un contenedor llamado máquina virtual (VM) dentro del proceso del navegador.

Como ya habrá adivinado, nuestro código es en realidad un script que no tiene un nombre de archivo. Así que no vemos eso en la pestaña Fuente.

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": destellos") **_¡Aquí viene el hack!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": destellos")

Debemos aprovechar `Source Maps` para asignar un nombre al JavaScript de nuestro editor. Es bastante simple:

Digamos que estamos en el desafío de [factorializar](https://www.freecodecamp.com/challenges/factorialize-a-number) , y nuestro código se ve así:
```
function factorialize(num) { 
  if(num <= 1){ 
  ... 
 } 
 factorialize(5); 
```

Todo lo que necesitamos hacer es agregar `//# sourceURL=factorialize.js` en la parte superior del código, es decir, la primera línea:
```
//# sourceURL=factorialize.js 
 
 function factorialize(num) { 
  if(num <= 1){ 
  ... 
```

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": destellos") **_Y Eureka eso es todo!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": destellos")

Ahora abre DevTools y busca el nombre del archivo. ¡Añade puntos de quiebre, depura y disfruta!