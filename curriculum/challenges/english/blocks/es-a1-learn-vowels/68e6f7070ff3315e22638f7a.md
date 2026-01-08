---
id: 68e6f7070ff3315e22638f7a
title: Task 2
challengeType: 19
dashedName: task-2
lang: es
---

# --description--

In this audio, you will listen to the sound of a vowel.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Which one of these vowels do you hear in the audio?

## --answers--

The vowel `a`

### --feedback--

The vowel `a` has a different sound.

---

The vowel `e`

### --feedback--

The vowel `e` has a different sound.

---

The vowel `i`

---

The vowel `u`

### --feedback--

The vowel `u` has a different sound.

## --video-solution--

3

# --explanation--

The vowel that you can hear in the audio is `i`.

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
      "filename": "ES_A1_vowels.mp3",
      "startTime": 1,
      "startTimestamp": 5.17,
      "finishTimestamp": 5.65
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
      "finishTime": 1.48,
      "dialogue": {
        "text": "i",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 1.98
    }
  ]
}
```
