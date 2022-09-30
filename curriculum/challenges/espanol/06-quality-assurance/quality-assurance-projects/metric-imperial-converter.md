---
id: 587d8249367417b2b2512c41
title: Convertidor de métricas imperiales
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

Crea una aplicación full stack de JavaScript que sea funcionalmente similar a esta: <a href="https://metric-imperial-converter.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://metric-imperial-converter.freecodecamp.rocks/</a>. Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

- Clone este repositorio de <a href="https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/" target="_blank" rel="noopener noreferrer nofollow"> GitHub</a> y complete estos desafíos localmente.
- Usa este <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter" target="_blank" rel="noopener noreferrer nofollow"> proyecto inicial de Replit</a> para completar tu proyecto.
- Usa un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que una demostración funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`. Opcionalmente, también envía un enlace al código fuente de tu proyecto en el campo `GitHub Link`.

# --instructions--

- Completa la lógica de conversión necesaria en `/controllers/convertHandler.js`
- Completa las rutas necesarias en `/routes/api.js`
- Copia el archivo `sample.env` a `.env` y establece las variables apropiadamente
- Para ejecutar las pruebas, descomenta `NODE_ENV=test` en tu archivo `.env`
- Para ejecutar las pruebas en la consola, usa el comando `npm run test`. Para abrir la consola de Replit presiona Ctrl+Shift+P (Cmd si estas en Mac) y escribe "open shell"

Escribe las siguientes pruebas en `tests/1_unit-tests.js`:

- `convertHandler` debe leer correctamente una entrada de número entero.
- `convertHandler` debe leer correctamente una entrada de número decimal.
- `convertHandler` debe leer correctamente una entrada fraccional.
- `convertHandler` debe leer correctamente una entrada fraccional con un decimal.
- `convertHandler` debe devolver correctamente un error en una fracción doble (i.e. `3/2/3`).
- `convertHandler` debe predeterminar correctamente una entrada numérica de `1` cuando no se proporciona ninguna entrada numérica.
- `convertHandler` debe leer correctamente cada unidad de las entradas válidas.
- `convertHandler` debe devolver correctamente un error por cada unidad de entrada no válida.
- `convertHandler` debe devolver la unidad de retorno correcta para cada unidad de entrada válida.
- `convertHandler` debe devolver correctamente la unidad de cadena deletreada para cada unidad de entrada válida.
- `convertHandler` debe convertir correctamente `gal` a `L`.
- `convertHandler` debe convertir correctamente `L` to `gal`.
- `convertHandler` debe convertir correctamente `mi` a `km`.
- `convertHandler` debe convertir correctamente `km` a `mi`.
- `convertHandler` debe convertir correctamente `lbs` a `kg`.
- `convertHandler` debe convertir correctamente `kg` a `lbs`.

Escribe las siguientes pruebas en `tests/2_functional-tests.js`:

- Convierte una entrada válida como `10L`: petición `GET` a `/api/convert`.
- Convierte una entrada inválida como `32g`: petición `GET` a `/api/convert`.
- Convierte un número inválido como `3/7.2/4kg`: petición `GET` a `/api/convert`.
- Convierte un número Y una unidad no válidos como `3/7.2/4kilomegagram`: petición `GET` a `/api/convert`.
- Convierte sin número tal como `kg`: petición `GET` a `/api/convert`.

# --hints--

Debes proporcionar tu propio proyecto, no la URL de ejemplo.

```js
getUserInput => {
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Puedes realizar una petición `GET` `/api/convert` con un único parámetro que contenga un número y una unidad aceptados y que lo convierta. (Pista: Divide la entrada buscando el índice del primer carácter que marcará el inicio de la unidad)

```js

```

Puedes convertir `'gal'` a `'L'` y viceversa. (1 gal a 3.78541 L)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.returnNum, 3.78541);
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10gal');
    assert.equal(data2.returnNum, 37.8541);
    assert.equal(data2.returnUnit, 'L');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.returnNum, 0.26417);
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10l');
    assert.equal(data4.returnNum, 2.64172);
    assert.equal(data4.returnUnit, 'gal');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Puedes convertir `'lbs'` a `'kg'` y viceversa. (1 lbs a 0.453592 kg)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1lbs');
    assert.equal(data1.returnNum, 0.45359);
    assert.equal(data1.returnUnit, 'kg');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10lbs');
    assert.equal(data2.returnNum, 4.53592);
    assert.equal(data2.returnUnit, 'kg');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1kg');
    assert.equal(data3.returnNum, 2.20462);
    assert.equal(data3.returnUnit, 'lbs');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10kg');
    assert.equal(data4.returnNum, 22.04624);
    assert.equal(data4.returnUnit, 'lbs');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Puedes convertir `'mi'` a `'km'` y viceversa. (1 mi a 1.60934 km)

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1mi');
    assert.equal(data1.returnNum, 1.60934);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10mi');
    assert.equal(data2.returnNum, 16.0934);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1km');
    assert.equal(data3.returnNum, 0.62137);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10km');
    assert.equal(data4.returnNum, 6.21373);
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Todas las unidades entrantes deben ser aceptadas en mayúsculas y minúsculas, pero debe ser devuelto en `initUnit` y `returnUnit` en minúsculas excepto por litro, que debe ser representado como una `'L'` mayúscula.

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.initUnit, 'gal');
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10L');
    assert.equal(data2.initUnit, 'L');
    assert.equal(data2.returnUnit, 'gal');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.initUnit, 'L');
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10KM');
    assert.equal(data4.initUnit, 'km');
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Si la unidad de medida no es válida, se devolverá `'invalid unit'`.

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=1min');
    assert(data.error === 'invalid unit' || data === 'invalid unit');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Si el número no es válido, devolverá `'invalid number'`.

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2gal'
    );
    assert(data.error === 'invalid number' || data === 'invalid number');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Si tanto la unidad como el número son inválidos, la devolución será `'invalid number and unit'`.

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2min'
    );
    assert(
      data.error === 'invalid number and unit' ||
        data === 'invalid number and unit'
    );
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Puedes utilizar fracciones, decimales o ambos en el parámetro (es decir, 5, 1/2, 2.5/6), pero si no se proporciona nada, el valor predeterminado será 1.

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=mi');
    assert.approximately(data1.initNum, 1, 0.001);
    assert.approximately(data1.returnNum, 1.60934, 0.001);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=1/5mi');
    assert.approximately(data2.initNum, 1 / 5, 0.1);
    assert.approximately(data2.returnNum, 0.32187, 0.001);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(
      getUserInput('url') + '/api/convert?input=1.5/7km'
    );
    assert.approximately(data3.initNum, 1.5 / 7, 0.001);
    assert.approximately(data3.returnNum, 0.13315, 0.001);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(
      getUserInput('url') + '/api/convert?input=3/2.7km'
    );
    assert.approximately(data4.initNum, 3 / 2.7, 0.001);
    assert.approximately(data4.returnNum, 0.69041, 0.001);
    assert.equal(data4.returnUnit, 'mi');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Su devolución consistirá en `initNum`, `initUnit`, `returnNum`, `returnUnit`, y `string` detallando unidades en el formato `'{initNum} {initUnitString} converts to {returnNum} {returnUnitString}'` con el resultado redondeado a 5 decimales.

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=2mi');
    assert.equal(data.initNum, 2);
    assert.equal(data.initUnit, 'mi');
    assert.approximately(data.returnNum, 3.21868, 0.001);
    assert.equal(data.returnUnit, 'km', 'returnUnit did not match');
    assert.equal(data.string, '2 miles converts to 3.21868 kilometers');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

Las 16 pruebas unitarias están completas y pasan.

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter(test => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 16, 'At least 16 tests passed');
    unitTests.forEach(test => {
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

Las 5 pruebas funcionales están completas y pasan.

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter(test => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 5, 'At least 5 tests passed');
    functTests.forEach(test => {
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
