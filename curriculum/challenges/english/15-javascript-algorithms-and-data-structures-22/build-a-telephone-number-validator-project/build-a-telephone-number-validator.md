---
id: 657bdcb9a322aae1eac38391
title: Build a Telephone Number Validator
challengeType: 14
forumTopicId: 16090
dashedName: build-a-telephone-number-validator
---

# --description--

In the US, phone numbers can be formatted in many ways. Here are some examples of valid formats for US phone numbers:

<blockquote>
1 555-555-5555<br>
1 (555) 555-5555<br>
1(555)555-5555<br>
1 555 555 5555<br>
5555555555<br>
555-555-5555<br>
(555)555-5555<br>
</blockquote>

Note that the area code is required. Also, if the country code is provided, you must confirm that the country code is `1`.

**Objective:** Build an app that is functionally similar to <a href="https://telephone-number-validator.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://telephone-number-validator.freecodecamp.rocks</a>.

**User Stories:**

1. You should have an `input` element with an `id` of `"user-input"`.
1. You should have a `button` element with an `id` of `"check-btn"`.
1. You should have a `button` element with an `id` of `"clear-btn"`.
1. You should have a `div`, `span` or `p` element with an `id` of `"results-div"`.
1. When you click on the `#check-btn` element without entering a value into the `#user-input` element, an alert should appear with the text `"Please provide a phone number"`.
1. When you click on the `#clear-btn` element, the content within the `#results-div` element should be removed.
1. When the `#user-input` element contains `1 555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 555-555-5555"`.
1. When the `#user-input` element contains `1 (555) 555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 (555) 555-5555"`.
1. When the `#user-input` element contains `5555555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 5555555555"`.
1. When the `#user-input` element contains `555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 555-555-5555"`.
1. When the `#user-input` element contains `(555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: (555)555-5555"`.
1. When the `#user-input` element contains `1(555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1(555)555-5555"`.
1. When the `#user-input` element contains `555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 555-5555"`.
1. When the `#user-input` element contains `5555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 5555555"`.
1. When the `#user-input` element contains `1 555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 1 555)555-5555"`.
1. When the `#user-input` element contains `1 555 555 5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 555 555 5555"`.
1. When the `#user-input` element contains `1 456 789 4444` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 456 789 4444"`.
1. When `#user-input` contains `123**&!!asdf#` and `#check-btn` is clicked, `#results-div` should contain the text `"Invalid US number: 123**&!!asdf#"`.
1. When the `#user-input` element contains `55555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 55555555"`.
1. When the `#user-input` element contains `(6054756961)` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (6054756961)"`.
1. When the `#user-input` element contains `2 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2 (757) 622-7382"`.
1. When the `#user-input` element contains `0 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 0 (757) 622-7382"`.
1. When the `#user-input` element contains `-1 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: -1 (757) 622-7382"`.
1. When the `#user-input` element contains `2 757 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2 757 622-7382"`.
1. When the `#user-input` element contains `10 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 10 (757) 622-7382"`.
1. When the `#user-input` element contains `27576227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 27576227382"`.
1. When the `#user-input` element contains `(275)76227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (275)76227382"`.
1. When the `#user-input` element contains `2(757)6227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2(757)6227382"`.
1. When the `#user-input` element contains `2(757)622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2(757)622-7382"`.
1. When the `#user-input` element contains `555)-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 555)-555-5555"`.
1. When the `#user-input` element contains `(555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (555-555-5555"`.
1. When `#user-input` contains `(555)5(55?)-5555` and `#check-btn` is clicked, `#results-div` should contain the text `"Invalid US number: (555)5(55?)-5555"`.
1. When the `#user-input` element contains `55 55-55-555-5` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 55 55-55-555-5"`.
1. When the `#user-input` element contains `11 555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 11 555-555-5555"`.
1. When the `#user-input` element contains a valid US number and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: "` followed by the number.

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!

# --hints--

You should have an `input` element with an `id` of `"user-input"`.

```js
const el = document.getElementById('user-input');
assert.strictEqual(el?.nodeName?.toLowerCase(), 'input');
```

You should have a `button` element with an `id` of `"check-btn"`.

```js
const el = document.getElementById('check-btn');
assert.strictEqual(el?.nodeName?.toLowerCase(), 'button');
```

You should have a `button` element with an `id` of `"clear-btn"`.

```js
const el = document.getElementById('clear-btn');
assert.strictEqual(el?.nodeName?.toLowerCase(), 'button');
```

You should have a `div`, `span`, or `p` element with an `id` of `"results-div"`.

```js
const el = document.getElementById('results-div');
assert(['div', 'span', 'p'].includes(el?.nodeName?.toLowerCase()));
```

When you click on the `#check-btn` element without entering a value into the `#user-input` element, an alert should appear with the text `"Please provide a phone number"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
let alertMessage;
window.alert = (message) => alertMessage = message; // Override alert and store message

userInput.value = '';
checkBtn.click();
assert.strictEqual(alertMessage?.trim().replace(/[.,?!]+$/g, '').toLowerCase(), 'please provide a phone number');
```

When you click on the `#clear-btn` element, the content within the `#results-div` element should be removed.

```js
const resultsDiv = document.getElementById('results-div');
const clearBtn = document.getElementById('clear-btn');

resultsDiv.innerHTML = `Testing testing 123
Ladies and gentlemen, we are floating in space.`;
clearBtn.click();
assert.isEmpty(resultsDiv.textContent);
```

When the `#user-input` element contains `1 555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 555-555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '1 555-555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'valid us number: 1 555-555-5555');
```

When the `#user-input` element contains `1 (555) 555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 (555) 555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '1 (555) 555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'valid us number: 1 (555) 555-5555');
```

When the `#user-input` element contains `5555555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 5555555555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '5555555555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'valid us number: 5555555555');
```

When the `#user-input` element contains `555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 555-555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '555-555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'valid us number: 555-555-5555');
```

When the `#user-input` element contains `(555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: (555)555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '(555)555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'valid us number: (555)555-5555');
```

When the `#user-input` element contains `1(555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1(555)555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '1(555)555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'valid us number: 1(555)555-5555');
```

When the `#user-input` element contains `555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 555-5555');
```

When the `#user-input` element contains `5555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 5555555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '5555555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 5555555');
```

When the `#user-input` element contains `1 555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 1 555)555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '1 555)555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 1 555)555-5555');
```

When the `#user-input` element contains `1 555 555 5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 555 555 5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '1 555 555 5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'valid us number: 1 555 555 5555');
```

When the `#user-input` element contains `1 456 789 4444` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 456 789 4444"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '1 456 789 4444';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'valid us number: 1 456 789 4444');
```

When `#user-input` contains `123**&!!asdf#` and `#check-btn` is clicked, `#results-div` should contain the text `"Invalid US number: 123**&!!asdf#"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '123**&!!asdf#';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 123**&!!asdf#');
```

When the `#user-input` element contains `55555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 55555555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '55555555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 55555555');
```

When the `#user-input` element contains `(6054756961)` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (6054756961)"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '(6054756961)';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: (6054756961)');
```

When the `#user-input` element contains `2 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2 (757) 622-7382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '2 (757) 622-7382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 2 (757) 622-7382');
```

When the `#user-input` element contains `0 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 0 (757) 622-7382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '0 (757) 622-7382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 0 (757) 622-7382');
```

When the `#user-input` element contains `-1 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: -1 (757) 622-7382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '-1 (757) 622-7382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: -1 (757) 622-7382');
```

When the `#user-input` element contains `2 757 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2 757 622-7382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '2 757 622-7382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 2 757 622-7382');
```

When the `#user-input` element contains `10 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 10 (757) 622-7382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '10 (757) 622-7382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 10 (757) 622-7382');
```

When the `#user-input` element contains `27576227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 27576227382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '27576227382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 27576227382');
```

When the `#user-input` element contains `(275)76227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (275)76227382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '(275)76227382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: (275)76227382');
```

When the `#user-input` element contains `2(757)6227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2(757)6227382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '2(757)6227382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 2(757)6227382');
```

When the `#user-input` element contains `2(757)622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2(757)622-7382"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '2(757)622-7382';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 2(757)622-7382');
```

When the `#user-input` element contains `555)-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 555)-555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '555)-555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 555)-555-5555');
```

When the `#user-input` element contains `(555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (555-555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '(555-555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: (555-555-5555');
```

When `#user-input` contains `(555)5(55?)-5555` and `#check-btn` is clicked, `#results-div` should contain the text `"Invalid US number: (555)5(55?)-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '(555)5(55?)-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: (555)5(55?)-5555');
```

When the `#user-input` element contains `55 55-55-555-5` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 55 55-55-555-5"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '55 55-55-555-5';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 55 55-55-555-5');
```

When the `#user-input` element contains `11 555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 11 555-555-5555"`.

```js
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultsDiv = document.getElementById('results-div');

resultsDiv.innerHTML = '';
userInput.value = '11 555-555-5555';
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(resultsDiv.innerText.trim().toLowerCase(), 'invalid us number: 11 555-555-5555');
```

When the `#user-input` element contains a valid US number and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: "` followed by the number.

```js

function generatePhoneNumber(type) {
  
  const areaCodes = ['201','202','203','204','205','206','207','208','209','210','212','213','214','215','216','217','218','219','220','224','225','226','228','229','231','234','236','239','240','242','246','248','249','250','251','252','253','254','256','260','262','264','267','268','269','270','272','276','281','284','289','301','302','303','304','305','306','307','308','309','310','312','313','314','315','316','317','318','319','320','321','323','325','330','331','334','336','337','339','340','343','345','346','347','351','352','360','361','364','365','380','385','386','401','402','403','404','405','406','407','408','409','410','412','413','414','415','416','417','418','419','423','424','425','430','431','432','434','435','437','438','440','441','442','443','450','458','469','470','473','475','478','479','480','484','501','502','503','504','505','506','507','508','509','510','512','513','514','515','516','517','518','519','520','530','531','534','539','540','541','548','551','559','561','562','563','567','570','571','573','574','575','579','580','581','585','586','587','601','602','603','604','605','606','607','608','609','610','612','613','614','615','616','617','618','619','620','623','626','628','629','630','631','636','639','641','646','647','649','650','651','657','660','661','662','664','667','669','670','671','678','681','682','684','701','702','703','704','705','706','707','708','709','712','713','714','715','716','717','718','719','720','721','724','725','727','731','732','734','737','740','743','747','754','757','758','760','762','763','765','767','769','770','772','773','774','775','778','779','780','781','782','784','785','786','787','801','802','803','804','805','806','807','808','809','810','812','813','814','815','816','817','818','819','825','828','829','830','831','832','843','845','847','848','849','850','854','856','857','858','859','860','862','863','864','865','867','868','869','870','872','873','876','878','901','902','903','904','905','906','907','908','909']
  
  let result = "";
  let bit1 = areaCodes[Math.ceil(Math.random() * areaCodes.length - 1)];
  let bit2 = "";
  let bit3 = "";

  for (let i = 0; i < 3; i++) {
    bit2 += Math.floor(Math.random() * 8) + 2;
    bit3 += Math.floor(Math.random() * 10);
  }

  bit3 += Math.floor(Math.random() * 10);

  if (type <= 1) {
    // 1 XXX-XXX-XXXX
    result = `1 ${bit1}-${bit2}-${bit3}`

  } else if (type <= 2) {
    // 1 (XXX)XXX-XXXX
    result = `1 (${bit1})${bit2}-${bit3}`;

  } else if (type <= 3) {
    // 1(XXX)XXX-XXXX
    result = `1(${bit1})${bit2}-${bit3}`;

  } else if (type <= 4) {
    // 1 XXX XXX XXXX
    result = `1 ${bit1} ${bit2} ${bit3}`

  } else if (type <= 5) {
    // XXXXXXXXXX
    result = `${bit1}${bit2}${bit3}`

  } else if (type <= 6) {
    // XXX-XXX-XXXX
    result = `${bit1}-${bit2}-${bit3}`

  } else {
    //(XXX)XXX-XXXX
    result = `(${bit1})${bit2}-${bit3}`

  }

  return result;
}

for (let i = 1; i <= 7; i++) {
  let phoneNum = generatePhoneNumber(i);
  resultsDiv.innerHTML = '';
  userInput.value = phoneNum;
  userInput.dispatchEvent(new Event('change'));
  checkBtn.click();
  assert.strictEqual(document.getElementById('results-div').innerText.trim().toLowerCase(), `valid us number: ${phoneNum}`);
}
```

When the `#user-input` element contains an invalid US number and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: "` followed by the number.

```js

function generateInvalidPhoneNumber(type) {
  let result = "";
  let bit1 = "";
  let bit2 = "";
  let bit3 = "";
  
  for (let i = 0; i < 3; i++) {
    bit1 += Math.floor(Math.random() * 10);
    bit2 += Math.floor(Math.random() * 10);
    bit3 += Math.floor(Math.random() * 10);
  }

  bit3 += Math.floor(Math.random() * 10);

  if (type <= 1) {
    // 1 XXX-XXX-XXX
    result = `1 ${bit1}-${bit2}-${bit1}`
    
  } else if (type <= 2) {
    // 1 (XXXXXX-XXXX
    result = `1 (${bit1}${bit2}-${bit3}`;
    
  } else if (type <= 3) {
    // XX(XXX)XXX-XXXX
    result = `${bit1[0]}(${bit1})${bit2}-${bit3}`;
    
  } else if (type <= 4) {
    // XXXX XXX XXX 
    result = `${bit3} ${bit2} ${bit1}`
    
  } else if (type <= 5) {
    // XXXXXXXXXXX
    result = `${bit1}${bit2}${bit3}${bit3[0]}`
    
  } else if (type <= 6) {
    // XXX#XXX-XXXX
    result = `${bit1}#${bit2}-${bit3}`
    
  } else {
    //555)555-5555
    result = `${bit1})${bit2}-${bit3}`
    
  }

  return result;
}


const notPhoneNum = generateInvalidPhoneNumber(Math.round(Math.random()*7));
resultsDiv.innerHTML = '';
userInput.value = notPhoneNum;
userInput.dispatchEvent(new Event('change'));
checkBtn.click();
assert.strictEqual(document.getElementById('results-div').innerText.trim().toLowerCase(), `invalid us number: ${notPhoneNum}`);
```

# --seed--

## --seed-contents--

```html

```

```css

```

```js

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="icon"
      type="image/png"
      href="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
    />
    <title>Telephone Number Validator</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <img
        class="freecodecamp-logo"
        src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
        alt="freeCodeCamp Logo"
      />
      <h1>Telephone Number Validator</h1>
      <div class="phone-container">
        <div class="phone-background">
          <div class="phone-camera"></div>
        </div>
        <label for="user-input">Enter a Phone Number:</label>
        <input maxlength="20" type="text" id="user-input" value="" />
        <div id="results-div"></div>
        <div class="phone-footer">
          <button class="btn-styles" id="check-btn">Check</button>
          <button class="btn-styles" id="clear-btn">Clear</button>
        </div>
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --phone-colors: #dfdfe2;
  --center-text: center;
  --gray-00: #fff;
}

body {
  background-color: #3b3b4f;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #0a0a23;
}

main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 10px;
}

.freecodecamp-logo {
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
}

h1 {
  color: white;
  width: 100%;
  max-width: 480px;
  margin: 15px 0;
  text-align: var(--center-text);
}

.phone-container {
  position: relative;
  background-color: var(--phone-colors);
  width: 250px;
  height: 460px;
  margin: 30px auto;
  border-radius: 15px;
  border: 15px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.phone-background {
  background-color: black;
  width: 100%;
  height: 25px;
}

.phone-camera {
  background-color: var(--phone-colors);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto;
}

label {
  margin: 10px auto 5px;
}

#user-input {
  display: block;
  margin: 10px auto;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: var(--center-text);
  width: 90%;
  height: 42px;
  font-size: 16px;
}

.phone-footer {
  background-color: black;
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-styles {
  cursor: pointer;
  width: 100px;
  margin: 10px;
  color: #0a0a23;
  font-size: 18px;
  background-color: #ffffff;
  background-image: linear-gradient(#ffffff, #928d86);
  border-color: #ffffff;
  border-width: 3px;
}

#results-div {
  overflow-y: auto;
  height: 265px;
  width: 100%;
}

.results-text {
  font-size: 1.2rem;
  padding: 5px;
  text-align: var(--center-text);
  margin: 10px 0;
}
```

```js
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkValidNumber = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }
  const countryCode = "^(1\\s?)?";
  const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
  const spacesDashes = "[\\s\\-]?";
  const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`,
  );

  const pTag = document.createElement("p");
  pTag.className = "results-text";
  phoneRegex.test(input)
    ? (pTag.style.color = "#00471b")
    : (pTag.style.color = "#4d3800");
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? "Valid" : "Invalid"} US number: ${input}`,
    ),
  );
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener("click", () => {
  checkValidNumber(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkValidNumber(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});
```
