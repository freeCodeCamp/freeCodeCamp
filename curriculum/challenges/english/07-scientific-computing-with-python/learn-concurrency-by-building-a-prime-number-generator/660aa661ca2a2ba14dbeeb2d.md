---
id: 660aa661ca2a2ba14dbeeb2d
title: Step 22
challengeType: 20
dashedName: step-22
---

# --description--

Comment out the last line of code for now other wise the loop would run indefinitely. We would close the loop in the next step.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```py
import asyncio


async def find_primes(start, end):

    print(f"Finding prime numbers between {start} and {end}.")
    primes = []
    for val in range(start, end + 1):
        if val > 1:
            for n in range(2, val):
                if (val % n) == 0:
                    break
            else:
                primes.append(val)
                await asyncio.sleep(0.000001)

    print(f"DONE finding prime numbers between {start} and {end}. Total: {len(primes)}")
    return primes


async def main():
    primes1 = loop.create_task(find_primes(100, 10000))
    primes2 = loop.create_task(find_primes(10, 100))
    primes3 = loop.create_task(find_primes(1, 10))
    await asyncio.wait([primes1, primes2, primes3])
    return primes1, primes2, primes3

--fcc-editable-region--
if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    primes1, primes2, primes3 = loop.run_until_complete(main())

--fcc-editable-region--
```
