---
id: 5e601c0d5ac9d0ecd8b94afe
title: Traductor británico americano
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

Crea una aplicación full stack de JavaScript que sea funcionalmente similar a esta: <a href="https://american-british-translator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://american-british-translator.freecodecamp.rocks/</a>. Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

-   Clone este repositorio de <a href="https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/" target="_blank" rel="noopener noreferrer nofollow"> GitHub</a> y complete estos desafíos localmente.
-   Usa <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator" target="_blank" rel="noopener noreferrer nofollow">nuestro proyecto inicial de Replit</a> para completar tu proyecto.
-   Usa un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Si usas Replit, sigue estos pasos para configurar el proyecto:

-   Empieza importando el proyecto en Replit.
-   Siguiente, verás una ventana `.replit`.
-   Selecciona `Use run command` y click en el botón `Done`.

Cuando este hecho, asegurate que una demo de trabajo de tu proyecto este hospedad en algún sitio público. Then submit the URL to it in the Solution Link field. Optionally, also submit a link to your project's source code in the GitHub Link field.

# --instructions--

-   Toda la lógica puede ir dentro de `/components/translator.js`
-   Completa la ruta `/api/translate` en `/routes/api.js`
-   Crea todo lo de las pruebas unitarias/funcionales tests en `tests/1_unit-tests.js` y `tests/2_functional-tests.js`
-   Consulta los archivos JavaScript en `/components` para las diferentes pronunciaciones y terminos que tu aplicación debería traducir
-   Para ejecutar las pruebas en Replit, establece `NODE_ENV` a `test` sin las comillas en el archivo `.env`
-   Para ejecutar las pruebas en la consola, usa el comando: `npm run test`. Para abrir la consola Replit, presiona Ctrl+Shift+P (Cmd en Mac) y tipea "open shell"

Escribe las siguientes pruebas en `tests/1_unit-tests.js`:

-   Traduce `Mangoes are my favorite fruit.` a Inglés Británico
-   Traduce `I ate yogurt for breakfast.` a Inglés Británico
-   Traduce `We had a party at my friend's condo.` a Inglés Británico
-   Traduce `Can you toss this in the trashcan for me?` a Inglés Británico
-   Traduce `The parking lot was full.` a Inglés Británico
-   Traduce `Like a high tech Rube Goldberg machine.` a Inglés Británico
-   Traduce `To play hooky means to skip class or work.` a Inglés Británico
-   Traduce `No Mr. Bond, I expect you to die.` a Inglés Británico
-   Traduce `Dr. Grosh will see you now.` a Inglés Británico
-   Traduce `Lunch is at 12:15 today.` a Inglés Británico
-   Traduce `We watched the footie match for a while.` a Inglés Americano
-   Traduce `Paracetamol takes up to an hour to work.` a Inglés Americano
-   Traduce `First, caramelise the onions.` a Inglés Americano
-   Traduce `I spent the bank holiday at the funfair.` a Inglés Americano
-   Traduce `I had a bicky then went to the chippy.` a Inglés Americano
-   Traduce `I've just got bits and bobs in my bum bag.` a Inglés Americano
-   Traduce `The car boot sale at Boxted Airfield was called off.` a Inglés Americano
-   Traduce `Have you met Mrs Kalyani?` a Inglés Americano
-   Traduce `Prof Joyner of King's College, London.` a Inglés Americano
-   Traduce `Tea time is usually around 4 or 4.30.` a Inglés Americano
-   Resalta la traducción en `Mangoes are my favorite fruit.`
-   Resalta la traducción en `I ate yogurt for breakfast.`
-   Resalta la traducción en `We watched the footie match for a while.`
-   Resalta la traducción en `Paracetamol takes up to an hour to work.`

Escribe las siguientes pruebas en `tests/2_functional-tests.js`:

-   Traduce con texto y campos locales: petición POST a `/api/translate`
-   Traduce con texto y campo local no válido: petición POST a `/api/translate`
-   Traducción con campo de texto faltante: POST request to `/api/translate`
-   Traducción con campo local faltante: petición POST a `/api/translate`
-   Traducción con texto vacío: petición POST a `/api/translate`
-   Traduce con texto eso que no necesita traducción: petición POST a `/api/translate`

# --hints--

You should provide your own project, not the example URL.

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Puedes `POST` a `/api/translate` con un cuerpo conteniendo `text` con el texto para traducir y `locale` con cualquiera `american-to-british` o `british-to-american`. El objeto devuelto debería contener el `text` y `translation` con el texto traducido.

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

La ruta `/api/translate` debería manejar la forma de escritura de hora en inglés Americano y Británico. Por ejemplo, diez y treinta es escrito como "10.30" en Inglés Británico y "10:30" en Inglés Americano. El elemento `span` debería envolver la cadena de tiempo entera, por Ej. `<span class="highlight">10:30</span>`.

```js
async (getUserInput) => {
  try {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

La ruta `/api/translate` debería manejar la manera en que los titulares/honoríficos son abreviados en Inglés Americano y Británico. Por ejemplo, Doctor Wright es abreviado como "Dr Wright" en Inglés Británico y "Dr. Wright" en Inglés Americano. Consulta `/components/american-to-british-titles.js` para los diferentes titulares que tu aplicación debería manejar.

```js
async (getUserInput) => {
  try {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const output = {
      text: text,
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Agrupa cualquier pronunciación traducida o terminos con las etiquetas `<span class="highlight">...</span>` entonces aparecerán en verde.

```js
async (getUserInput) => {
  try {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const output = {
      text: 'Mangoes are my favorite fruit.',
      translation:
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Si falta uno o más campos requeridos, devuelve `{ error: 'Required field(s) missing' }`.

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Si `text` esta vació, devuelve `{ error: 'No text to translate' }`

```js
async (getUserInput) => {
  try {
    const locale = 'american-to-british';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: '', locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'No text to translate');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Si `locale` no coincide con uno de los dos locales especificados, devuelve `{ error: 'Invalid value for locale field' }`.

```js
async (getUserInput) => {
  try {
    const text = "Ceci n'est pas une pipe";
    const locale = 'french-to-american';
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.property(parsed, 'error');
    assert.equal(parsed.error, 'Invalid value for locale field');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Si `text` no requiere traduciión, devuelve `"Everything looks good to me!"` para el valor `translation`.

```js
async (getUserInput) => {
  try {
    const locale = 'british-to-american';
    const output = {
      text: 'SaintPeter and nhcarrigan give their regards!',
      translation: 'Everything looks good to me!'
    };
    let data = await fetch(getUserInput('url') + '/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: output.text, locale })
    });
    let parsed = await data.json();
    assert.isObject(parsed);
    assert.isObject(parsed);
    assert.property(parsed, 'text');
    assert.property(parsed, 'translation');
    assert.deepEqual(parsed, output);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

All 24 unit tests are complete and passing.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter((test) => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 24, 'At least 24 tests passed');
    unitTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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

All 6 functional tests are complete and passing.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter((test) => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 6, 'At least 6 tests passed');
    functTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
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
