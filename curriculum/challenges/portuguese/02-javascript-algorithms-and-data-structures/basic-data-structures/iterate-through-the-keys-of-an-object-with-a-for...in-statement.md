---
id: 587d7b7d367417b2b2512b1d
title: Iterar através das chaves de um objeto com a declaração for...in
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

Às vezes, você precisa iterar através de todas as chaves dentro de um objeto. Você pode usar um laço <dfn>for... in</dfn> para fazer isso. O laço for...in tem esta aparência:

```javascript
const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
```

Este código registra `milk 1`  e `eggs 12`, com cada par de chave-valor em sua própria linha.

Definimos a variável `food` no início do laço e essa variável foi definida com cada uma das chaves do objeto em cada iteração, resultando na impressão do nome de cada comida no console.

**Observação:** objetos não mantém uma ordem para as chaves armazenadas como arrays fazem. Portanto, a posição de uma chave em um objeto, ou a ordem relativa na qual ela aparece, é irrelevante quando referenciando ou acessando aquela chave.

# --instructions--

Definimos uma função `countOnline`, a qual aceita um argumento, `allUsers`. Use a declaração <dfn>for...in</dfn> dentro dessa função para iterar pelo objeto `allUsers` e retorne o número de usuários que possuam a propriedade `online` definida como `true`. Um exemplo de um objeto que pode ser passado para `countOnline` é mostrado abaixo. Cada usuário terá a propriedade `online` definida como `true` ou `false`.

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

A função `countOnline` deve usar a instrução `for in` para iterar através das chaves de um objeto passado para ele.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

A função `countOnline` deve retornar `1` quando o objeto `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` for passado para ele

```js
assert(countOnline(usersObj1) === 1);
```

A função `countOnline` deve retornar `2` quando o objeto `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` for passado para ele

```js
assert(countOnline(usersObj2) === 2);
```

A função `countOnline` deve retornar `0` quando o objeto `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` for passado para ele

```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

## --seed-contents--

```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(allUsers) {
  let numOnline = 0;
  for(const user in allUsers){
    if(allUsers[user].online) {
      numOnline++;
    }
  }
  return numOnline;
}
```
