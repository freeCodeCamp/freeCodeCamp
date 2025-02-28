---
id: 67b9becbb4fd3b0d7fc2411e
title: Task 65
challengeType: 22
dashedName: task-65
---

<!-- (Audio) David: It seems like it could lead to a lot of delays and miscommunication. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`It seems like it could lead to a lot of BLANK and BLANK.`

## --blanks--

`delays`

### --feedback--

This word refers to things taking longer than expected.

---

`miscommunication`

### --feedback--

This word refers to misunderstandings caused by unclear or incorrect information.

# --explanation--

David is concerned that asynchronous remote work might cause `delays` (slower responses and progress) and `miscommunication` (people misunderstanding each other).

Since employees work at different times, messages may take longer to be answered, and misunderstandings may happen if communication isn't clear.

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
      "startTimestamp": 24.82,
      "finishTimestamp": 28.84
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
      "finishTime": 5.02,
      "dialogue": {
        "text": "It seems like it could lead to a lot of delays and miscommunication.",
        "align": "center"
      }
    },
    {
      "character": "David",
      "opacity": 0,
      "startTime": 5.52
    }
  ]
}
```
