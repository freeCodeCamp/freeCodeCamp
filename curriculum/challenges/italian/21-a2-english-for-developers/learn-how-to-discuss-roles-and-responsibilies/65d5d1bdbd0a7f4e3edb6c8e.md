---
id: 65d5d1bdbd0a7f4e3edb6c8e
title: Task 34
challengeType: 19
dashedName: task-34
---

<!-- (Audio) Tom: Hey, have you ever worked with Anna from HR? -->

# --description--

Listen to the audio and answer the question.

# --question--

## --text--

What is Tom asking about?

## --answers--

If Anna works in HR

### --feedback--

Tom's question is specifically about whether the person has worked with Anna, not about Anna's role.

---

If Alice has had any experience working with Anna.

---

If you like working in HR

### --feedback--

The question is about past experience with Anna, not personal feelings about working in HR.

---

If Anna has ever worked

### --feedback--

The focus of Tom's question is on the listener's experience with Anna, not on Anna's work history.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company1-reception.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "3.3-2.mp3",
      "startTime": 1,
      "startTimestamp": 0.00,
      "finishTimestamp": 2.88
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 3.88,
      "dialogue": {
        "text": "Hey, have you ever worked with Anna from HR?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.38
    }
  ]
}
```
