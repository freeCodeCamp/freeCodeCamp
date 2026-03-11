---
id: 692362e117d7be7f2ec621b7
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

<!-- (AUDIO) Camila: Diez, Trece, Quince -->

# --description--

Camila is practicing numbers in random order. This time, she mentions three numbers.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What sequence of numbers do you hear?

## --answers--

`Doce - Catorce - Dieciséis`

### --feedback--

These numbers are 12, 14, and 16. Camila mentions a different sequence of numbers.

---

`Diez - Trece - Quince`

---

`Trece - Diez - Quince`

### --feedback--

The numbers are correct, but the order is wrong.

---

`Once - Doce - Trece`

### --feedback--

These numbers are 11, 12, and 13. Camila mentions a different sequence of numbers.

## --video-solution--

2

# --explanation--

The sequence mentioned by Camila is `Diez - Trece - Quince`.

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
      "filename": "ES_A1_basic_personal_details_numbers_mixed.mp3",
      "startTime": 1,
      "startTimestamp": 4.64,
      "finishTimestamp": 8.53
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
      "finishTime": 1.82,
      "dialogue": {
        "text": "Diez",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 2.81,
      "finishTime": 3.54,
      "dialogue": {
        "text": "Trece",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 4.12,
      "finishTime": 4.89,
      "dialogue": {
        "text": "Quince",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 5.39
    }
  ]
}
```
