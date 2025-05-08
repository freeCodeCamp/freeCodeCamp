---
id: 67ee6d7bcacdc02ff7d9beb2
title: Task 69
challengeType: 22
dashedName: task-69
---

<!-- (Audio) Lisa: It could be a JavaScript issue. Maybe there's a problem with the event handling. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`It could be a JavaScript issue. Maybe BLANK a BLANK BLANK the BLANK.`

## --blanks--

`there's`

### --feedback--

This word is used to talk about the existence of something or to say that something is present or happening. It's the contraction of `there is`.

---

`problem`

### --feedback--

This word refers to an issue or difficulty that needs to be solved or fixed.

---

`with`

### --feedback--

This preposition shows the relationship or connection between two things.

---

`event handling`

### --feedback--

This two-word phrase refers to the way software or websites respond to actions, like clicks or keystrokes, performed by the user. The second word ends with `-ing`.

# --explanation--

`There's a problem with` is used to describe that something is not working correctly. It means there is an issue or difficulty related to a specific thing. For example:

`There's a problem with the network.` – This means the network is not functioning properly.

`Event handling` refers to how a program or website manages user actions like clicks, keyboard presses, or mouse movements. For example:

`There's an issue with event handling.` - This mean the software isn't responding properly to user actions.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Lisa",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_16-2.mp3",
      "startTime": 1,
      "startTimestamp": 31.38,
      "finishTimestamp": 35.2
    }
  },
  "commands": [
    {
      "character": "Lisa",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Lisa",
      "startTime": 1,
      "finishTime": 4.82,
      "dialogue": {
        "text": "It could be a JavaScript issue. Maybe there's a problem with the event handling.",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 5.32
    }
  ]
}
```
