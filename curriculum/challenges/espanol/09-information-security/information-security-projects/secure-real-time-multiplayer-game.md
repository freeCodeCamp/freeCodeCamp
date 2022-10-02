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

Cuando hayas terminado, asegúrate de que un demo funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`. Opcionalmente, también envía un enlace al código fuente de tu proyecto en el campo `GitHub Link`.

# --instructions--

Crea un juego multijugador seguro en el cual cada jugador pueda mover su avatar, haya al menos un artículo coleccionable y la clasificación de los jugadores se calcule según su puntuación.

Para más detalles consulta los tests más abajo.

¡Asegúrate de que el juego sea seguro! Incluye las siguientes medidas de seguridad:

- El cliente no debe ser capaz de hacer guess/sniff sobre el tipo MIME
- Impide ataques XSS
- No guardes en la caché del cliente nada proveniente del sitio web
- Que las cabeceras indiquen que el sitio es generado por `PHP 7.4.3`

**Nota**: `helmet@^3.21.3` es necesario para las historias de usuario. Esto significa que necesitarás usar la versión previa de la documentación de Helmet, para obtener la información necesaria para poder realizar las historias de usuario.

# --hints--

Puedes proporcionar tu propio proyecto, no el URL de ejemplo.

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Múltiples jugadores pueden conectarse al servidor y jugar.

```js

```

Cada jugador tiene un avatar.

```js

```

Cada jugador es representado por un objeto creado por la clase `Player` en `Player.mjs`.

```js

```

Como mínimo, cada objeto jugador debe estar compuesto de un `id` único, un `score`, y unas coordenadas `x` e `y` que representan la posición actual del jugador.

```js

```

El juego ha de tener al menos un tipo de artículo coleccionable. Completa la clase `Collectible` en `Collectible.mjs` para implementar esta característica.

```js

```

Como mínimo, cada objeto de artículo coleccionable creado por la clase `Collectible` debe estar compuesto de un `id` único, un `value`, y unas coordenadas `x` e `y` que representan la posición actual del artículo.

```js

```

Los jugadores pueden usar el WASD y/o las teclas de cursor para mover su avatar. Completa el método `movePlayer` en `Player.mjs` para implementar esta característica.

```js

```

El método `movePlayer` debe aceptar dos argumentos: una cadena de entre "up", "down", "left" o "right", y un número representando la cantidad de píxeles en que debe cambiar la posición del jugador. `movePlayer` debe ajustar las coordenadas `x` e `y` del objeto jugador desde el cual es llamado.

```js

```

La puntuación del jugador debe ser usada para calcular su posición entre los otros jugadores en la clasificación. Completa el método `calculateRank` en la clase `Player` para implementar esta característica.

```js

```

El método `calculateRank` debe aceptar un arreglo de objetos representando todos los jugadores conectados y devolver la cadena `Rank: currentRanking/totalPlayers`. Por ejemplo, en una partida con dos jugadores, si Player A tiene una puntuación de 3 y Player B una puntuación de 5, `calculateRank` para Player A debe devolver `Rank: 2/2`.

```js

```

Los jugadores pueden colisionar con un artículo coleccionable. Completa el método `collision` en `Player.mjs` para implementar esta característica.

```js

```

El método `collision` debe aceptar un objeto de artículo coleccionable como argumento. Si el avatar del jugador interseca con el artículo, el método `collision` debe devolver `true`.

```js

```

Todos los jugadores son mantenidos en sincronización.

```js

```

Los jugadores pueden desconectarse de la partida en cualquier momento.

```js

```

Impide que el cliente trate de hacer guess/sniff sobre el tipo MIME.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

Impide ataques cross-site scripting (XSS).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

Nada proveniente del sitio web es guardado en la caché del cliente.

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

Las cabeceras indican que el sitio está generado por "PHP 7.4.3" incluso cuando no es así (como medida de seguridad).

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
