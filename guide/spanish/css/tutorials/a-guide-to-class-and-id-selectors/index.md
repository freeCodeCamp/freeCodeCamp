---
title: A Guide to Class and Id Selectors
localeTitle: Una guía para los selectores de clase y de identificación
---
## Una guía para los selectores de clase y de identificación

Este es un artículo basado en selectores de CSS. CSS se utiliza para diseñar elementos HTML y la página web en general. Para que CSS diseñe un elemento en la página, primero debe seleccionar ese elemento.

Me gusta cómo necesita seleccionar un archivo en su computadora antes de borrarlo. Debe indicar a su máquina exactamente qué archivo desea modificar o eliminar. Del mismo modo, debe indicar a CSS qué elemento debe apuntar cuando aplique diferentes estilos y colores.

Aunque CSS puede seleccionar elementos muy bien, puede indicarle que seleccione elementos muy específicos. Al final de este artículo, se irá con el conocimiento para seleccionar y diseñar elementos específicos.

### ¿Qué es la clase y la identificación?

Digamos que tiene 5 elementos de párrafo en su código HTML.

```html

<p> First paragraph </p> 
 <p> Second paragraph </p> 
 <p> Third paragraph </p> 
 <p> Fourth paragraph </p> 
 <p> Fifth paragraph </p> 
```

Puedes dar a cada uno de ellos un color de fuente rojo usando CSS.

```css
p { 
    color: red; 
 } 
```

¡Eso es bastante fácil! Pero, ¿qué pasa si solo quieres darle un color de fuente al segundo párrafo? Eso es un poco difícil en este momento. Como no tenemos forma de identificar cada elemento de párrafo individualmente, no podemos seleccionarlos por separado.

_Clase e identificación al rescate._

La clase y la identificación actúan como tarjetas de identidad para elementos HTML. Ambas ayudan a separar un elemento de otro pero son ligeramente diferentes.

* * *

Digamos que te encuentras con un chico de algún club. Cuando le pide a esa persona la tarjeta de identidad de su club, muestra una con el nombre de su club. Ahora todos los miembros del mismo club tendrán la misma tarjeta de identidad, ¿verdad?

Si hay 3 clubes: A, B y C. Entonces, todos los miembros del club A tendrán los mismos documentos de identidad. Todos los miembros del club B también tendrán los mismos, aunque serán diferentes de los documentos de identidad del club A y del club C. Así es como sabes quién es de qué club.

Así es como funciona la `class` . Puedes dar un montón de elementos a una clase y estarán en un solo club. Al igual que una nueva regla en el club debe ser seguida por todos los miembros del club, de manera similar, todas las nuevas reglas de estilo se aplican a los elementos en el mismo club.

```html

<p class="bike"> Hayabusa </p> 
 <p class="car"> Chevrolet </p> 
 <p class="bike"> Hayley-Davidson </p> 
 <p class="car"> Lamborghini </p> 
```

Aquí tenemos 4 párrafos. Si miras los nombres de las clases, hay 2 "clubes". Ahora podemos seleccionar el club (o grupo) que queremos y aplicar los estilos que queremos en ellos.

```css
.bike { 
    color: blue; 
 } 
```

Puede seleccionar un grupo en lugar de un elemento en particular, antes del nombre del grupo con un punto `.` y aplica los estilos que quieras a ese grupo. En este ejemplo, el color de fuente del azul solo se aplica a los párrafos que tienen la clase de `bike` .

* * *

Si entendiste qué `class` es, entonces la identificación será fácil de entender.

De nuestro ejemplo anterior, una tarjeta de identidad del club representa al club y todos los miembros lo tienen. Sin embargo, si solicita su prueba de identidad individual, una persona mostrará un documento de identidad diferente que solo ellos tienen. Cada persona tiene una diferente y se puede usar para identificarlos individualmente.

Esto es lo que es la identificación. Al igual que las tarjetas de identidad personales, solo un elemento HTML puede tener una `id` particular. No hay dos elementos que tengan la misma `id` .

```html

<p id="car"> Ferrari </p> 
 <p id="car"> Ford </p> 
 <!-- This is incorrect--> 
 
 <p id="harley"> Harley-Davidson </p> 
 <p id="hayabusa"> Hayabusa </p> 
 <!--This is correct since an id is only used once.--> 
```

Una `id` también puede ser similar a una clave privada para su armario de taquilla en el club. Todos en el club tienen la misma tarjeta de identidad del club, pero la llave de casillero de cada uno es diferente y única.

Al igual que en el ejemplo de `class` , puede seleccionar un elemento en particular y aplicarle estilos añadiendo el nombre de identificación con `#` .

```css
#hayabusa { 
    font-style: bold; 
 } 
```

* * *

Es fácil de recordar - uso `.` antes del nombre para la _clase_ y un `#` antes del nombre para la _identificación_ .

Ambos tienen sus propios usos.

> la clase se usa cuando los estilos se aplican en múltiples elementos y la identificación se usa cuando los estilos se aplican en un elemento en particular.

Tenga esto en cuenta cuando use class e id para seleccionar y diseñar elementos particulares.

Con esto, ha agregado más herramientas a su caja de herramientas para diseñar elementos en una página web.