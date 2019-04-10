---
title: Sass Syntax and Tools
localeTitle: Sass sintaxis y herramientas
---
_"Un artista es tan bueno como sus herramientas"._

Eso no es necesariamente cierto, pero las herramientas que utilizamos pueden hacer nuestras vidas más fáciles y nuestras tareas más manejables. ¡Imagina escribir código sin atajos de teclado ni fragmentos disponibles! No es el fin del mundo, pero entiendes lo esencial.

Las "herramientas", o más comúnmente denominadas directivas, que analizaremos son en realidad características integradas que vienen incluidas con Sass y pueden ayudarnos como desarrolladores a escribir DRY-er (Don't Repeat Yourself) y un código más limpio.

_Si desea seguir su propio editor de texto, le recomiendo que instale un **resaltador de sintaxis Sass** . Atom y Sublime Text así como algunos otros editores son compatibles con estos._

## Variables

Si ha escrito código en otro lenguaje de programación (JavaScript, Python, Java, C, etc.), entonces está familiarizado con el concepto de variables. Si no, las variables son básicamente declaraciones declaradas que pueden almacenar algún tipo de valor como un número o una cadena.

En Sass, las variables funcionan esencialmente de la misma manera y se pueden declarar con un carácter "$" junto al nombre de la variable:
```
$main-color: #CCCCCC; 
```

La variable anterior es almacenar el código de color hexadecimal para un tono de gris. Podemos declarar esta variable dentro de cualquier archivo `.scss` o `.sass` el que estemos trabajando. También podemos incorporar la variable en una etiqueta (etiqueta HTML5, ID, clase, pseudo selectores) cuando estilemos:
```
$main-color: #CCCCCC; 
 
 header { 
  background-color: $main-color; 
 } 
```

En este fragmento de código, hemos asignado el valor del `background-color` de `background-color` del encabezado al valor almacenado en `$main-color` , que (cuando Sass compila a CSS) se muestra como:
```
header { 
  background-color: #CCCCCC; 
 } 
```

¡Ordenado! Pero, ¿no podríamos haber establecido el `background-color` en `#CCCCCC` en primer lugar? La respuesta es sí, pero hay más que eso.

Digamos que estamos diseñando un sitio web de varias páginas para un cliente y acabamos de elegir un simple "esquema de color" de tres colores. Nuestra barra de navegación, pie de página son de un color, y quizás nuestros elementos de artículo, párrafos y encabezados sean uno de los dos colores restantes. Entonces, un día, el cliente cambia de opinión el esquema de color que seleccionamos y quiere que se cambie. Estupendo.

Entonces, tenemos la tarea de revisar nuestras múltiples hojas de estilo (o tal vez una hoja de estilo masiva si así lo prefieres) y cambiar todos esos valores de color. Tal vez mezclamos uno. O tal vez nos perdemos uno y tenemos que volver para solucionarlos.

Con las variables (y el uso de los parciales de Sass que veremos más adelante) podemos ajustar los valores en las declaraciones de variables, y en cualquier otro lugar utilizamos las variables en nuestra (s) hoja (s) de estilos, los valores cambiarán para reflejar la asignación de variables que cambiamos. Este es solo un ejemplo de cuán útiles pueden ser las variables cuando se usan en consecuencia en Sass. Las variables se vuelven más cruciales a medida que agregamos a nuestro cinturón de herramientas Sass.

En esa nota, vamos a abordar mixins.

## Mixins

Una mezcla es un bloque de código reutilizable que puede tomar argumentos, al igual que una función en JavaScript. Sin embargo, no debe confundirse con la `@function` función real en Sass.

Los mixins se declaran prefijando el carácter "@" delante de la palabra "mixin", luego el nombre del mixin. A continuación se muestra un ejemplo de una mezcla llamada btn que toma dos argumentos y los aplica a las propiedades de CSS:
```
@mixin btn($color, $text-color) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

Después de escribir un mixin, nada sucederá por defecto porque no hemos puesto en uso el mixin (similar a escribir una función en lugar de llamar a una función). Vamos a integrar nuestra mezcla. Lo incluiremos en un selector de `button` HTML5 usando la declaración `@include` :

_La declaración `@include` nos permite incorporar nuestro estilo de mezcla en un selector de CSS de nuestra elección. En este caso, el selector de `button` con los valores azul y blanco pasaron como argumentos._
```
button { 
  @include btn(blue, white); 
 } 
```

Que es algo que podemos usar en cualquier otro selector de HTML si lo elegimos. Esto compilaría hasta:
```
button { 
  background-color: blue; 
  color: white; 
  padding: 1em; 
 } 
```

Simplemente utilizando la línea única `@include btn(blue, white);` Dentro de nuestro selector de botones, podemos introducir todo el código escrito dentro de nuestra mezcla con azul y blanco pasados ​​como argumentos. Además, podemos establecer valores predeterminados para los argumentos pasados ​​a una mezcla. Por ejemplo, supongamos que queremos que nuestra combinación de botones se ajuste de manera predeterminada a un color específico y color de fuente si no se pasan valores cuando se llama
```
@mixin button($color: green, $text-color: red) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

Al escribir ":" seguido del valor predeterminado que queremos establecer, hemos asignado el verde como valor predeterminado para nuestro argumento `$color` , y el rojo como valor predeterminado para nuestro argumento `$text-color` .

Ahora si fuéramos a llamar a nuestro mixin sin pasar ningún valor ...
```
button { 
  @include btn; 
 } 
```

Esto se compila en:
```
button { 
  background-color: green; 
  color: red; 
  padding: 1em; 
 } 
```

Si quisiéramos poner nuestras variables para usar con nuestro mixin, también podríamos hacerlo:
```
$main-color: #CCCCCC; 
 $second-color: #FFFFFF; 
 
 @mixin button($color: $main-color, $text-color: $second-color) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

En el ejemplo anterior, declaramos dos variables con distintos valores de color hexadecimales, luego establecemos los argumentos `$color` y `$text-color` como predeterminados para nuestras variables si no se pasa ningún argumento.

A menudo se considera una buena práctica establecer valores predeterminados para una mezcla, pero definitivamente no es necesario. Encontrará que muchos desarrolladores tienen su propia forma de escribir código y opiniones variadas sobre lo que se considera el "mejor".

La diversión no se detendrá aquí. Hay un buen puñado de otros trucos útiles que podemos realizar al escribir mixins y un sinfín de posibilidades en cómo escribirlos. Lo que es importante quitar de los mixins es que sirven como módulos u "objetos" en los que podemos declarar ciertos estilos, pasar valores y reutilizarlos en nuestro código donde sea necesario en lugar de repetirnos continuamente mientras diseñamos diferentes elementos. Pueden ayudarnos a mantenernos más fieles al principio DRY.

## Se extiende

La última herramienta que discutiremos es la directiva de extensión. Las extensiones se pueden usar para duplicar un estilo que hemos aplicado previamente a otro elemento. Sin embargo, hay muchas más cosas detrás de escena cuando se implementa una extensión y esto puede producir algunos efectos secundarios no deseados en nuestro estilo si no tenemos cuidado.

A continuación se muestra un ejemplo de una directiva extendida que se está poniendo en uso:
```
.primary-module { 
  color: red; 
 } 
 
 .another-module { 
  @extend .primary-module; 
 } 
 
 // This ouputs the following CSS 
 
 .primary-module, .another-module { 
  color: red; 
 } 
```

Nada demasiado sombrío va aquí todavía. Tenemos un selector de orientación. `.another-module` que utiliza una extensión para clonar el estilo que se aplicó al selector `.primary-module` . Esto produce un estilo de `color: red;` aplicándose a la clase `.primary-module` y `.another-module` . Logical hasta ahora y una herramienta que tiene un efecto similar a la inclusión de una mezcla en varios elementos que necesitan compartir el mismo estilo.

Ahora echemos un vistazo más de cerca a un ejemplo diferente y escojamos en qué se complica un poco una directiva extendida:
```
.primary-module p { 
  color: red; 
 } 
 
 .another-module { 
  @extend .primary-module; 
 } 
 
 // This outputs the following CSS 
 
 .primary-module p, .another-module p { 
  color: red; 
 } 
```

¿Lo atrapaste? El selector de `.another-module` está utilizando una extensión en el `.primary-module p` . Tenga en cuenta que debido a que `.primary-module` tiene un selector de descenso de `p` (etiqueta de párrafo), cuando se llama a la extensión y se compila nuestro código Sass, el estilo de `color: red;` se está aplicando a `.primary-module p` y `.another-module p` .

Lo que está sucediendo es que la directiva de extensión no es solo clonar el estilo de `.primary-module p` , sino que también está clonando la etiqueta de selector de descenso de `p` y agregando eso a `.another-module` . Estamos copiando el estilo y el selector descendiente de lo que tomamos prestado. Como resultado, el estilo que extendimos se está aplicando a los elementos de párrafo que son descendientes de otro `.another-module` y no simplemente a los elementos con una clase de otro `.another-module` .

Puede ver dónde algo como esto puede volverse peludo si no estamos conscientes de lo que está haciendo la extensión.

Así que echamos un vistazo detrás de las cortinas y ahora puedes estar pensando _¿Cuál es el punto de usar las extensiones? ¿Vale la pena o puedo usar mixins?_

La respuesta corta (hay mucho más que decir sobre este tema) es que a menudo se usa la extensión para aprovechar la herencia de estilos aplicados a otros elementos o para hacer un uso particular de lo que se conoce como **clases silenciosas** en Sass. Las extensiones generalmente pueden lograr lo que las mezclas pueden usarse cuando se usan con cuidado, pero una no debe usarse sin pensar en lugar de otra. La práctica los extiende y los usa con un propósito específico en mente.

En cuanto a las clases silenciosas, esto es algo que se cubrirá en una próxima sección de este artículo. Por ahora, simplemente sepa que las clases silenciosas son selectores en Sass que tienen el prefijo con un carácter "%" y no se compilarán en absoluto a menos que se llame por una extensión.

## Conclusión

Si has llegado al final de este artículo, mereces un reconocimiento. Escribí esto con la esperanza de explicar a Sass de una manera que desearía que me lo hubieran enseñado cuando empecé a jugar con él. Si CSS es algo con lo que luchas o siempre te has sentido aprensivo debido a la rapidez con que se convierte en un desastre, entonces espero que Sass comience a aliviar algunas de esas frustraciones.

Este artículo está pensado como una especie de "curso intensivo" para mojarse los pies en el mundo de Sass. Todavía hay una cantidad significativa de herramientas y características que hacen que Sass brille, así como las mejores prácticas cuando se trata de **estructurar sus hojas de estilo y dividirlas en parciales** .

Mi consejo es comenzar a usar sandboxing en tu propio editor de texto y en [Sassmeister](http://www.sassmeister.com/) para [sentirte](http://www.sassmeister.com/) más cómodo con los conceptos que este artículo ha cubierto. También esté atento al curso de Free Code Camp Sass próximamente.

Sal de ahí y sube de nivel tu juego Sass.