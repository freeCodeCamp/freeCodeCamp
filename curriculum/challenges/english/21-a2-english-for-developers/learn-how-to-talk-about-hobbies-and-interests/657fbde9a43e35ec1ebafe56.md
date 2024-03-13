---
id: 657fbde9a43e35ec1ebafe56
title: Task 75
challengeType: 19
dashedName: task-75
---

<!-- (Audio) Sarah: There's a big convention next month. Would you like to come? -->

# --description--

Listen to the audio and answer the question.

# --question--

## --text--

What does the phrase `Would you like to come?` convey in this context?

## --answers--

Declining an invitation

### --feedback--

This option is incorrect because the phrase is not a response indicating refusal; instead, it is an invitation being extended.

---

Extending an invitation

---

Expressing gratitude

### --feedback--

This option is incorrect because the phrase is more about offering an invitation than expressing thanks.

---

Asking for information

### --feedback--

This option is incorrect because the phrase is not seeking information; rather, it is an invitation to join an event.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {"x":50,"y":0,"z":1.4},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.2-4.mp3",
      "startTime": 1,
      "startTimestamp": 18.70,
      "finishTimestamp": 21.36
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 3.66,
      "dialogue": {
        "text": "There's a big convention next month. Would you like to come?",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 4.16
    }
  ]
}
```
