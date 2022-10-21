---
id: 5e46f8edac417301a38fb930
title: Калькулятор лінійної регресії витрат на охорону здоров'я
challengeType: 10
forumTopicId: 462379
dashedName: linear-regression-health-costs-calculator
---

# --description--

Ви будете <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-linear-regression-health-costs-calculator/blob/master/fcc_predict_health_costs_with_regression.ipynb" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з Google Colaboratory</a>.

Перейшовши за цим посиланням, створіть копію блокнота в своєму обліковому записі або локально. Як тільки ви завершили проєкт та пройшли тести (доданий до посилання), здайте посилання на свій проєкт. If you are submitting a Google Colaboratory link, make sure to turn on link sharing for "anyone with the link."

We are still developing the interactive instructional content for the machine learning curriculum. Поки ви можете переглянути відеозавдання цієї сертифікації. You may also have to seek out additional learning resources, similar to what you would do when working on a real-world project.

# --instructions--

In this challenge, you will predict healthcare costs using a regression algorithm.

You are given a dataset that contains information about different people including their healthcare costs. Use the data to predict healthcare costs based on new data.

The first two cells of this notebook import libraries and the data.

Make sure to convert categorical data to numbers. Use 80% of the data as the `train_dataset` and 20% of the data as the `test_dataset`.

`pop` off the "expenses" column from these datasets to create new datasets called `train_labels` and `test_labels`. Use these labels when training your model.

Create a model and train it with the `train_dataset`. Run the final cell in this notebook to check your model. The final cell will use the unseen `test_dataset` to check how well the model generalizes.

To pass the challenge, `model.evaluate` must return a Mean Absolute Error of under 3500. This means it predicts health care costs correctly within $3500.

The final cell will also predict expenses using the `test_dataset` and graph the results.

# --hints--

Потрібно виконати всі тести Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
