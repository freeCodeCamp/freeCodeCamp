---
title: Build a Pomodoro Clock
---
## Build a Pomodoro Clock

The project consists of three distinct parts:
1. Identifying the components needed to complete the task, what components are there? Can some components be used more than once? E.g. the buttons, are they the same only with different onClick events and ids?
2. What component should be responsible for keeping state, and how should changes in state be passed on to other components?
3. It's recommended to set all your time values in your state in seconds for better calculating and only converting them into minutes when displaying them on the screen. 
For converting the seconds into minutes first you could use the Math.floor() function to get the minutes without the seconds e.g. 150s / 60 = 2 minutes and then use the modulo(%) operator to get the remaining seconds e.g. 150s % 60 = 30s. Now you can combine them together to get the time in minutes with seconds => 150s is 2:30 minutes
