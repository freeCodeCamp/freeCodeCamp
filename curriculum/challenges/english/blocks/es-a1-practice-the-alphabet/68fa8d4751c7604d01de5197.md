---
id: 68fa8d4751c7604d01de5197
title: Task 4
challengeType: 19
dashedName: task-4
lang: es
---

# --instructions--

Listen to the three letters in the audio and answer the question below.

# --questions--

## --text--

Is it true or false: The letter `n` is in the audio.

## --answers--

True

### --feedback--

A very similar letter is pronounced in the audio, but it's not the letter `n`.

---

False

## --video-solution--

2

# --explanation--

These are the three letters pronounced in the audio: `g`, `m`, `t`.

The letter `m` sounds very similar to the letter `n`, but they are different letters in Spanish.

Therefore, the answer is false because the letter `n` is not pronounced in the audio.

# --scene--

```json
{
  "setup": {
    "background": "living-room.png",
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
      "filename": "ES_A1_alphabet_practice.mp3",
      "startTime": 1,
      "startTimestamp": 20.57,
      "finishTimestamp": 25.23
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
      "finishTime": 1.69,
      "dialogue": {
        "text": "g",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.12,
      "finishTime": 3.93,
      "dialogue": {
        "text": "m",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 5.27,
      "finishTime": 5.66,
      "dialogue": {
        "text": "t",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 6.16
    }
  ]
}
```

