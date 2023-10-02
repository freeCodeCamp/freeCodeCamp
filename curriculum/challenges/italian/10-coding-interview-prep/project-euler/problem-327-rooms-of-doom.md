---
id: 5900f4b31000cf542c50ffc6
title: 'Problema 327: Stanze del destino'
challengeType: 1
forumTopicId: 301984
dashedName: problem-327-rooms-of-doom
---

# --description--

Tre stanze sono collegate tra loro da porte automatiche.

<img class="img-responsive center-block" alt="serie di tre stanze collegate tra loro da porte automatiche" src="https://cdn.freecodecamp.org/curriculum/project-euler/rooms-of-doom.gif" style="background-color: white; padding: 10px;" />

Ogni porta è azionata da una scheda di sicurezza. Una volta che si entra in una stanza, la porta si chiude automaticamente, e quella scheda di sicurezza non può essere utilizzata di nuovo. Una macchina distribuirà un numero illimitato di carte all'inizio, ma ogni stanza (compresa la stanza di partenza) contiene degli scanner. Se rilevano che si stanno tenendo più di tre carte di sicurezza o se rilevano una carta di sicurezza incustodita sul pavimento, poi tutte le porte diventeranno permanentemente bloccate. Tuttavia, ogni stanza contiene una scatola in cui è possibile conservare in modo sicuro qualsiasi numero di carte di sicurezza da utilizzare in una fase successiva.

Se semplicemente cercassi di viaggiare attraverso le camere una alla volta, entrando nella stanza 3 avresti usato tutte e tre le carte e rimarresti intrappolato in quella stanza per sempre!

Tuttavia, se si fa uso delle scatole di archiviazione, allora fuggire è possibile. Ad esempio, è possibile entrare nella stanza 1 utilizzando la prima carta, posizionare una carta nella casella di archiviazione, e utilizzare la terza carta per uscire dalla stanza e tornare di nuovo all'inizio. Poi dopo aver raccolto altre tre carte dalla macchina erogatrice ne potresti utilizzare una per entrare nella stanza 1 e raccogliere la carta che hai messo nella scatola un attimo prima. Ora hai ancora tre carte e sarai in grado di viaggiare attraverso le rimanenti tre porte. Questo metodo consente di viaggiare attraverso tutte e tre le stanze utilizzando sei carte di sicurezza in totale.

È possibile viaggiare attraverso sei camere con un totale di 123 carte di sicurezza trasportando un massimo di 3 carte.

Sia $C$ il numero massimo di carte che possono essere trasportate in qualsiasi momento.

Sia $R$ il numero di stanze da attraversare.

Sia $M(C, R)$ il numero minimo di carte richieste dal distributore per viaggiare attraverso $R$ stanze portando in ogni momento un massimo di $C$ carte.

Per esempio, $M(3, 6) = 123$ e $M(4, 6) = 23$.

E $\sum M(C, 6) = 146$ per $3 ≤ C ≤ 4$.

Ti viene dato che $\sum M(C, 10) = 10382$ per $3 ≤ C ≤ 10$.

Trova $\sum M(C, 30)$ per $3 ≤ C ≤ 40$.

# --hints--

`roomsOfDoom()` dovrebbe restituire `34315549139516`.

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
