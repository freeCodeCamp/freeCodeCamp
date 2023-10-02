---
id: 587d7db8367417b2b2512ba2
title: Restringir nomes de usuário possíveis
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

Nomes de usuário (usernames) são usados em toda a Internet. São o que fazem com que tenham uma identidade única em seus sites favoritos.

Você precisa verificar todos os usernames em um banco de dados. Existem algumas regras que os usuários precisam seguir quando criam os seus usernames.

1) Nomes de usuário só podem conter caracteres alfanuméricos.

2) Os números, se algum, precisam estar no fim da string. Pode haver zero ou mais números. Usernames não podem começar com números.

3) As letras podem ser maiúsculas ou minúsculas.

4) O tamanho de nomes de usuários precisa ser pelo menos dois. Um username de dois caracteres só pode conter letras.

# --instructions--

Modifique a regex `userCheck` para que inclua as regras listadas.

# --hints--

A regex deve encontrar a string `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

A regex não deve encontrar a string `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

A regex deve encontrar a string `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

A regex deve encontrar a string `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

A regex deve encontrar a string `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

A regex não deve encontrar a string `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

A regex não deve encontrar a string `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

A regex não deve encontrar a string `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

A regex não deve encontrar a string `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

A regex deve encontrar a string `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

A regex não deve encontrar a string `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

A regex deve encontrar a string `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

A regex não deve encontrar a string `J%4`

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
