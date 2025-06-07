---
id: 6840ad915ebc0fbbb9daf0b4
title: Task 3
challengeType: 19
dashedName: task-3
---

<!-- (Audio) Mateo: Hola, Marisol. ¿Cómo estás esta mañana? -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does Mateo ask Marisol?

## --answers--

What time it is

### --feedback--

Mateo is not asking about the time.

---

What she is doing

### --feedback--

Mateo is not asking about her current activity.

---

How she is doing

---

Where she is going

### --feedback--

Mateo does not ask about her destination.

## --video-solution--

3

# --explanation--

The phrase `¿Cómo estás?` means "How are you?" in English. It is used to ask about someone's emotional or physical state, not about the time, actions, or locations.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Mateo",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A2_2.1.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.8
    }
  },
  "commands": [
    {
      "character": "Mateo",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mateo",
      "startTime": 1,
      "finishTime": 1.56,
      "dialogue": {
        "text": "Hola Marisol,",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 1.72,
      "finishTime": 3.8,
      "dialogue": {
        "text": "¿cómo estás esta mañana?",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 4.3
    }
  ]
}
```
