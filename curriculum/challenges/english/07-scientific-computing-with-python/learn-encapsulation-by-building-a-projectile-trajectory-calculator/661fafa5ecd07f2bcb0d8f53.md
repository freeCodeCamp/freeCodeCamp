---
id: 661fafa5ecd07f2bcb0d8f53
title: Step 25
challengeType: 20
dashedName: step-25
---

# --description--

Create a new variable `acceleration_component`, and give it the right value following the equation:

\\( acceleration component = \frac{g x^2}{2 v_0^2 \cos^2(\theta)}\\)

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```py
import math

GRAVITATIONAL_ACCELERATION = 9.81

class Projectile:
    __slots__ = ('__height', '__speed', '__angle')

    def __init__(self, height, speed, angle):
        self.__height = height
        self.__speed = speed
        self.__angle = math.radians(angle)
        
    def __str__(self):
        return f'''
Projectile details:
height: {self.__height} m
speed: {self.__speed} m/s
angle: {round(math.degrees(self.__angle))}°
displacement: {round(self.__calculate_displacement(), 1)} m
'''

    def __calculate_displacement(self):
        horizontal_component = self.__speed * math.cos(self.__angle)
        vertical_component = self.__speed * math.sin(self.__angle)
        squared_component = vertical_component**2
        gh_component = 2 * GRAVITATIONAL_ACCELERATION * self.__height
        sqrt_component = math.sqrt(squared_component + gh_component)
        
        displacement = horizontal_component * (vertical_component + sqrt_component) / GRAVITATIONAL_ACCELERATION
        return displacement
        
--fcc-editable-region--
    def __calculate_y_coordinate(self, x):
        height_component = self.__height
        angle_component = math.tan(self.__angle) * x
        acceleration_component = GRAVITATIONAL_ACCELERATION * x ** 2 / (
                2 * self.__speed ** 2 * math.cos(self.__angle) ** 2)
        y_coordinate = height_component + angle_component - acceleration_component
        return y_coordinate
--fcc-editable-region--

ball = Projectile(45, 45, 45)
print(ball)
   
```
