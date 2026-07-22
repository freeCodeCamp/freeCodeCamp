---
id: 68e7058a10380e7bf750c58a
title: Task 8
challengeType: 19
dashedName: task-8
lang: es
---

# --description--

In this audio, you will listen to a sequence of three vowels.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Does the audio contain the vowel `a`?

## --answers--

Yes

### --feedback--

Listen closely to the three vowels. The vowel `a` is not pronounced in this sequence.

---

No

## --video-solution--

2

# --explanation--

In the audio, you can listen to the vowels **`o`**, **`i`**, and **`u`**.

The vowel **`a`** is not part of this sequence. Therefore, the answer is No.

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
      "filename": "ES_A1_vowels_oiu.mp3",
      "startTime": 1,
      "startTimestamp": 0.72,
      "finishTimestamp": 4.12
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
      "finishTime": 1.47,
      "dialogue": {
        "text": "o",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.44,
      "finishTime": 2.84,
      "dialogue": {
        "text": "i",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.91,
      "finishTime": 4.4,
      "dialogue": {
        "text": "u",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 4.9
    }
  ]
}
```
