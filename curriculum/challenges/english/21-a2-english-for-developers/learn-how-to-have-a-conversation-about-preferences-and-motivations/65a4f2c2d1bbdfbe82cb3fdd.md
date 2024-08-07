---
id: 65a4f2c2d1bbdfbe82cb3fdd
title: Task 91
challengeType: 22
dashedName: task-91
---

<!-- (Audio) Bob: Hey, Sarah, do you know what really gets me excited about tech? It's all those amazing gadgets! -->

# --description--

A `gadget` is a small tool or device, often clever or novel, that performs a specific function or makes something easier. 

In tech, gadgets can include things like smartphones, smartwatches, or any cool, innovative electronic device. 

For example, `My new fitness tracker gadget helps me keep track of my steps and exercise.`

# --fillInTheBlank--

## --sentence--

`Hey, Sarah, do you know what really BLANK me excited about tech? It's all BLANK amazing BLANK!`

## --blanks--

`gets`

### --feedback--

This word means something causes a feeling or a reaction. Here, it's used to talk about what excites Bob about tech. It's conjugated in the third person singular.

---

`those`

### --feedback--

This word is used to point out specific things that are being talked about, in this case, the gadgets. Plural of `that`.

---

`gadgets`

### --feedback--

This word refers to small electronic devices or tools that are useful or interesting. It's often used to talk about cool tech items. It is in plural.

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.1-4.mp3",
      "startTime": 1,
      "startTimestamp": 0.00,
      "finishTimestamp": 6.08
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
      "finishTime": 7.08,
      "dialogue": {
        "text": "Hey, Sarah, do you know what really gets me excited about tech? It's all those amazing gadgets.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 7.58
    }
  ]
}
```
