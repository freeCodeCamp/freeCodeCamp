---
id: 611e5716f9246f125f63815b
title: Final Prototype
challengeType: 0
dashedName: part-28
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
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<!-- Do meta viewport as it not only betters visual accessability on mobile, but
    improves SEO too! -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="freeCodeCamp Accessibility Quiz practice project" />
	<title>freeCodeCamp: Accessibility Quiz</title>
	<link rel="stylesheet" href="styles.css" />
</head>

<body>
	<header>
		<img src="https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/platform/universal/fcc_primary.svg" id="logo" alt="freeCodeCamp logo" />
		<h1>HTML/CSS Quiz</h1>
		<nav>
			<ul>
				<li><a href="#student-info" accesskey="i">INFO</a></li>
				<li><a href="#html-questions" accesskey="h">HTML</a></li>
				<li><a href="#css-questions" accesskey="c">CSS</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<form action="https://freecodecamp.org/practice-project/accessibility-quiz">
			<section role="region" aria-labelledby="student-info">
				<h2 id="student-info">Student Info</h2>

				<div class="info">
					<label for="student-name">Name:</label>
					<!-- <input type="text" name="student-name" id="student-name" placeholder="e.g. Quincy Larson"> -->
					<input type="text" name="student-name" id="student-name" />
				</div>
				<div class="info">
					<label for="student-email">Email:</label>
					<input type="email" name="student-email" id="student-email" />
				</div>
				<div class="info">
					<label for="birth-date">D.O.B.<span class="sr-only">(Date of Birth)</span>:</label>
					<input type="date" id="birth-date" name="birth-date" />
				</div>
			</section>
			<section role="region" aria-labelledby="html-questions">
				<h2 id="html-questions">HTML</h2>
				<div class="question-block">
					<p>1</p>
					<fieldset class="question" name="html-question-one">
						<legend>
							The legend element represents a caption for the content of its
							parent fieldset element
						</legend>
						<ul class="answers-list">
							<li>
								<label for="q1-a1">
									<input type="radio" id="q1-a1" name="q1" value="true" />
									True
								</label>
							</li>
							<li>
								<label for="q1-a2">
									<input type="radio" id="q1-a2" name="q1" value="false" />
									False
								</label>
							</li>
						</ul>
					</fieldset>
				</div>
				<div class="question-block">
					<p>2</p>
					<fieldset class="question" name="html-question-two">
						<legend>
							A label element nesting an input element is required to have a
							for attribute with the same value as the input's id
						</legend>
						<ul class="answers-list">
							<li>
								<label for="q2-a1">
									<input type="radio" id="q2-a1" name="q2" value="true" />
									True
								</label>
							</li>
							<li>
								<label for="q2-a2">
									<input type="radio" id="q2-a2" name="q2" value="false" />
									False
								</label>
							</li>
						</ul>
					</fieldset>
				</div>
			</section>
			<section role="region" aria-labelledby="css-questions">
				<h2 id="css-questions">CSS</h2>
				<div class="formrow">
					<div class="question-block">
						<label for="cust">Are you an frontend developer?</label>
					</div>
					<div class="answer">
						<select name="cust" id="cust" required>
							<option value="">Select an option</option>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div class="question-block">
						<label for="css-question">Do you have any questions:</label>
					</div>
					<div class="answer">
						<textarea id="css-question" name="css-question" rows="5" cols="24">
Who is flexbox...
              </textarea>
					</div>
				</div>
			</section>
			<button type="submit">Submit</button>
		</form>
	</main>
	<footer>
		<address>
			You can visit
			<a href="https://www.freecodecamp.org">freeCodeCamp</a>:<br />
			freeCodeCamp<br />
			San Fransisco<br />
			California<br />
			USA
		</address>
	</footer>
</body>

</html>
```

```css
@media (prefers-reduced-motion: no-preference) {
	* {
		scroll-behavior: smooth;
	}
}

body {
	background: #f5f6f7;
	color: #1b1b32;
	font-family: Helvetica;
	margin: 0;
}

header {
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	background-color: #1b1b32;
	top: 0;
}

#logo {
	width: max(100px, 18vw);
	/* 	height: calc(100% - 0.3rem); */
	aspect-ratio: 35 / 4;
	max-height: 100%;
	/* 	color: black; */
	background-color: #0a0a23;
	padding: 0.4rem;
}

h1 {
	text-align: center;
	font-size: min(5vw, 1.2em);
	color: #f1be32;
}

nav {
	width: 50%;
	max-width: 300px;
	height: 50px;
}

nav > ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	padding-inline-start: 0;
	margin-block: 0;
	height: 100%;
}

nav > ul > li {
	display: block;
	margin: 0 0.2rem;
	color: #dfdfe2;
	padding: 0.2rem;
}

nav > ul > li:hover {
	background-color: #dfdfe2;
	color: #1b1b32;
	cursor: pointer;
}

li > a {
	color: inherit;
	text-decoration: none;
}

main {
	padding-top: 50px;
}

section {
	width: 80%;
	margin: 0px auto 10px auto;
	min-height: 100px;
	max-width: 600px;
}

h1,
h2 {
	font-family: Verdana, Tahoma;
}

h2 {
	border-bottom: 4px solid #dfdfe2;
	margin-top: 0px;
	padding-top: 60px;
}


.info {
	margin: 0 auto;
	padding: 10px 0 0 5px;
}
.formrow {
	margin-top: 30px;
	padding: 0px 15px;
}

input {
	font-size: 16px;
	/* 	max-width: 95%; */
}

.info label,
.info input {
	display: inline-block;
	text-align: right;
	padding: 0 2px;
}

.info label {
	width: 10%;
	min-width: 55px;
}

.info input {
	width: 50%;
	text-align: left;
}

.question-block {
	text-align: left;
	display: block;
	width: 100%;
	margin-top: 20px;
	padding-top: 5px;
}

p {
	margin-top: 5px;
	padding-left: 15px;
	font-size: 20px;
}

p::before {
	content: "Question #";
}

.question {
	border: none;
	padding-bottom: 0;
}

.answers-list {
	list-style: none;
	padding: 0;
}

button {
	display: block;
	margin: 40px auto;
	width: 40%;
	padding: 15px;
	font-size: 23px;
	background: #d0d0d5;
	border: 3px solid #3b3b4f;
}

footer {
	background-color: #2a2a40;
	display: flex;
	justify-content: center;
}

footer,
footer a {
	color: #dfdfe2;
}

address {
	text-align: center;
	padding: 0.3em;
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
}

```
