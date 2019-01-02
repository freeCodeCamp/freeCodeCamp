---
title: Rasberry PI Basics
---

## Rasberry PI Basics Example
```python
## CODE THAT MAKES AN LED GLOW FOR 2 SECONDS
import time
import RPi.GPIO as GPIO
while True:
  GPIO.output(2, GPIO.HIGH
  time.sleep(1)
  GPIO.output(2, GPIO.LOW) 
  time.sleep(1)

## CODE FOR PWM CONTROL OF LED BRIGHNTESS
import RPi.GPIO as GPIO from time
import sleep led_pin = 2

GPIO.setmode(GPIO.BCM)
GPIO.setup(led_pin, GPIO.OUT)

pwm = GPIO.PWM(led_pin, 100)
pwm.start(0)

try:
  while True:
    for x in range(100):
      pwm.ChangeDutyCycle(x)
      sleep(0.01)
    for x in range(100, 0, -1):
      pwm.ChangeDutyCycle(x)
      sleep(0.01)

except KeyboardInterrupt:
  pwm.stop()
  GPIO.cleanup()
```              
