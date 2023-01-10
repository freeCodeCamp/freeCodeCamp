---
id: 5900f3fc1000cf542c50ff0f
title: 'Problema 144: Indagare i molteplici riflessi di un fascio laser'
challengeType: 1
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

Nella fisica laser, una "cella bianca" è un sistema a specchio che funge da linea di ritardo per il raggio laser. Il raggio entra nella cella, rimbalza sugli specchi, e alla fine trova la sua via di uscita.

La specifica cella bianca che prenderemo in considerazione è un'ellisse con l'equazione $4{x}^2 + y^2 = 100$

Manca la sezione corrispondente a $−0.01 ≤ x ≤ +0.01$ in alto, permettendo alla luce di entrare e uscire attraverso il foro.

<div style="text-align: center">
  <img class="img-responsive center-block" alt="fascio luminoso che parte dal punto (0.0, 10.1) e che attraversa lo specchio al punto (1.4, -9.6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="animazione con le prime 10 riflessioni del fascio" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

Il fascio luminoso in questo problema inizia dal punto (0.0, 10.1) appena fuori dalla cella bianca e incontra per la prima volta lo specchio a (1.4, -9.6).

Ogni volta che il raggio laser colpisce la superficie dell'ellisse, segue la consueta legge di riflessione "l'angolo di incidenza è uguale all'angolo di riflessione". Cioè, sia i fasci incidenti che quelli riflessi formano lo stesso angolo con la linea normale nel punto di incidenza.

Nella figura a sinistra, la linea rossa indica i primi due punti di contatto tra il fascio laser e la parete della cella bianca; la linea blu mostra la linea tangente all'ellisse nel punto di incidenza del primo rimbalzo.

La pendenza m della linea tangente in qualsiasi punto (x, y) della data ellisse è: $m = −4 × \frac{x}{y}$

La linea normale è perpendicolare a questa linea tangente nel punto di incidenza.

L'animazione a destra mostra le prime 10 riflessioni del fascio.

Quante volte il raggio colpisce la superficie interna della cella bianca prima di uscire?

# --hints--

`laserBeamReflections()` dovrebbe restituire `354`.

```js
assert.strictEqual(laserBeamReflections(), 354);
```

# --seed--

## --seed-contents--

```js
function laserBeamReflections() {

  return true;
}

laserBeamReflections();
```

# --solutions--

```js
// solution required
```
