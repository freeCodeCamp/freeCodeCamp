---
id: 662347b1bb7b3cdfcccffa57
title: Task 48
challengeType: 22
dashedName: task-48
---

<!-- (Audio) Brian: Sophie, I heard you're working on fixing that bug in the user authentication module. Need any help? -->

# --description--

`Heard` is the past tense of the verb `to hear`, which means to become aware of something through the ears or to be informed of something. For example, `I heard the news yesterday` means you became aware of the news the day before.

An `authentication module` in a software context is a part of a system responsible for verifying the identity of users. It's often used in login systems. For example, `The authentication module checks the username and password` means it verifies the user's credentials.

# --fillInTheBlank--

## --sentence--

`Sophie, I BLANK you're working on BLANK that bug in the user BLANK module. Need any help?`

## --blanks--

`heard`

### --feedback--

It is the past tense of `to hear`, indicating Brian was informed about Sophie's task.

---

`fixing`

### --feedback--

It refers to the act of repairing or resolving the issue (bug) in the software.

---

`authentication`

### --feedback--

It refers to the process of verifying a user's identity in the software module.

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
      "filename": "9.1-3.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 5.66
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
      "finishTime": 3.84,
      "dialogue": {
        "text": "Sophie, I heard you're working on fixing that bug",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "startTime": 3.84,
      "finishTime": 6.66,
      "dialogue": {
        "text": "in the user authentication module. Need any help?",
        "align": "center"
      }
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 7.16
    }
  ]
}
```
