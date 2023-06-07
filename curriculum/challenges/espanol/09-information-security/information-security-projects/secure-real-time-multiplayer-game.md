---
id: 5e601c775ac9d0ecd8b94aff
title: Juego multijugador seguro en tiempo real
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

Desarrolla un juego multijugador en tiempo real en 2D utilizando HTML Canvas API y Socket.io que sea funcionalmente similar a este: <a href="https://secure-real-time-multiplayer-game.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://secure-real-time-multiplayer-game.freecodecamp.rocks/</a>. Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

-   Clona <a href="https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">este repositorio de GitHub</a> y completa tu proyecto localmente.
-   Usa <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game" target="_blank" rel="noopener noreferrer nofollow">nuestro proyecto inicial de Replit</a> para completar tu proyecto.
-   Utiliza un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio GitHub.

Si usas Replit, sigue estos pasos para configurar el proyecto:

-   Empieza importando el proyecto en Replit.
-   Siguiente, verás una ventana `.replit`.
-   Seleccione `Use run command` y haga click en el botón `Done`.

Cuando este hecho, asegurese que una demostración de trabajo de tu proyecto es alojado en algún lugar público. Luego envíe la URL esto en el campo Enlace Solution. Opcionalmente, también envía un enlace al código fuente de tu proyecto en el campo de enlace GitHub.

# --instructions--

Crea un juego multijugador seguro en el cual cada jugador pueda mover su avatar, hay al menos un artículo coleccionable, y el rango de los jugadores es calculado basado en su puntuación.

Para detalles consulta las pruebas a continuación.

Asegurate que tu juego es seguro! Incluya estas medidas de seguridad:

- El cliente no debe ser capaz debe de acertar/escuchar el tipo MIME
- Prevenga ataques XSS
- No guarde la cache de nada desde el sitio web en el cliente
- Las cabeceras dicen el sitio es accionado por `PHP 7.4.3`

**Note**: `helmet@^3.21.3` es necesario para las historias de usuario. Esto significa que necesitarás usar la versión previa de la documentación de Helmet's, para información de como lograr las historias de usuario.

# --hints--

Puedes proporcionar tu propio proyecto, no la URL de ejemplo.

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Multiples jugadores pueden conectarse al servidor y jugar.

```js

```

Cada jugador tiene un avatar.

```js

```

Cada jugador es representado por un objeto creado por la clase `Player` en `Player.mjs`.

```js

```

Como mínimo, cada objeto jugador debería contener un único `id`, un `score`, y `x` y `y` coordenadas representando la posición actual del jugador.

```js

```

El juego tiene al menos un tipo de artículo coleccionable. Completa la clase `Collectible` en `Collectible.mjs` para implementar esto.

```js

```

Como mínimo, cada artículo objeto coleccionable creado por la clase `Collectible` debería contener un único `id`, un `value`, y `x` y `y` coordenadas representando la posición actual del artículo.

```js

```

Los jugadores pueden usar las teclas WASD y/o teclas flechas para mover su avatar. Completa el método `movePlayer` en `Player.mjs` para implementar esto.

```js

```

El método `movePlayer` debería aceptar dos argumentos: una cadena de: "up", "down", "left", o "right", y un número para la cantidad de pixeles de la posición del jugador debería cambiar. `movePlayer` debería ajustar `x` y `y` coordenadas de el objeto jugador desde el cual es llamado.

```js

```

El puntaje del jugador debe ser usado para calcular su posición entre los otros jugadores. Completa el método `calculateRank` en la clase `Player` para implementar esto.

```js

```

El método `calculateRank` debería aceptar un arreglo de objetos representando todos los jugadores conectados y devolver la cadena `Rank: currentRanking/totalPlayers`. Por ejemplo, en un juego con dos jugadores, si el Jugador A tiene un puntaje de 3 y Jugador B tiene un puntaje de 5, `calculateRank` para Jugador A debería devolver `Rank: 2/2`.

```js

```

Jugadores pueden colisionar con un artículo coleccionable. Completa el método `collision` en `Player.mjs` para implementar esto.

```js

```

El método `collision` debería aceptar un objeto de artículo coleccionable como un argumento. Si el avatar del jugador interseca con el artículo, el método `collision` debería devolver `true`.

```js

```

Todos los jugadores se mantienen sincronizados.

```js

```

Los Jugadores pueden desconectarse del juego en cualquier momento.

```js

```

Previene al cliente de intentar escuchar/esnifar el tipo MIME.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

Prevenir ataques de secuencia de comandos de sitio cruzado 'cross-site scripting' (XSS).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

Nada desde el sitio web es guardado en cache en el cliente.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['surrogate-control'], 'no-store');
  assert.equal(
    parsed.headers['cache-control'],
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  assert.equal(parsed.headers['pragma'], 'no-cache');
  assert.equal(parsed.headers['expires'], '0');
};
```

Las cabeceras dicen que el sitio es potenciado por "PHP 7.4.3" incluso cuado no es así (como una medida de seguridad).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-powered-by'], 'PHP 7.4.3');
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
