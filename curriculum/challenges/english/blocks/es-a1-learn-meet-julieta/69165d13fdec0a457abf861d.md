---
id: 69165d13fdec0a457abf861d
title: Task 7
challengeType: 19
dashedName: task-7
lang: es
---

# --description--

Julieta is using a polite farewell that expresses she expects to see you tomorrow.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does Julieta mean by saying `Hasta mañana`?

## --answers--

See you later today.

### --feedback--

Julieta is not referring to later today.

---

See you tomorrow.  

---

See you next week.

### --feedback--

Julieta is not referring to a time next week.

---

Goodbye forever.

### --feedback--

Julieta is not saying goodbye forever. She expects to see you again soon.

## --video-solution--

2

# --explanation--

The phrase `hasta mañana` literally means "until tomorrow", but its everyday meaning is "see you tomorrow".

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_meet_julieta.mp3",
      "startTime": 1,
      "startTimestamp": 9.33,
      "finishTimestamp": 11.25
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
      "finishTime": 2.1,
      "dialogue": {
        "text": "Hasta mañana.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.28,
      "finishTime": 2.92,
      "dialogue": {
        "text": "Chau.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 3.42
    }
  ]
}
```

