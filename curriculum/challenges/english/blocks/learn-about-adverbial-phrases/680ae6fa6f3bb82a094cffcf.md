---
id: 680ae6fa6f3bb82a094cffcf
title: Task 91
challengeType: 19
dashedName: task-91
---

<!-- (Audio) Riker: The UK and Germany saw the most improvement, even more than we expected. -->

<!-- SPEAKING -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What could Maria say to show she is positively surprised by the results?

## --answers--

`That's impressive.`

---

`Maybe we should lower our expectations.`

### --feedback--

This shows a lack of confidence, not excitement about the results.

## --video-solution--

1

# --explanation--

`Impressive` means something is worthy of attention, admiration, or respect because it is unusually good, large, or effective. For example:

`Your presentation was really impressive! It covered everything clearly and confidently.` – This means the presentation was high-quality and left a strong positive impact.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Riker",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_18-3.mp3",
      "startTime": 1,
      "startTimestamp": 18.42,
      "finishTimestamp": 23.1
    }
  },
  "commands": [
    {
      "character": "Riker",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Riker",
      "startTime": 1,
      "finishTime": 3.32,
      "dialogue": {
        "text": "The UK and Germany saw the most improvement,",
        "align": "center"
      }
    },
    {
      "character": "Riker",
      "startTime": 3.72,
      "finishTime": 5.68,
      "dialogue": {
        "text": "even more than we expected.",
        "align": "center"
      }
    },
    {
      "character": "Riker",
      "opacity": 0,
      "startTime": 6.18
    }
  ]
}
```
