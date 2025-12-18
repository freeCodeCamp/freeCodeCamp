---
id: 68e53e2526414c56ac61f4e5
title: Task 8
challengeType: 19
dashedName: task-8
lang: es
---

<!-- (audio) Mateo:  Veinticinco años. -->

# --description--

In Spanish, the number 20 is `veinte`. 

When forming numbers from 21 to 29, the words change slightly. `Veinte` becomes `veinti-` (the final `e` is removed), then it joins with the next number. For example:

- `Veinti` + `dos` (two) = `veintidós` (22)

- `Veinti` + `cinco` (five) = `veinticinco` (25)

- `Veinti` + `ocho` (eight) = `veintiocho` (28)

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What age number is Mateo mentioning?

## --answers--

`Veinticinco años`

---

`Veintiocho años`

### --feedback--

This means "twenty-eight years old". The number Mateo says is lower than twenty-eight.

---

`Veinte años`

### --feedback--

This means "twenty years old". The number Mateo says is higher.

---

`Veintidós años`

### --feedback--

This means "twenty-two years old". The number Mateo says is higher.

## --video-solution--

1

# --explanation--

`Veinticinco años` - Twenty-five years old.

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
      "startTimestamp": 27.2,
      "finishTimestamp": 29.6
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
      "finishTime": 3.4,
      "dialogue": {
        "text": "Veinticinco años",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 3.9
    }
  ]
}
```
