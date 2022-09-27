---
id: 5900f4111000cf542c50ff24
title: 'Problema 165: intersezioni'
challengeType: 1
forumTopicId: 301799
dashedName: problem-165-intersections
---

# --description--

Un segmento è definito unicamente dai punti terminali. Considerando due segmenti in un piano geometrico ci sono tre possibilità: i due segmenti hanno zero punti, un punto, o infiniti punti in comune.

In più quando i due segmenti hanno esattamente un punto in comune potrebbe essere che questo sia un terminale di uno o entrambi i segmenti. Se un punto in comune dei due segmenti non è un punto terminale di nessuno dei due allora è un punto interno di entrambi i segnmenti.

Sia $T$, un punto in comune di due segmenti $L_1$ e $L_2$, un vero punto d'intersezione se è il solo punto in comune di $L_1$ e $L_2$ ed è un punto interno di entrambi i segmenti.

Considera i tre segmenti $L_1$, $L_2$, e $L_3$:

$$\begin{align}   & L_1: (27, 44) \\;\text{to}\\; (12, 32) \\\\
  & L_2: (46, 53) \\;\text{to}\\; (17, 62) \\\\   & L_3: (46, 70) \\;\text{to}\\; (22, 40) \\\\
\end{align}$$

Si può verificare che i segmenti $L_2$ e $L_3$ hanno un vero punto di intersezione. Notiamo che essendo uno dei terminali di $L_3$: (22, 40) su $L_1$ questo non è un vero punto d'intersezione. $L_1$ e $L_2$ non hanno un punto in comune. Quindi tra i tre segmenti troviamo un vero punto di intersezione.

Adesso facciamo lo stesso per 5000 segmenti. A questo fine, generiamo 20000 numeri casuali usando il generatore pseudo-casuale di numeri chiamato "Blum Blum Shub".

$$\begin{align}   & s_0 = 290797 \\\\
  & s_{n + 1} = s_n × s_n (\text{modulo}\\; 50515093) \\\\   & t_n = s_n (\text{modulo}\\; 500) \\\\
\end{align}$$

Per creare ogni segmento, usiamo quattro numeri consecutivi $t_n$. Quindi, il primo segmento è dato da:

da ($_t$1, $t_2$) a ($t_3$, $t_4$)

I primi quattro numeri calcolati con il precedente generatore dovrebbero essere: 27, 144, 12 e 232. Quindi il primo segnmento è da (27, 144) a (12, 232).

Quante intersezioni vere sono trovate tra i 5000 segmenti?

# --hints--

`distinctIntersections()` should return `2868868`.

```js
assert.strictEqual(distinctIntersections(), 2868868);
```

# --seed--

## --seed-contents--

```js
function distinctIntersections() {

  return true;
}

distinctIntersections();
```

# --solutions--

```js
// solution required
```
