---
id: 5900f4b31000cf542c50ffc6
title: 'Problema 327: Salas da destruição'
challengeType: 1
forumTopicId: 301984
dashedName: problem-327-rooms-of-doom
---

# --description--

Uma série de três salas está interligada por portas automáticas.

<img class="img-responsive center-block" alt="série de três salas interligada por portas automáticas" src="https://cdn.freecodecamp.org/curriculum/project-euler/rooms-of-doom.gif" style="background-color: white; padding: 10px;" />

Cada porta é operada por um cartão de segurança. Ao entrar em uma sala, a porta fecha automaticamente e esse cartão de segurança não poderá ser usado novamente. Uma máquina vai dispensar um número ilimitado de cartões no início, mas cada sala (incluindo a sala inicial) contém scanners. Caso eles detectem que você está segurando mais de três cartões de segurança ou caso eles detectem um cartão de segurança solto no chão, todas as portas ficarão permanentemente trancadas. No entanto, cada sala contém uma caixa onde você pode armazenar com segurança qualquer número de cartões de segurança para uso em uma fase posterior.

Se simplesmente tentássemos atravessar a sala uma por vez, quando entrássemos na sala 3, teríamos usado todos os três cartões e ficaríamos presos para sempre!

No entanto, se utilizarmos as caixas de armazenamento, é possível escapar. Por exemplo, você pode entrar na sala 1 usando seu primeiro cartão, colocar um cartão na caixa de armazenamento, e usar seu terceiro cartão para sair da sala de volta ao início. Então, depois de coletar mais três cartões da máquina de dispensar, você poderia usar um para entrar na sala 1 e coletar o cartão que você colocou na caixa há alguns instantes. Você tem agora três cartões novamente e poderá passar pelas três portas que restam. Esse método permite que você viaje através de todas as três salas usando seis cartões de segurança no total.

É possível viajar através de seis salas utilizando um total de 123 cartões de segurança, enquanto se carrega um máximo de 3 cartões.

Considere $C$ como o número máximo de cartões que podem ser transportados a qualquer momento.

Considere $R$ como o número de salas a percorrer.

Considere $M(C, R)$ como o número mínimo de cartões necessários da máquina de dispensa de cartões para viajar $R$ salas carregando até um máximo de $C$ cartões a qualquer momento.

Por exemplo, $M(3, 6) = 123$ e $M(4, 6) = 23$.

E $\sum M(C, 6) = 146$ para $3 ≤ C ≤ 4$.

Você é informado que $\sum M(C, 10) = 10382$ para $3 ≤ C ≤ 10$.

Encontre $\sum M(C, 30)$ para $3 ≤ C ≤ 40$.

# --hints--

`roomsOfDoom()` deve retornar `34315549139516`.

```js
assert.strictEqual(roomsOfDoom(), 34315549139516);
```

# --seed--

## --seed-contents--

```js
function roomsOfDoom() {

  return true;
}

roomsOfDoom();
```

# --solutions--

```js
// solution required
```
