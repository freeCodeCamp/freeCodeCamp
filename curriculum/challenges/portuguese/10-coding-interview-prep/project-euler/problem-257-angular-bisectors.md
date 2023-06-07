---
id: 5900f46e1000cf542c50ff80
title: 'Problema 257: Bissetores angulares'
challengeType: 1
forumTopicId: 301905
dashedName: problem-257-angular-bisectors
---

# --description--

É fornecido um triângulo de lado inteiro $ABC$ com lados $a ≤ b ≤ c$ ($AB = c$, $BC = a$ e $AC = b$).

Os bissetores angulares do triângulo cruzam os lados nos pontos $E$, $F$ e $G$ (veja a imagem abaixo).

<img class="img-responsive center-block" alt="triângulo ABC, com bissetores angulares que se cruzam com os lados nos pontos E, F e G" src="https://cdn.freecodecamp.org/curriculum/project-euler/angular-bisectors.gif" style="background-color: white; padding: 10px;" />

Os segmentos $EF$, $EG$ e $FG$ particionam o triângulo $ABC$ em quatro triângulos menores: $AEG$, $BFE$, $CGF$ e $EFG$. Pode ser provado que, para cada um desses quatro triângulos, a razão $\frac{\text{área}(ABC)}{\text{área}(\text{subtriângulo})}$ é racional. No entanto, existem triângulos para os quais algumas ou todas estas razões são inteiras.

Quantos triângulos $ABC$ com o perímetro $^\\100.000.000$ existem para que a razão $\frac{\text{área}(ABC)}{\text{área}(AEG)}$ seja integral?

# --hints--

`angularBisectors()` deve retornar `139012411`.

```js
assert.strictEqual(angularBisectors(), 139012411);
```

# --seed--

## --seed-contents--

```js
function angularBisectors() {

  return true;
}

angularBisectors();
```

# --solutions--

```js
// solution required
```
