---
id: 68443eddeab5bb2d7d6e44bf
title: Task 45
challengeType: 22
dashedName: task-45
---

<!-- (Audio) Bob: Last, where should we set up the break room? -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Last, where should we BLANK the BLANK?`

## --blanks--

`set up`

### --feedback--

This two-word phrase means to arrange or prepare something for use.

---

`break room`

### --feedback--

This two-word phrase refers to a space where employees can relax from work.

# --explanation--

`Set up` means to prepare or arrange something for use. For example:

`We need to set up the new computers before the meeting.` – This means to make them ready.

`Break room` is a place in an office where people rest, eat, or relax. For example:

`Let's meet in the break room after lunch.` – This refers to a space meant for taking a break.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_22-1.mp3",
      "startTime": 1,
      "startTimestamp": 61.24,
      "finishTimestamp": 63.3
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 3.06,
      "dialogue": {
        "text": "Last, where should we set up the break room?",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 3.56
    }
  ]
}
```
