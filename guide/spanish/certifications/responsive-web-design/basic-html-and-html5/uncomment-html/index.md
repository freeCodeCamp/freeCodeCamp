---
title: Uncomment HTML
localeTitle: Descomentar HTML
---
## Descomentar HTML

El tema del comentario es a menudo un poco confuso al principio. Mira el ejemplo:
```
<!-- This is a commented block. 
 It doesn't matter how long it is, if it has <h1>HTML elements</h1> in it or if it develops 
 into 
 few lines, 
 everything between the first weird series of character and the last is commented out --> 
```

Puedes usar el comentario en línea también: `<!-- Uh, I does not exists! -->` y aqui esta!

Lo único que hay que tener en cuenta es que cuando ves este conjunto de caracteres `<!--` todo lo que hay desde allí está comentado desde que encuentras el especular `-->` ; ¡Estas son las etiquetas de apertura y cierre de un elemento HTML!

##### UNCOMMENTO

Descomentar significa eliminar las cosas del texto del comentario: para descomentar el elemento h3 de la siguiente oración (que está todo comentado):
```
<!-- <h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> --> 
```

es tan fácil como:
```
<!-- <h1>Comment header</h1> --> <h3>Comment subtle</h3> <!-- <article>I am the text of the comment</article> --> 
```

Observe cómo se ha agregado una etiqueta de comentario de cierre ( `-->` ) antes del elemento h3 HTML para que coincida con la etiqueta de comentario de apertura al comienzo de la oración y se agregó una etiqueta de comentario de apertura ( `<!--` ) después de que coincida con el cierre etiqueta al final: de esta manera, ha creado dos comentarios en línea, uno antes del elemento h3 y otro después.

Si quieres descomentar todo es aún más fácil:
```
<h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> 
```

Solo remueve la etiqueta de apertura y cierre del comentario.