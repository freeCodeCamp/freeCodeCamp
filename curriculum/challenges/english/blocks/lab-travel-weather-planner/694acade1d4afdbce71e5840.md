---
id: 694acade1d4afdbce71e5840
title: Build a Travel Weather Planner
challengeType: 27
dashedName: build-a-travel-weather-planner
---

# --description--

**Objective:** Fulfil the user stories below and get all the tests to pass to complete the lab.

1. You should create the following variables:
   * `distance_mi` (a number representing the distance to travel in miles)
   * `is_raining` (a boolean  representing if the user is currently experiencing rainy weather)
   * `has_bike` (a boolean representing if the user is has a bicycle)
   * `has_car` (a boolean  if the user is has a car)
   * `has_ride_share_app` (a boolean  if the user is has an app that allows them to request a ride)
2. You should use conditional statements to determine whether commuting is possible based on the values of these variables.
3. If `distance_mi` is a falsy value:
   * You should print `False`.
4. If the distance is **less than or equal to 1 mile**:
   * You should print `True` only if it is **not raining**.
   * Otherwise, you should print `False`.
5. If the distance is **greater than 1 mile and less than or equal to 6 miles**:
   * You should print `True` only if the person has a bike **and** it is not raining.
   * Otherwise, you should print `False`.
6. If the distance is **greater than 6 miles**:
   * You should print `True` if the person has a car **or** has a ride-share app.
   * Otherwise, you should print `False`.
7. You should use `if`, `elif`, and `else` statements to evaluate the distance categories in ascending order.

# --seed--

## --seed-contents--

```py
print("Hello world")
```

# --solutions--

```py
distance_mi = 12
is_raining = False
has_bike = False
has_car = False
has_ride_share_app = True

if not distance_mi:
    print(False)

elif distance_mi <= 1:
    print(not is_raining)

elif distance_mi <= 6:
    print(has_bike and not is_raining)

else:
    print(has_car or has_ride_share_app)
```

