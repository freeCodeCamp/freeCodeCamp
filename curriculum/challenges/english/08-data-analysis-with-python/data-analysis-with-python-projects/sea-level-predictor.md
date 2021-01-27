---
id: 5e4f5c4b570f7e3a4949899f
title: Sea Level Predictor
challengeType: 10
dashedName: sea-level-predictor
---

# --description--

In this project, you will analyze a dataset of the global average sea level change since 1880. You will use the data to predict the sea level change through year 2050.

You can access [the full project description and starter code on Repl.it](https://repl.it/github/freeCodeCamp/boilerplate-sea-level-predictor).

After going to that link, fork the project. Once you complete the project based on the instructions in 'README.md', submit your project link below.

We are still developing the interactive instructional part of the data analysis with Python curriculum. For now, you will have to use other resources to learn how to pass this challenge.

# --instructions--

## Assignment

You will analyze a dataset of the global average sea level change since 1880. You will use the data to predict the sea level change through year 2050.

Use the data to complete the following tasks:

* Use Pandas to import the data from `epa-sea-level.csv`.
* Use matplotlib to create a scatter plot using the "Year" column as the x-axis and the "CSIRO Adjusted Sea Level" column as the y-axix.
* Use the `linregress` function from `scipi.stats` to get the slope and y-intercept of the line of best fit. Plot the line of best fit over the top of the scatter plot. Make the line go through the year 2050 to predict the sea level rise in 2050.
* Plot a new line of best fit just using the data from year 2000 through the most recent year in the dataset. Make the line also go through the year 2050 to predict the sea level rise in 2050 if the rate of rise continues as it has since the year 2000.
* The x label should be "Year", the y label should be "Sea Level (inches)", and the title should be "Rise in Sea Level".

Unit tests are written for you under `test_module.py`.

## Development

For development, you can use `main.py` to test your functions. Click the "run" button and `main.py` will run.

## Testing 

We imported the tests from `test_module.py` to `main.py` for your convenience. The tests will run automatically whenever you hit the "run" button.

## Submitting

Copy your project's URL and submit it to freeCodeCamp.

## Data Source
[Global Average Absolute Sea Level Change, 1880-2014 from the US Environmental Protection Agency using data from CSIRO, 2015; NOAA, 2015.](https://datahub.io/core/sea-level-rise)

# --hints--

It should pass all Python tests.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
