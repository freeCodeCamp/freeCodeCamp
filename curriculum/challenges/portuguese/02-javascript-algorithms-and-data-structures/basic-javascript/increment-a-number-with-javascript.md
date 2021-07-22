---
id: 56533eb9ac21ba0edf2244ac
title: Incrementar um número com JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

Você pode facilmente <dfn>incrementar</dfn> ou adicionar 1 à variável com o operador `++`.

```js
i++;
```

é o equivalente a

```js
i = i + 1;
```

**Nota:** A linha inteira se torna `i++;`, eliminando a necessidade do sinal de igual.

# --instructions--

Modifique o código usando o operador `++` em `myVar`.

# --hints--

`myVar` deve ser igual a `88`.

```js
assert(myVar === 88);
```

Você não deve usar o operador de atribuição.

```js
assert(
  /var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code)
);
```

Você deve usar o operador `++`.

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

Você não deve alterar o código acima do comentário especificado.

```js
assert(/var myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 87;

// Only change code below this line
myVar = myVar + 1;
```

# --solutions--

```js
var myVar = 87;
myVar++;
```
