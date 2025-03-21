---
id: 67dd5cfeacc0cad2fc967438
title: Task 16
challengeType: 19
dashedName: task-16
---

<!-- (Audio) James: By the way, did we decide on the deadline for the first phase? -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does James want to know?

## --answers--

If they agreed on the deadline for the first phase.

---

If the project has been canceled.

### --feedback--

James doesn't mention canceling the project.

---

If Alice is responsible for the first phase.

### --feedback--

James is not asking about responsibilities.

---

If the team finished the final phase.

### --feedback--

James does not talk about the final phase.

## --video-solution--

1

# --explanation--

`By the way` is used to introduce a new but related topic into the conversation. It often brings up something that the speaker just remembered or wants to check. For example:

`By the way, have you seen the updated report?` – This introduces a new question related to what was already being discussed.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "James",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-1.mp3",
      "startTime": 1,
      "startTimestamp": 17.36,
      "finishTimestamp": 20.64
    }
  },
  "commands": [
    {
      "character": "James",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "James",
      "startTime": 1,
      "finishTime": 4.28,
      "dialogue": {
        "text": "By the way, did we decide on the deadline for the first phase?",
        "align": "center"
      }
    },
    {
      "character": "James",
      "opacity": 0,
      "startTime": 4.78
    }
  ]
}
```
