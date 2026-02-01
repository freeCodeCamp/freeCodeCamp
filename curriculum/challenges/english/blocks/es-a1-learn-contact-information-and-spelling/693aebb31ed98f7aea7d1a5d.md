---
id: 693aebb31ed98f7aea7d1a5d
title: Task 19
challengeType: 19
dashedName: task-19
lang: es
---

<!-- (Audio) Basti: Y mi número es +502 4489 2201. -->

# --description--

In this task, you will hear Basti share his full phone number, including the country code. The number is spoken clearly in grouped digits. 

# --instructions--

Listen to the audio and answer the question below. There's just one correct answer.

# --questions--

## --text--

Which of the following is Basti's phone number?

## --answers--

+502 4489 2201

---

+502 4489 2102

### --feedback--

The final digits are not what Basti says.

---

+520 4489 2201

### --feedback--

The country code Basti says is not 520.

---

+502 4498 2201

### --feedback--

There is a small error in the middle four digits.

## --video-solution--

1

# --explanation--

`Y mi número es +502 4489 2201`, means "And my number is +502 4489 2201".

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_personal_details.mp3",
      "startTime": 1,
      "startTimestamp": 64.86,
      "finishTimestamp": 74.84
    }
  },
  "commands": [
    {
      "character": "Sebastián",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sebastián",
      "startTime": 1,
      "finishTime": 10.98,
      "dialogue": {
        "text": "Y mi número es +502 4489 2201.",
        "align": "center"
      }
    },
    {
      "character": "Sebastián",
      "opacity": 0,
      "startTime": 11.48
    }
  ]
}
```
