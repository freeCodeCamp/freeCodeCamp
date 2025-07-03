---
id: 66bbba46fff0ef451b701bcd
title: Task 103
challengeType: 19
dashedName: task-103
---

<!-- Audio Reference:
Tom: Hey Sarah, do you have a moment? I'm struggling with these IDEs.
Sarah: Sure, I'm not busy. What's the problem? -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Is Sarah available to talk to Tom?

## --answers--

No, she is busy and doesn´t want to know about his problems.

### --feedback--

Sarah says she is not busy.

---

Yes, she is available and wants know what's the problem.

---

No, she cannot talk right now she has her own problems.

### --feedback--

Sarah mentions that she is not busy.

---

Yes, but only for a moment because she has her own problems.

### --feedback--

Sarah doesn't limit the time; she simply states that she is not busy.

## --video-solution--

2

# --explanation--

Instead of directly saying she is free, Sarah uses the negative form `I'm not busy` to emphasize that she has time to help. 

This is a polite and indirect way to offer availability in English, commonly used to make the conversation more tactful.

Her follow-up sentence, `What's the problem?`, confirms she's willing to assist by inviting Tom to explain the issue.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      },
      {
        "character": "Sarah",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_1-3.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 6.5
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
      "finishTime": 2.92,
      "dialogue": {
        "text": "Hey Sarah, do you have a moment?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "startTime": 3.08,
      "finishTime": 5.14,
      "dialogue": {
        "text": "I'm struggling with these IDEs.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.34
    },
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 5.34
    },
    {
      "character": "Sarah",
      "startTime": 5.54,
      "finishTime": 7.5,
      "dialogue": {
        "text": "Sure, I'm not busy. What's the problem?",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 8
    }
  ]
}
```
