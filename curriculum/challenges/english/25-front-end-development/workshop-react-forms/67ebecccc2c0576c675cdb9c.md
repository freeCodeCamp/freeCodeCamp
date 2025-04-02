---
id: 67ebecccc2c0576c675cdb9c
title: Step 15
challengeType: 0
dashedName: step-15
---

# --description--

To fix that error, create an `handlePowersChange` function with an `e` parameter.

Inside the function, destructure `value` and `checked` from `e.target`. This will extract the `value` representing the checked `power`, and the `checked` indicating whether the checkbox is checked or not.

To finally set the checked power(s), use a ternary to check if `checked` is true. If it is, spread in the existing `powers` into an array and add the `value` to it. If it is not true, filter out the `value` from `powers`.

Remember all of that should be inside the `setPowers` setter function, and you can also use an `if` statement.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Superhero Application Form</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.0/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.0/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.26.3/babel.min.js"></script>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      src="index.jsx"
    ></script>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script
      data-plugins="transform-modules-umd"
      type="text/babel"
      data-presets="react"
      data-type="module"
    >
      import { SuperheroForm } from './index.jsx';
      ReactDOM.createRoot(document.getElementById('root')).render(<SuperheroForm />);
    </script>
  </body>
</html>
```

```css
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(30deg, #ff9999 50%, #6699ff 50%)
}

.form-wrap {
  background-color: white;
  width: 400px;
  padding: 20px;
  border: 1px solid black;
  box-shadow: 5px 5px 10px black;
}

.form-wrap h2,
.form-wrap p {
  text-align: center;
}

.form-wrap p {
  position: relative;
  top: -18px;
}

.section {
  display: flex;
  margin-bottom: 30px;
}

.column {
  flex-direction: column;
}

.submit-wrap {
  text-align: center;
}

.submit-btn {
  display: block;
  margin: 0 auto;
}

.submit-btn:disabled {
  cursor: not-allowed;
}
```

```jsx
const { useState } = React;

export const SuperheroForm = () => {

  const powerSourceOptions = [
    'Bitten by a strange creature',
    'Radioactive exposure',
    'Science experiment',
    'Alien heritage',
    'Ancient artifact discovery',
    'Other'
  ];

  const powersOptions = [
    'Super Strength',
    'Super Speed',
    'Flight',
    'Invisibility',
    'Telekinesis',
    'Other'
  ];

  const [heroName, setHeroName] = React.useState('');
  const [realName, setRealName] = React.useState('');
  const [powerSource, setPowerSource] = React.useState('');
  const [powers, setPowers] = React.useState([]);

  --fcc-editable-region--

  --fcc-editable-region--

  return (
    <div className='form-wrap'>
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
      <form>
        <div className='section'>
        <label>
          Hero Name
          <input
            type='text'
            value={heroName}
            onChange={e => setHeroName(e.target.value)}
          />
        </label>
        <label>
          Real Name
          <input
            type='password'
            value={realName}
            onChange={e => setRealName(e.target.value)}
          />
        </label>
        </div>
        <label className='section column'>
          How did you get your powers?
          <select value={powerSource} onChange={e => setPowerSource(e.target.value)}>
            <option value=''>
              Select one...
            </option>
           {powerSourceOptions.map(source => (
             <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>
        <label className='section column'>
          List your powers (select all that apply):

          {powersOptions.map(power => (
            <label key={power}>
              <input
                type='checkbox'
                value={power}
                checked={powers.includes(power)}
                onChange={handlePowersChange}
              />
              <span>{power}</span>
            </label>
          ))}
        </label>
      </form>
    </div>
  )
};
```
