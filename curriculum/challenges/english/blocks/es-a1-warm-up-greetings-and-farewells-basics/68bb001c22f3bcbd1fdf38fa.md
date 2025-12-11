---
id: 68bb001c22f3bcbd1fdf38fa
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

<!-- (Audio) Elena: Hola -->

# --description--

Elena wants to say "hi". You'll hear this word all the time in Spanish when people meet each other.

# --instructions--

Listen to the audio and answer the question below.
There's just **one** correct answer. If you need help, click on **explanation** at the bottom of the lesson.

# --questions--

## --text--

What word does Elena use to say "hi"?

## --answers--

`Hola`

---

`Adiós`

### --feedback--

This means the opposite of what the speaker says. Open the explanation section if you need further help.

---

`Chao`

### --feedback--

This means the opposite of what the speaker says. Open the explanation section if you need further help.

---

`Buenos días`

### --feedback--

This means "Good morning", but it's not what you hear in the audio.

## --video-solution--

1

# --explanation--

The word `Hola` is a greeting. It's used when you meet someone, similar to "Hello" or "Hi". For example:

`¡Hola, buenos días!` – Hi, good morning! 

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_greetings_in_the_morning.mp3",
      "startTime": 1,
      "startTimestamp": 0.35,
      "finishTimestamp": 0.9
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
      "finishTime": 1.55,
      "dialogue": {
        "text": "¡Hola!",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.05
    }
  ]
}
```
