---
id: 587d7b7d367417b2b2512b1d
title: Iterar através das chaves de um objeto com a declaração for...in
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

Às vezes, você pode precisar iterar através de todas as chaves dentro de um objeto. Isso requer uma sintaxe específica no JavaScript chamada de declaração <dfn>for...in</dfn>. Para nosso objeto `users`, isso pode se parecer como:

```js
for (let user in users) {
  console.log(user);
}
```

Isso vai exibir no console `Alan`, `Jeff` e `Sarah` - cada valor em sua própria linha.

Nessa declaração, definimos uma variável `user` e, como você pode ver, essa variável é redefinida durante cada iteração para cada chave do objeto conforme o comando se repete através do objeto, resultando em cada nome de usuário sendo exibido no console.

**Observação:** objetos não mantém uma ordem para as chaves armazenadas como arrays fazem. Portanto, a posição de uma chave em um objeto, ou a ordem relativa na qual ela aparece, é irrelevante quando referenciando ou acessando aquela chave.

# --instructions--

Nós definimos uma função `countOnline` a qual aceita um argumento (um objeto users). Use a declaração <dfn>for...in</dfn> dentro dessa função para iterar o objeto users passado para a função, e retorne o número de users o qual possuam a propriedade `online` definida como `true`. Um exemplo de um objeto users o qual pode ser passado para `countOnline` é mostrado abaixo. Cada usuário terá a propriedade `online` com um valor `true` ou `false`.

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

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```
