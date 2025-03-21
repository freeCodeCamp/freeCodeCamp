---
id: 67ddb23caaa58aa09eabf0f8
title: Task 33
challengeType: 22
dashedName: task-33
---

<!-- (Audio) Alice: I think that's it for now. Thanks for your help. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`I think that's it for BLANK. Thanks for your help.`

## --blanks--

`now`

### --feedback--

This means at the present time and shows the situation could change later.

# --explanation--

`For now` means at this moment or for the time being. It suggests that things are complete at the moment, but more might happen later. For example:

`Let's stop working here for now and continue tomorrow.` - This means they are pausing at the moment, but will continue later.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "Alice",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-1.mp3",
      "startTime": 1,
      "startTimestamp": 42.46,
      "finishTimestamp": 44.74
    }
  },
  "commands": [
    {
      "character": "Alice",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Alice",
      "startTime": 1,
      "finishTime": 3.28,
      "dialogue": {
        "text": "I think that's it for now. Thanks for your help.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "opacity": 0,
      "startTime": 3.78
    }
  ]
}
```
