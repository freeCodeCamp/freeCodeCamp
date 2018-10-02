---
title: Gray code
id: 5a23c84252665b21eecc7e80
challengeType: 5
---

## Description
<section id='description'>
<a href="https://en.wikipedia.org/wiki/Gray code">Gray code</a> is a form of binary encoding where transitions between consecutive numbers differ by only one bit.
This is a useful encoding for reducing hardware data hazards with values that change rapidly and/or connect to slower hardware as inputs. 
It is also useful for generating inputs for <a href="https://en.wikipedia.org/wiki/Karnaugh map">Karnaugh maps</a> in order from left to right or top to bottom. 
Create a function to encode a number to and decode a number from Gray code. The function should will have 2 parameters. 
The first would be a boolean. The function should encode for true and decode for false. The second parameter would be the number to be encoded/decoded.
Display the normal binary representations, Gray code representations, and decoded Gray code values for all 5-bit binary numbers (0-31 inclusive, leading 0's not necessary).
There are many possible Gray codes. The following encodes what is called "binary reflected Gray code."<br>Encoding (MSB is bit 0, b is binary, g is Gray code): 
<code><br>if b[i-1] = 1<br><span style="padding-left:1em">g[i] = not b[i]</span><br>else<br><span style="padding-left:1em">g[i] = b[i]</span><br>
</code>  Or: <br><code> g = b xor (b logically right shifted 1 time)</code><br>Decoding (MSB is bit 0, b is binary, g is Gray code): <br>
<code>b[0] = g[0]<br>for other bits:<br>b[i] = g[i] xor b[i-1]<br></code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '''<code>gray</code> should be a function.'''
  testString: 'assert(typeof gray==''function'',''<code>gray</code> should be a function.'');'
- text: '''<code>gray(true,177)</code> should return a number.'''
  testString: 'assert(typeof gray(true,177)==''number'',''<code>gray(true,177)</code> should return a number.'');'
- text: '''<code>gray(true,177)</code> should return <code>233</code>.'''
  testString: 'assert.equal(gray(true,177),233,''<code>gray(true,177)</code> should return <code>233</code>.'');'
- text: '''<code>gray(true,425)</code> should return <code>381</code>.'''
  testString: 'assert.equal(gray(true,425),381,''<code>gray(true,425)</code> should return <code>381</code>.'');'
- text: '''<code>gray(true,870)</code> should return <code>725</code>.'''
  testString: 'assert.equal(gray(true,870),725,''<code>gray(true,870)</code> should return <code>725</code>.'');'
- text: '''<code>gray(false,233)</code> should return <code>177</code>.'''
  testString: 'assert.equal(gray(false,233),177,''<code>gray(false,233)</code> should return <code>177</code>.'');'
- text: '''<code>gray(false,381)</code> should return <code>425</code>.'''
  testString: 'assert.equal(gray(false,381),425,''<code>gray(false,381)</code> should return <code>425</code>.'');'
- text: '''<code>gray(false,725)</code> should return <code>870</code>.'''
  testString: 'assert.equal(gray(false,725),870,''<code>gray(false,725)</code> should return <code>870</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gray(enc, number) {
 // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function gray(enc, number){
  if(enc){
      return number ^ (number >> 1);
  }else{
      let n = number;

      while (number >>= 1) {
          n ^= number;
      }
      return n;
  }
}

```

</section>
