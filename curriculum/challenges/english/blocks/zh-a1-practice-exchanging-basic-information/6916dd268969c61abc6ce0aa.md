---
id: 6916dd268969c61abc6ce0aa
title: Task 1
challengeType: 19
dashedName: task-1
lang: zh-CN
---

<!-- (audio) whole audio dialogue -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

In what context is this conversation most likely taking place?

## --answers--

At the reception area where the HR is helping a new employee with onboarding.

### --feedback--

They do not mention anything related to HR or onboarding.

---

At a team building event where the project manager is introducing a new team member.

### --feedback--

The conversation is between two people introducing themselves to each other, not involving a third party.

---

At the office cafeteria where new colleagues are having lunch together.

---

At the security meeting where employees are required to check in before entering the building.

### --feedback--

This conversation does not involve any security procedures.

## --video-solution--

3

# --explanation--

This conversation is a simple exchange of introductions between two new colleagues meeting for the first time, which is most likely to happen during a lunch break at the office cafeteria.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Wang Hua",
        "position": {
          "x": -25,
          "y": 0,
          "z": 1
        }
      },
      {
        "character": "Liu Ming",
        "position": {
          "x": 125,
          "y": 0,
          "z": 1
        }
      }
    ],
    "audio": {
      "filename": "ZH_A1_greetings_and_introductions_dialogue.mp3",
      "startTime": 1
    },
    "alwaysShowDialogue": true
  },
  "commands": [
    {
      "character": "Wang Hua",
      "position": {
        "x": 25,
        "y": 0,
        "z": 1
      },
      "startTime": 0
    },
    {
      "character": "Liu Ming",
      "position": {
        "x": 70,
        "y": 0,
        "z": 1
      },
      "startTime": 0.5
    },
    {
      "character": "Wang Hua",
      "startTime": 1,
      "finishTime": 2.81,
      "dialogue": {
        "text": "你好 (nǐ hǎo)，我是王华 (wǒ shì wáng huá)。",
        "align": "left"
      }
    },
    {
      "character": "Wang Hua",
      "startTime": 3.56,
      "finishTime": 5.46,
      "dialogue": {
        "text": "请问你叫什么名字 (qǐng wèn nǐ jiào shén me míng zì)？",
        "align": "left"
      }
    },
    {
      "character": "Liu Ming",
      "startTime": 6.51,
      "finishTime": 7.94,
      "dialogue": {
        "text": "你好 (nǐ hǎo)，我叫刘明 (wǒ jiào liú míng)。",
        "align": "right"
      }
    },
    {
      "character": "Wang Hua",
      "startTime": 9.05,
      "finishTime": 10.41,
      "dialogue": {
        "text": "你是中国人吗 (nǐ shì zhōng guó rén ma)？",
        "align": "left"
      }
    },
    {
      "character": "Liu Ming",
      "startTime": 11.23,
      "finishTime": 14.76,
      "dialogue": {
        "text": "我不是中国人 (wǒ bù shì zhōng guó rén)，我是新加坡人 (wǒ shì xīn jiā pō rén)。你呢 (nǐ ne)？",
        "align": "right"
      }
    },
    {
      "character": "Wang Hua",
      "startTime": 15.8,
      "finishTime": 19.09,
      "dialogue": {
        "text": "我是中国人 (wǒ shì zhōng guó rén)。你是设计师吗 (nǐ shì shè jì shī ma)？",
        "align": "left"
      }
    },
    {
      "character": "Liu Ming",
      "startTime": 20.11,
      "finishTime": 22.99,
      "dialogue": {
        "text": "是的 (shì de)，我是 (wǒ shì) UI 设计师 (shè jì shī)。你呢 (nǐ ne)？",
        "align": "right"
      }
    },
    {
      "character": "Wang Hua",
      "startTime": 24.46,
      "finishTime": 25.77,
      "dialogue": {
        "text": "我是 (wǒ shì) Web 开发者 (kāi fā zhě)。",
        "align": "left"
      }
    },
    {
      "character": "Liu Ming",
      "startTime": 26.65,
      "finishTime": 28.31,
      "dialogue": {
        "text": "很高兴认识你 (hěn gāo xìng rèn shi nǐ)，王华 (wáng huá)。",
        "align": "right"
      }
    },
    {
      "character": "Wang Hua",
      "startTime": 29.18,
      "finishTime": 29.89,
      "dialogue": {
        "text": "我也是 (wǒ yě shì)。",
        "align": "left"
      }
    },
    {
      "character": "Liu Ming",
      "position": {
        "x": 125,
        "y": 0,
        "z": 1
      },
      "startTime": 30.39
    },
    {
      "character": "Wang Hua",
      "position": {
        "x": -25,
        "y": 0,
        "z": 1
      },
      "startTime": 30.89
    }
  ]
}
```
