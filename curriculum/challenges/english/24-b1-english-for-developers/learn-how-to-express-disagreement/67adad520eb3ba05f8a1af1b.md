---
id: 67adad520eb3ba05f8a1af1b
title: Task 33
challengeType: 19
dashedName: task-33
---

<!-- (Audio) Bob: So maybe we should focus on both. Find a balance between comfort and technology to ensure everyone has what they need. -->

<!-- SPEAKING -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What should Anna say to agree with Bob?

## --answers--

`I don't understand.`

### --feedback--

This phrase suggests confusion, but Anna needs to show agreement with Bob's idea.

---

`That makes sense.`

## --video-solution--

2

# --explanation--

`That makes sense` is a natural way to show agreement. People use this phrase in conversations when they accept or understand a suggestion. For example:

- Person 1: `We should optimize the code before adding new features to avoid performance issues.`

- Person 2: `That makes sense. A slow app will frustrate users.` - This person agrees and understands why optimizing the code first is a good idea.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_11-1.mp3",
      "startTime": 1,
      "startTimestamp": 52,
      "finishTimestamp": 58.24
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 2.54,
      "dialogue": {
        "text": "So maybe we should focus on both.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "startTime": 2.54,
      "finishTime": 7.24,
      "dialogue": {
        "text": "Find a balance between comfort and technology to ensure everyone has what they need.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 7.74
    }
  ]
}
```
