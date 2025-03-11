---
id: 67caf4fe6a781dcd6059ceda
title: Task 131
challengeType: 22
dashedName: task-131
---

<!-- (Audio) Maria: It'd be helpful if we had more regular check-ins. -->

# --instructions--

Listen to the audio and complete the sentence below.  

# --fillInTheBlank--

## --sentence--

`It'd be BLANK if we had more BLANK check-ins.`  

## --blanks--

`helpful`  

### --feedback--

This means providing assistance or making something easier.  

---  

`regular`  

### --feedback--

This means happening consistently or at set intervals.  

# --explanation--

`Helpful` means providing assistance or making something easier. For example:

`It was helpful to have clear instructions before starting the task.` - This means the instructions made the task easier to complete.

`Regular` means happening consistently or at set intervals. For example:

`We have regular meetings every Monday.` - This means the meetings happen consistently on Mondays.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_12-3.mp3",
      "startTime": 1,
      "startTimestamp": 40.42,
      "finishTimestamp": 42.58
    }
  },
  "commands": [
    {
      "character": "Maria",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Maria",
      "startTime": 1,
      "finishTime": 3.16,
      "dialogue": {
        "text": "It'd be helpful if we had more regular check-ins.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 3.66
    }
  ]
}
```
