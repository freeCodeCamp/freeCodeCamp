---
id: 6710e0e2cafeeb09e6cb2d8f
title: Task 55
challengeType: 22
dashedName: task-55
---

<!-- (Audio) Linda: Well, during the project, I was working closely with the development team, and we were constantly updating the user interface based on user feedback. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Well, during the project, I BLANK BLANK closely with the development team, and we BLANK constantly BLANK the user interface based on user feedback.`

## --blanks--

`was`

### --feedback--

This is the auxiliary verb used to form the `Past Continuous` in the singular first-person form.

---

`working`

### --feedback--

This is the main verb in the `Past Continuous`, describing the act of laboring.

---

`were`

### --feedback--

This is the auxiliary verb used to form the `Past Continuous` in the plural first-person form.

---

`updating`

### --feedback--

This is the main verb in the `Past Continuous`, describing an ongoing action of improving or modernizing something.

# --explanation--

The `Past Continuous` tense is used to describe actions that were ongoing at a specific time in the past. When two `Past Continuous` sentences are used together, they often describe simultaneous actions or actions happening alongside each other.  

In this sentence, Linda is describing how she and her team were both working and updating the user interface continuously throughout the project. This shows two actions happening at the same time in the past, providing context or background for each other. For example: 

`While I was preparing the report, they were testing the new features.` - This means the action of my preparing the report and the testing of the new features happened at the same time.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Linda",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_2-2.mp3",
      "startTime": 1,
      "startTimestamp": 10.08,
      "finishTimestamp": 17.34
    }
  },
  "commands": [
    {
      "character": "Linda",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Linda",
      "startTime": 1,
      "finishTime": 4.36,
      "dialogue": {
        "text": "Well, during the project, I was working closely with the development team,",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "startTime": 4.5,
      "finishTime": 8.26,
      "dialogue": {
        "text": "and we were constantly updating the user interface based on user feedback.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 8.76
    }
  ]
}
```
