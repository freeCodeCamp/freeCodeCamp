---
id: 6920df47b620d52875b2a2ce
title: Task 2
challengeType: 19
dashedName: task-2
lang: es
---

<!-- (AUDIO) Camila: Cuatro, Dos, Cero -->

# --description--

Camila is practicing how to pronounce three numbers.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What sequence of numbers do you hear in the audio?

## --answers--

`Uno - Dos - Cuatro`

### --feedback--

Camila mentions a different sequence of numbers.

---

`Cuatro - Dos - Tres`

### --feedback--

The last number in this option is not the number that Camila mentions.

---

`Cuatro - Dos - Cero`

---

`Dos - Cuatro - Uno`

### --feedback--

The first number is `Cuatro`, not `Dos`.

## --video-solution--

3

# --explanation--

Camila mentions this sequence of numbers: `Cuatro - Dos - Cero`.

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Camila",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_fundamentals_numbers_mixed.mp3",
      "startTime": 1,
      "startTimestamp": 0.61,
      "finishTimestamp": 3.99
    }
  },
  "commands": [
    {
      "character": "Camila",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Camila",
      "startTime": 1,
      "finishTime": 1.7,
      "dialogue": {
        "text": "Cuatro",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 2.35,
      "finishTime": 3.02,
      "dialogue": {
        "text": "Dos",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 3.71,
      "finishTime": 4.38,
      "dialogue": {
        "text": "Cero",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 4.88
    }
  ]
}
```
