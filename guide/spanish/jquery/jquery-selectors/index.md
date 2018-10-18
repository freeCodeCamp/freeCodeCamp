---
title: jQuery Selectors
localeTitle: selectores jQuery
---
## selectores jQuery

jQuery utiliza selectores de estilo CSS para seleccionar partes o elementos de una página HTML. Luego le permite hacer algo con los elementos utilizando métodos o funciones de jQuery.

Para usar uno de estos selectores, escriba un signo de dólar y paréntesis después de él: `$()` . Esto es una abreviatura de la función `jQuery()` . Dentro de los paréntesis, agregue el elemento que desea seleccionar. Puedes usar comillas simples o dobles. Después de esto, agregue un punto después de los paréntesis y el método que desea usar.

En jQuery, los selectores de clase e ID son como los de CSS.

Aquí hay un ejemplo de un método jQuery que selecciona todos los elementos de párrafo y les agrega una clase de "seleccionados":

```javascript
<p>This is a paragraph selected by a jQuery method.</p> 
 <p>This is also a paragraph selected by a jQuery method.</p> 
 
 $("p").addClass("selected"); 
```

En jQuery, los selectores de clase e ID son los mismos que en CSS. Si desea seleccionar elementos con una determinada clase, use un punto ( `.` ) Y el nombre de la clase. Si desea seleccionar elementos con un ID determinado, use el símbolo de hash ( `#` ) y el nombre de ID. Tenga en cuenta que el HTML no distingue entre mayúsculas y minúsculas, por lo tanto, es una buena práctica mantener las etiquetas HTML y los selectores de CSS en minúsculas.

Seleccionando por clase:

```javascript
<p class="p-with-class">Paragraph with a class.</p> 
 
 $(".p-with-class").css("color", "blue"); // colors the text blue 
```

Seleccionando por ID:

```javascript
<li id="li-with-id">List item with an ID.</li> 
 
 $("#li-with-id").replaceWith("<p>Socks</p>"); 
```

También puede seleccionar ciertos elementos junto con sus clases e ID:

### Seleccionando por clase

Si desea seleccionar elementos con una determinada clase, use un punto (.) Y el nombre de la clase.

```html

<p class="pWithClass">Paragraph with a class.</p> 
```

```javascript
$(".pWithClass").css("color", "blue"); // colors the text blue 
```

También puede usar el selector de clase en combinación con un nombre de etiqueta para ser más específico.

```html

<ul class="wishList">My Wish List</ul>`<br> 
```

```javascript
$("ul.wishList").append("<li>New blender</li>"); 
```

### Seleccionando por ID

Si desea seleccionar elementos con un determinado valor de ID, use el símbolo de hash (#) y el nombre de ID.

```html

<li id="liWithID">List item with an ID.</li> 
```

```javascript
$("#liWithID").replaceWith("<p>Socks</p>"); 
```

Al igual que con el selector de clase, esto también se puede utilizar en combinación con un nombre de etiqueta.

```html

<h1 id="headline">News Headline</h1> 
```

```javascript
$("h1#headline").css("font-size", "2em"); 
```

### Selectores que actúan como filtros.

También hay selectores que actúan como filtros, generalmente comienzan con dos puntos. Por ejemplo, el `:first` selector selecciona el elemento que es el primer elemento secundario de su elemento primario. Aquí hay un ejemplo de una lista desordenada con algunos elementos de la lista. El selector jQuery debajo de la lista selecciona el primer elemento `<li>` en la lista, el elemento de la lista "Uno", y luego usa el método `.css` para cambiar el texto a verde.

```html

   <ul> 
      <li>One</li> 
      <li>Two</li> 
      <li>Three</li> 
   </ul> 
```

```javascript
$("li:first").css("color", "green"); 
```

**Nota:** No olvide que aplicar css en JavaScript no es una buena práctica. Siempre debes dar tus estilos en archivos css.

Otro selector de filtrado,: `:contains(text)` , selecciona elementos que tienen un determinado texto. Coloque el texto que desea hacer coincidir entre paréntesis. Aquí hay un ejemplo con dos párrafos. El selector jQuery toma la palabra "Moto" y cambia su color a amarillo.

```html

    <p>Hello</p> 
    <p>World</p> 
```

```javascript
$("p:contains('World')").css("color", "yellow"); 
```

De manera similar, el `:last` selector selecciona el elemento que es el último hijo de su padre. El selector JQuery a continuación selecciona el último elemento `<li>` en la lista, el elemento de la lista "Tres", y luego usa el método `.css` para convertir el texto en amarillo.

`$("li:last").css("color", "yellow");`

**Nota:** En el selector de jQuery, `World` está entre comillas simples porque ya está dentro de un par de comillas dobles. Siempre use comillas simples dentro de comillas dobles para evitar terminar involuntariamente una cadena.

**Selectores multiples** En jQuery, puede usar varios selectores para aplicar los mismos cambios a más de un elemento, usando una sola línea de código. Para ello, separe los diferentes identificadores con una coma. Por ejemplo, si desea establecer el color de fondo de tres elementos con los identificadores cat, dog y rat respectivamente en rojo, simplemente haga lo siguiente:
```
$("#cat,#dog,#rat").css("background-color","red"); 
```

Estos son solo algunos de los selectores disponibles para usar en jQuery. Consulte la sección Más información para obtener un enlace a la lista completa en el sitio web de jQuery.

#### Más información:

*   [Lista completa de selectores jQuery](http://api.jquery.com/category/selectors/)