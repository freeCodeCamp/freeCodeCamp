---
id: 68e6fbefe999d06833f54c47
title: Task 6
challengeType: 19
dashedName: task-6
lang: es
---

# --description--

In this audio, you will listen to a sequence of three vowels.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What sequence of vowels do you hear in the audio?

## --answers--

`a  e  o`

### --feedback--

The last vowel in the audio is not `o`.

---

`o  a  i`

### --feedback--

The first vowel in the audio is `a`.

---

`i  a  e`

### --feedback--

The sequence in the audio begins with the vowel `a`.

---

`a  i  u`

## --video-solution--

4

# --explanation--

The audio contains this sequence of three vowels: **`a`**, **`i`**, **`u`**.

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
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
      "filename": "ES_A1_vowels_aiu.mp3",
      "startTime": 1,
      "startTimestamp": 0.82,
      "finishTimestamp": 3.85
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
      "finishTime": 1.38,
      "dialogue": {
        "text": "a",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.32,
      "finishTime": 2.69,
      "dialogue": {
        "text": "i",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.69,
      "finishTime": 4.03,
      "dialogue": {
        "text": "u",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 4.53
    }
  ]
}
```
