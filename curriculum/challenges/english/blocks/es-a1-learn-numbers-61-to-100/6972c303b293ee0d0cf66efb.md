---
id: 6972c303b293ee0d0cf66efb
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---

<!-- (AUDIO) Elena: Setenta y tres. -->

# --description--

Elena is practicing how to pronounce a number.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What number do you hear?

## --answers--

`Setenta y seis`

### --feedback--

`Setenta y seis` is 76. Elena mentions a different number.

---

`Setenta y ocho`

### --feedback--

`Setenta y ocho` is 78. Elena mentions a different number.

---

`Setenta y tres`

---

`Setenta y cinco`

### --feedback--

`Setenta y cinco` is 75. Elena mentions a different number.

## --video-solution--

3

# --explanation--

Elena mentions `setenta y tres`, which corresponds to the number 73.

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
      "startTimestamp": 115.47,
      "finishTimestamp": 116.97
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
      "finishTime": 2.5,
      "dialogue": {
        "text": "Setenta y tres",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 3
    }
  ]
}
```
