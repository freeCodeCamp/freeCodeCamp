---
id: 67d78c94b686ce3bddcaf8ab
title: Task 117
challengeType: 22
dashedName: task-117
---

<!-- (Audio) Brian: It could save us time and resources. What about timelines? Which option is faster? -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`It could BLANK and resources. What about BLANK? Which option is faster?`

## --blanks--

`save us time`

### --feedback--

These three words together mean to reduce the amount of time needed to complete a task.  

---

`timelines`

### --feedback--

This word in the plural form refers to schedules or deadlines for completing a project.  

# --explanation--

`Save us time` means to reduce the time required to complete something, making the process more efficient. For example:

`Using automation tools can save us time on repetitive tasks.` – This means automation tools help complete tasks faster.  

`Timelines` refer to schedules or deadlines that show when different parts of a project should be completed. For example:

`We need to adjust our timelines to finish the project on schedule.` – This means changing the deadlines to ensure the project is completed on time.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Brian",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_13-3.mp3",
      "startTime": 1,
      "startTimestamp": 32.34,
      "finishTimestamp": 37.52
    }
  },
  "commands": [
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "startTime": 1,
      "finishTime": 6.18,
      "dialogue": {
        "text": "It could save us time and resources. What about timelines? Which option is faster?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 6.68
    }
  ]
}
```
