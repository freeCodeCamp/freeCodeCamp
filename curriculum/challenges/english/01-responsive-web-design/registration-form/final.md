---
id: 
title: Final
challengeType: 0
dashedName: final
---

# --description--

step 1 instructions

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--

--fcc-editable-region--
```

## --solutions--

```html
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8" />
	<title>Registration Form</title>
	<link rel="stylesheet" href="styles.css" />
</head>

<body>
	<h1>Registration Form</h1>
	<p>Please fill out this form with the required information</p>
	<form>
		<fieldset>
			<!-- <label for="email">Email: </label>
      <input type="email" name="email" /> -->
			<label>Enter Your First Name: <input type="text" required /></label>
			<label>Enter Your Last Name: <input type="text" required /></label>
			<label>Enter Your Email: <input type="email" name="email" required /></label>
			<label><span>Create a New Password:</span>
				<input type="password" minlength="8" pattern="[a-z0-5]{8,}" required />
			</label>
		</fieldset>
		<fieldset>
			<label><input type="radio" name="account-type" class="inline" /> Personal
				Account</label>
			<label><input type="radio" name="account-type" class="inline" /> Business
				Account</label>
			<label>
				<input type="checkbox" required class="inline" /> I accept the
				<a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
			</label>
		</fieldset>
		<fieldset>
			<label>Upload a profile picture: <input type="file" /></label>
			<label>Input your age (years):
				<input type="number" min="0" max="120" />
			</label>
			<label id="hear">How did you hear about us?
				<select>
					<option value="">(select one)</option>
					<option value="1">freeCodeCamp News</option>
					<option value="2">freeCodeCamp YouTube Channel</option>
					<option value="3">freeCodeCamp Forum</option>
					<option value="4">Other</option>
				</select>
			</label>
			<label>
				Provide a bio:
				<textarea name="y" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
			</label>
		</fieldset>
		<input type="submit" />
	</form>
</body>

</html>

```

```css
body {
	width: 100%;
	height: 100vh;
	margin: 0;
	background-color: #1b1b32;
	color: #f5f6f7;
	font-family: Tahoma;
	font-size: 16px;
}

h1,
p {
	margin: 1em auto;
	text-align: center;
}

p {
	padding: 0 1rem;
}

form {
	width: 60vw;
	max-width: 500px;
	min-width: 300px;
	margin: 0 auto;
}

fieldset {
	border: none;
	margin: 0 0rem;
	padding: 2rem 0;
}

fieldset:not(:last-of-type) {
	border-bottom: 3px solid #3b3b4f;
}

label {
	width: 100%;
	display: block;
	margin: 0.5rem 0;
}

label input,
label textarea,
label select {
	margin: 10px 0 0 0;
	width: 100%;
}

input.inline {
	margin: 0 0.5em 0 0;
}

input,
textarea {
	width: 100%;
	color: #ffffff;
	background-color: #0a0a23;
	border: 1px solid #2a2a40;
	min-height: 2em;
}

input,
textarea,
select {
	min-height: 2em;
}

input.inline {
	width: unset;
	vertical-align: middle;
}

input[type="submit"] {
	display: block;
	width: 60%;
	margin: 1rem auto;
	min-width: 300px;
	/* height: 2rem; */
	font-size: 1.1rem;
	background-color: #3b3b4f;
	border-color: white;
}

input[type="file"] {
	height: 100%;
}

a {
	color: #dfdfe2;
	/* 	padding-left: 1ch; */
}

```
