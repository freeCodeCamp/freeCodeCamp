---
id: 691b4fcd528ad6fa5c9d92d8
title: Task 3
challengeType: 19
dashedName: task-3
lang: es
---
<!-- (Audio) Mateo: whole audio. -->

# --description--

This is a common way Spanish speakers introduce themselves.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

How is Mateo introducing his name?

## --answers--

`Soy Mateo.`

### --feedback--

This means "I'm Mateo", which is correct but not the exact phrase he uses.

---
`Mi nombre es Mateo.`

### --feedback--

This means "My name is Mateo", but Mateo uses a different structure.

---

`Me llamo Mateo.`

---

`Soy el señor Mateo.`

### --feedback--

This means "I'm Mr. Mateo", but it adds formality that Mateo doesn't use.

## --video-solution--

3

# --explanation--

`Me llamo Mateo` means "My name is Mateo".

It’s a common and natural way to introduce yourself in Spanish.

Other valid options are `Soy Mateo` and `Mi nombre es Mateo`, but Mateo uses the reflexive verb form `llamarse`.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Mateo",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_mateo_practice.mp3",
      "startTime": 1,
      "startTimestamp": 0.31,
      "finishTimestamp": 8.88
    }
  },
  "commands": [
    {
      "character": "Mateo",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mateo",
      "startTime": 1,
      "finishTime": 2.67,
      "dialogue": {
        "text": "Hola, buenas noches.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 2.81,
      "finishTime": 3.79,
      "dialogue": {
        "text": "Me llamo Mateo.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 4.22,
      "finishTime": 5.75,
      "dialogue": {
        "text": "Soy ingeniero de software.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 6.11,
      "finishTime": 7.5,
      "dialogue": {
        "text": "Soy puertorriqueño.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 7.93,
      "finishTime": 9.57,
      "dialogue": {
        "text": "Tengo 25 años.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 10.07
    }
  ]
}
```
