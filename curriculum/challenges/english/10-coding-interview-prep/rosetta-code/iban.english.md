---
title: IBAN
id: 5a23c84252665b21eecc7eaf
challengeType: 5
forumTopicId: 302289
---

## Description
<section id='description'>
The  <a href="https://en.wikipedia.org/wiki/International_Bank_Account_Number" target="_blank">International Bank Account Number (IBAN)</a>  is an internationally agreed means of identifying bank accounts across national borders with a reduced risk of propagating <a href="https://en.wikipedia.org/wiki/Transcription_error" target="_blank">transcription errors</a>.
The IBAN consists of up to 34 alphanumeric characters:
<ul>
  <li>first the two-letter ISO 3166-1 alpha-2 country code</li>
  <li>then two check digits, and</li>
  <li>finally a country-specific Basic Bank Account Number (BBAN).</li>
</ul>
The check digits enable a sanity check of the bank account number to confirm its integrity even before submitting a transaction.
</section>

## Instructions
<section id='instructions'>
Write a function that takes IBAN string as parameter. If it is valid return true. Otherwise, return false.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isValid</code> should be a function.
    testString: assert(typeof isValid=='function');
  - text: <code>isValid("GB82 WEST 1234 5698 7654 32")</code> should return a boolean.
    testString: assert(typeof isValid('GB82 WEST 1234 5698 7654 32')=='boolean');
  - text: <code>isValid("GB82 WEST 1234 5698 7654 32")</code> should return <code>true</code>.
    testString: assert.equal(isValid('GB82 WEST 1234 5698 7654 32'),true);
  - text: <code>isValid("GB82 WEST 1.34 5698 7654 32")</code> should return <code>false</code>.
    testString: assert.equal(isValid('GB82 WEST 1.34 5698 7654 32'),false);
  - text: <code>isValid("GB82 WEST 1234 5698 7654 325")</code> should return <code>false</code>.
    testString: assert.equal(isValid('GB82 WEST 1234 5698 7654 325'),false);
  - text: <code>isValid("GB82 TEST 1234 5698 7654 32")</code> should return <code>false</code>.
    testString: assert.equal(isValid('GB82 TEST 1234 5698 7654 32'),false);
  - text: <code>isValid("SA03 8000 0000 6080 1016 7519")</code> should return <code>true</code>.
    testString: assert.equal(isValid('SA03 8000 0000 6080 1016 7519'),true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isValid(iban) {

}
```

</div>

</section>

## Solution
<section id='solution'>


```js
function isValid(iban) {
  var ibanLen = {
  	NO:15, BE:16, DK:18, FI:18, FO:18, GL:18, NL:18, MK:19,
  	SI:19, AT:20, BA:20, EE:20, KZ:20, LT:20, LU:20, CR:21,
  	CH:21, HR:21, LI:21, LV:21, BG:22, BH:22, DE:22, GB:22,
  	GE:22, IE:22, ME:22, RS:22, AE:23, GI:23, IL:23, AD:24,
  	CZ:24, ES:24, MD:24, PK:24, RO:24, SA:24, SE:24, SK:24,
  	VG:24, TN:24, PT:25, IS:26, TR:26, FR:27, GR:27, IT:27,
  	MC:27, MR:27, SM:27, AL:28, AZ:28, CY:28, DO:28, GT:28,
  	HU:28, LB:28, PL:28, BR:29, PS:29, KW:30, MU:30, MT:31
  }
	iban = __helpers.removeWhiteSpace(iban)
	if (!iban.match(/^[\dA-Z]+$/)) return false
	var len = iban.length
	if (len != ibanLen[iban.substr(0,2)]) return false
	iban = iban.substr(4) + iban.substr(0,4)
	for (var s='', i=0; i<len; i+=1) s+=parseInt(iban.charAt(i),36)
	for (var m=s.substr(0,15)%97, s=s.substr(15); s; s=s.substr(13)) m=(m+s.substr(0,13))%97
	return m == 1
}

```

</section>
