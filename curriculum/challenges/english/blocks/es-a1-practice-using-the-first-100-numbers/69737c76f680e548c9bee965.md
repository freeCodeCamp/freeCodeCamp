---
id: 69737c76f680e548c9bee965
title: Task 11
challengeType: 19
dashedName: task-11
lang: es
---

<!-- (AUDIO) Elena: Sesenta y tres. -->

# --description--

Elena is practicing a number.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is it true: The number that you can hear in the audio is 80.

## --answers--

True

### --feedback--

Listen again. Elena says `sesenta y tres`.

---

False

## --video-solution--

2

# --explanation--

Elena says `sesenta y tres`. This is the number 63 in Spanish, not 80.


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
      "filename": "ES_A1_describing_company_and_people_numbers_practice.mp3",
      "startTime": 1,
      "startTimestamp": 5.46,
      "finishTimestamp": 7.32
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
      "finishTime": 2.86,
      "dialogue": {
        "text": "Sesenta y tres",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 3.36
    }
  ]
}
```
