---
id: 67e2ae1300a8edcdede767db
title: Task 4
challengeType: 22
dashedName: task-4
---

<!-- (Audio) Mark: Can I ask you about a few of them? -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Can I BLANK you BLANK a few of them?`

## --blanks--

`ask`

### --feedback--

This verb is used when someone wants to get information or permission.

---

`about`

### --feedback--

This preposition connects related topic or subject.

# --explanation--

`Ask about` means to request information related to a specific topic. For example:

`I asked about the new feature.` – You wanted information on the feature. 

`Can I ask you about...` is a polite way to start a question when you want information or help. It shows that you're asking for permission to talk about a specific topic. For example:

`Can I ask you about the project deadline?` – This means you want to talk about the deadline and get more details.  

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Mark",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_16-1.mp3",
      "startTime": 1,
      "startTimestamp": 5.58,
      "finishTimestamp": 7.08
    }
  },
  "commands": [
    {
      "character": "Mark",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mark",
      "startTime": 1,
      "finishTime": 2.5,
      "dialogue": {
        "text": "Can I ask you about a few of them?",
        "align": "center"
      }
    },
    {
      "character": "Mark",
      "opacity": 0,
      "startTime": 3
    }
  ]
}
```
