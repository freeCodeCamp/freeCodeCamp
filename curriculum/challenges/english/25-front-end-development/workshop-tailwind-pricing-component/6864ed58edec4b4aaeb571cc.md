---
id: 6864ed58edec4b4aaeb571cc
title: Step 26
challengeType: 0
dashedName: step-26
---

# --description--

Moving to the inner `div` in the **Listener plan**, give it the classes `grid`, `grid-rows-[auto_auto_auto_1fr]`, and `gap-y-2`.

These classes will make the inner `div` a grid container, define four rows that stack on top of each other, with the first three set to auto and the last taking up the remaining spaces, and finally add a spacing of `0.5rem` between the rows.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music App Pricing</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100">
    <main>
      <h1 class="mt-8 and mb-12 text-center text-3xl md:text-5xl font-semibold text-gray-900">Choose your listening plan</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8 mt-16">
        <div class="bg-gray-100 ring-1 ring-gray-300 grid grid-rows-[1fr_auto] rounded-xl p-8 gap-6">
--fcc-editable-region--
          <div>
            <h2>Listener</h2>
            <p>$0<span>/month</span></p>
            <p>
              Start exploring millions of songs with basic features and ads.
            </p>
            <ul>
              <li><span>&#10003;</span>Ad-supported streaming</li>
              <li><span>&#10003;</span>Curated playlists</li>
            </ul>
          </div>
--fcc-editable-region--
          <a>Start listening</a>
        </div>
        <div>
          <div>Most Popular</div>
          <div>
            <h2>Premium</h2>
            <p>$9.99<span>/month</span></p>
            <p>
              Enjoy the full music experience with unlimited access and
              downloads.
            </p>
            <ul>
              <li><span>&#10003;</span>Ad-free listening</li>
              <li><span>&#10003;</span>Offline playback</li>
              <li><span>&#10003;</span>Unlimited skips</li>
            </ul>
          </div>
          <a>Go Premium</a>
        </div>
        <div>
          <div>
            <h2>Family</h2>
            <p>$14.99<span>/month</span></p>
            <p>
              Enjoy all of the features with a plan for up to 6 family members.
            </p>
            <ul>
              <li>
                <span>&#10003;</span>All Premium features
              </li>
              <li>
                <span>&#10003;</span>Up to 6 accounts
              </li>
              <li>
                <span>&#10003;</span>Individual playlists &
                libraries
              </li>
              <li>
                <span>&#10003;</span>Family Mix playlists
              </li>
            </ul>
          </div>
          <a>Start Family Plan</a>
        </div>
      </div>
    </main>
  </body>
</html>
```
