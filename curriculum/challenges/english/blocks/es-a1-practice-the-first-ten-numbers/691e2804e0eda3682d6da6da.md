---
id: 691e2804e0eda3682d6da6da
title: Task 2
challengeType: 19
dashedName: task-2
lang: es
---

<!-- (AUDIO) Julieta: Cuatro -->

# --description--

Julieta is pronouncing a number.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What number do you hear in the audio?

## --answers--

`Dos`

### --feedback--

Julieta does not mention the number `dos`.

---

`Cinco`

### --feedback--

Julieta does not mention the number `cinco`.

---

`Cuatro`

---

`Nueve`

### --feedback--

Julieta does not mention the number `nueve`.

## --video-solution--

3

# --explanation--

Julieta mentions the number `cuatro` (4).

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
      "startTimestamp": 9.76,
      "finishTimestamp": 10.37
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
      "finishTime": 1.61,
      "dialogue": {
        "text": "Cuatro",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.11
    }
  ]
}
```
