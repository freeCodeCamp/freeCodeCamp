---
id: 587d7db8367417b2b2512ba2
title: Restringe posibles nombres de usuario
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en tus sitios favoritos.

Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

1) Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

2) Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre de usuario no puede iniciar con un número.

3) Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

4) Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede utilizar letras del alfabeto como caracteres.

# --instructions--

Cambia la expresión regular `userCheck` para que se ajuste a las restricciones indicadas anteriormente.

# --hints--

Tu expresión regular debe coincidir con la cadena `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

Tu expresión regular no debe coincidir con la cadena `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

Tu expresión regular debe coincidir con la cadena `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

Tu expresión regular debe coincidir con la cadena `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

Tu expresión regular debe coincidir con la cadena `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

Tu expresión regular no debe coincidir con la cadena `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

Tu expresión regular no debe coincidir con la cadena `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

Tu expresión regular no debe coincidir con la cadena `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

Tu expresión regular no debe coincidir con la cadena `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

Tu expresión regular debe coincidir con la cadena `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

Tu expresión regular no debe coincidir con la cadena `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

Tu expresión regular debe coincidir con la cadena `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

Tu expresión regular no debe coincidir con la cadena `J%4`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
