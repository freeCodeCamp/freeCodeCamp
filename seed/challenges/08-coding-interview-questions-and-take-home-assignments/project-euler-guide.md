# A guide to improve Project Euler's problems

Thank you for contributing to freeCodeCamp, your help is definitely needed here!

freeCodeCamp is having a great breakthrough ahead, one of it is to prepare
campers for interview questions, and Project Euler is one of them.

And to let campers having fun with this challenges during Christmas, we are
going to have a lot of help here to improve the challenges of Project Euler
problems (so people won't cheating by returning the value right away, since
Project Euler's problems only assert one answer.)

**Table of Contents**

* [What is Project Euler](#what-is-project-euler)
* [How to improve the problems](#how-to-improve-the-problems)

## What is Project Euler

[Project Euler](https://projecteuler.net/) is a series of challenging
mathematical/computer programming problems that will require more than just
mathematical insights to solve. Although mathematics will help you arrive at
elegant and efficient methods, the use of a computer and programming skills will
be required to solve most problems.

The motivation for starting Project Euler, and its continuation, is to provide a
platform for the inquiring mind to delve into unfamiliar areas and learn new
concepts in a fun and recreational context.

## How to improve the problems

The Project Euler problems seed can be found at
`seed/challenges/08-coding-interview-questions-and-take-home-assignments/project-euler-problems.json`

Here's what it will look like (this is before the improvements, take problem 23
as the example)

```javascript
{
  "_id": "5900f3831000cf542c50fe96",
  "challengeType": 5,
  "type": "bonfire",
  "title": "Problem 23: Non-abundant sums",
  "tests": [
    "assert.strictEqual(euler23(), 4179871, 'message: <code>euler23()</code> should return 4179871.');"
  ],
  "solutions": [],
  "translations": {},
  "challengeSeed": [
    "function euler23() {",
    "  // Good luck!",
    "  return true;",
    "}",
    "",
    "euler23();"
  ],
  "description": [
    "A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.",
    "A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.",
    "",
    "As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.",
    "Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers."
  ]
},
```

and here's after some improvements

```javascript
{
  "_id": "5900f3831000cf542c50fe96",
  "challengeType": 5,
  "type": "bonfire",
  "title": "Problem 23: Non-abundant sums",
  "tests": [
    "assert(sumOfNonAbundantNumbers(10000) === 3731004, 'message: <code>sumOfNonAbundantNumbers(10000)</code> should return 3731004.');",
    "assert(sumOfNonAbundantNumbers(15000) === 4039939, 'message: <code>sumOfNonAbundantNumbers(15000)</code> should return 4039939.');",
    "assert(sumOfNonAbundantNumbers(20000) === 4159710, 'message: <code>sumOfNonAbundantNumbers(20000)</code> should return 4159710.');",
    "assert(sumOfNonAbundantNumbers(28123) === 4179871, 'message: <code>sumOfNonAbundantNumbers(28123)</code> should return 4179871.');"
  ],
  "solutions": [],
  "translations": {},
  "challengeSeed": [
    "function sumOfNonAbundantNumbers(n) {",
    "  // Good luck!",
    "  return n;",
    "}",
    "",
    "sumOfNonAbundantNumbers(28123);"
  ],
  "description": [
    "A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.",
    "A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.",
    "",
    "As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.",
    "Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers."
  ]
},
```

Don't be confused now, here's what to do to improve the problems:

(We expect you already have forked freeCodeCamp's repository)

### Step 1: Create new branch at your git origin (e.g: `feature/problem_euler23`)

Always create the branch with the base refer to the newest freeCodeCamp's
staging branch, here's how to do that:

1. Do fetch staging branch from freeCodeCamp's repository `$ git fetch upstream
   staging`
2. Checkout to the staging branch `$ git checkout upstream/staging`
3. Create branch from upstream/staging `$ git checkout -b <branch_name>`

### Step 2: Change the name of the function to more readable

For example, from `euler23()` into `sumOfNonAbundantNumbers()` We took the name
from the problem name :D

### Step 3: Solve the problem by yourself

Try to solve the problem by yourself but if you get stucked,

Here's what to do: you can go to [mathblog](http://www.mathblog.dk/) or
[dreamshire](https://blog.dreamshire.com) to find other people's solution
written in other languages (usually C and C#) Learn from their solution and port
it to JavaScript :) ( Always have the perspective of learning, don't just copy
paste other people's code )

So from the example here's my solution (We didn't include it in the JSON because
up till now, we couldn't find a way to fit it in, when we transformed it into
array of strings it spits out error when running `$ npm run test-challenges` it
will be awesome if you can find how to fits that right in)

```javascript
function sumOfNonAbundantNumbers() {
    const getFactors = number => {
        let factors = [];

        let possibleFactor = 1;
        let sqrt = Math.sqrt(number);

        while (possibleFactor <= sqrt) {
            if (number % possibleFactor == 0) {
                factors[factors.length] = possibleFactor;

                let otherPossibleFactor = number / possibleFactor;
                if (otherPossibleFactor > possibleFactor)
                    factors[factors.length] = otherPossibleFactor;
            }
            possibleFactor++;
        }

        return factors;
    };

    const getAbundantNumbers = upperLimit => {
        let abundantNumbers = [];
        for (let i = 12; i <= upperLimit; i++) {
            let factors = getFactors(i);
            let factorSum = 0;
            for (let factor, j = 0; (factor = factors[j]); j++)
                if (i != factor) factorSum += factor;

            if (factorSum > i) {
                abundantNumbers.push(i);
            }
        }
        return abundantNumbers;
    };

    var abundantNumbers = getAbundantNumbers(28123);

    var sum = 0;

    for (var testNum = 1; testNum <= 28123; testNum++) {
        var sumOfAbundant = false;
        for (
            var i = 0, j = abundantNumbers.length - 1, abundantNumber1;
            (abundantNumber1 = abundantNumbers[i]);
            i++
        ) {
            if (abundantNumber1 > testNum) {
                break;
            }

            var abundantNumber2 = abundantNumbers[j];
            while (j > 0 && abundantNumber1 + abundantNumber2 > testNum) {
                abundantNumber2 = abundantNumbers[--j];
            }

            if (abundantNumber1 + abundantNumber2 == testNum) {
                sumOfAbundant = true;
                break;
            }
        }
        if (!sumOfAbundant) {
            sum += testNum;
        }
    }

    return sum;
}
```

After finished solving the problem, you can improve the task a little bit, for
example compared to asking campers to find the sum of all the positive integers,
you can ask campers to find the sum of all positive integers <= n.

(if you add more assertions to the problem, always assert less than the original
problem, to prevent infinite loop, etc)

One last thing, always make sure that the return value of the function is always
the same data type to which you want the function to return

Like in the example above, we want the user to return integer, so we changed the
return value from true into integer.

### Step 4: Running Test on Arcade Mode

After done with the solution, run the test on
[ FCC's Arcade Mode ](https://github.com/freeCodeCamp/arcade-mode)

### Step 5: Commit changes and push to your origin

1. Do changes and add changed files to stage `$ git add .`
2. Commit those changes using `$ npm run commit` and follow the instruction
   there.
3. And run `$ git push origin <branch_name>`

### Step 5: Create Pull Request to freeCodeCamp's staging branch

Create PR to freeCodeCamp's staging branch and wait for your code to be assesed
from the maintainer.

That's all it! if there's something unclear and you still have questions, you
can chat from gitter in
[Arcade-Mode](https://gitter.im/FreeCodeCamp/arcade-mode)
[Contributors](https://gitter.im/FreeCodeCamp/Contributors) or you can text me
right away @alvinkl

# Why do we have to improve Project Euler problems?

Our goal is to prevent user from cheating and just returning the project euler
result rightaway, and by giving more assertions and improving a bit of the task
we are able to make the challenge more challenging as well.

With your help, we can help people to practice their skills and be confident to
face technical interviews like this :)
