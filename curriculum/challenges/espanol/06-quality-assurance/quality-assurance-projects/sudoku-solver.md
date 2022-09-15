---
id: 5e601bf95ac9d0ecd8b94afd
title: Solucionador de Sudoku
challengeType: 4
forumTopicId: 462357
dashedName: sudoku-solver
---

# --description--

Crea una aplicación full stack de JavaScript que sea funcionalmente similar a esta: <a href="https://sudoku-solver.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://sudoku-solver.freecodecamp.rocks/</a>. Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

-   Clone este repositorio de <a href="https://github.com/freecodecamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow"> GitHub</a> y complete estos desafíos localmente.
-   Usa este <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-sudoku-solver" target="_blank" rel="noopener noreferrer nofollow"> proyecto inicial de Replit</a> para completar tu proyecto.
-   Usa un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que una demostración funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`. Opcionalmente, también envía un enlace al código fuente de tu proyecto en el campo `GitHub Link`.

# --instructions--

- Toda la lógica del rompecabezas puede ir dentro de `/controllers/sudoku-solver.js`
  - La función `validate` debe tomar una cadena de rompecabezas dada y revisarla para ver si tiene 81 caracteres válidos para la entrada.
  - La función `check` debe estar validando contra el estado *actual* del tablero.
  - La función `solve` debe manejar la resolución de cualquier cadena de rompecabezas válida, no solo las entradas de prueba y soluciones. Se espera que escribas la lógica para resolver esto.
- Toda la lógica de enrutamiento puede ir a `/routes/api.js`
- Ve el archivo `puzzle-strings.js` en `/controllers` para algunos rompecabezas de ejemplo que tu aplicación debe resolver
- Para ejecutar las pruebas de desafío en esta página, establece `NODE_ENV` a `test` sin comillas en el archivo `.env`
- Para ejecutar las pruebas en la consola, usa el comando `npm run test`. Para abrir la consola de Replit presiona Ctrl+Shift+P (Cmd si estas en Mac) y escribe "open shell"

Escribe las siguientes pruebas en `tests/1_unit-tests.js`:

-   La lógica maneja una cadena de rompecabezas válida de 81 caracteres
-   La lógica maneja una cadena de rompecabezas con caracteres inválidos (no 1-9 o `.`)
-   La lógica maneja una cadena de rompecabezas que no tiene 81 caracteres de longitud
-   La lógica maneja una posición de fila válida
-   La lógica maneja una posición de fila inválida
-   La lógica maneja una posición de columna válida
-   La lógica maneja una posición de columna inválida
-   La lógica maneja la ubicación de una región válida (cuadrícula 3x3)
-   La lógica maneja la ubicación de una región inválida (cuadrícula 3x3)
-   Las cadenas de rompecabezas válidas pasan el solucionador
-   Las cadenas de rompecabezas no válidas hacen fallar al solucionador
-   El solucionador devuelve la solución esperada para un rompecabezas incompleto

Escribe las siguientes pruebas en `tests/2_functional-tests.js`

-   Resuelve un rompecabezas con una cadena de rompecabezas válida: petición POST a `/api/solve`
-   Resuelve un rompecabezas con una cadena de rompecabezas faltante: petición POST a `/api/solve`
-   Resuelve un rompecabezas con caracteres inválidos: petición POST a `/api/solve`
-   Resuelve un rompecabezas con una longitud incorrecta: petición POST a `/api/solve`
-   Resuelve un rompecabezas que no se puede resolver: petición POST a `/api/solve`
-   Comprueba la ubicación de un rompecabezas con todos los campos: petición POST a `/api/check`
-   Comprueba la ubicación de un rompecabezas con un conflicto de posición: petición POST a `/api/check`
-   Comprueba la ubicación de un rompecabezas con múltiples conflictos de posición: petición POST a `/api/check`
-   Comprueba la ubicación de un rompecabezas con todos los conflictos de posición: petición POST a `/api/check`
-   Comprueba la ubicación de un rompecabezas con los campos requeridos faltantes: petición POST a `/api/check`
-   Comprueba la ubicación de un rompecabezas con caracteres inválidos: petición POST a `/api/check`
-   Comprueba la ubicación de un rompecabezas con una longitud incorrecta: petición POST a `/api/check`
-   Comprueba la ubicación de un rompecabezas con coordenadas de posición no válidas: petición POST a `/api/check`
-   Comprueba la ubicación de un rompecabezas con valor de posición no válido: petición POST a `/api/check`

# --hints--

Debes proporcionar tu propio proyecto, no la URL del ejemplo.

```js
(getUserInput) => {
  const url = getUserInput('url');
  assert(!/.*\/sudoku-solver\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

Puedes realizar una petición `POST` `/api/solve` con datos del formulario que contienen `puzzle` que será una cadena que contiene una combinación de números (1-9) y puntos `.` para representar espacios vacíos. El objeto devuelto contendrá una propiedad de `solution` con el rompecabezas resuelto.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output =
    '769235418851496372432178956174569283395842761628713549283657194516924837947381625';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'solution');
  assert.equal(parsed.solution, output);
};
```

Si el objeto enviado a `/api/solve` no existe `puzzle`, el valor devuelto será `{ error: 'Required field missing' }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Required field missing';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notpuzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Si el rompecabezas enviado a `/api/solve` contiene valores que no son números o periodos, el valor devuelto será `{ error: 'Invalid characters in puzzle' }`

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Si el rompecabezas enviado a `/api/solve` es mayor o menor que 81 caracteres, el valor devuelto será `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Si el rompecabezas enviado a `/api/solve` no es válido o no se puede resolver, el valor devuelto será `{ error: 'Puzzle cannot be solved' }`

```js
async (getUserInput) => {
  const input =
    '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Puzzle cannot be solved';
  const data = await fetch(getUserInput('url') + '/api/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Puedes realizar una petición `POST` a `/api/check` un objeto que contenga `puzzle`, `coordinate`, y `value` donde `coordinate` es la letra del A-I que indica la fila, seguido por un número del 1-9 indicando la columna, y `value` es un numero del 1-9.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '7';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

El valor devuelto del `POST` a `/api/check` será un objeto que contenga una propiedad `valid`, que es `true` si el número puede colocarse en la coordenada proporcionada y `false` si el número no lo es. Si es falso, el objeto devuelto también contendrá una propiedad `conflict` que contiene las cadenas `"row"`, `"column"`, y/o `"region"` dependiendo de que la ubicación sea inválida.

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const conflict = ['row', 'column'];
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isFalse(parsed.valid);
  assert.property(parsed, 'conflict');
  assert.include(parsed.conflict, 'row');
  assert.include(parsed.conflict, 'column');
};
```

Si `value` enviado a `/api/check` ya está situado en `puzzle` en esa `coordinate`, el valor devuelto será un objeto que contiene una propiedad `valid` con `true` si `value` no está en conflicto.

```js
async (getUserInput) => {
  const input =
  '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'C3';
  const value = '2';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'valid');
  assert.isTrue(parsed.valid);
};
```

Si el rompecabezas enviado a `/api/check` contiene valores que no son números o puntos, el valor devuelto será `{ error: 'Invalid characters in puzzle' }`

```js
async (getUserInput) => {
  const input =
    'AA9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const coordinate = 'A1';
  const value = '1';
  const output = 'Invalid characters in puzzle';
  const data = await fetch(getUserInput('url') + '/api/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle: input, coordinate, value })
  });
  const parsed = await data.json();
  assert.property(parsed, 'error');
  assert.equal(parsed.error, output);
};
```

Si el rompecabezas enviado a `/api/check` es mayor o menor que 81 caracteres, el valor devuelto será `{ error: 'Expected puzzle to be 81 characters long' }`

```js
async (getUserInput) => {
  const inputs = [
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.',
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...'
  ];
  const coordinate = 'A1';
  const value = '1';
  const output = 'Expected puzzle to be 81 characters long';
  for (const input of inputs) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Si el objeto enviado a `/api/check` no existe `puzzle`,`coordinate` o `value`, el valor devuelto será `{ error: 'Required field(s) missing' }`

```js
async (getUserInput) => {
  const inputs = [
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      value: '1',
    },
    {
      puzzle: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..',
      coordinate: 'A1',
    },
    {
      coordinate: 'A1',
      value: '1'
    }
  ];
  for (const input of inputs) {
    const output = 'Required field(s) missing';
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Si la coordenada enviada a `api/check` no apunta a una celda de la cuadrícula existente, el valor devuelto será `{ error: 'Invalid coordinate'}`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid coordinate';
  const coordinates = ['A0', 'A10', 'J1', 'A', '1', 'XZ18'];
  const value = '7';
  for (const coordinate of coordinates) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Si el `value` enviado a `/api/check` no es un número entre 1 y 9, los valores devueltos serán `{ error: 'Invalid value' }`

```js
async (getUserInput) => {
  const input =
    '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  const output = 'Invalid value';
  const coordinate = 'A1';
  const values = ['0', '10', 'A'];
  for (const value of values) {
    const data = await fetch(getUserInput('url') + '/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puzzle: input, coordinate, value })
    });
    const parsed = await data.json();
    assert.property(parsed, 'error');
    assert.equal(parsed.error, output);
  }
};
```

Las 12 pruebas unitarias están completas y pasan. Consulta `/tests/1_unit-tests.js` para el comportamiento esperado para el que debes escribir pruebas.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit\s*Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 12, 'At least 12 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Las 14 pruebas funcionales están completas y pasan. Consulta `/tests/2_functional-tests.js` para conocer la funcionalidad de la cual debes escribir pruebas.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional\s*Tests/gi);
    });
    assert.isAtLeast(functTests.length, 14, 'At least 14 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
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
