---
id: 697288a323dd4ff0efdeb0a3
title: Task 8
challengeType: 19
dashedName: task-8
lang: es
---

<!-- (AUDIO) Elena: Cincuenta y siete. -->

# --description--

Elena is practicing how to pronounce a number.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What number do you hear?

## --answers--

`Cincuenta y uno`

### --feedback--

`Cincuenta y uno` is 51. Elena mentions a different number.

---

`Cincuenta y siete`

---

`Cincuenta y tres`

### --feedback--

`Cincuenta y tres` is 53. Elena mentions a different number.

---

`Cincuenta y cinco`

### --feedback--

`Cincuenta y cinco` is 55. Elena mentions a different number.

## --video-solution--

2

# --explanation--

Elena mentions the number `cincuenta y siete`, which corresponds to the number 57.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Elena",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_describing_company_and_people_numbers_21_100.mp3",
      "startTime": 1,
      "startTimestamp": 79.67,
      "finishTimestamp": 81.15
    }
  },
  "commands": [
    {
      "character": "Elena",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Elena",
      "startTime": 1,
      "finishTime": 2.48,
      "dialogue": {
        "text": "Cincuenta y siete",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.98
    }
  ]
}
```
