---
id: 599a789b454f2bbd91a3ff4d
title: Praticar a comparação de diferentes valores
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

Nos últimos dois desafios, aprendemos sobre o operador de igualdade (`==`) e o operador de igualdade estrita (`===`). Vamos fazer uma breve revisão e praticar usando esses operadores mais uma vez.

Se os valores sendo comparados não são do mesmo tipo, o operador de igualdade fará a conversão de tipo e, então, avaliará os valores. No entanto, o operador de igualdade estrita vai comparar ambos os tipos de dados e os valores, sem converter de um tipo para outro.

**Exemplos**

`3 == '3'` retorna `true` porque JavaScript faz a conversão de tipo de string para número. `3 === '3'` retorna `false` porque os tipos são diferentes e não é feita a conversão de tipo.

**Observação:** em JavaScript, você pode determinar o tipo de uma variável ou de um valor, com o operador `typeof`, como vemos a seguir:

```js
typeof 3
typeof '3'
```

`typeof 3` retorna a string `number` e `typeof '3'` retorna a string `string`.

# --instructions--

A função `compareEquality` no editor compara dois valores usando o operador de igualdade. Modifique a função para que ela retorne a string `Equal` apenas quando os valores forem estritamente iguais.

# --hints--

`compareEquality(10, "10")` deve retornar a string `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` deve retornar a string `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

Você deve usar o operador `===`

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
