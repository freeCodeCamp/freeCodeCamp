---
id: 5900f4b31000cf542c50ffc6
title: 'Problem 327: Rooms of Doom'
challengeType: 1
forumTopicId: 301984
dashedName: problem-327-rooms-of-doom
---

# --description--

A series of three rooms are connected to each other by automatic doors.

<img class="img-responsive center-block" alt="series of three rooms, connected to each other by automatic doors" src="https://cdn.freecodecamp.org/curriculum/project-euler/rooms-of-doom.gif" style="background-color: white; padding: 10px;" />

每扇门都由安全卡操作。 Once you enter a room, the door automatically closes, and that security card cannot be used again. A machine will dispense an unlimited number of cards at the start, but each room (including the starting room) contains scanners. If they detect that you are holding more than three security cards or if they detect an unattended security card on the floor, then all the doors will become permanently locked. However, each room contains a box where you may safely store any number of security cards for use at a later stage.

If you simply tried to travel through the rooms one at a time then as you entered room 3 you would have used all three cards and would be trapped in that room forever!

但是，如果您使用存储箱，则可以进行逃生。 For example, you could enter room 1 using your first card, place one card in the storage box, and use your third card to exit the room back to the start. Then after collecting three more cards from the dispensing machine you could use one to enter room 1 and collect the card you placed in the box a moment ago. You now have three cards again and will be able to travel through the remaining three doors. This method allows you to travel through all three rooms using six security cards in total.

It is possible to travel through six rooms using a total of 123 security cards while carrying a maximum of 3 cards.

Let $C$ be the maximum number of cards which can be carried at any time.

Let $R$ be the number of rooms to travel through.

Let $M(C, R)$ be the minimum number of cards required from the dispensing machine to travel through $R$ rooms carrying up to a maximum of $C$ cards at any time.

For example, $M(3, 6) = 123$ and $M(4, 6) = 23$.

And, $\sum M(C, 6) = 146$ for $3 ≤ C ≤ 4$.

You are given that $\sum M(C, 10) = 10382$ for $3 ≤ C ≤ 10$.

Find $\sum M(C, 30)$ for $3 ≤ C ≤ 40$.

# --hints--

`roomsOfDoom()` should return `34315549139516`.

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
