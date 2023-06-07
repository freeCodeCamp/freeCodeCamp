---
id: 5900f3b01000cf542c50fec3
title: 'Problema 68: Anel de 5 linhas mágicas'
challengeType: 1
forumTopicId: 302180
dashedName: problem-68-magic-5-gon-ring
---

# --description--

Considere o seguinte anel de 3 linhas "mágicas" com números de 1 a 6. Note que ao somar os números de cada linha, o resultado é nove.

<img class="img-responsive center-block" alt="um exemplo completo de um anel de 3 linhas" src="https://cdn-media-1.freecodecamp.org/project-euler/3-gon-ring.png" style="background-color: white; padding: 10px;" />

Trabalhando **no sentido horário**, e começando pelo grupo onde o nó externo é numericamente menor (4, 3, 2 neste exemplo), cada solução pode ser descrita de forma única. Por exemplo, a solução acima pode ser descrita pelo conjunto: 4,3,2; 6,2,1; 5,1,3.

É possível completar o anel com quatro totais diferentes: 9, 10, 11 e 12. No total, há oito soluções.

<div style='text-align: center;'>

| !!crwdBlockTags_6_sgaTkcolBdwrc!! |!!crwdBlockTags_7_sgaTkcolBdwrc!! |
| -------------------------------------- | --------------------------------------------- |
| 9                                      | 4,2,3; 5,3,1; 6,1,2                           |
| 9                                      | 4,3,2; 6,2,1; 5,1,3                           |
| 10                                     | 2,3,5; 4,5,1; 6,1,3                           |
| 10                                     | 2,5,3; 6,3,1; 4,1,5                           |
| 11                                     | 1,4,6; 3,6,2; 5,2,4                           |
| 11                                     | 1,6,4; 5,4,2; 3,2,6                           |
| 12                                     | 1,5,6; 2,6,4; 3,4,5                           |
| 12                                     | 1,6,5; 3,5,4; 2,4,6                           |

</div>

Ao concatenar cada grupo, é possível formar números de 9 algarismos; o maior número para um anel de 3 linhas é 432621513.

Usando os números de 1 a 10 e dependendo dos arranjos, é possível formar números de 16 e 17 algarismos. Qual é o maior número de **16 algarismos** em um anel de 5 linhas?

<img class="img-responsive center-block" alt="um diagrama em branco de um anel de 5 linhas" src="https://cdn-media-1.freecodecamp.org/project-euler/5-gon-ring.png" style="background-color: white; padding: 10px;" />

# --hints--

`magic5GonRing()` deve retornar um número.

```js
assert(typeof magic5GonRing() === 'number');
```

`magic5GonRing()` deve retornar 6531031914842725.

```js
assert.strictEqual(magic5GonRing(), 6531031914842725);
```

# --seed--

## --seed-contents--

```js
function magic5GonRing() {

  return true;
}

magic5GonRing();
```

# --solutions--

```js
// solution required
```
