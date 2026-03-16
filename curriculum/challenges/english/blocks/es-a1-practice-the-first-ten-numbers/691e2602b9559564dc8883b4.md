---
id: 691e2602b9559564dc8883b4
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

<!-- (AUDIO) Julieta: Dos -->

# --description--

Let's practice what you've learned so far. Julieta is pronouncing a number.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What number do you hear in the audio?

## --answers--

`Uno`

### --feedback--

Julieta does not mention the number `uno`.

---

`Dos`

---

`Tres`

### --feedback--

Julieta does not mention the number `tres`.

---

`Cero`

### --feedback--

Julieta does not mention the number `cero`.

## --video-solution--

2

# --explanation--

Julieta mentions the number `dos` (2).

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Julieta",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_fundamentals_numbers_0_9.mp3",
      "startTime": 1,
      "startTimestamp": 5.06,
      "finishTimestamp": 5.7
    }
  },
  "commands": [
    {
      "character": "Julieta",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Julieta",
      "startTime": 1,
      "finishTime": 1.64,
      "dialogue": {
        "text": "Dos",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.14
    }
  ]
}
```
