---
id: 656d1becadf67d05d5b27bab
title: Aufgabe 146
challengeType: 19
dashedName: task-146
---

# --description--

Just like when you learned about the pronoun `he`, pronouns like `she` are used to refer to female individuals. They help avoid repetition in conversation. Siehe dir diesen Teil des Dialogs an:

Sophie: `Oh, come on, Brian!`

Brian: `But it is true. Sie ist die Person, zu der du gehst, wenn du Hilfe brauchst!`

Hier wird `She` von Brian verwendet, um auf Sophie zu verweisen. Instead of repeating Sophie's name, Brian uses the pronoun `she` to make the conversation smoother and avoid redundancy.

# --question--

## --text--

In the dialogue, which word does Brian use to refer to Sophie without repeating her name?

## --answers--

`he`

### --Feedback--

`He` bezieht sich auf einen Mann.

---

`they`

### --Feedback--

`They` ist Plural und bezieht sich auf mehr als eine Person.

---

`it`

### --feedback--

`It` is usually used for things or animals.

---

`she`

### --feedback--

`She` refers to a female person.

## --video-solution--

4

# --blanks--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Sophie",
        "position": { "x": 25, "y": 0, "z": 1.3 },
        "opacity": 0
      },
      {
        "character": "Brian",
        "position": { "x": 75, "y": 15, "z": 1.2 },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.1-4.mp3",
      "startTime": 1,
      "startTimestamp": 22.6,
      "finishTimestamp": 28.16
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 2.4,
      "dialogue": {
        "text": "Oh, come on, Brian.",
        "align": "left"
      }
    },
    {
      "character": "Brian",
      "startTime": 3.3,
      "finishTime": 6.35,
      "dialogue": {
        "text": "But it's true. She's the person to go to if you need help.",
        "align": "right"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 6.85
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 6.85
    }
  ]
}
```
