---
id: 69737813e8e195d22abe4638
title: Task 6
challengeType: 19
dashedName: task-6
lang: es
---

<!-- (AUDIO) Elena: Cien -->

# --description--

Elena is practicing a very unique number.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is it true: The number that you can hear in the audio is 100.

## --answers--

True

---

False

### --feedback--

Listen again. Elena says `cien`.

## --video-solution--

1

# --explanation--

Elena says `cien`. This is the number 100 in Spanish.

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
      "startTimestamp": 17.64,
      "finishTimestamp": 18.48
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
      "finishTime": 1.84,
      "dialogue": {
        "text": "Cien",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.34
    }
  ]
}
```
