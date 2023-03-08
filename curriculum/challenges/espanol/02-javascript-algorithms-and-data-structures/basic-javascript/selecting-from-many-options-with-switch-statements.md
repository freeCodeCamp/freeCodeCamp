---
id: 56533eb9ac21ba0edf2244dd
title: Seleccionando entre muchas opciones con declaración switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

Si tienes muchas opciones para elegir, usa una declaración <dfn>switch</dfn>. Una sentencia `switch` prueba un valor y puede tener muchas sentencias <dfn>case</dfn> que definen varios valores posibles. Las sentencias se ejecutan desde el primer valor `case` coincidente hasta que se encuentra un `break`.

Aquí hay un ejemplo de una declaración `switch`:

```js
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```

Los valores en las sentencias `case` se prueban con igualdad estricta (`===`). El `break` le dice a JavaScript que deje de ejecutar declaraciones. Si se omite `break`, se ejecutara la siguiente sentencia.

# --instructions--

Escribe una declaración switch que pruebe `val` y establezca `answer` con las siguientes condiciones:  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` debe tener una cadena con valor `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` debe tener una cadena con valor `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` debe tener una cadena con valor `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` debe tener una cadena con valor `delta`

```js
assert(caseInSwitch(4) === 'delta');
```

No debes usar ninguna sentencia `if` o `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Debes tener al menos 3 declaraciones `break`

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
