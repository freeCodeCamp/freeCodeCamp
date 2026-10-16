---
id: 69736b91a030a7df2996ebf1
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

<!-- (AUDIO) Elena: Setenta y cinco. -->

# --description--

Now it's time to practice what you've learned about numbers from 30 to 100. 

Elena is mentioning a number. Can you identify it?

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is it true: The number that you can hear in the audio is 75.

## --answers--

True

---

False

### --feedback--

Listen again. Elena says `setenta y cinco`.

## --video-solution--

1

# --explanation--

Elena says `setenta y cinco`. This is the number 75 in Spanish.

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
      "startTimestamp": 0.26,
      "finishTimestamp": 2.03
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
      "finishTime": 2.77,
      "dialogue": {
        "text": "Setenta y cinco",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 3.27
    }
  ]
}
```
