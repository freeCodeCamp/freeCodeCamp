---
id: 65f6fc00be7facffe0898c6d
title: Task 44
challengeType: 22
dashedName: task-44
---

<!--
AUDIO REFERENCE:
entire dialogue
-->

# --description--

This task will help you summarize the dialogue using keywords from it. 

# --fillInTheBlank--

## --sentence--

`Sophie has _ an issue in the code and needs Brian's _ to figure it out. They plan to _ the symptoms and investigate, especially with _ data sets. By the end, they expect to have a _ understanding of the problem.`

## --blanks--

`encountered`

### --feedback--

Sophie uses this word to describe finding a problem in the code.

---

`help`

### --feedback--

Sophie is seeking assistance from Brian.

---

`understand`

### --feedback--

Brian suggests starting by understanding the issue's symptoms.

---

`large`

### --feedback--

Sophie mentions the problem may occur with a lot of data sets.

---

`clearer`

### --feedback--

Brian believes that through investigation, they will gain a better understanding.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      },
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
      "filename": "6.3-3.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 26.28
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 8.6,
      "dialogue": {
        "text": "Brian, I've encountered an issue in the code, and I can't quite pinpoint what's causing it. I may need a second pair of eyes to help me out.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 8.79
    },
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 8.79
    },
    {
      "character": "Brian",
      "startTime": 8.98,
      "finishTime": 14.26,
      "dialogue": {
        "text": "No problem, Sophie. I can definitely work on that with you. Let's start by understanding the symptoms of the issue.",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 14.67
    },
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 14.67
    },
    {
      "character": "Sophie",
      "startTime": 15.08,
      "finishTime": 21.54,
      "dialogue": {
        "text": "I've noticed that the issue may occur when we handle large data sets. It could be a performance bottleneck, but I should confirm it.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 21.74
    },
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 21.74
    },
    {
      "character": "Brian",
      "startTime": 21.94,
      "finishTime": 27.28,
      "dialogue": {
        "text": "Understood. We can investigate this together, and by the end of it, we should have a clearer picture of what's happening.",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 27.78
    }
  ]
}
```
