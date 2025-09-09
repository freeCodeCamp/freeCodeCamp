---
id: 65ffa9d80e7ffb1ab9b4df1c
title: Task 11
challengeType: 22
dashedName: task-11
---

<!-- (Audio) Sarah: Once you've found the section you need, you should start by reading the introductory paragraphs to get an overview of what the documentation covers. -->

# --description--

Listen to the audio and complete the sentence.

# --fillInTheBlank--

## --sentence--

`BLANK you've BLANK the section you need, you should start by reading the BLANK paragraphs to get an overview of what the documentation BLANK.`

## --blanks--

`Once`

### --feedback--

It indicates that the action to follow happens as soon as the section is found. Capitalize this word. 

---

`found`

### --feedback--

It's used here to mean locating or discovering the needed section in the documentation.

---

`introductory`

### --feedback--

This word refers to the beginning paragraphs that provide a basic understanding of the section.

---

`covers`

### --feedback--

It means what the documentation includes or addresses in terms of content.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Sarah",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "7.2-1.mp3",
      "startTime": 1,
      "startTimestamp": 20.68,
      "finishTimestamp": 27.82
    }
  },
  "commands": [
    {
      "character": "Sarah",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sarah",
      "startTime": 1,
      "finishTime": 8.14,
      "dialogue": {
        "text": "Once you've found the section you need, you should start by reading the introductory paragraphs to get an overview of what the documentation covers.",
        "align": "center"
      }
    },
    {
      "character": "Sarah",
      "opacity": 0,
      "startTime": 8.64
    }
  ]
}
```
