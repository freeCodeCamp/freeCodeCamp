---
id: 587d7b8a367417b2b2512b4e
title: Crea cadenas usando plantillas literales
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

Una nueva característica de ES6 es la <dfn>plantilla literal</dfn>. Este es un tipo especial de cadena que facilita la creación de cadenas complejas.

Las plantillas literales te permiten crear cadenas multilínea y usar características de interpolación, para crearlas.

Fíjese en el código debajo:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

La consola mostrará las cadenas `Hello, my name is Zodiac Hasbro!` y `I am 56 years old.`.

Muchas cosas han ocurrido allí. En primer lugar, el ejemplo utiliza backticks (`` ` ``), no comillas (`'` o `"`), para envolver la cadena. En segundo lugar, observe que la cadena es multi-línea tanto en el código como cuando se imprime en pantalla. Esto guarda la inserción `\n` dentro de las cadenas. La sintaxis `${variable}` utilizada anteriormente es un marcador de posición. Básicamente, ya no tendrás que utilizar concatenación con el operador `+`. Para añadir variables a las cadenas, basta con colocar la variable en una plantilla de cadena y envolverla con `${` y `}`. Del mismo modo, puedes incluir otras expresiones en tu literal de cadena, por ejemplo `${a + b}`. Esta nueva forma de crear cadenas te da mayor flexibilidad para crear cadenas robustas.

# --instructions--

Usa la sintaxis de plantilla literal con comillas invertidas para crear un arreglo de cadenas de elemento lista (`li`). El texto de cada elemento de lista debe ser uno de los elementos del arreglo de la propiedad `failure` en el objeto `result` y tener un atributo `class` con el valor `text-warning`. La función `makeList` debe devolver el arreglo de cadenas de elemento lista.

Utiliza un método de iteración (cualquier tipo de bucle) para obtener el resultado deseado (mostrado a continuación).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` debe ser un arreglo que contenga los mensajes de `result failure`.

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` debe ser igual que el resultado especificado.

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

Las cadenas de plantillas y la interpolación de expresiones deben ser usadas.

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

Debe utilizarse un iterador.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
