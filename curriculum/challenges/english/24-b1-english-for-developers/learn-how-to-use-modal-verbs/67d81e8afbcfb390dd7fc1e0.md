---
id: 67d81e8afbcfb390dd7fc1e0
title: Task 133
challengeType: 19
dashedName: task-133
---

<!-- (audio) Lisa: Have you checked which files were compromised? -->

<!-- SPEAKING -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Jake hasn't checked that yet and says the team should focus on something else. What would he say?  

## --answers--

`Not yet, but we should focus on the critical systems first.`

---

`I already checked, and everything looks fine.`

### --feedback--

Jake hasn't checked yet, so he wouldn't be able to confirm this.

## --video-solution--

1

# --explanation--

Securing critical systems is usually the first priority before assessing individual files.

`Not yet.` means Jake hasn't checked which files were compromised.

`We should focus on the critical systems first.` means that instead of looking at files, the team should prioritize protecting essential parts of the system.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Lisa",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-3.mp3",
      "startTime": 1,
      "startTimestamp": 38.02,
      "finishTimestamp": 39.88
    }
  },
  "commands": [
    {
      "character": "Lisa",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Lisa",
      "startTime": 1,
      "finishTime": 2.86,
      "dialogue": {
        "text": "Have you checked which files were compromised?",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 3.36
    }
  ]
}
```
