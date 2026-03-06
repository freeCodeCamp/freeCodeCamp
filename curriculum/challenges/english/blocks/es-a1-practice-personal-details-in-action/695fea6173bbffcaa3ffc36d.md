---
id: 695fea6173bbffcaa3ffc36d
title: Task 10
challengeType: 19
dashedName: task-10
lang: es
---

<!-- (Audio) Esteban: ¿Cómo te llamas? -->

# --description--

There are two common ways to ask for someone's name in Spanish.

Both are used in everyday Spanish and mean the same thing. They're just structured differently.

# --instructions--

Listen to the audio and answer the question below. 

# --questions--

## --text--

Which of the following questions **is similar** to what you hear in the audio?

## --answers--

`¿Cuál es tu nombre?`

---

`¿Dónde vives?`

### --feedback--

This question asks where someone lives.

---

`¿Cuál es tu apellido?`

### --feedback--

This asks for someone's last name.

---

`¿Tienes apodo?`

### --feedback--

This asks if someone has a nickname.

## --video-solution--

1

# --explanation--

Esteban says `¿Cómo te llamas?`. This is one of the most common ways to ask for someone's name in Spanish. Another very common question with the same meaning is:

`¿Cuál es tu nombre?`

Both questions are used in everyday Spanish to ask for a person's name. They are simply structured differently:

- `¿Cómo te llamas?` uses the verb `llamarse` (to be called).
- `¿Cuál es tu nombre?` asks directly for the name as a noun.

In this task, the correct answer is the option that asks for someone's name.

# --scene--

```json
{
  "setup": {
    "background": "interview-room1.png",
    "characters": [
      {
        "character": "Esteban",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_personal_details_just_questions.mp3",
      "startTime": 1,
      "startTimestamp": 43.02,
      "finishTimestamp": 44.53
    }
  },
  "commands": [
    {
      "character": "Esteban",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Esteban",
      "startTime": 1,
      "finishTime": 2.51,
      "dialogue": {
        "text": "¿Cómo te llamas?",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "opacity": 0,
      "startTime": 2.61
    }
  ]
}
```
