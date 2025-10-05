---
id: 67baf3ed288e8b06f4ab0dfb
title: Task 76
challengeType: 22
dashedName: task-76
---

<!-- (Audio) David: It builds team spirit and makes problem-solving easier. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`It builds BLANK and makes BLANK easier.`

## --blanks--

`team spirit`

### --feedback--  

These two words together refer to the sense of unity and cooperation among coworkers. The first word refers to a group working together, and the second word relates to shared enthusiasm or motivation.

---

`problem-solving`

### --feedback--  

This compound word refers to the process of finding solutions to challenges. The first part refers to an issue that needs to be fixed, and the second part is a verb meaning finding a solution. Remember to use `-` between the two parts.

# --explanation--

David believes that working in the office helps strengthen `team spirit` (a sense of connection and unity among coworkers) and improves `problem-solving` (finding solutions to challenges more efficiently).

He argues that being in the same physical space makes it easier for employees to collaborate and support one another.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "David",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_11-2.mp3",
      "startTime": 1,
      "startTimestamp": 42.52,
      "finishTimestamp": 45.7
    }
  },
  "commands": [
    {
      "character": "David",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "David",
      "startTime": 1,
      "finishTime": 4.18,
      "dialogue": {
        "text": "It builds team spirit and makes problem solving easier.",
        "align": "center"
      }
    },
    {
      "character": "David",
      "opacity": 0,
      "startTime": 4.68
    }
  ]
}
```
