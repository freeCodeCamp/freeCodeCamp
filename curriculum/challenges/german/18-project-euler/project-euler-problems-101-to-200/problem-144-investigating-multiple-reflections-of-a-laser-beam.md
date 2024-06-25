---
id: 5900f3fc1000cf542c50ff0f
title: 'Problem 144: Untersuchung von Mehrfachreflexionen eines Laserstrahls'
challengeType: 1
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--

In der Laserphysik ist eine „weiße Zelle" ein Spiegelsystem, das als Verzögerungsleitung für den Laserstrahl dient. Der Strahl tritt in die Zelle ein, prallt an den Spiegeln ab und tritt schließlich wieder aus.

Die spezielle weiße Zelle, die wir betrachten wollen, ist eine Ellipse mit der Gleichung $4{x}^2 + y^2 = 100$

Der Abschnitt, der $-0,01 ≤ x ≤ +0,01$ entspricht, fehlt an der Spitze, so dass das Licht durch das Loch ein- und austreten kann.

<div style="text-align: center">
  <img class="img-responsive center-block" alt="Lichtstrahl, der im Punkt (0,0, 10,1) beginnt und im Punkt (1,4, -9,6) auf den Spiegel trifft" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="Animation mit den ersten 10 Reflektionen des Strahls" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

Der Lichtstrahl in diesem Problem beginnt am Punkt (0,0, 10,1) direkt außerhalb der weißen Zelle, und der Strahl trifft zuerst auf den Spiegel bei (1,4, -9,6).

Jedes Mal, wenn der Laserstrahl auf die Oberfläche der Ellipse trifft, folgt er dem üblichen Reflexionsgesetz „Einfallswinkel gleich Reflexionswinkel" Das bedeutet, dass sowohl der einfallende als auch der reflektierte Strahl den gleichen Winkel mit der Normalen im Einfallspunkt bilden.

In der Abbildung links zeigt die rote Linie die ersten beiden Berührungspunkte zwischen dem Laserstrahl und der Wand der weißen Zelle; die blaue Linie zeigt die Tangente an die Ellipse im Auftreffpunkt des ersten Abpralls.

Die Steigung m der Tangente an einem beliebigen Punkt (x, y) der gegebenen Ellipse ist: $m = -4 × \frac{x}{y}$

The normal line is perpendicular to this tangent line at the point of incidence.

Die Animation auf der rechten Seite zeigt die ersten 10 Reflexionen des Strahls.

Wie oft trifft der Strahl auf die innere Oberfläche der weißen Zelle, bevor er wieder austritt?

# --hints--

`laserBeamReflections()` sollte `354` zurückgeben.

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
