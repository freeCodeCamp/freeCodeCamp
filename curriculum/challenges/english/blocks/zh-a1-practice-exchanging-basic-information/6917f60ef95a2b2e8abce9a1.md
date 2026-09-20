---
id: 6917f60ef95a2b2e8abce9a1
title: Task 5
challengeType: 19
dashedName: task-5
lang: zh-CN
---

<!-- (audio) part of the dialogue -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

True or false: Liu Ming is a UI designer from China.

## --answers--

True

### --feedback--

Liu Ming is a UI designer, but he clearly says he is not Chinese.

---

False

## --video-solution--

2

# --explanation--

Liu Ming says `我不是中国人 (wǒ bù shì zhōng guó rén)，我是新加坡人 (wǒ shì xīn jiā pō rén)`, which means he is Singaporean, not Chinese.  

He also says `我是 (wǒ shì) UI 设计师 (shè jì shī)`, which means he is a UI designer.

So the statement is false.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Wang Hua",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.4
        },
        "opacity": 0
      },
      {
        "character": "Liu Ming",
        "position": {
          "x": 50,
          "y": 17,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ZH_A1_greetings_and_introductions_dialogue.mp3",
      "startTime": 1,
      "startTimestamp": 8.37,
      "finishTimestamp": 22.31
    }
  },
  "commands": [
    {
      "character": "Wang Hua",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Wang Hua",
      "startTime": 1,
      "finishTime": 2.36,
      "dialogue": {
        "text": "你是中国人吗 (nǐ shì zhōng guó rén ma)？",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 2.77
    },
    {
      "character": "Liu Ming",
      "opacity": 1,
      "startTime": 2.77
    },
    {
      "character": "Liu Ming",
      "startTime": 3.18,
      "finishTime": 6.71,
      "dialogue": {
        "text": "我不是中国人 (wǒ bù shì zhōng guó rén)，我是新加坡人 (wǒ shì xīn jiā pō rén)。你呢 (nǐ ne)？",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "opacity": 0,
      "startTime": 7.23
    },
    {
      "character": "Wang Hua",
      "opacity": 1,
      "startTime": 7.23
    },
    {
      "character": "Wang Hua",
      "startTime": 7.75,
      "finishTime": 11.04,
      "dialogue": {
        "text": "我是中国人 (wǒ shì zhōng guó rén)。你是设计师吗 (nǐ shì shè jì shī ma)？",
        "align": "center"
      }
    },
    {
      "character": "Wang Hua",
      "opacity": 0,
      "startTime": 11.55
    },
    {
      "character": "Liu Ming",
      "opacity": 1,
      "startTime": 11.55
    },
    {
      "character": "Liu Ming",
      "startTime": 12.06,
      "finishTime": 14.94,
      "dialogue": {
        "text": "是的 (shì de)，我是 (wǒ shì) UI 设计师 (shè jì shī)。你呢 (nǐ ne)？",
        "align": "center"
      }
    },
    {
      "character": "Liu Ming",
      "opacity": 0,
      "startTime": 15.44
    }
  ]
}
```
