---
id: 5e8f2f13c4cdbe86b5c72da5
title: 'Reinforcement Learning With Q-Learning: Example'
challengeType: 11
isHidden: false
videoId: RBBSNta234s
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    Fill in the blanks to complete the following Q-Learning equation:

    ```py
    Q[__A__, __B__] = Q[__A__, __B__] + LEARNING_RATE * (reward + GAMMA * np.max(Q[__C__, :]) - Q[__A__, __B__])
    ```

  answers:
    - |
      A: `state`

      B: `action`

      C: `next_state`
    - |
      A: `state`

      B: `action`

      C: `prev_state`
    - |
      A: `state`

      B: `reaction`

      C: `next_state`
  solution: 1
```

</section>

