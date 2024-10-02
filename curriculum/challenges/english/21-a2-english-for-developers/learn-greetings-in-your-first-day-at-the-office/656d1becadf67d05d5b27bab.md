---
id: 656d1becadf67d05d5b27bab
title: Task 146
challengeType: 19
dashedName: task-146
---

# --description--

Just like when you learned about the pronoun `he`, pronouns like `she` are used to refer to female individuals. They help avoid repetition in conversation. Look at this part of the dialogue:

Sophie: `Oh, come on, Brian!`

Brian: `But it is true. She's the person to go to if you need help!`

Here, `She` is used by Brian to refer to Sophie. Instead of repeating Sophie's name, Brian uses the pronoun `she` to make the conversation smoother and avoid redundancy.

# --questions--

## --text--

In the dialogue, which word does Brian use to refer to Sophie without repeating her name?

## --answers--

`he`

### --feedback--

`He` refers to a male.

---

`they`

### --feedback--

`They` is plural and refers to more than one person.

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

# --scene--

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
