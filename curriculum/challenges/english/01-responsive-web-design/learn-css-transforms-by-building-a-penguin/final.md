---
id: 619665c9abd72906f3bd30f9
title: Final Prototype
challengeType: 0
dashedName: step-28
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
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
	<link rel="stylesheet" href="./styles.css" />
	<title>CSS Penguin</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
	<div class="left-mountain"></div>
	<div class="back-mountain"></div>
	<div class="sun"></div>
	<div class="penguin">
		<div class="penguin-head">
			<div class="face left"></div>
			<div class="face right"></div>
			<div class="chin"></div>
			<div class="belly"></div>
			<div class="eye left">
				<div class="eye-lid"></div>
			</div>
			<div class="eye right">
				<div class="eye-lid"></div>
			</div>
			<div class="blush left"></div>
			<div class="blush right"></div>
			<div class="beak top"></div>
			<div class="beak bottom"></div>
		</div>
		<div class="shirt">
			<div>💜</div>
			<p>I CSS</p>
		</div>
		<div class="penguin-body">
			<div class="arm left"></div>
			<div class="arm right"></div>
			<div class="foot left"></div>
			<div class="foot right"></div>
		</div>
	</div>
	<div class="ground"></div>
</body>

</html>
```

```css
:root {
	--penguin-size: 300px;
	--penguin-skin: gray;
	--penguin-face: white;
	--penguin-beak: orange;
}

body {
	background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
	margin: 0;
	padding: 0;
	overflow: clip;
}

.left-mountain {
	background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
	width: 300px;
	height: 300px;
	margin-top: 100px;
	transform: skew(0deg, 44deg);
	z-index: 2;
	position: absolute;
	top: 75px;
}

.back-mountain {
	width: 300px;
	height: 300px;
	background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
	position: absolute;
	left: 100px;
	top: 225px;
	z-index: 1;
	transform: rotate(45deg);
}

.sun {
	width: 200px;
	height: 200px;
	position: absolute;
	background-color: yellow;
	right: -75px;
	top: -75px;
	border-radius: 50%;
}

.penguin {
	position: relative;
	left: 0px;
	margin: auto;
	display: block;
	margin-top: 75px;
	width: var(--penguin-size, 300px);
	height: var(--penguin-size, 300px);
	transition-property: transform;
	transition-duration: 1s;
	transition-timing-function: ease-in-out;
	transition-delay: 0ms;
	z-index: 4;
}

.penguin-head {
	top: 10%;
	left: 25%;
	background: linear-gradient(
		45deg,
		var(--penguin-skin, gray),
		rgb(239 240 228)
	);
	width: 50%;
	height: 45%;
	border-radius: 70% 70% 65% 65%;
	z-index: 1;
}

.face {
	top: 15%;
	width: 60%;
	height: 70%;
	background: var(--penguin-face, white);
	border-radius: 70% 70% 60% 60%;
}

.face.left {
	left: 5%;
}

.face.right {
	left: 35%;
}

.chin {
	top: 25%;
	left: 5%;
	background: var(--penguin-face, white);
	width: 90%;
	height: 70%;
	border-radius: 70% 70% 100% 100%;
}

.eye {
	top: 45%;
	background: black;
	width: 15%;
	height: 17%;
	border-radius: 50%;
}

.eye.left {
	left: 25%;
}

.eye.right {
	left: 60%;
}

.eye-lid {
	top: 25%;
	left: -23%;
	background: white;
	width: 150%;
	height: 100%;
	border-radius: 50%;
}

.blush {
	top: 65%;
	background: pink;
	width: 15%;
	height: 10%;
	border-radius: 50%;
}

.blush.left {
	left: 70%;
}

.blush.right {
	left: 15%;
}

.beak {
	height: 10%;
	border-radius: 50%;
	background: var(--penguin-beak, orange);
}

.beak.top {
	top: 60%;
	left: 40%;
	width: 20%;
}

.beak.bottom {
	top: 65%;
	left: 42%;
	width: 16%;
}

.shirt {
	position: relative;
	font-size: 30px;
	color: #6a6969;
	font-size: 25px;
	font-family: Helvetica, sans-serif;
	font-weight: bold;
	top: 165px;
	left: 127.5px;
	z-index: 1;
}

.shirt div {
	width: 50%;
	top: 22.5px;
	left: 10px;
}

.penguin-body {
	top: 40%;
	left: 23.5%;
	background: linear-gradient(
		45deg,
		rgb(134 133 133) 0%,
		rgb(234 231 231) 25%,
		white 67%
	);
	width: 53%;
	height: 45%;
	border-radius: 80% 80% 100% 100%;
}

.penguin-body::before {
	content: "";
	position: absolute;
	width: 50%;
	height: 40%;
	background-color: var(--penguin-skin, gray);
	border-radius: 0 0 100% 100%;
	top: 10%;
	left: 25%;
	opacity: 70%;
}

.arm {
	width: 30%;
	height: 60%;
	z-index: -1;
}

.arm.left {
	top: 0%;
	left: 75%;
	background: linear-gradient(
		90deg,
		var(--penguin-skin, gray),
		rgb(209 210 199)
	);
	border-radius: 30% 30% 30% 120%;
	transform: rotate(-45deg);
}

.arm.right {
	top: 5%;
	left: 25%;
	background: linear-gradient(
		-90deg,
		var(--penguin-skin, gray),
		rgb(209 210 199)
	);
	border-radius: 30% 30% 120% 30%;
	transform: rotate(130deg);
	animation-duration: 3s;
	animation-name: wave;
	animation-iteration-count: infinite;
	transform-origin: 0% 0%;
	animation-timing-function: linear;
}

@keyframes wave {
	10% {
		transform: rotate(110deg);
	}
	20% {
		transform: rotate(130deg);
	}
	30% {
		transform: rotate(110deg);
	}
	40% {
		transform: rotate(130deg);
	}
}

.foot {
	top: 85%;
	background: var(--penguin-beak, orange);
	width: 15%;
	height: 30%;
	border-radius: 50%;
	z-index: -1;
}

.foot.left {
	left: 25%;
	transform: rotate(80deg);
}

.foot.right {
	left: 60%;
	transform: rotate(-80deg);
}

.ground {
	width: 100vw;
	height: calc(100vh - var(--penguin-size));
	/* 	height: 400px; */
	background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
	margin-top: -58px;
	z-index: 3;
	position: absolute;
}

.penguin * {
	position: absolute;
}

.penguin:active {
	transform: scale(1.5, 1.5);
	cursor: not-allowed;
}

```
