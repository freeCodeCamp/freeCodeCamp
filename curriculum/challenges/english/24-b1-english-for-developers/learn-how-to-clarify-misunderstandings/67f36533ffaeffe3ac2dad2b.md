---
id: 67f36533ffaeffe3ac2dad2b
title: Task 131
challengeType: 19
dashedName: task-131
---

<!-- (Audio) Jessica: Oh, that might be a mix-up. The budget tracking feature is planned for the next update, not this one. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Jessica explaining?

## --answers--

There was a problem with the current update's schedule.

### --feedback--

Jessica is talking about the feature's timing, not the schedule of the update itself.

---

The budget tracking feature will be in the next update, not the current one.

---

The budget tracking feature has been removed from the current update.

### --feedback--

Jessica doesn't mention that the feature has been removed.

---

The feature was mistakenly included in this update.

### --feedback--

Jessica doesn't say the feature was mistakenly included.

## --video-solution--

2

# --explanation--

Jessica says, `The budget tracking feature is planned for the next update`, explaining that the feature is not included in the current update but will be added in the next one.

This clears up the confusion about the feature's timing.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Jessica",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_16-3.mp3",
      "startTime": 1,
      "startTimestamp": 60.98,
      "finishTimestamp": 65.76
    }
  },
  "commands": [
    {
      "character": "Jessica",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jessica",
      "startTime": 1,
      "finishTime": 2.32,
      "dialogue": {
        "text": "Oh, that might be a mix-up.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "startTime": 2.58,
      "finishTime": 5.78,
      "dialogue": {
        "text": "The budget tracking feature is planned for the next update, not this one.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 6.28
    }
  ]
}
```
