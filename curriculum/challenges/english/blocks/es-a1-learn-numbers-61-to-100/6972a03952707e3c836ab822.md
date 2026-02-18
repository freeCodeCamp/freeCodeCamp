---
id: 6972a03952707e3c836ab822
title: Task 2
challengeType: 19
dashedName: task-2
lang: es
---

<!-- (AUDIO) Elena: Sesenta y siete -->

# --description--

Elena is practicing how to pronounce a number.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What number do you hear?

## --answers--

`Sesenta y siete`

---

`Sesenta y tres`

### --feedback--

`Sesenta y tres` is 63. Elena mentions a different number.

---

`Sesenta y cinco`

### --feedback--

`Sesenta y cinco` is 65. Elena mentions a different number.

---

`Sesenta y seis`

### --feedback--

`Sesenta y seis` is 66. Elena mentions a different number.

## --video-solution--

1

# --explanation--

Elena mentions the number `sesenta y siete`, which corresponds to the number 67.

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
      "startTimestamp": 102.68,
      "finishTimestamp": 104.12
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
      "finishTime": 2.44,
      "dialogue": {
        "text": "Sesenta y siete",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.94
    }
  ]
}
```
