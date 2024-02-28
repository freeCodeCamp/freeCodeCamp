---
id: 5900f46e1000cf542c50ff80
title: 'Problem 257: Angular Bisectors'
challengeType: 1
forumTopicId: 301905
dashedName: problem-257-angular-bisectors
---

# --description--

Given is an integer sided triangle $ABC$ with sides $a ≤ b ≤ c$ ($AB = c$, $BC = a$ and $AC = b$).

The angular bisectors of the triangle intersect the sides at points $E$, $F$ and $G$ (see picture below).

<img class="img-responsive center-block" alt="triangle ABC, with angular bisectors intersecting sides at the points E, F and G" src="https://cdn.freecodecamp.org/curriculum/project-euler/angular-bisectors.gif" style="background-color: white; padding: 10px;" />

The segments $EF$, $EG$ and $FG$ partition the triangle $ABC$ into four smaller triangles: $AEG$, $BFE$, $CGF$ and $EFG$. It can be proven that for each of these four triangles the ratio $\frac{\text{area}(ABC)}{\text{area}(\text{subtriangle})}$ is rational. However, there exist triangles for which some or all of these ratios are integral.

How many triangles $ABC$ with perimeter $≤ 100\\,000\\,000$ exist so that the ratio $\frac{\text{area}(ABC)}{\text{area}(AEG)}$ is integral?

# --hints--

`angularBisectors()` should return `139012411`.

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
