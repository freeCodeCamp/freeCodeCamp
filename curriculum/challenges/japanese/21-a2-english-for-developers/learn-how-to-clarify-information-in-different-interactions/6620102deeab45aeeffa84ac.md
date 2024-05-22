---
id: 6620102deeab45aeeffa84ac
title: Task 5
challengeType: 22
dashedName: task-5
---

<!-- (Audio) Tom: She's a colleague with long wavy brown hair and bright brown eyes. -->

# --description--

When describing the color of a person's eyes, you normally identify them first by their color. Common eye colors are `black`, `brown`, `blue`, and `green`. Depending on the color if can have a tendency to `white` or to `black` (the color itself is stronger or weaker). In this case, you can add the words `light` (tending to `white`) and `dark` (tending to `black`) before the color to express it. Another characteristic that you normally use to identify another person's eyes is the shape - `round` when it is more like a circle and `narrow` when it is more similar to a line. Finally, you can refer to them in terms of their size, `large` (when they are big) or `small` (when they are not). Tom also expresses an opinion, saying Lisa's eyes are full of energy and vitality. In this case, you say one's eyes is `bright`.

As you do with `hair`, the adjectives to identify a person's eyes also follow an order in English. First, you express this opinion, then move on to the size, then the shape and finally the color (preceded or not by `light` or `dark`).

Example: `Tom has beautiful, small, narrow, light green eyes.`

Now listen and fill in the blanks with Tom's description of Lisa's eyes.

# --fillInTheBlank--

## --sentence--

`She's a colleague with long wavy brown hair and _ _ eyes.`

## --blanks--

`bright`

### --feedback--

Tom expresses an opinion first. He says Lisa's eyes are full of energy.

---

`brown`

### --feedback--

Tom finally talks about Lisa's eye color. It is a shade close to `black`, and neither `blue` nor `green`.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.3-1.mp3",
      "startTime": 1,
      "startTimestamp": 6.52,
      "finishTimestamp": 10.6
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 5.08,
      "dialogue": {
        "text": "She's a colleague with long wavy brown hair and bright brown eyes.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.58
    }
  ]
}
```
