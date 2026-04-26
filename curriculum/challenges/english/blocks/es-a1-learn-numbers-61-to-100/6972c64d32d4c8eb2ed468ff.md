---
id: 6972c64d32d4c8eb2ed468ff
title: Task 8
challengeType: 19
dashedName: task-8
lang: es
---

<!-- (AUDIO) Elena: Ochenta y ocho. -->

# --description--

Elena is practicing how to pronounce a number.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What number do you hear?

## --answers--

`Ochenta y dos`

### --feedback--

`Ochenta y dos` is 82. Elena mentions a different number.

---

`Ochenta y ocho`

---

`Ochenta y siete`

### --feedback--

`Ochenta y siete` is 87. Elena mentions a different number.

---

`Ochenta y uno`

### --feedback--

`Ochenta y uno` is 81. Elena mentions a different number.

## --video-solution--

2

# --explanation--

Elena mentions the number `ochenta y ocho`, which corresponds to the number 88.

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
      "startTimestamp": 150.32,
      "finishTimestamp": 151.64
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
      "finishTime": 2.32,
      "dialogue": {
        "text": "Ochenta y ocho",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.82
    }
  ]
}
```
