---
id: 67caeb9a6a3aedb94bc912dd
title: Task 129
challengeType: 22
dashedName: task-129
---

<!-- (Audio) Maria: They also said the communication isn't great because they often don't hear about changes until it's too late. -->

# --instructions--

Listen to the audio and complete the sentence below.  

# --fillInTheBlank--

## --sentence--

`They BLANK said the communication isn't great because they BLANK don't hear about changes until it's too late.`  

## --blanks--

`also`  

### --feedback--

This means in addition or as well.

---  

`often`  

### --feedback--

This means frequently or many times.

# --explanation--

`Also` means in addition to something previously mentioned. For example:

`She speaks English and also knows French.` - This means she knows French in addition to English.  

`Often` means frequently or regularly. For example:

`He often works late on Fridays.` - This means he works late many times or regularly on Fridays.

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
      "startTimestamp": 34.9,
      "finishTimestamp": 40.12
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
      "finishTime": 3.18,
      "dialogue": {
        "text": "They also said the communication isn't great",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "startTime": 3.18,
      "finishTime": 6.22,
      "dialogue": {
        "text": "because they often don't hear about changes until it's too late.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 6.72
    }
  ]
}
```
