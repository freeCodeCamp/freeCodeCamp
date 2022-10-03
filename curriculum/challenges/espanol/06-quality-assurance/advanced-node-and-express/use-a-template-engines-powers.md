---
id: 5895f70bf9fc0f352b528e64
title: Usar poderes de un motor de plantillas
challengeType: 2
forumTopicId: 301567
dashedName: use-a-template-engines-powers
---

# --description--

Una de las mayores características del uso de un motor de plantillas, es ser capaz de pasar variables desde el servidor al archivo de plantilla, antes de renderizarlo a HTML.

En tu archivo Pug, puedes usar variables referenciando el nombre de la misma como `#{variable_name}`, en la misma línea con otro texto en un elemento o utilizando un signo igual en el elemento sin un espacio como `p=variable_name`, lo cual asigna el valor de la variable al texto del elemento p.

 Pug se trata de usar espacios en blanco y pestañas para mostrar elementos anidados y reducir la cantidad de código necesario para crear un sitio hermoso. Lee la documentación de Pug para obtener más información sobre el uso y la sintaxis.

 Aquí hay un ejemplo:

 ```html
 <!--Typing this using Pug-->
 head
    script(type='text/javascript').
      if (foo) bar(1 + 5);
  body
    if youAreUsingPug
        p You are amazing
      else
        p Get on it!

<!--will lead to creating this code-->
  <head>
    <script type="text/javascript">
      if (foo) bar(1 + 5);
    </script>
  </head>
  <body>
    <p>You are amazing</p>
  </body>
  ```

Mirando nuestro archivo pug `index.pug` incluida tu proyecto, utilizamos las variables `title` y `message`.

Para pasarlos desde nuestro servidor, debes agregar un objeto como segundo argumento a tu `res.render` con las variables y sus valores. Por ejemplo, pasa este objeto junto con la configuración de las variables para tu vista de índice: `{title: 'Hello', message: 'Please login'}`

!Debe verse así: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});` Ahora actualiza tu página y debes ver esos valores representados en tu vista en el lugar correcto como se establece en tu archivo `index.pug`!

Envía tu página cuando creas que la tienes correcta. Si te encuentras con errores, puedes consultar el <a href="https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871" target="_blank" rel="noopener noreferrer nofollow">proyecto completado hasta este momento</a>.

# --hints--

Pug debe procesar correctamente las variables.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/').then(
    (data) => {
      assert.match(
        data,
        /pug-variable("|')>Please login/gi,
        'Your projects home page should now be rendered by pug with the projects .pug file unaltered'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
