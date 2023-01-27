---
id: 59da22823d04c95919d46269
title: 'Problema dos marinheiros, dos cocos e do macaco'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

Cinco marinheiros são náufragos em uma ilha e coletam muitos cocos durante o dia.

Naquela noite, o primeiro marinheiro acorda e decide tomar a sua parte dos cocos mais cedo, então tenta dividir o monte de cocos igualmente em cinco pilhas, mas descobre que ainda há um coco sobrando. Então, ele o joga para um macaco e então esconde "sua" pilha, uma das cinco pilhas de cocos de tamanho igual, e empurra os outros quatro montes para formar um único monte visível de cocos novamente e vai para a cama.

Resumindo uma longa história, cada marinheiro por sua vez se levanta uma vez durante a noite e executa as mesmas ações de dividir a pilha de cocos em cinco, descobrindo que sobra um coco e deixando o coco que resta para o macaco e unindo as outras quatro pilhas em uma única pilha.

De manhã (depois da ação às escondidas e separada de cada um dos cinco marinheiros durante a noite), os cocos restantes são divididos em cinco pilhas iguais para cada um dos marinheiros, onde se descobre que a pilha de cocos pode ser dividida igualmente entre os marinheiros, sem sobrar nenhum. (Nada é dado para o macaco da manhã.)

# --instructions--

Crie uma função que retorne o tamanho mínimo possível para a pilha inicial de cocos coletados durante o dia para `N` marinheiros. **Observação:** logicamente, a história é contada em um mundo onde a coleção de qualquer quantidade de cocos em um dia e múltiplas divisões do monte pode ocorrer em tempo ajustando a linha da história, de modo a não afetar a matemática.

# --hints--

`splitCoconuts` deve ser uma função.

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` deve retornar 3121.

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` deve retornar 233275.

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` deve retornar 823537.

```js
assert(splitCoconuts(7) === 823537);
```

# --seed--

## --seed-contents--

```js
function splitCoconuts(intSailors) {

  return true;
}
```

# --solutions--

```js
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}
```
