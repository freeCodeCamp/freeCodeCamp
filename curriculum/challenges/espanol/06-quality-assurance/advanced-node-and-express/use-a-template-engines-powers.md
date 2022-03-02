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

Recomendamos encarecidamente ver la sintaxis y estructura de Pug [aquí](https://github.com/pugjs/pug) en el README de GitHub. Pug se basa en el uso de espacios en blanco y pestañas para mostrar los elementos anidados y reducir la cantidad de código necesario para hacer un sitio hermoso.

Mirando nuestro archivo pug 'index.pug' incluido en tu proyecto, Se usan las variables *title* y *message*.

Para pasar estos a lo largo de nuestro servidor, necesitas añadir un objeto como segundo argumento a tu *res.render* con las variables y sus valores. Por ejemplo, pase este objeto para establecer las variables hacia la vista index: `{title: 'Hello', message: 'Please login'}`

Debe verse como: `res.render(process.cwd() + '/views/pug/index', {title: 'Hello', message: 'Please login'});`, Ahora actualiza tu página y deberías ver esos valores renderizados en tu vista en el lugar correcto tal y como se establece en tu archivo index.pug!

Envía tu página cuando creas que está correcto. Si estás experimentando errores, puedes revisar el proyecto completado hasta este punto [aquí](https://gist.github.com/camperbot/4af125119ed36e6e6a8bb920db0c0871).

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
