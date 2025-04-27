---
id: 680e2de44baaad7305adc8ee
title: Task 46
challengeType: 22
dashedName: task-46
---

<!-- (Audio) Josh: I’ll draft a new quote with these specifics and send it over to you by tomorrow. Does that work for you? -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`I’ll draft a new quote with these specifics and send it over to you by tomorrow. BLANK for you?`

## --blanks--

`Does that work`

### --feedback--

These three words together are used to politely ask if a plan or suggestion is acceptable. The first letter of the first word is capitalized.

# --explanation--

`Does that work` is a polite way to check if a suggestion or arrangement is okay for someone. For example:

`We can meet at 3 PM. Does that work for you?` – This asks if the time is good or convenient for the other person.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Josh",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_19-1.mp3",
      "startTime": 1,
      "startTimestamp": 70.14,
      "finishTimestamp": 75.94
    }
  },
  "commands": [
    {
      "character": "Josh",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Josh",
      "startTime": 1,
      "finishTime": 6.8,
      "dialogue": {
        "text": "I'll draft a new quote with these specifics and send it over to you by tomorrow. Does that work for you?",
        "align": "center"
      }
    },
    {
      "character": "Josh",
      "opacity": 0,
      "startTime": 7.3
    }
  ]
}
```
