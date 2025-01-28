---
id: 672e1fff03af3aeed5d7a84b
title: Task 117
challengeType: 19
dashedName: task-117
---

<!-- (Audio) Anna: That makes sense. Let's keep in touch to monitor the progress and ensure we're meeting our accessibility goals. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does Anna think about James' ideas, and what does she suggest?

## --answers--

She disagrees with James' ideas and suggests starting a new approach.

### --feedback--

Anna expresses agreement with James, not disagreement, and wants to stay updated rather than start over.

---

She thinks James' ideas are confusing and suggests focusing only on accessibility goals.

### --feedback--

Anna doesn't find James' ideas confusing; she agrees and wants to monitor progress on their shared goals.

---

She agrees with James and suggests they stay in contact to monitor progress.

---

She thinks James' ideas are unnecessary and suggests stopping the project.

### --feedback--

Anna doesn't suggest stopping; she supports James' ideas and wants to stay updated.

## --video-solution--

3

# --explanation--

Anna agrees with James' approach, saying `That makes sense`, which shows she understands and supports his ideas. She also suggests `keeping in touch to monitor progress`, indicating her interest in staying updated to ensure they reach their shared goals.

# --scene--

```json
{
  "setup": {
    "background": "interview-room1.png",
    "characters": [
      {
        "character": "Anna",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_4-4.mp3",
      "startTime": 1,
      "startTimestamp": 50.98,
      "finishTimestamp": 55.72
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 5.74,
      "dialogue": {
        "text": "That makes sense. Let's keep in touch to monitor the progress and ensure we're meeting our accessibility goals.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 6.24
    }
  ]
}
```
