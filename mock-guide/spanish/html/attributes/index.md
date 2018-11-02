---
title: Attributes
localeTitle: Atributos
---
# Atributos HTML

Los elementos HTML pueden tener atributos, que contienen información adicional sobre el elemento.

Los atributos HTML generalmente vienen en pares nombre-valor, y siempre van en la etiqueta de apertura de un elemento. El nombre del atributo indica qué tipo de información está proporcionando sobre el elemento, y el valor del atributo es la información real.

Por ejemplo, un elemento de anclaje ( `<a>` ) en un documento HTML crea enlaces a otras páginas u otras partes de la página. Utiliza el atributo `href` en la etiqueta de apertura `<a>` para indicar al navegador a dónde envía el enlace un usuario.

Aquí hay un ejemplo de un enlace que envía a los usuarios a la página de inicio de freeCodeCamp:

```html

<a href="www.freecodecamp.org">Click here to go to freeCodeCamp!</a> 
```

Observe que el nombre del atributo ( `href` ) y el valor ("www.freeCodeCamp.org") están separados con un signo igual, y las comillas rodean el valor.

Hay muchos atributos HTML diferentes, pero la mayoría de ellos solo funcionan en ciertos elementos HTML. Por ejemplo, el atributo `href` no funcionará si se coloca en una etiqueta de apertura `<h1>` .

En el ejemplo anterior, el valor proporcionado al atributo `href` podría ser cualquier enlace válido. Sin embargo, algunos atributos solo tienen un conjunto de opciones válidas que puede usar, o los valores deben estar en un formato específico. El atributo `lang` le dice al navegador el idioma predeterminado de los contenidos en un elemento HTML. Los valores para el `lang` atributo deben utilizar códigos de idioma o país estándar, como `en` de Inglés, o `it` para el italiano.

## Atributos booleanos

Algunos atributos HTML no necesitan un valor porque solo tienen una opción. Estos se llaman atributos booleanos. La presencia del atributo en una etiqueta lo aplicará a ese elemento HTML. Sin embargo, está bien escribir el nombre del atributo y establecerlo igual a la opción del valor. En este caso, el valor suele ser el mismo que el nombre del atributo.

Por ejemplo, el elemento `<input>` en un formulario puede tener un atributo `required` . Esto requiere que los usuarios completen ese elemento antes de que puedan enviar el formulario.

Aquí hay ejemplos que hacen lo mismo:

```html

<input type="text" required > 
 <input type="text" required="required" > 
```

## Otros recursos

[Enlaces HTML](#) [Atributo Href](#) [Atributo Lang](#) [Elemento de entrada HTML](#) [Atributo Requerido](#)