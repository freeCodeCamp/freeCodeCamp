---
title: Build a Drum Machine
---
## Build a Drum Machine

The project consists of three distinct parts:
1. Identifying the components needed to complete the task, what components are there? Can some components be used more than once? E.g. the buttons, are they the same only with different onClick events and ids?
2. What component should be responsible for keeping state, and how should changes in state be passed on to other components?
3. Knowing that the corresponding audio element should be in your clickable area/button which means that the audio element is a child of the corresponding button. So you have the possibility to get the audio element when the button is clicked e.g.
  ```
  ...
  let audio = e.target.children[0]
  audio.currentTime = 0;  // Rewird audio to the start
  audio.play();
  ...
  ```