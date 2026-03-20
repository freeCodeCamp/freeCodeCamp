---
id: 68df2d0bfdc47c0438a86747
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---

<!-- (audio) Mateo: Puertorriqueño. -->

# --description--

Mateo is mentioning a nationality. Someone who comes from an island in the Caribbean that has its own culture, music, and traditions.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What nationality is Mateo mentioning?

## --answers--

`Chilena`

### --feedback--

This refers to a woman from Chile.

---

`Puertorriqueño`

---

`Peruano`

### --feedback--

This refers to a man from Peru.

---

`Colombiano`

### --feedback--

This refers to a man from Colombia.

## --video-solution--

2

# --explanation--

`Puertorriqueño` – Puerto Rican (masculine).

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_introducing_yourself_vocabulary.mp3",
      "startTime": 1,
      "startTimestamp": 16.99,
      "finishTimestamp": 18.57
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
      "finishTime": 2.58,
      "dialogue": {
        "text": "Puertorriqueño",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 3.08
    }
  ]
}
```
