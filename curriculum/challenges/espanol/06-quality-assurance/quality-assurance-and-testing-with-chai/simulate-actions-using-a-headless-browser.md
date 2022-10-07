---
id: 587d824f367417b2b2512c5c
title: Simular acciones usando un navegador sin interfaz gráfica
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

Como recordatorio, este proyecto está siendo construido con base en el siguiente proyecto inicial <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Repl. it</a>, o clonado desde <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

En los siguientes desafíos, simularás la interacción humana con una página usando un navegador sin interfaz gráfica.

Los navegadores sin interfaz gráfica, son navegadores web sin GUI. Son capaces de representar e interpretar HTML, CSS y JavaScript de la misma manera que un navegador regular, haciéndolos particularmente útiles para probar páginas web.

Para los siguientes desafíos usarás Zombie.js, que es un navegador ligero sin interfaz gráfica que no se basa en binarios adicionales para instalar. Esta característica hace que sea utilizable en entornos limitados como Replit. Pero hay muchas otras opciones más potentes, para navegadores interfaz gráfica.

Mocha te permite ejecutar algo código antes de que se ejecuten cualquiera de las pruebas reales. Esto puede ser útil para hacer cosas como agregar información a una base de datos que se utilizará en el resto de las pruebas.

Con un navegador sin interfaz gráfica, antes de ejecutar las pruebas, necesita **visitar** la página de prueba.

El hook `suiteSetup` solo se ejecuta una vez al comienzo de un conjunto de pruebas.

Hay otros tipos de hooks que pueden ejecutar código antes de cada prueba, después de cada prueba, o al final de un conjunto de pruebas. Consulta la documentación de Mocha para obtener más información.

# --instructions--

Dentro de `tests/2_functional-tests.js`, inmediatamente después de la declaración `Browser`, agrega la URL de tu proyecto a la propiedad `site` de la variable:

```js
Browser.site = 'https://boilerplate-mochachai.your-username.repl.co'; // Your URL here
```

Luego, en la raíz del conjunto de `'Functional Tests with Zombie.js'`, crea una nueva instancia del objeto `Browser` con el siguiente código:

```js
const browser = new Browser();
```

Y usa el hook `suiteSetup` para dirigir el navegador `browser` a la ruta `/` con el siguiente código:

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

Todas las pruebas deben pasar.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
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
