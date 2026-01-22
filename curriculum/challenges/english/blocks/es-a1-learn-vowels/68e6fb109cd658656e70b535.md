---
id: 68e6fb109cd658656e70b535
title: Task 4
challengeType: 19
dashedName: task-4
lang: es
---

# --description--

In this audio, you will listen to the sound of a vowel.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Which of the following vowels do you hear in the audio?

## --answers--

The vowel `a`

---

The vowel `e`

### --feedback--

The vowel `e` has a different sound.

---

The vowel `i`

### --feedback--

The vowel `i` has a different sound.

---

The vowel `o`

### --feedback--

The vowel `o` has a different sound.

## --video-solution--

1

# --explanation--

The vowel that you can hear in the audio is `a`.

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
      "startTimestamp": 1.25,
      "finishTimestamp": 1.79
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
      "finishTime": 1.54,
      "dialogue": {
        "text": "a",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.04
    }
  ]
}
```

