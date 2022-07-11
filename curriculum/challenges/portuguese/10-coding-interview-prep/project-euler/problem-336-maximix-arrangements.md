---
id: 5900f4bd1000cf542c50ffcf
title: 'Problema 336: Arranjos maximix'
challengeType: 1
forumTopicId: 301994
dashedName: problem-336-maximix-arrangements
---

# --description--

Um trem é usado para transportar quatro vagões na ordem: $ABCD$. No entanto, por vezes, quando o trem chega para coletar os vagões, eles não estão na ordem certa.

Para reorganizar os vagões, todos eles são empurrados para uma grande prato giratório. Depois de os vagões serem separados em um ponto específico, o trem sai do prato tirando os vagões que ainda estão presos a ele. Os vagões restantes são girados 180°. Todos os vagões são depois reagrupados e este processo é repetido sempre que necessário para obter o menor número de utilizações do prato.

Alguns arranjos, como $ADCB$, podem ser resolvidos facilmente: os vagões são separados entre $A$ e $D$, e depois de $DCB$ ser girado, a ordem correta é alcançada.

No entanto, Simon Simples, o motorista do trem, não é conhecido pela sua eficiência. Então, ele sempre resolve o problema ao receber inicialmente o vagão $A$ no lugar correto, depois o vagão $B$ e assim por diante.

Usando quatro vagões, o pior arranjo possível para Simon, que chamaremos de arranjo máximo, é $DACB$ e $DBAC$; cada um deles exigindo cinco rotações (embora, usando a abordagem mais eficiente, eles possam ser reagrupados usando apenas três rotações). O processo que ele usa para $DACB$ é mostrado abaixo.

<img class="img-responsive center-block" alt="cinco rotações para o arranjo maximix DACB" src="https://cdn.freecodecamp.org/curriculum/project-euler/maximix-arrangements.gif" style="background-color: white; padding: 10px;" />

É possível verificar que há 24 arranjos maximix para seis vagões, dos quais $DFAECB$ é o décimo arranjo maximix lexicográfico.

Encontre o ${2011}^{\text{o}}$ arranjo maximix lexicográfico para onze vagões.

# --hints--

`maximixArrangements()` deve retornar uma string.

```js
assert(typeof maximixArrangements() === 'string');
```

`maximixArrangements()` deve retornar a string `CAGBIHEFJDK`.

```js
assert.strictEqual(maximixArrangements(), 'CAGBIHEFJDK');
```

# --seed--

## --seed-contents--

```js
function maximixArrangements() {

  return true;
}

maximixArrangements();
```

# --solutions--

```js
// solution required
```
