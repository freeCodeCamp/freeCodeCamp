---
id: 5e601c0d5ac9d0ecd8b94afe
title: Traductor británico americano
challengeType: 4
forumTopicId: 462358
dashedName: american-british-translator
---

# --description--

Construye una aplicación full stack de JavaScript que sea funcionalmente similar a esta: <https://american-british-translator.freecodecamp.rocks/>. Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

-   Clona [este repositorio de GitHub](https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/) y completa tu proyecto localmente.
-   Usa [nuestro proyecto inicial de Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-american-british-english-translator) para completar tu proyecto.
-   Usa un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que una demostración funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`. Opcionalmente, también envía un enlace al código fuente de tu proyecto en el campo `GitHub Link`.

# --instructions--

-   Toda la lógica puede ir en `/components/translator.js`
-   Completa la ruta `/api/translate` en `/routes/api.js`
-   Crea todas las pruebas unitarias/funcionales en `tests/1_unit-tests.js` y `tests/2_functional-tests.js`
-   Consulta los archivos de JavaScript en `/components` para ver las diferentes ortografías y términos que debe traducir tu aplicación
-   Para ejecutar las pruebas en Replit, establece a `test` `NODE_ENV` sin comillas en el archivo `.env`
-   Para ejecutar las pruebas en la consola, usa el comando `npm run test`. Para abrir la consola de Replit presiona Ctrl+Shift+P (Cmd si estas en Mac) y escribe "open shell"

Escribe las siguientes pruebas en `tests/1_unit-tests.js`:

-   Traduce `Mangoes are my favorite fruit.` al inglés británico
-   Traduce `I ate yogurt for breakfast.` al inglés británico
-   Traduce `We had a party at my friend's condo.` al inglés británico
-   Traduce `Can you toss this in the trashcan for me?` al inglés británico
-   Traduce `The parking lot was full.` a Inglés británico
-   Traduce `Like a high tech Rube Goldberg machine.` al inglés británico
-   Traduce `To play hooky means to skip class or work.` al inglés británico
-   Traduce `No Mr. Bond, I expect you to die.` a Inglés británico
-   Traduce `Dr. Grosh will see you now.` a Inglés británico
-   Traduce `Lunch is at 12:15 today.` al inglés británico
-   Traduce `We watched the footie match for a while.` al inglés americano
-   Traduce `Paracetamol takes up to an hour to work.` al inglés americano
-   Traduce `First, caramelise the onions.` al inglés americano
-   Traduce `I spent the bank holiday at the funfair.` al inglés americano
-   Traduce `I had a bicky then went to the chippy.` a Inglés Americano
-   Traduce `I've just got bits and bobs in my bum bag.` al inglés americano
-   Traduce `The car boot sale at Boxted Airfield was called off.` al inglés americano
-   Traduce `Have you met Mrs Kalyani?` al inglés americano
-   Traduce `Prof Joyner of King's College, London.` al inglés americano
-   Traduce `Tea time is usually around 4 or 4.30.` al inglés americano
-   Resalta la traducción en `Mangoes are my favorite fruit.`
-   Resalta la traducción en `I ate yogurt for breakfast.`
-   Resalta la traducción en `We watched the footie match for a while.`
-   Resalta la traducción en `Paracetamol takes up to an hour to work.`

Escribe las siguientes pruebas en `tests/2_functional-tests.js`:

-   Traducción con campos de texto y configuración regional: solicitud POST a `/api/translate`
-   Traducción con texto y campo de configuración regional no válido: solicitud POST a `/api/translate`
-   Traducción con campo de texto faltante: solicitud POST a `/api/translate`
-   Traducción sin campo de configuración regional: solicitud POST a `/api/translate`
-   Traducción con texto vacío: solicitud POST a `/api/translate`
-   Traducción con texto que no necesita traducción: solicitud POST a `/api/translate`

# --hints--

Puedo proporcionar mi propio proyecto, no la URL de ejemplo.

```js
(getUserInput) => {
  assert(
    !/.*\/american-british-translator\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Puedes `POST` a `/api/translate` con un cuerpo que contenga `text` con el texto para traducir y `locale` con `american-to-british` o `british-to-american`. El objeto devuelto debe contener el `text` agregado y la `translation` con el texto traducido.

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

La ruta `/api/translate` debe manejar la forma en que se escribe la hora en inglés americano y británico. Por ejemplo, diez treinta se escribe como "10.30" en inglés británico y "10:30" en inglés americano. El elemento `span` debe envolver toda la cadena de tiempo, es decir, `<span class="highlight">10:30</span>`.

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

La ruta `/api/translate` también debe manejar la forma en que los títulos/honoríficos se abrevian en inglés americano y británico. Por ejemplo, Doctor Wright es abreviado como "Dr Wright" en inglés británico y "Dr. Wright" en inglés americano. Consulta `/components/american-to-british-titles.js` para los diferentes títulos que tu aplicación debe manejar.

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

Envuelve cualquier ortografía traducida o término con las etiquetas `<span class="highlight">...</span>` para que aparezcan en verde.

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

Si faltan uno o más de los campos requeridos, devuelve `{ error: 'Required field(s) missing' }`.

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

Si `text` está vacío, devuelve `{ error: 'No text to translate' }`

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

Si `text` no requiere traducción, devuelve `"Everything looks good to me!"` para el valor `translation`.

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

Las 24 unidades de prueba están completas y pasan. Consulta `/tests/1_unit-tests.js` para el comportamiento esperado del cual debes escribir pruebas.

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

Las 6 pruebas funcionales están completas y pasan. Consulta `/tests/2_functional-tests.js` para conocer la funcionalidad de la cual debes escribir pruebas.

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
